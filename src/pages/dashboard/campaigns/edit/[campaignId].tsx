import { useDispatch, useSelector } from 'react-redux';
import MainContent from 'components/MainContent';
import { useRouter } from 'next/router';
import CreateCampaign from 'modules/Campaigns/CreateCampaign';
import { CampaignsPage } from 'components/SkeletonLoaders';
import { useEffect } from 'react';
import { getSingleCampaign } from 'redux/actions/campaigns';

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

  return loading && !currentCampaign ? (
    <MainContent>
      <CampaignsPage />
    </MainContent>
  ) : (
    <MainContent>
      <CreateCampaign
        initialdata={
          {
            ...currentCampaign,
            formData: currentCampaign.formData.form.map(
              (data: any) => data.name
            ),
          } || {}
        }
      />
    </MainContent>
  );
};

export default Create;
