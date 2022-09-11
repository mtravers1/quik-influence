import React from 'react';
import queryString from 'query-string';
import { useRouter } from 'next/router';
import MainContent from 'components/MainContent';
import { CampaignInfluencers } from 'components/CampaignInfluencers';
import { axiosInstance } from 'utils/helpers';

function Influncers() {
  const router = useRouter();
  const campaignId = router.query.campaignId as string;

  const fetchData = async (setIsLoading: any, setData: any, params: any) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get(
        `/admin/influencers?${queryString.stringify(params)}`
      );

      setData({
        ...res.data.data,
        rows: res.data.data.rows.map((row: any) => {
          return {
            ...row,
            email: row.email,
            firstName: row.firstName,
            lastName: row.lastName,
            dateOfBirth: row.dateOfBirth,
            phone: row.phone,
            accName: row.paymentInfo.accName,
            accNo: row.paymentInfo.accNo,
          };
        }),
      });
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <>
      <MainContent>
        <CampaignInfluencers fetchData={fetchData} campaignId={campaignId} />
      </MainContent>
    </>
  );
}

export default Influncers;
