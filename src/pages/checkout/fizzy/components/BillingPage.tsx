import { FC, useState } from 'react';
import { Box, Flex, FormControl, FormErrorMessage } from '@chakra-ui/react';
import formdata from 'utils/constants/formData/checkout';
import { TextInput } from 'components/Input';
import useForm from 'hooks/useForm';
import { axiosInstance } from 'utils/helpers';
import Image from 'next/image';
import loader from 'assets/loader.gif';

let userData: any;

if (typeof window !== 'undefined') {
  const campaign_data = localStorage.getItem('campaign_data');
  if (campaign_data) {
    userData = JSON.parse(campaign_data);
  }

  userData = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    phone: userData.phone,
    email: userData.email,
    address: userData.address,
    city: userData.city,
    state: userData.state,
    country: userData.country,
  };
}

export const BillingPage: FC<{ setCurrentPage: Function }> = ({
  setCurrentPage,
}) => {
  const next = () => {
    setCurrentPage(1);
  };

  const [edit, setEdit] = useState(true);
  const [otpTime, setOtpTime] = useState(0);
  const [usedPhone, setUsedPhone] = useState();

  const { handleChange, inputTypes, handleSubmit, errors, loading } = useForm({
    inputs: formdata,
    initials: userData,
    cb: async inputs => {
      // do what you will with inputs

      await axiosInstance.put('/auth/profile/user/editWithOtp', inputs);
      setEdit(true);
    },
  });

  const sendOtp = async () => {
    let time = (Date.now() - otpTime) / 1000 / 60;

    if (otpTime === 0 || time > 4.5 || usedPhone !== inputTypes.phone) {
      // send otp
      axiosInstance.post('/auth/user/otpEditProfile', {
        phone: inputTypes.phone,
      });

      setUsedPhone(inputTypes.phone);
      setOtpTime(Date.now());
    }
  };

  const editPage = () => {
    setEdit(!edit);
    sendOtp();
  };

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

        {edit ? (
          <Box cursor="pointer" onClick={editPage}>
            Edit
          </Box>
        ) : (
          <Box cursor="pointer" onClick={editPage}>
            Cancel
          </Box>
        )}
      </Flex>

      <Box className="billing-form" display={{ base: 'block', md: 'grid' }}>
        {formdata.slice(0, edit ? 7 : 8).map((data, i) => (
          <FormControl isInvalid={errors[data.name]} key={`register_${i}`}>
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
                  inputTypes[data.name] && !errors[data.name] ? ' valid' : ''
                }${errors[data.name] ? ' invalid' : ''}`,
                // @ts-ignore
                disabled: edit,
              }}
            />

            {errors[data.name] && (
              <FormErrorMessage fontSize="14px">
                {data.errorMessage}
              </FormErrorMessage>
            )}
          </FormControl>
        ))}
      </Box>

      {!edit && (
        <Box
          onClick={sendOtp}
          color="red"
          textAlign="right"
          fontWeight="bold"
          marginTop="5px"
          cursor="pointer"
        >
          Resend
        </Box>
      )}

      <Flex justifyContent="flex-end" marginTop="30px">
        {!edit && (
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
            Edit
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
