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
  Flex,
} from '@chakra-ui/react';
import LoginOtp from 'components/ExternalPages/Fizzy/login';

export const FizzyCheckout: FC<{
  products: any;
  userDataInfo: any;
  otherInfo: any;
  setOpenModal: any;
  showErrorMessage: any;
  openModal: any;
  updateOnLogin: any;
  currentFlavour: string;
  quantity: number;
  currentProduct: number;
  setPage: any;
}> = ({
  products = [],
  userDataInfo,
  otherInfo,
  setOpenModal,
  showErrorMessage,
  openModal,
  updateOnLogin,
  currentFlavour,
  quantity,
  currentProduct,
  setPage,
}) => {
  const openLoginOtp = () => {
    setOpenModal({ status: true, state: 'login' });
  };

  const onClose = () => {
    setOpenModal({ status: false, state: '' });
  };

  return (
    <>
      <FizzyLayout>
        <Box
          as="section"
          padding={{ base: '100px 15px', md: '100px 30px' }}
          flexGrow={1}
          backgroundColor="#2a2a2a"
        >
          <Box
            maxW="1200px"
            margin="auto"
            marginBottom="20px"
            color="#15bce7"
            fontSize="15px"
            fontWeight="bold"
            onClick={() => setPage(0)}
            cursor="pointer"
          >
            Back to Product page
          </Box>
          <Flex
            maxW="1200px"
            margin="auto"
            padding={{ base: '15px', md: '25px' }}
            backgroundColor="rgba(0,0,0,0.7)"
            width="100%"
            height="100%"
            flexDirection="column"
          >
            <Flex
              flexDirection={{ base: 'column', lg: 'row' }}
              borderTop="1px solid rgb(62, 62, 62)"
              borderBottom="1px solid rgb(62, 62, 62)"
              alignItems={{ base: 'flex-start', md: 'center' }}
              marginBottom="30px"
            >
              {[
                'Hello',
                'Support: (888) 992-8701',
                'Email: admin@journeyhemp.com',
              ].map((item, i) => (
                <Box
                  borderRight={{
                    base: 'none',
                    lg: i === 2 ? 'none' : '1px solid rgb(62, 62, 62)',
                  }}
                  flexGrow={1}
                  padding="20px"
                  fontSize={i === 0 ? '18px' : { base: '18px', md: '24px' }}
                  color="#0bcbfb"
                >
                  {item}
                </Box>
              ))}
            </Flex>
            <Payment
              userData={userDataInfo || {}}
              openLoginOtp={openLoginOtp}
              otherInfo={otherInfo || {}}
              products={products}
              showErrorMessage={showErrorMessage}
              currentFlavour={currentFlavour}
              quantity={quantity}
              currentProduct={currentProduct}
            />
          </Flex>
        </Box>
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
