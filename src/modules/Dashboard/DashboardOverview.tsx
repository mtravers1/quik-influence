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

const DashboardOverview = () => {
  const { colorMode } = useColorMode();
  const [loading, setLoading] = useState(false);

  const { dashboardData } = useSelector((state: any) => state.generals);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dashboardData) {
      fetchDashboardData();
    }
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    await dispatch(getDashboardInfo());
    setLoading(false);
  };

  console.log(dashboardData);

  return (
    <Box>
      <Box
        display="grid"
        // gridTemplateColumns="repeat(5, minmax(300px,1fr))"
        gridTemplateColumns={{
          lg: `repeat(auto-fill, minmax(min(300px, 100%), 1fr))`,
          xl: 'repeat(5, 1fr)',
        }}
        gridGap="20px"
        marginBottom="20px"
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
            dashboardData?.campaignWithUsers?.totalCampaignRecord?.campaigncount
          }
          icon={faCalendarCheck}
          loading={loading}
        />

        <NumberChartComp
          name="Total Revenue"
          value={
            dashboardData?.campaignWithUsers?.totalCampaignRecord?.totalrevenue
          }
          icon={faMoneyBill}
          loading={loading}
          isCurrency
        />
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

      <CustomPieChart
        label="campaigns vs Registered Leads"
        height={400}
        data={[
          { name: 'Campaign Count', value: dashboardData?.campaignCount || 0 },
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
    </Box>
  );
};

export default DashboardOverview;
