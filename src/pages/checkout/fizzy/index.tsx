import { useEffect, useState, FC } from 'react';
import { useRouter } from 'next/router';
import { axiosInstance } from 'utils/helpers';
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

const campaignId =
  process.env.NODE_ENV === 'development'
    ? 'a3041737-60a0-469e-afd6-f33f25f2b066'
    : 'b26ab176-9946-4085-94a0-254a318527f4';

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
  postalCode: userData.postalCode,
  id: userData.id,
});

const filterOtherInfo = (otherInfoData: any) => ({
  campaignId: otherInfoData.campaignId,
});

const Fizzy: FC<{ products: any }> = ({ products = [] }) => {
  const [openModal, setOpenModal] = useState(false);
  const [userDataInfo, setUserData] = useState<any>();
  const [otherInfo, setOtherInfo] = useState<any>({
    campaignId,
  });

  const [fetchdata, sethasFetched] = useState(false);

  const router = useRouter();

  useEffect(() => {
    let campaign_data;

    campaign_data = localStorage.getItem('campaign_data');

    if (campaign_data) {
      const parsed_campaign_data = JSON.parse(campaign_data);
      setUserData(filterUserData(parsed_campaign_data));
      setOtherInfo(filterOtherInfo(parsed_campaign_data));
    }

    if (router.query.refresh) {
      window.location.href = `${window.location.origin}${window.location.pathname}?campaign_admin_id=${router?.query.campaign_admin_id}`;
    }

    sethasFetched(true);
  }, []);

  const openLoginOtp = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    if (!fetchdata) {
      return;
    }

    if (!userDataInfo || !otherInfo) {
      openLoginOtp();
    }
  }, [fetchdata, userDataInfo, otherInfo]);

  const onClose = () => {
    setOpenModal(false);
  };

  const updateOnLogin = (data: any) => {
    let userData: any;
    const campaign_data = localStorage.getItem('campaign_data');
    if (campaign_data) {
      userData = JSON.parse(campaign_data) || {};
    }

    const newuserData = { ...userData, ...data.user, token: data.token };
    localStorage.setItem('campaign_data', JSON.stringify(newuserData));

    const newUserDataInfo = filterUserData(newuserData);

    setUserData(newUserDataInfo);
    onClose();

    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  return (
    <>
      <FizzyLayout>
        <Payment
          userData={userDataInfo || {}}
          openLoginOtp={openLoginOtp}
          otherInfo={otherInfo || {}}
          products={products}
        />
      </FizzyLayout>

      <Modal blockScrollOnMount={false} isOpen={openModal} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          minW={{ base: '90vw', xl: '40vw' }}
          p="8"
          borderRadius={0}
        >
          <ModalBody>
            {userDataInfo?.phone ? (
              <Box marginBottom="20px" fontSize="16px">
                You'll recieve a <strong>one time password</strong> so you can
                continue
              </Box>
            ) : (
              <Box marginBottom="20px" fontSize="16px">
                Enter your phone number and we will send you an OTP
              </Box>
            )}
            <LoginOtp callback={updateOnLogin} phone={userDataInfo?.phone} />

            <Box></Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export async function getServerSideProps() {
  const response = await axiosInstance.get(
    `/users/campaign/products/${campaignId}`
  );

  return { props: { products: response.data.data } };
}

export default Fizzy;
