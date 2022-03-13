import MainContent from 'components/MainContent';
import CreateCampaign from 'modules/Campaigns/CreateCampaign';

const Create = () => {
  return (
    <MainContent>
      <CreateCampaign type="SMS" initialdata={null} />
    </MainContent>
  );
};

export default Create;
