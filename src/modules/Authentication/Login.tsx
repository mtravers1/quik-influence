import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from 'components/Button';
import { TextInput } from 'components/Input';
import useForm from 'hooks/useForm';
import formdata from 'utils/constants/formData/login';
import {
  FormControl,
  FormErrorMessage,
  Box,
  Flex,
  Button,
} from '@chakra-ui/react';
import { axiosInstance } from 'utils/helpers';
import { login } from 'redux/actions/auth';
import quikColorConstants from 'utils/constants/colorConstants';
import loader from 'assets/loader.gif';

const Login = ({
  signupLink,
  forgotPasswordLink,
  cb,
  runOnError,
}: {
  signupLink?: string;
  forgotPasswordLink?: string;
  cb?: any;
  runOnError?: any;
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const toast = useToast();

  const { redirect } = router.query;

  const handleLogin = async (inputs: any) => {
    const response = await axiosInstance.post('/auth/admin/login', {
      email: inputs.email,
      password: inputs.loginPassword,
    });

    dispatch(login(response.data.data));

    toast({
      title: 'LoggedIn successfully Approved!',
      description: `Welcome back ${response.data.data.admin.firstName}`,
      duration: 4000,
      isClosable: true,
      position: 'top-right',
    });

    if (redirect) return router.push(redirect as string);

    router.push('/dashboard');
  };

  const { handleChange, inputTypes, handleSubmit, errors, loading } = useForm({
    inputs: formdata,
    cb: cb || handleLogin,
    runOnError,
  });

  return (
    <form action="post">
      <Box marginBottom="15px">
        {formdata.map((data, i) => (
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
              TextInputProps={{}}
            />

            {errors[data.name] && (
              <FormErrorMessage fontSize="14px">
                {data.errorMessage}
              </FormErrorMessage>
            )}
          </FormControl>
        ))}
      </Box>

      <Flex justifyContent="flex-end" marginBottom="20px">
        <Link href={forgotPasswordLink || '/reset-password'}>
          <Box
            as="p"
            color={quikColorConstants.influenceRed}
            cursor="pointer"
            fontWeight="bold"
          >
            Forgot Password ?
          </Box>
        </Link>
      </Flex>

      <Box display="flex" justifyContent="space-between">
        <CustomButton
          maxW="204px"
          height="50px"
          padding={0}
          mt={4}
          onClick={handleSubmit}
          disabled={loading}
        >
          Login{' '}
          {loading && <Image src={loader} alt="" width={50} height={50} />}
        </CustomButton>

        {signupLink && (
          <Link href={signupLink}>
            <Box as="a" display="block" flexGrow={1} marginLeft="20px">
              <Button
                height="50px"
                mt={4}
                color="#333"
                background="#fff"
                flexGrow={1}
                borderRadius={5}
                width="100%"
                fontSize="14px"
              >
                Sign up
              </Button>
            </Box>
          </Link>
        )}
      </Box>
    </form>
  );
};

export default Login;
