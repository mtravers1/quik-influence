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
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// const DateInput = ({
//   name,
//   onChange,
//   value: val,
//   placeholder,
//   minDate,
//   maxDate,
// }: Props) => {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const handleChange = (output: string, e) => {
//     e?.persist();
//     e?.stopPropagation?.();
//     onChange({
//       target: {
//         name,
//         value: output,
//       },
//     });
//   };

//   return (
//     <Box width="500px">
//       <DatePicker
//         onChange={handleChange}
//         selected={new Date(val || Date.now())}
//         dateFormat="yyyy-MM-dd"
//         onMonthChange={() => {
//           // console.log(e, r);
//         }}
//         maxDate={new Date(maxDate)}
//         minDate={new Date(minDate)}
//       />
//     </Box>
//   );
// };

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

  return (
    <Box>
      {/* <DateInput /> */}

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
