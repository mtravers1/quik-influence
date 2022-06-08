import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import MainContent from 'components/MainContent';
import CreateCampaign from 'modules/Campaigns/CreateCampaign';
import { TablePageLoader } from 'components/SkeletonLoaders';
import { getSingleCampaign } from 'redux/actions/campaigns';
import Head from 'next/head';

const Create = () => {
  const router = useRouter();
  const { currentCampaign, loading } = useSelector(
    (state: any) => state.campaigns
  );
  const dispatch = useDispatch();

  const { campaignId } = router.query;

  useEffect(() => {
    if (loading && !currentCampaign) {
      dispatch(getSingleCampaign(campaignId, undefined));
    }
  }, [loading, currentCampaign]);

  return (
    <>
      <Head>
        <title>Edit Campaign - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainContent>
        {loading && !currentCampaign ? (
          <TablePageLoader />
        ) : (
          <CreateCampaign
            initialdata={
              {
                ...currentCampaign,
                formData: JSON.parse(currentCampaign.formData),
              } || {}
            }
          />
        )}
      </MainContent>
    </>
  );
};

export default Create;
