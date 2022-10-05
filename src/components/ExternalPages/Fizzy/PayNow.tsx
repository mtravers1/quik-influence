import { useEffect, useState, FC } from 'react';
import { useRouter } from 'next/router';
import DropdownSelect from 'components/DropdownSelect';
import {
  Box,
  Flex,
  Image,
  useToast,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Authorize } from './authorize';
import { axiosInstance } from 'utils/helpers';
import loader from 'assets/loader.gif';
import NextImage from 'next/image';

// 6% of the total amount
const taxPercentage = 0.06;

export const PayNow: FC<{
  userData: any;
  openLoginOtp: any;
  otherInfo: any;
  products: any;
  showErrorMessage?: any;
  currentFlavour?: string;
  quantity?: number;
  currentProduct?: number;
}> = ({
  userData,
  openLoginOtp,
  otherInfo,
  products,
  showErrorMessage,
  currentFlavour,
  quantity = 0,
  currentProduct = 0,
}) => {
  const router = useRouter();

  const [agreed, setAgreed] = useState(false);

  const [total, setTotal] = useState(0);
  const [totalTax, setTotalTax] = useState(
    products[currentProduct].meta.price * taxPercentage
  );

  const [shippingRate, setShippingRate] = useState(0);
  const [shipmentId, setShippmentId] = useState(undefined);

  const [showOrderModal, setShowOrderModal] = useState(false);
  const [loadingShipment, setLoadingShipment] = useState(false);

  const closeOrderModal = () => {
    setShowOrderModal(false);
  };

  const toast = useToast();

  useEffect(() => {
    const newTax = Number(
      (products[currentProduct].meta.price * quantity * taxPercentage).toFixed(
        2
      )
    );
    setTotalTax(newTax);

    const newTotalAmount = Number(
      (quantity * products[currentProduct].meta.price + newTax).toFixed(2)
    );

    setTotal(newTotalAmount);

    getShippingCost(newTotalAmount);
  }, [quantity, currentProduct]);

  useEffect(() => {
    const newTotalAmount = Number(
      (
        quantity * products[currentProduct].meta.price +
        totalTax +
        shippingRate
      ).toFixed(2)
    );

    setTotal(newTotalAmount);
  }, [shippingRate]);

  const getShippingCost = async (totalParcelAmount: number) => {
    setLoadingShipment(true);

    try {
      const rates = await axiosInstance.post(
        '/users/shippo/rate',
        {
          adminId: 'f556e492-860b-4dc7-9661-175e25f42e9a',
          existingShipmentId: shipmentId,
          // parcels: Array.from(Array(number).keys()).map(item => ({
          //   weight: 2.72,
          //   length: 7,
          //   width: 7,
          //   height: 7,
          //   distance_unit: 'in',
          //   mass_unit: 'kg',
          // })),
          parcels: [
            {
              weight: products[currentProduct].meta.weight * quantity,
              length: products[currentProduct].meta.length * quantity,
              width: products[currentProduct].meta.width,
              height: products[currentProduct].meta.height,
              distance_unit: 'in',
              mass_unit: 'kg',
            },
          ],
          quantity,
        },
        {
          headers: { token: userData.token },
        }
      );

      setShippingRate(
        totalParcelAmount > 50 ? 0 : Number(rates.data.data.rate) || 0
      );
      if (!shipmentId) setShippmentId(rates.data.data.id);
    } catch (err: any) {
      console.log(err);
      if (err.response.status === 401) {
        openLoginOtp();
      }

      if (err.response.status === 400) {
        showErrorMessage({
          title: err.response?.data?.data?.type || 'An error occured',
          description: err.response?.data?.data?.message?.[0].text || '',
        });
      }
    }

    setLoadingShipment(false);
  };

  const handleInput = () => {
    setAgreed(!agreed);
  };

  const onSuccessHandler = async (response: any) => {
    const paymentDets = {
      shipmentId,
      taxAmount: totalTax,
      amount: total,
      nonce: response.opaqueData.dataValue,
      item: {
        itemId: products[currentProduct].id,
        description: `${products[currentProduct].name} - ${currentFlavour}, ${products[currentProduct].option} ×${quantity}`,
        name: `Fizzy ${products[currentProduct].option}`,
        unitPrice: products[currentProduct].meta.price,
        quantity: quantity,
        flavour: currentFlavour,
      },
      campaignAdminId: router.query.campaign_admin_id,
    };

    try {
      await axiosInstance.post('/users/createOrder', paymentDets, {
        headers: {
          token: userData.token,
        },
      });

      toast({
        title: `Your payment is processing`,
        description: '',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });

      setShowOrderModal(true);
    } catch (err: any) {
      showErrorMessage({
        title: err?.response?.data?.data?.title || 'An error occured',
        description: err?.response?.data?.data?.description || '',
      });
    }
  };

  return (
    <>
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
            <Flex
              borderBottom="1px solid rgb(62, 62, 62)"
              padding="10px 0"
              marginBottom="20px"
              justifyContent="space-between"
            >
              <Box as="h1">Selected Flavour</Box>
              <Flex alignItems="center">
                <Box>{currentFlavour}</Box>
              </Flex>
            </Flex>
            <Flex
              borderBottom="1px solid rgb(62, 62, 62)"
              padding="10px 0"
              marginBottom="20px"
              justifyContent="space-between"
            >
              <Box as="h1">Selected Product</Box>
              <Flex alignItems="center">
                <Box>{products[currentProduct].option}</Box>
              </Flex>
            </Flex>
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
                {products[currentProduct].name} - {currentFlavour},{' '}
                {products[currentProduct].option} ×{quantity}
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
                <Box>
                  ${(quantity * products[currentProduct].meta.price).toFixed(2)}
                </Box>
              </Flex>
              <Flex marginBottom="20px" alignItems="center" position="relative">
                {loadingShipment && (
                  <Box position="absolute" left="-40px" top="-2px">
                    <NextImage
                      src={loader}
                      alt="Loading..."
                      width={30}
                      height={30}
                    />
                  </Box>
                )}
                <Box marginRight="30px">Shipping Fee</Box>
                <Box>${shippingRate.toFixed(2)}</Box>
              </Flex>
              <Flex marginBottom="20px">
                <Box marginRight="30px">Tax</Box>
                <Box>${totalTax}</Box>
              </Flex>
              <Flex marginBottom="20px">
                <Box marginRight="30px">Total</Box>
                <Box>${total}</Box>
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

        <Flex
          justifyContent="flex-end"
          pointerEvents={
            (agreed || !loadingShipment) && shipmentId ? 'all' : 'none'
          }
        >
          <Authorize onSuccessHandler={onSuccessHandler} />
        </Flex>
      </Box>

      <Modal
        blockScrollOnMount={false}
        isOpen={showOrderModal}
        onClose={closeOrderModal}
      >
        <ModalOverlay />
        <ModalContent minW="40vw" p="8" mt="20%" borderRadius={0}>
          <ModalBody>
            <Box
              marginBottom="20px"
              fontSize="32px"
              as="h1"
              textAlign="center"
              fontWeight="500"
            >
              Thank You for your purchase
            </Box>

            <Box textAlign="center">
              Your order is on its way. You will receive an email confirmation
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
