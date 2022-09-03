import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/selectors';
import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import Link from 'next/link';
import CustomButton from 'components/Button';
import { useRouter } from 'next/router';

export const AccountUpdatePrompt = () => {
  const { admin } = useSelector(authSelectors.getUser);
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  };

  useEffect(() => {
    if (router.pathname.includes('/profile') && admin) {
      let has_seen_modal;
      if (typeof window !== 'undefined') {
        has_seen_modal = sessionStorage.getItem('has_seen_modal');
      }

      if (!admin?.address1 && !has_seen_modal) {
        openModal();
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('has_seen_modal', true);
        }
      }
    }
  }, [admin]);

  return (
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
            Welcome {admin?.firstName} we are excited you are here !!
          </Box>

          <Box textAlign="center" fontSize="16px">
            Please complete your profile to get the most out of Quick
            InfluenceQuick Influence .
          </Box>

          <Box textAlign="center" mt="50px">
            <CustomButton maxW="300px">
              <Link href="/dashboard/profile/edit">
                <Box as="href" onClick={closeModal}>
                  Click to update profile
                </Box>
              </Link>
            </CustomButton>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
