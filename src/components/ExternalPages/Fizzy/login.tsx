import { useState, SyntheticEvent, FC } from 'react';
import { Flex, useToast } from '@chakra-ui/react';
import Image from 'next/image';
import CustomButton from 'components/Button';
import { TextInput } from 'components/Input';
import useForm from 'hooks/useForm';
import formdata from 'utils/constants/formData/loginOtpCheckout';
import { FormControl, FormErrorMessage, Box } from '@chakra-ui/react';
import { axiosInstance } from 'utils/helpers';
import quikColorConstants from 'utils/constants/colorConstants';
import loader from 'assets/loader.gif';
import { errorParser } from 'utils/apiHelpers';

const Login: FC<{ phone: any; callback: any }> = ({ phone, callback }) => {
  const toast = useToast();

  const [showOtpInput, setShowOtpInput] = useState(false);
  const [loadingOtp, setLoadingOtp] = useState(false);

  const { handleChange, inputTypes, handleSubmit, errors, loading } = useForm({
    inputs: formdata,
    initials: { phone },
    cb: async inputs => {
      const response = await axiosInstance.post('/users/login', inputs);
      callback(response.data.data);

      toast({
        title: `Thanks for logging in!`,
        description: '',
        duration: 4000,
        isClosable: true,
      });
    },
  });

  const getOpt = async () => {
    if (!inputTypes.phone) {
      return handleSubmit({} as SyntheticEvent);
    }

    setLoadingOtp(true);

    try {
      await axiosInstance.get(`/users/otp/${phone}`);
      setShowOtpInput(true);
    } catch (err) {
      const errMessage = errorParser(err);
      toast({
        title: errMessage,
        description: '',
        status: 'error',
        duration: 4000,
        position: 'top-right',
        isClosable: true,
      });
    }

    setLoadingOtp(false);
  };

  return (
    <>
      <Box marginBottom="15px">
        {formdata.slice(0, showOtpInput ? 2 : 1).map((data, i) => (
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
                border:
                  data.name === 'otp'
                    ? `2px solid ${quikColorConstants.influenceRed} !important`
                    : undefined,
                // @ts-ignore
                disabled: data.disabled,
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

      {showOtpInput && (
        <Flex
          onClick={getOpt}
          height="30px"
          alignItems="center"
          cursor="pointer"
        >
          Resend Otp
          {loadingOtp && <Image src={loader} alt="" width={30} height={30} />}
        </Flex>
      )}

      {showOtpInput ? (
        <CustomButton
          maxW="204px"
          height="50px"
          padding={0}
          mt={4}
          onClick={handleSubmit}
        >
          Login{' '}
          {loading && <Image src={loader} alt="" width={50} height={50} />}
        </CustomButton>
      ) : (
        <CustomButton
          maxW="204px"
          height="50px"
          padding={0}
          mt={4}
          onClick={getOpt}
        >
          Get Otp{' '}
          {loadingOtp && <Image src={loader} alt="" width={50} height={50} />}
        </CustomButton>
      )}
    </>
  );
};

export default Login;
