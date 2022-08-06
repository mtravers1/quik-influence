import { useEffect, useState, FC } from 'react';
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

let price = 35.99;
let tax = 2.52;

export const PayNow: FC<{
  userData: any;
  openLoginOtp: any;
  otherInfo: any;
}> = ({ userData, openLoginOtp, otherInfo }) => {
  const [agreed, setAgreed] = useState(false);
  const [number, setNumber] = useState(1);

  const [total, setTotal] = useState(0);
  const [totalTax, setTotalTax] = useState(2.52);
  const [flavour, setFlavour] = useState('Wild Strawberry');

  const [shippingRate, setShippingRate] = useState(0);
  const [shipmentId, setShippmentId] = useState(undefined);

  const [showOrderModal, setShowOrderModal] = useState(false);
  const [loadingShipment, setLoadingShipment] = useState(false);

  const closeOrderModal = () => {
    setShowOrderModal(false);
  };

  const toast = useToast();

  useEffect(() => {
    const newTax = Number((tax * number).toFixed(2));
    setTotalTax(newTax);

    const newTotalAmount = Number((number * price + newTax).toFixed(2));
    setTotal(newTotalAmount);

    getShippingCost(newTotalAmount);
  }, [number]);

  useEffect(() => {
    const newTotalAmount = Number(
      (number * price + totalTax + shippingRate).toFixed(2)
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
              weight: 2.72 * number,
              length: 7 * number,
              width: 7,
              height: 7,
              distance_unit: 'in',
              mass_unit: 'kg',
            },
          ],
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
        toast({
          title: err.response?.data?.data?.type || 'An error occured',
          description: err.response?.data?.data?.message?.[0].text || '',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        });
      }
    }

    setLoadingShipment(false);
  };

  const handleInput = () => {
    setAgreed(!agreed);
  };

  const addMore = () => {
    setNumber(number + 1);
  };
  const subtract = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const updateflavour = (e: any) => {
    setFlavour(e.target.value);
  };

  const onSuccessHandler = async (response: any) => {
    const paymentDets = {
      campaignId: otherInfo.campaignId,
      shipmentId,
      taxAmount: totalTax,
      amount: total,
      nonce: response.opaqueData.dataValue,
      item: {
        itemId: '245',
        description: `Fizzy Delta-8 Infused Seltzer - ${flavour}, 6 Pack`,
        name: `Fizzy 6 Pack`,
        unitPrice: price,
        quantity: number,
      },
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
    } catch (err) {
      toast({
        title: `An error occured`,
        description: '',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
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
              <Box as="h1">Select Flavour</Box>
              <Flex alignItems="center">
                <DropdownSelect
                  // error={errors[data.name] ? data.errorMessage : undefined}
                  onChange={updateflavour}
                  options={[
                    {
                      label: 'Wild Strawberry',
                      value: 'Wild Strawberry',
                    },
                    {
                      label: 'Mango Tango',
                      value: 'Mango Tango',
                    },
                  ]}
                  selected={flavour}
                  selectProps={{
                    height: '4.5rem',
                    fontSize: '1.4rem',
                  }}
                />
              </Flex>
            </Flex>
            <Flex
              borderBottom="1px solid rgb(62, 62, 62)"
              padding="10px 0"
              marginBottom="20px"
              justifyContent="space-between"
            >
              <Box as="h1">Product</Box>
              <Flex alignItems="center">
                <Flex
                  width="25px"
                  justifyContent="center"
                  border="1px solid rgb(62, 62, 62)"
                  onClick={subtract}
                  cursor="pointer"
                  fontSize="16px"
                >
                  <Box>-</Box>
                </Flex>
                <Box margin="0 20px">{number}</Box>
                <Flex
                  width="25px"
                  justifyContent="center"
                  border="1px solid rgb(62, 62, 62)"
                  onClick={addMore}
                  cursor="pointer"
                  fontSize="16px"
                >
                  <Box>+</Box>
                </Flex>
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
                Fizzy Delta-8 Infused Seltzer - {flavour}, 6 Pack ×{number}
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
                <Box>${(number * price).toFixed(2)}</Box>
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
        <ModalContent minW="40vw" p="8" mt="30%" borderRadius={0}>
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
