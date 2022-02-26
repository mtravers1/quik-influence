import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import { login } from 'redux/actions/auth';
import Image from 'next/image';
import CustomButton from 'components/Button';
import { TextInput } from 'components/Input';
import useForm from 'hooks/useForm';
import formdata from 'utils/constants/formData/register';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import { axiosInstance } from 'utils/helpers';
import loader from 'assets/loader.gif';

const Register = () => {
  const router = useRouter();
  const toast = useToast();
  const dispatch = useDispatch();

  const { redirect } = router.query;

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

      window.open(response.data.data.url, '_blank');

      router.push(`/login-otp${redirect ? `?redirect=${redirect}` : ''}`);
    },
  });

  return (
    <form action="post">
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
            <FormErrorMessage>{data.errorMessage}</FormErrorMessage>
          )}
        </FormControl>
      ))}

      <CustomButton
        maxW="204px"
        mt={14}
        type="submit"
        onClick={handleSubmit}
      >
        Signup
        {loading && <Image src={loader} alt="" width={50} height={50} />}
      </CustomButton>
    </form>
  );
};

export default Register;
