import React from 'react';
import {
  Box,
  Image,
  FormControl,
  FormErrorMessage,
  Flex,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import lodash from 'lodash';
import { useRouter } from 'next/router';
import { TextInput } from 'components/Input';
import useForm from 'hooks/useForm';
import formdata from 'utils/constants/formData/market-place-checkout';
import DropdownSelect from 'components/DropdownSelect';
import { useSelectLocations } from 'hooks/useSelectLocations';
// import CheckBox from 'components/Input/CheckBox';
import CustomButton from 'components/Button';
import loader from 'assets/loader.gif';
import style from './style.module.scss';
import { axiosInstance } from 'utils/helpers';
import { login } from 'redux/actions/auth';
import { useNavLink } from '../NavBar/buttonList';

export const MarketShippingAddress = ({ setRates }: { setRates: any }) => {
  const {
    auth: { user },
    cart,
  } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const { push } = useRouter();
  const { baseLink } = useNavLink();

  const getShippingDetailsFromUserProfile = () => {
    if (!user) {
      return {};
    }

    const { firstName, lastName, email, address, city, postalCode, state } =
      user;

    return {
      firstName,
      lastName,
      email,
      city,
      state,
      postalCode,
      address,
    };
  };

  const { handleChange, inputTypes, handleSubmit, errors, loading } = useForm({
    inputs: formdata,
    initials: {
      country: 'US',
      ...getShippingDetailsFromUserProfile(),
    },
    showErrorToast: false,
    cb: async inputs => {
      let userDets = { ...getShippingDetailsFromUserProfile(), country: 'US' };

      if (!lodash.isEqual(inputs, userDets)) {
        const res = await axiosInstance.put('/auth/profile/user', inputs);
        userDets = res.data.data;

        dispatch(login(userDets));
      }

      await setRates();

      push(
        `${baseLink}/checkout?step=shipping_method&previous_step=contact_info`
      );
    },
  });

  const { internalSelectOptions }: { internalSelectOptions: any } =
    useSelectLocations();

  return (
    <Box w="100%">
      <Box marginBottom="40px">
        <Box as="h2" fontSize="18px" fontWeight="450">
          Contact Information
        </Box>

        <FormControl isInvalid={errors[formdata[0].name]}>
          <TextInput
            name={formdata[0].name}
            value={inputTypes[formdata[0].name]}
            formControlProps={{
              pt: 8,
            }}
            handleChange={handleChange}
            type={formdata[0].type}
            placeholder={formdata[0].label}
            TextInputProps={{
              className: `${
                inputTypes[formdata[0].name] && !errors[formdata[0].name]
                  ? ' valid'
                  : ''
              }${errors[formdata[0].name] ? ' invalid' : ''}`,
              // @ts-ignore
              disabled: formdata[0].name === 'phone',
            }}
          />

          {errors[formdata[0].name] && (
            <FormErrorMessage fontSize="14px">
              {formdata[0].errorMessage}
            </FormErrorMessage>
          )}
        </FormControl>

        {/* <FormControl isInvalid={errors[formdata[1].name]} marginTop="10px">
          <CheckBox
            value={inputTypes[formdata[1].name]}
            name={formdata[1].name}
            handleChange={handleChange}
            label={formdata[1].label}
            useCustom
          />
        </FormControl> */}
      </Box>

      <Box as="h2" fontSize="18px" fontWeight="450" marginBottom="15px">
        Shipping Information
      </Box>

      <Box as="form">
        <Box className={style.form} display={{ base: 'block', lg: 'grid' }}>
          {formdata.slice(1, 9).map((data: any, i: number) => {
            switch (data.type) {
              case 'select':
                return (
                  <FormControl
                    key={`contact_form_${i}`}
                    width="100%"
                    isInvalid={errors[data?.name]}
                    isRequired={data?.required}
                    margin="3px 0"
                    className={style['form-container-element']}
                  >
                    <Flex alignItems="center">
                      <DropdownSelect
                        error={
                          errors[data.name] ? data.errorMessage : undefined
                        }
                        onChange={handleChange}
                        options={internalSelectOptions[data.name] || []}
                        placeholder={data.label}
                        name={data.name}
                        selected={inputTypes[data.name]}
                        selectProps={{
                          height: '4.5rem',
                          fontSize: '1.4rem',
                        }}
                      />
                    </Flex>

                    {errors[data.name] && (
                      <FormErrorMessage paddingLeft={50} fontSize={12}>
                        {data.errorMessage}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                );
              default:
                return (
                  <FormControl
                    isInvalid={errors[data.name]}
                    key={`register_${i}`}
                    className={style['form-container-element']}
                  >
                    <TextInput
                      name={data.name}
                      value={inputTypes[data.name]}
                      formControlProps={{
                        pt: 8,
                      }}
                      handleChange={handleChange}
                      type={data.type}
                      placeholder={data.label}
                      TextInputProps={{
                        className: `${
                          inputTypes[data.name] && !errors[data.name]
                            ? ' valid'
                            : ''
                        }${errors[data.name] ? ' invalid' : ''}`,
                        // @ts-ignore
                        disabled: data.name === 'phone',
                      }}
                    />

                    {errors[data.name] && (
                      <FormErrorMessage fontSize="14px">
                        {data.errorMessage}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                );
            }
          })}
        </Box>

        {/* <FormControl isInvalid={errors[formdata[9].name]} marginTop="10px">
          <CheckBox
            value={inputTypes[formdata[9].name]}
            name={formdata[9].name}
            handleChange={handleChange}
            label={formdata[9].label}
            useCustom
          />
        </FormControl> */}

        <Flex justifyContent="flex-end" width="100%" marginTop="20px">
          <CustomButton
            maxW="250px"
            height="50px"
            padding={0}
            mt={4}
            onClick={handleSubmit}
            disabled={loading}
          >
            Continue to shipping{' '}
            {loading && (
              <NextImage src={loader} alt="" width={50} height={50} />
            )}
          </CustomButton>
        </Flex>
      </Box>
    </Box>
  );
};
