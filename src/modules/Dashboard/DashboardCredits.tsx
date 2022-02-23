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

import useForm from 'hooks/useForm';
import formdata from 'utils/constants/formData/addCredit';
import CustomButton from 'components/Button';
import { TextInput } from 'components/Input';

import quikColorConstants, {
  cardThemeColor,
  borderThemeColor,
} from 'utils/constants/colorConstants';
import DropdownSelect from 'components/DropdownSelect';
import { TransactionDataTable } from 'components/Dashboard/Credits';

const transactionData = [
  {
    id: 0,
    date: '02/10/2022',
    amount: 100,
    lastCardDigit: '4490',
  },
  {
    id: 1,
    date: '02/13/2022',
    amount: 300,
    lastCardDigit: '4570',
  },
];

const cardIssuerSelectOptions = [
  {
    label: 'MasterCard',
    value: 'mastercard',
  },
  {
    label: 'Visa',
    value: 'visacard',
  },
];

const stateSelectOptions = [
  {
    label: 'GA',
    value: 'ga',
  },
  {
    label: 'FL',
    value: 'fl',
  },
  {
    label: 'CA',
    value: 'ca',
  },
];

const textInputLabelProps = { fontWeight: 'bold', fontSize: 'lg' };
const textInputProps = { p: '.50rem' };

const DashboardCredits = () => {
  const { colorMode } = useColorMode();
  const toast = useToast();
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  const getSelectionOptions = (selectionType: string) => {
    switch (selectionType) {
      case 'state':
        return stateSelectOptions;
      case 'cardIssuer':
        return cardIssuerSelectOptions;
      default:
        return [];
    }
  };

  const handleDropdownChange = (event: any) => {
    console.log(event.target.value);
  };
  const { handleChange, inputTypes, handleSubmit, errors, loading } = useForm({
    inputs: formdata,
    cb: async inputs => {
      console.log(inputs);

      toast({
        title: 'Credits Added Successfully.',
        description: "We've added $100 credits your account for you.",
        status: 'success',
        duration: 4000,
        isClosable: true,
      });
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
              <Text>$4,567.00 Available Credits</Text>
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
                      colSpan={data.colSpan === 1 ? colSpan : data.colSpan}
                    >
                      <DropdownSelect
                        selectProps={{ name: data.name }}
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
                  onClick={handleSubmit}
                >
                  Process Card for $100
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
          <TransactionDataTable data={transactionData} />

          {/* Alert */}
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
              Your transaction in the mount of $100 should be displayed on your
              account momentarily. An email with your receipt has been sent to
              email@yourname.com
            </AlertDescription>
          </Alert>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default DashboardCredits;
