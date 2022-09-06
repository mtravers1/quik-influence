import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { NumberChartComp } from 'components/NumberChartComp';
import {
  faCalendarMinus,
  faCreditCard,
  faCalendarCheck,
  faMoneyBill,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { getDashboardInfo } from 'redux/actions/general';
import { CustomBarChart } from '../../components/BarChart';
import { CustomPieChart } from 'components/PieChart';
import { CustomLineChart } from 'components/LineChart';
import 'react-datepicker/dist/react-datepicker.css';
import { CustomDateRange } from 'components/DateRange/dateRange';
import { DateRange } from 'components/DateRange';

const DashboardOverview = () => {
  const { colorMode } = useColorMode();
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState({});

  const { dashboardData } = useSelector((state: any) => state.generals);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dashboardData) {
      fetchDashboardData(date);
    }
  }, []);

  const fetchDashboardData = async (date: any) => {
    setLoading(true);
    await dispatch(getDashboardInfo(date));
    setLoading(false);
  };

  const handleDateChange = async (date: any) => {
    setDate(date);

    setLoading(true);
    await dispatch(getDashboardInfo(date));
    setLoading(false);
  };

  return (
    <Box>
      <Box
        height="40px"
        position="relative"
        marginBottom="30px"
        display="flex"
        justifyContent="flex-end"
      >
        <Box position="absolute" zIndex="50">
          <CustomDateRange handleChange={handleDateChange} />
        </Box>
      </Box>

      <Box display="flex" marginBottom="20px">
        <CustomPieChart
          label="campaigns vs Registered Leads"
          height={450}
          data={[
            {
              name: 'Campaign Count',
              value: dashboardData?.campaignCount || 0,
            },
            {
              name: 'Campaign With Leads',
              value:
                Number(
                  dashboardData?.campaignWithUsers?.totalCampaignRecord
                    ?.campaigncount
                ) || 0,
            },
          ]}
        />

        <Box
          display="grid"
          gridGap="20px"
          gridTemplateColumns="1fr 1fr 1fr"
          flexGrow={1}
          marginLeft="20px"
        >
          <NumberChartComp
            name="Total Campaigns"
            value={dashboardData?.campaignCount}
            icon={faCalendarMinus}
            loading={loading}
          />

          <NumberChartComp
            name="Total Successful Payments"
            value={dashboardData?.totalSuccessfulPayments}
            icon={faCreditCard}
            loading={loading}
          />

          <NumberChartComp
            name="Total Lead Count"
            value={
              dashboardData?.campaignWithUsers?.totalCampaignRecord?.totallead
            }
            icon={faUsers}
            loading={loading}
          />

          <NumberChartComp
            name="Campaigns With Registered Leads"
            value={
              dashboardData?.campaignWithUsers?.totalCampaignRecord
                ?.campaigncount
            }
            icon={faCalendarCheck}
            loading={loading}
          />

          <NumberChartComp
            name="Total Revenue"
            value={
              dashboardData?.campaignWithUsers?.totalCampaignRecord
                ?.totalrevenue
            }
            icon={faMoneyBill}
            loading={loading}
            isCurrency
          />
        </Box>
      </Box>

      <Box marginBottom="20px">
        <CustomBarChart
          label="Campaigns By Leads count / Revenue"
          height={500}
          data={dashboardData?.campaignWithUsers?.campaignLeads?.map(
            (data: any) => ({
              'Lead Count': Number(data.lead_count),
              Revenue: Number(data.revenue),
              'Successful Lead Count': Number(data.successful_lead_count),
              name: data.name,
            })
          )}
          dataKeys={['Lead Count', 'Revenue', 'Successful Lead Count']}
        />
      </Box>

      <Box marginBottom="20px">
        <CustomLineChart
          label="Campaigns Revenue Chart"
          height={500}
          data={dashboardData?.campaignWithUsers?.campaignLeads?.map(
            (data: any) => ({
              'Lead Count': Number(data.lead_count),
              Revenue: Number(data.revenue),
              'Successful Lead Count': Number(data.successful_lead_count),
              name: data.name,
            })
          )}
          dataKeys={['Revenue']}
        />
      </Box>
    </Box>
  );
};

export default DashboardOverview;
