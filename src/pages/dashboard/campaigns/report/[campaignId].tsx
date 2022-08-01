import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Flex, Box } from '@chakra-ui/react';
import MainContent from 'components/MainContent';
import { TablePageLoader } from 'components/SkeletonLoaders';
import CampaignReport from 'modules/Campaigns/Report';
import {
  axiosInstance,
  getReportOpenDate,
  getReportUnsub,
} from 'utils/helpers';
import Head from 'next/head';

const CampaignReports = () => {
  const router = useRouter();

  const campaignId = router.query.campaignId as string;

  const [isLoading, setIsLoading] = useState(true);
  const [campaign, setCampaign] = useState();
  const [campaignReports, setCampaignReports] = useState<any[]>([]);

  useEffect(() => {
    getCampaignReports();
  }, []);

  const getCampaignReports = async () => {
    try {
      const endpoints = [
        `/users/campaign/${campaignId}`,
        `/users/campaign/${campaignId}/reports`,
      ];

      await Promise.all(
        endpoints.map(endpoint => axiosInstance.get(endpoint))
      ).then(([{ data: campaign }, { data: campaignReports }]) => {
        setCampaign(campaign.data);
        setCampaignReports(formatCampaignReport(campaignReports?.data));
      });
    } catch (err) {
      // if (err) return router.back();
    } finally {
      setIsLoading(false);
    }
  };

  const formatCampaignReport = (reports: any[]): any[] => {
    if (!reports) return [];
    return reports.map(report => ({
      leadId: report.lead.id,
      name: report.lead.firstName + ' ' + report.lead.lastName,
      phone: report.lead.phone,
      affilliate: '',
      openedOn: getReportOpenDate(report.meta?.events),
      accepted: '',
      rejected: '',
      unsub: getReportUnsub(report.meta?.events),
      status: report.meta?.status,
    }));
  };

  return (
    <>
      <Head>
        <title>Reporting and Tracking - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainContent>
        {isLoading ? (
          <TablePageLoader />
        ) : (
          <>
            {campaign && (
              <CampaignReport
                campaign={campaign}
                campaignReports={campaignReports}
              />
            )}

            {!campaign && (
              <Flex
                width="100%"
                height="20vh"
                alignItems="center"
                justifyContent="center"
              >
                <Box as="h1" fontSize="20px" fontWeight="bold">
                  Reports are not available for this campaign
                </Box>
              </Flex>
            )}
          </>
        )}
      </MainContent>
    </>
  );
};

export default CampaignReports;
