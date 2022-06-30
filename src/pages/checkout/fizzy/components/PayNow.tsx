import { useState } from 'react';
import loadable from '@loadable/component';
import {
  Box,
  Flex,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from '@chakra-ui/react';
import Link from 'next/link';

// import { FormComponent, FormContainer } from 'react-authorize-net';

const AuthorizeComponent = loadable(
  () => import(/* webpackPrefetch: true */ './authorize')
);

export const PayNow = () => {
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const submit = () => {};

  const onClose = () => {
    setOpenModal(false);
  };

  const openpaymentModal = () => {
    setOpenModal(true);
  };

  const handleInput = () => {
    setAgreed(!agreed);
  };

  const onErrorHandler = () => {};
  const onSuccessHandler = () => {};

  return (
    <Box
      border="1px solid rgb(62, 62, 62)"
      flexGrow={1}
      height="100%"
      padding="20px"
    >
      <Box
        borderBottom="1px solid rgb(62, 62, 62)"
        padding="10px 0 20px"
        marginBottom="30px"
        fontSize="24px"
        color="#0bcbfb"
        fontWeight="bold"
      >
        Pay Now
      </Box>

      <Box color="#0bcbfb" marginBottom="30px">
        <Box justifyContent="space-between" fontSize="17px" fontWeight="bold">
          <Box
            borderBottom="1px solid rgb(62, 62, 62)"
            padding="10px 0"
            marginBottom="20px"
          >
            Product
          </Box>
          <Flex
            alignItems="center"
            flexWrap="wrap"
            borderBottom="1px solid rgb(62, 62, 62)"
            padding="20px 0"
          >
            <Box width="90px">
              <Image src="https://www.journeyhemp.com/wp-content/uploads/2022/05/WS6CanTransparent-500x333.png" />
            </Box>

            <Box>
              Fizzy Delta-8 Infused Seltzer - Wild Strawberry, 6 Pack × 1
            </Box>
          </Flex>
        </Box>

        <Box justifyContent="space-between" fontSize="17px" fontWeight="bold">
          <Flex
            borderBottom="1px solid rgb(62, 62, 62)"
            padding="10px 0"
            marginBottom="20px"
            justifyContent="flex-end"
          >
            Subtotal
          </Flex>
          <Flex
            alignItems="flex-end"
            flexWrap="wrap"
            borderBottom="1px solid rgb(62, 62, 62)"
            padding="20px 0"
            flexDirection="column"
          >
            <Flex marginBottom="20px">
              <Box marginRight="30px">Subtotal</Box>
              <Box>$41.99</Box>
            </Flex>
            <Flex marginBottom="20px">
              <Box marginRight="30px">Tax</Box>
              <Box>$2.99</Box>
            </Flex>
            <Flex marginBottom="20px">
              <Box marginRight="30px">Total</Box>
              <Box>$44.93</Box>
            </Flex>
          </Flex>
        </Box>
      </Box>

      <Box color="#0bcbfb" fontSize="17px" fontWeight="bold">
        <Flex justifyContent="space-between" marginBottom="20px">
          <Box fontWeight="bold">Credit/Debit Card</Box>
          <Box>
            <Image src="https://www.journeyhemp.com/wp-content/plugins/authorizenet-payment-gateway-for-woocommerce/images/logo.gif" />
          </Box>
        </Flex>

        <Box
          padding="30px"
          background="rgba(226,226,226,0.2)"
          marginBottom="30px"
        >
          Pay securly by Credit or Debit through Authorize.net Secure Servers.
        </Box>

        <Flex marginBottom="30px" alignItems="center">
          <input type="checkbox" onInput={handleInput} />

          <Link href="https://www.journeyhemp.com/terms-conditions/">
            <a target="_">
              <Box marginLeft="20px">
                I have read and agree to the website terms and conditions *
              </Box>
            </a>
          </Link>
        </Flex>
      </Box>

      <Modal blockScrollOnMount={false} isOpen={openModal} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          minW="60vw"
          width="fit-content"
          borderRadius={0}
          background="transparent"
          boxShadow="unset"
        >
          <ModalBody>
            <AuthorizeComponent
              onErrorHandler={onErrorHandler}
              onSuccessHandler={onSuccessHandler}
            />
          </ModalBody>
        </ModalContent>
      </Modal>

      <Flex justifyContent="flex-end">
        <Box
          as="button"
          onClick={openpaymentModal}
          background="#fff"
          color="#000"
          padding="10px 30px"
          fontSize="18px"
          fontWeight="bold"
          disabled={!agreed}
        >
          Pay Now
        </Box>
      </Flex>
    </Box>
  );
};
