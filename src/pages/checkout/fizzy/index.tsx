import { useEffect, useState } from 'react';
import { Payment } from 'components/ExternalPages/Fizzy/payment';
import { FizzyLayout } from 'layout/fizzy';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Box,
} from '@chakra-ui/react';
import LoginOtp from 'components/ExternalPages/Fizzy/login';

const filterUserData = (userData: any) => ({
  firstName: userData.firstName,
  lastName: userData.lastName,
  phone: userData.phone,
  email: userData.email,
  address: userData.address,
  city: userData.city,
  state: userData.state,
  country: userData.country,
  token: userData.token,
  id: userData.id,
});

const filterOtherInfo = (otherInfoData: any) => ({
  campaignId: otherInfoData.campaignId,
});

const Fizzy = () => {
  const [openModal, setOpenModal] = useState(false);
  const [userDataInfo, setUserData] = useState<any>();
  const [otherInfo, setOtherInfo] = useState<any>();

  useEffect(() => {
    setTimeout(() => {
      const campaign_data = localStorage?.getItem('campaign_data');
      if (campaign_data) {
        const parsed_campaign_data = JSON.parse(campaign_data);
        setUserData(filterUserData(parsed_campaign_data));
        setOtherInfo(filterOtherInfo(parsed_campaign_data));
      }
    }, 1000);
  }, []);

  const onClose = () => {
    setOpenModal(false);
  };

  const updateOnLogin = (data: any) => {
    const token = data.token;

    let userData: any;
    const campaign_data = localStorage.getItem('campaign_data');
    if (campaign_data) {
      userData = JSON.parse(campaign_data);
    }

    const newuserData = { ...userData, token };
    localStorage.setItem('campaign_data', JSON.stringify(newuserData));

    const newUserDataInfo = filterUserData(newuserData);

    setUserData(newUserDataInfo);
    onClose();

    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  const openLoginOtp = () => {
    setOpenModal(true);
  };

  return (
    <>
      <FizzyLayout>
        <Payment
          userData={userDataInfo || {}}
          openLoginOtp={openLoginOtp}
          otherInfo={otherInfo || {}}
        />
      </FizzyLayout>

      <Modal blockScrollOnMount={false} isOpen={openModal} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW="40vw" p="8" borderRadius={0}>
          <ModalBody>
            <Box marginBottom="20px" fontSize="16px">
              You'll recieve a <strong>one time password</strong> so you can
              continue
            </Box>
            <LoginOtp callback={updateOnLogin} phone={userDataInfo?.phone} />

            <Box></Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Fizzy;
