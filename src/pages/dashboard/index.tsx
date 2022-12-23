import { useEffect, useState } from 'react';
import MainContent from 'components/MainContent';
import { DashboardOverview } from 'modules/Dashboard';
import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import Head from 'next/head';
import { axiosInstance } from 'utils/helpers';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const checkOnBoardingStatus = async () => {
    try {
      const res = await axiosInstance.get('/stripe/admin/onboarding');

      if (res.data.data.accountLink) {
        setShowModal(true);
        setTimeout(() => {
          window.location.href = res.data.data.accountLink;
        }, 2000);
      } else {
        localStorage.setItem('onboarding', 'true');
      }
    } catch (err) {}
  };

  useEffect(() => {
    const isOnBoarded = localStorage.getItem('onboarding');
    if (!isOnBoarded) {
      checkOnBoardingStatus();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainContent>
        <DashboardOverview />
      </MainContent>

      <Modal blockScrollOnMount={true} isOpen={showModal} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent
          minW={{ base: '90vw', xl: '40vw' }}
          p="8"
          mt="20%"
          borderRadius={0}
        >
          <ModalBody>
            <Box
              marginBottom="20px"
              fontSize="32px"
              as="h1"
              textAlign="center"
              fontWeight="500"
            >
              Hi there!
            </Box>

            <Box textAlign="center" fontSize="16px">
              We will redirect you to complete your onboarding process. Thank
              you!
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Dashboard;
