import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MainContent from 'components/MainContent';
import { TablePageLoader } from 'components/SkeletonLoaders';
import CampaignReport from 'modules/Campaigns/Report';
import {
  axiosInstance,
  getReportOpenDate,
  getReportUnsub,
} from 'utils/helpers';

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

  return isLoading ? (
    <MainContent>
      <TablePageLoader />
    </MainContent>
  ) : (
    <MainContent>
      <CampaignReport campaign={campaign} campaignReports={campaignReports} />
    </MainContent>
  );
};

export default CampaignReports;
