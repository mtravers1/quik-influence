import React from 'react';
import queryString from 'query-string';
import MainContent from 'components/MainContent';
import { CampaignInfluencers } from 'components/CampaignInfluencers';
import { axiosInstance } from 'utils/helpers';

function Influncers() {
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
        <CampaignInfluencers fetchData={fetchData} />
      </MainContent>
    </>
  );
}

export default Influncers;
