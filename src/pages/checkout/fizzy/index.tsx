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
  const router = useRouter();

  const [openModal, setOpenModal] = useState<{
    status: boolean;
    state: string;
    message?: {
      title?: string;
      description?: string;
    };
  }>({
    status: false,
    state: '',
    message: {},
  });

  const [userDataInfo, setUserData] = useState<any>();
  const [otherInfo, setOtherInfo] = useState<any>({
    campaignId: router.query.campaignId,
  });

  const [fetchdata, sethasFetched] = useState(false);

  useEffect(() => {
    let campaign_data;

    campaign_data = localStorage.getItem('campaign_data');

    if (campaign_data) {
      const parsed_campaign_data = JSON.parse(campaign_data);
      setUserData(filterUserData(parsed_campaign_data));
      setOtherInfo(filterOtherInfo(parsed_campaign_data));
    }

    if (router.query.refresh) {
      window.location.href = `${window.location.origin}${window.location.pathname}?campaign_admin_id=${router?.query.campaign_admin_id}&campaignId=${router?.query.campaignId}`;
    }

    sethasFetched(true);
  }, []);

  const openLoginOtp = () => {
    setOpenModal({ status: true, state: 'login' });
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
    setOpenModal({ status: false, state: '' });
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

  const showErrorMessage = (message: {}) => {
    setOpenModal({ status: true, state: 'error', message });
  };

  return (
    <>
      <FizzyLayout>
        <Payment
          userData={userDataInfo || {}}
          openLoginOtp={openLoginOtp}
          otherInfo={otherInfo || {}}
          products={products}
          showErrorMessage={showErrorMessage}
        />
      </FizzyLayout>

      <Modal
        blockScrollOnMount={false}
        isOpen={openModal.status}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          minW={{ base: '90vw', xl: '40vw' }}
          p="8"
          borderRadius={0}
        >
          <ModalBody>
            {openModal.state === 'login' && (
              <>
                {userDataInfo?.phone ? (
                  <Box marginBottom="20px" fontSize="16px">
                    You'll recieve a <strong>one time password</strong> so you
                    can continue
                  </Box>
                ) : (
                  <Box marginBottom="20px" fontSize="16px">
                    Enter your phone number and we will send you an OTP
                  </Box>
                )}
                <LoginOtp
                  callback={updateOnLogin}
                  phone={userDataInfo?.phone}
                />
              </>
            )}

            {openModal.state === 'error' && (
              <Box fontSize="16px">
                <Box marginBottom="30px">
                  Please bear with us, An Error occured!
                </Box>

                {openModal.message?.title && (
                  <Box marginBottom="10px" fontWeight="bold" fontSize="20px">
                    {openModal.message?.title}
                  </Box>
                )}

                {openModal.message?.description && (
                  <Box marginBottom="10px">
                    {openModal.message?.description}
                  </Box>
                )}
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export async function getServerSideProps(ctx: any) {
  const { campaignId } = ctx.query;

  let products = [];

  try {
    const response = await axiosInstance.get(
      `/users/campaign/products/${campaignId}`
    );

    products = response.data.data;
  } catch (err) {
    console.log(err);
  }

  return { props: { products } };
}

export default Fizzy;
