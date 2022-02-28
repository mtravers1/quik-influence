import { useState, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import Image from 'next/image';
import CustomButton from 'components/Button';
import { TextInput } from 'components/Input';
import useForm from 'hooks/useForm';
import formdata from 'utils/constants/formData/loginOtp';
import { FormControl, FormErrorMessage, Box } from '@chakra-ui/react';
import { axiosInstance } from 'utils/helpers';
import { login } from 'redux/actions/auth';
import quikColorConstants from 'utils/constants/colorConstants';
import loader from 'assets/loader.gif';

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const toast = useToast();

  const [showOtpInput, setShowOtpInput] = useState(false);
  const [loadingOtp, setLoadingOtp] = useState(false);

  const { redirect } = router.query;
  let email;

  // due to nextjs being server side
  if (typeof window !== 'undefined') {
    email = sessionStorage.getItem('email');
  }

  const { handleChange, inputTypes, handleSubmit, errors, loading } = useForm({
    inputs: formdata,
    initials: { email },
    cb: async inputs => {
      const response = await axiosInstance.post('/auth/admin/otpLogin', inputs);

      dispatch(login(response.data.data));

      toast({
        title: `Welcome back ${response.data.data.firstName}`,
        description: '',
        status: 'success',
        duration: 4000,
        isClosable: true,
      });

      if (redirect) return router.push(redirect as string);

      router.push('/dashboard');
    },
  });

  const getOpt = async () => {
    // This is a quick fix and only works because there are just 2 elements in the form
    if (!inputTypes.email) {
      return handleSubmit({} as SyntheticEvent);
    }

    setLoadingOtp(true);

    try {
      await axiosInstance.post('/auth/admin/getLoginOtp', {
        email: inputTypes.email,
      });
      setShowOtpInput(true);
    } catch (err) {}

    setLoadingOtp(false);
  };

  return (
    <form action="post">
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
    </form>
  );
};

export default Login;
