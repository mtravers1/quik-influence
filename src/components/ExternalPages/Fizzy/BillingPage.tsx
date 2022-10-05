import { FC, useEffect, useState } from 'react';
import lodash from 'lodash';
import { Box, Flex, FormControl, FormErrorMessage } from '@chakra-ui/react';
import formdata from 'utils/constants/formData/checkout';
import { TextInput } from 'components/Input';
import useForm from 'hooks/useForm';
import { axiosInstance } from 'utils/helpers';
import Image from 'next/image';
import loader from 'assets/loader.gif';
import { useSelectLocations } from 'hooks/useSelectLocations';
import DropdownSelect from 'components/DropdownSelect';

export const BillingPage: FC<{
  setCurrentPage: Function;
  userData: any;
  openLoginOtp: any;
  showErrorMessage: any;
}> = ({ setCurrentPage, userData, openLoginOtp, showErrorMessage }) => {
  const next = () => {
    setCurrentPage(1);
  };

  const [edit, setEdit] = useState(false);

  const { handleChange, inputTypes, handleSubmit, errors, loading } = useForm({
    inputs: formdata,
    initials: userData,
    showErrorToast: false,
    cb: async inputs => {
      let newData = {};
      Object.assign(newData, inputs);

      let newStorageData = {};
      const campaign_data = localStorage.getItem('campaign_data');
      if (campaign_data) {
        newStorageData = JSON.parse(campaign_data);
        newStorageData = { ...newStorageData, ...newData };
        localStorage.setItem('campaign_data', JSON.stringify(newStorageData));
      }

      // @ts-ignore
      delete newData.phone;

      await axiosInstance.put('/auth/profile/user', newData, {
        headers: { token: userData.token },
      });

      window.location.reload();
      setEdit(false);
    },
    runOnError: (error: any, errorMessage: string) => {
      if (error.response.status === 401) {
        openLoginOtp();
      }

      showErrorMessage({ title: errorMessage });
    },
  });

  const { internalSelectOptions, loadingStates } = useSelectLocations(
    inputTypes.country
  );

  useEffect(() => {
    const inputTypeObj = {
      firstName: inputTypes.firstName,
      lastName: inputTypes.lastName,
      email: inputTypes.email,
      phone: inputTypes.phone,
      address: inputTypes.address,
      city: inputTypes.city,
      state: inputTypes.state,
      country: inputTypes.country,
      postalCode: inputTypes.postalCode,
    };

    const userDataObj = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phone: userData.phone,
      address: userData.address,
      city: userData.city,
      state: userData.state,
      country: userData.country,
      postalCode: userData.postalCode,
    };

    if (lodash.isEqual(inputTypeObj, userDataObj)) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  }, [inputTypes]);

  return (
    <Box
      border="1px solid rgb(62, 62, 62)"
      flexGrow={1}
      height="100%"
      padding={{ base: '10px', md: '20px' }}
    >
      <Flex
        fontWeight="bold"
        padding="10px 0 20px"
        marginBottom="30px"
        borderBottom="1px solid rgb(62, 62, 62)"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box fontSize="24px" color="#0bcbfb">
          Billing details
        </Box>
      </Flex>

      <Box className="billing-form" display={{ base: 'block', md: 'grid' }}>
        {formdata.map((data, i) => {
          switch (data.type) {
            case 'select':
              return (
                <FormControl
                  key={`contact_form_${i}`}
                  width="100%"
                  isInvalid={errors[data?.name]}
                  isRequired={data?.required}
                  margin="3px 0"
                >
                  <Flex alignItems="center">
                    <DropdownSelect
                      error={errors[data.name] ? data.errorMessage : undefined}
                      onChange={handleChange}
                      options={internalSelectOptions[data.name] || []}
                      label={data.label}
                      name={data.name}
                      selected={inputTypes[data.name]}
                      selectProps={{
                        height: '4.5rem',
                        fontSize: '1.4rem',
                      }}
                    />

                    <Box marginTop="30px">
                      {data.name === 'state' && loadingStates && (
                        <Image src={loader} alt="" width={40} height={40} />
                      )}
                    </Box>
                  </Flex>

                  {errors[data.name] && (
                    <FormErrorMessage paddingLeft={50} fontSize={12}>
                      {data.errorMessage}
                    </FormErrorMessage>
                  )}
                </FormControl>
              );

            case 'textarea':
            case 'text':
            case 'date':
            case 'number':
            default:
              return (
                <FormControl
                  isInvalid={errors[data.name]}
                  key={`register_${i}`}
                >
                  <TextInput
                    name={data.name}
                    label={data.label}
                    labelProps={{
                      fontSize: '1.2rem',
                    }}
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

      <Flex justifyContent="flex-end" marginTop="30px">
        {edit && (
          <Box
            as="button"
            onClick={handleSubmit}
            background="#fff"
            color="#000"
            padding="10px 30px"
            fontSize="18px"
            fontWeight="bold"
            marginRight="20px"
            display="flex"
            alignItems="center"
          >
            Save
            {loading && <Image src={loader} alt="" width={30} height={30} />}
          </Box>
        )}

        <Box
          as="button"
          onClick={next}
          background="#fff"
          color="#000"
          padding="10px 30px"
          fontSize="18px"
          fontWeight="bold"
        >
          Continue
        </Box>
      </Flex>
    </Box>
  );
};
