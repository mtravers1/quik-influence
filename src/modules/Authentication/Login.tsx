import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import Image from 'next/image';
import CustomButton from 'components/Button';
import { TextInput } from 'components/Input';
import useForm from 'hooks/useForm';
import formdata from 'utils/constants/formData/login';
import { FormControl, FormErrorMessage, Box } from '@chakra-ui/react';
import { axiosInstance } from 'utils/helpers';
import { login } from 'redux/actions/auth';
import loader from 'assets/loader.gif';

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const toast = useToast();

  const { redirect } = router.query;

  const { handleChange, inputTypes, handleSubmit, errors, loading } = useForm({
    inputs: formdata,
    cb: async inputs => {
      const response = await axiosInstance.post('/auth/admin/login', {
        email: inputs.email,
        password: inputs.loginPassword,
      });

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
              <FormErrorMessage fontSize="14px">{data.errorMessage}</FormErrorMessage>
            )}
          </FormControl>
        ))}
      </Box>

      <CustomButton
        maxW="204px"
        height="50px"
        padding={0}
        mt={4}
        onClick={handleSubmit}
      >
        Login {loading && <Image src={loader} alt="" width={50} height={50} />}
      </CustomButton>
    </form>
  );
};

export default Login;
