import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import MainContent from 'components/MainContent';
import CreateCampaign from 'modules/Campaigns/CreateCampaign';
import { TablePageLoader } from 'components/SkeletonLoaders';
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
      <TablePageLoader />
    </MainContent>
  ) : (
    <MainContent>
      <CreateCampaign
        initialdata={
          {
            ...currentCampaign,
            formData: JSON.parse(currentCampaign.formData),
          } || {}
        }
      />
    </MainContent>
  );
};

export default Create;
