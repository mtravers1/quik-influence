import React from 'react';
import Image from 'next/image';
import loader from 'assets/loader.gif';
import {
  VStack,
  useColorMode,
  useBreakpointValue,
  SimpleGrid,
  GridItem,
  FormControl,
  FormErrorMessage,
  useToast,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

import useForm from 'hooks/useForm';
import formdata from 'utils/constants/formData/editUserBasicInfo';
import CustomButton from 'components/Button';
import { TextInput } from 'components/Input';

import DropdownSelect, {
  DropdownSelectOption,
} from 'components/DropdownSelect';
import { stateNames } from 'utils/constants/stateConstants';
import { countryNames } from 'utils/constants/countryConstant';
import { authSelectors } from 'redux/selectors';

import { cardThemeColor } from 'utils/constants/colorConstants';
import { axiosInstance } from 'utils/helpers';
import UserImage from '../ViewProfile/UserImage';
import { Q_TOKEN } from 'utils/constants';
import { login } from 'redux/actions/auth';
import { PaymentInfoComp } from 'modules/Profile/ViewProfile/PaymentInfoComp';

const stateSelectOptions: DropdownSelectOption[] = stateNames.map(
  stateName => ({
    label: stateName,
    value: stateName,
  })
);
const countrySelectOptions: DropdownSelectOption[] = countryNames.map(
  countryName => ({
    label: countryName,
    value: countryName,
  })
);
const textInputLabelProps = { fontWeight: 'bold', fontSize: 'lg' };
const textInputProps = { p: '.50rem' };

const EditBasicInfo = () => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const toast = useToast();
  const { admin } = useSelector(authSelectors.getUser);

  const getSelectionOptions = (selectionType: string) => {
    switch (selectionType) {
      case 'address_state':
        return stateSelectOptions;
      case 'country':
        return countrySelectOptions;
      default:
        return [];
    }
  };

  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const { handleChange, inputTypes, handleSubmit, errors, loading } = useForm({
    inputs: formdata,
    initials: {
      address_line1: admin['address1'],
      address_line2: admin['address2'],
      address_state: admin['state'],
      address_zip: admin['zipCode'],
      city: admin['city'],
      country: admin['country'],
      dob: admin['dateOfBirth'],
      firstName: admin['firstName'],
      gender: admin['gender'],
      lastName: admin['lastName'],
      phone: admin['phone'],
      avatar: admin['avatar'],
    },
    cb: async inputs => {
      const response = await axiosInstance.put('/auth/profile/admin', {
        address1: inputs.address_line1,
        address2: inputs.address_line2,
        state: inputs.address_state,
        zipCode: inputs.address_zip,
        city: inputs.city,
        country: inputs.country,
        dateOfBirth: inputs.dob,
        firstName: inputs.firstName,
        gender: inputs.gender,
        lastName: inputs.lastName,
        phone: inputs.phone,
        avatar: inputs.avatar,
      });
      if (response) {
        dispatch(
          login({
            admin: response.data.data,
            token: localStorage.getItem(Q_TOKEN),
          })
        );
        toast({
          title: 'Your profile has been updated succesfully',
          description: '',
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
      }
    },
  });
  return (
    <>
      <UserImage
        name="avatar"
        handleChange={handleChange}
        avatar={inputTypes.avatar}
      />

      <PaymentInfoComp />

      <Flex
        bgColor={cardThemeColor[colorMode]}
        w="100%"
        flexDirection="column"
        p="12"
      >
        <Heading pb="12" size="md">
          Edit profile
        </Heading>

        <form action="post">
          <VStack spacing="10" width="full" alignItems="flex-start">
            <SimpleGrid w="full" columns={2} columnGap={3} rowGap={6}>
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
                if (data.type === 'image-upload') {
                  return;
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
            </SimpleGrid>
          </VStack>
          <CustomButton
            maxW="204px"
            height="35px"
            padding={0}
            mt={4}
            onClick={handleSubmit}
          >
            Save
            {loading && <Image src={loader} alt="" width={50} height={50} />}
          </CustomButton>
        </form>
      </Flex>
    </>
  );
};

export default EditBasicInfo;
