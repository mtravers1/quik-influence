import React from 'react';
import { AddIcon } from '@chakra-ui/icons';
import {
  HStack,
  VStack,
  Heading,
  Flex,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  useColorMode,
  useBreakpointValue,
  SimpleGrid,
  GridItem,
  Divider,
  FormControl,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import useForm from 'hooks/useForm';
import formdata from 'utils/constants/formData/addCredit';
import CustomButton from 'components/Button';
import { TextInput } from 'components/Input';

import quikColorConstants, {
  cardThemeColor,
  borderThemeColor,
} from 'utils/constants/colorConstants';
import DropdownSelect, {
  DropdownSelectOption,
} from 'components/DropdownSelect';
import { TransactionDataTable } from 'components/Dashboard/Credits';
import { getNumberRange } from 'utils/helpers';
import { fetchPostJSON } from 'utils/apiHelpers';
import { stateNames } from 'utils/constants/stateConstants';
import { authSelectors, campaignSelectors } from 'redux/selectors';
import { formatAmountForDisplay } from 'utils/stripeHelpers';
import * as stripeConfig from 'utils/stripeConfig';

const stateSelectOptions: DropdownSelectOption[] = stateNames.map(
  stateName => ({
    label: stateName,
    value: stateName,
  })
);

const textInputLabelProps = { fontWeight: 'bold', fontSize: 'lg' };
const textInputProps = { p: '.50rem' };

const currentYear = new Date().getFullYear();

const DashboardCredits = () => {
  const { colorMode } = useColorMode();
  const toast = useToast();
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  const user = useSelector(authSelectors.getUser);
  const SMSCampaign = useSelector(campaignSelectors.getSMSCampaign);

  const [transaction, setTransaction] = React.useState<any>();
  const [transactions, setTransactions] = React.useState<any>([]);
  const [currentBalance, setCurrentBalance] = React.useState(0); // Just for testing

  // alert(JSON.stringify(SMSCampaign));

  const getSelectionOptions = (selectionType: string) => {
    switch (selectionType) {
      case 'address_state':
        return stateSelectOptions;
      case 'exp_month':
        return getNumberRange(1, 12, 1);
      case 'exp_year':
        return getNumberRange(currentYear, currentYear + 10, 1);
      default:
        return [];
    }
  };

  const {
    handleChange,
    inputTypes,
    handleSubmit,
    errors,
    loading,
    resetInputs,
  } = useForm({
    inputs: formdata,
    cb: async inputs => {
      // Reset prev state
      setTransaction(null);

      // Create a Card Token.
      const response = await fetchPostJSON('/api/create_card_token', inputs);

      if (response.statusCode === 500) {
        throw new Error(response.message);
      }

      // Create a Charge.
      const chargeRes = await fetchPostJSON('/api/create_charge', {
        token: response.id,
        amount: inputs.amount,
        receipt_email: user.email,
      });

      if (chargeRes.statusCode === 500) {
        throw new Error(chargeRes.message);
      }

      // TODO:: Make a request to the server to persist the `charge Data`
      if (chargeRes.status === 'succeeded') {
        setTransaction(chargeRes);
        setCurrentBalance(v => v + chargeRes.amount);
        setTransactions((prevData: any[]) => [
          ...prevData,
          {
            id: chargeRes.id,
            amount: chargeRes.amount,
            lastCardDigit: chargeRes.source.last4,
            date: new Date(),
          },
        ]);

        toast({
          title: 'Credits Added Successfully.',
          description: `We've added $${chargeRes.amount} credits your account for you.`,
          duration: 4000,
          isClosable: true,
          variant: 'top-accent',
        });
      }

      resetInputs();
    },
  });

  return (
    <Flex
      flexDir={{ base: 'column', md: 'column', lg: 'row' }}
      width="full"
      maxW="2000px"
    >
      {/* Column 1 */}
      <Flex py="3%" pb="3rem" width={[null, null, '50%']}>
        <VStack width="full" alignItems="flex-start" spacing="14">
          <VStack
            alignItems="flex-start"
            display="flex"
            width="full"
            spacing="10"
          >
            <HStack display="flex" width="full" spacing="20">
              <Heading>Credits</Heading>
              <CustomButton
                fontSize="md"
                width="40"
                padding="1.2rem"
                borderRadius="md"
                leftIcon={<AddIcon />}
              >
                Add Credits
              </CustomButton>
            </HStack>
            <Box
              display="flex"
              w="100"
              height="20"
              bgColor={cardThemeColor[colorMode]}
              textAlign="center"
              fontSize="xlg"
              fontWeight="semibold"
              color={quikColorConstants.influenceRed}
              justifyContent="center"
              alignItems="center"
              p="5"
            >
              <Text>
                {formatAmountForDisplay(currentBalance, stripeConfig.CURRENCY)}{' '}
                Available Credits
              </Text>
            </Box>
          </VStack>
          {/* Form */}
          <VStack spacing="10" width="full" alignItems="flex-start">
            <Heading size="lg">Add Credits</Heading>
            <SimpleGrid columns={2} columnGap={3} rowGap={6}>
              {formdata.map((data, i) => {
                if (data.type === 'select') {
                  return (
                    <GridItem
                      key={`gridItem_${i}`}
                      colSpan={data.colSpan === 1 ? colSpan : data.colSpan}
                    >
                      <DropdownSelect
                        selectProps={{
                          name: data.name,
                          value: inputTypes[data.name],
                        }}
                        onChange={handleChange}
                        label={data.label}
                        labelProps={{ ...textInputLabelProps }}
                        options={getSelectionOptions(data.name) || []}
                        error={errors[data.name] && data.errorMessage}
                      />
                    </GridItem>
                  );
                }

                return (
                  <GridItem
                    key={`gridItem_${i}`}
                    colSpan={data.colSpan === 1 ? colSpan : data.colSpan}
                  >
                    <FormControl
                      isInvalid={errors[data.name]}
                      key={`credits_${i}`}
                    >
                      <TextInput
                        name={data.name}
                        label={data.label}
                        value={inputTypes[data.name]}
                        type={data.type}
                        placeholder={data.placeholder}
                        TextInputProps={{ ...textInputProps }}
                        labelProps={{ ...textInputLabelProps }}
                        handleChange={handleChange}
                      />
                      {errors[data.name] && (
                        <FormErrorMessage fontSize="xl">
                          {data.errorMessage}
                        </FormErrorMessage>
                      )}
                    </FormControl>
                  </GridItem>
                );
              })}
              <GridItem mt="7" colSpan={2}>
                <CustomButton
                  fontSize="md"
                  width="100"
                  padding="1.2rem"
                  borderRadius="md"
                  type="submit"
                  disabled={loading}
                  isLoading={loading}
                  onClick={handleSubmit}
                >
                  Process Card
                  {`${
                    inputTypes['amount'] &&
                    ` for ${formatAmountForDisplay(
                      inputTypes['amount'],
                      stripeConfig.CURRENCY
                    )}`
                  }`}
                </CustomButton>
              </GridItem>
            </SimpleGrid>
          </VStack>
        </VStack>
      </Flex>

      <Divider display={{ base: 'block', md: 'none' }} />

      {/* Column 2 */}
      <Flex py="3%" width={[null, null, '50%']} minH="100vh">
        <VStack spacing="20">
          {/*  Transaction History */}
          <TransactionDataTable data={transactions} />

          {/* Alert */}
          {transaction && (
            <Alert
              status="error"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="sm"
              bgColor={cardThemeColor[colorMode]}
              border={`1px solid ${borderThemeColor[colorMode]}`}
            >
              <AlertIcon boxSize="40px" mr={0} mb={5} />
              <AlertTitle mt={4} mb={5} fontSize="xlg">
                Thank you for your order!
              </AlertTitle>
              <AlertDescription
                fontSize="lg"
                textAlign="center"
                fontWeight="bold"
                color={quikColorConstants.influenceRed}
                maxWidth="lg"
              >
                Your transaction in the mount of{' '}
                {formatAmountForDisplay(
                  transaction?.amount,
                  stripeConfig.CURRENCY
                )}{' '}
                should be displayed on your account momentarily. An email with
                your receipt has been sent to {transaction?.receipt_email}
              </AlertDescription>
            </Alert>
          )}
        </VStack>
      </Flex>
    </Flex>
  );
};

export default DashboardCredits;
