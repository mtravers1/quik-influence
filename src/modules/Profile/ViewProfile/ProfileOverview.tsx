import { Divider, Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import UserImage from './UserImage';
import BasicInfo from './BasicInfo';
import RolePermission from './RolePermission';
import { authSelectors } from 'redux/selectors';

const ProfileOverview = () => {
  const { admin } = useSelector(authSelectors.getUser);
  return (
    <Box overflowY="scroll">
      <UserImage avatar={admin?.avatar} />
      <Divider />
      <BasicInfo />
      <Divider />
      {/* <RolePermission /> */}
    </Box>
  );
};
export default ProfileOverview;
