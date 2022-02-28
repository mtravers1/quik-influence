import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import { login } from 'redux/actions/auth';
import Image from 'next/image';
import CustomButton from 'components/Button';
import { TextInput } from 'components/Input';
import useForm from 'hooks/useForm';
import formdata from 'utils/constants/formData/register';
import { FormControl, FormErrorMessage, Box } from '@chakra-ui/react';
import { axiosInstance } from 'utils/helpers';
import quikColorConstants from 'utils/constants/colorConstants';
import loader from 'assets/loader.gif';

const Register = () => {
  const toast = useToast();
  const dispatch = useDispatch();

  const [showOtpInput, setShowOtpInput] = useState(false);
  const [loadingOtp, setLoadingOtp] = useState(false);
  const [stripeRedirectUrl, setStripeRedirectUrl] = useState();

  const { handleChange, inputTypes, handleSubmit, errors, loading } = useForm({
    inputs: formdata,
    cb: async inputs => {
      const response = await axiosInstance.post(
        '/auth/admin/otpRegister',
        inputs
      );

      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 4000,
        isClosable: true,
      });

      if (typeof window !== 'undefined') {
        sessionStorage.setItem('email', inputs.email);
      }

      dispatch(login(response.data.data));
      setShowOtpInput(true);
      setStripeRedirectUrl(response.data.data.url);
    },
  });

  const submitOtp = async () => {
    setLoadingOtp(true);

    try {
      await axiosInstance.post('/auth/admin/otpLogin', {
        email: inputTypes.email,
        otp: inputTypes.otp,
      });

      if (typeof window !== 'undefined') {
        window.location.href = stripeRedirectUrl || '';
      }
    } catch (err) {}

    setLoadingOtp(false);
  };

  return (
    <form action="post">
      <Box marginBottom="15px">
        {formdata.slice(0, showOtpInput ? 5 : 4).map((data, i) => (
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

      {!showOtpInput ? (
        <CustomButton
          maxW="204px"
          height="50px"
          padding={0}
          mt={4}
          onClick={handleSubmit}
        >
          Signup
          {loading && <Image src={loader} alt="" width={50} height={50} />}
        </CustomButton>
      ) : (
        <CustomButton
          maxW="250px"
          height="50px"
          padding={0}
          mt={4}
          onClick={submitOtp}
        >
          Enter Otp to continue
          {loadingOtp && <Image src={loader} alt="" width={50} height={50} />}
        </CustomButton>
      )}
    </form>
  );
};

export default Register;
