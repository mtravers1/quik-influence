import { useState } from 'react';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import Image from 'next/image';
import CustomButton from 'components/Button';
import { TextInput } from 'components/Input';
import useForm from 'hooks/useForm';
import formdata from 'utils/constants/formData/change-password';
import { FormControl, FormErrorMessage, Box, Flex } from '@chakra-ui/react';
import { axiosInstance } from 'utils/helpers';
import quikColorConstants from 'utils/constants/colorConstants';
import loader from 'assets/loader.gif';

export const ChangePasswordPage = ({
  cb,
  runOnError,
}: {
  cb: any;
  runOnError: any;
}) => {
  const router = useRouter();
  const toast = useToast();
  const [loadingResend, setLoadingResend] = useState<boolean>();

  const { redirect, email } = router.query;

  const handleResetPassword = async (inputs: any) => {
    if (inputs.password !== inputs.confirm_password) {
      return toast({
        title: `Your passwords don't match`,
        description: '',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    }

    await axiosInstance.put('/auth/admin/resetPassword', {
      email,
      password: inputs.password,
      otp: inputs.otp,
    });

    if (redirect) return router.push(redirect as string);

    router.push('/login');
  };

  const { handleChange, inputTypes, handleSubmit, errors, loading } = useForm({
    inputs: formdata,
    runOnError,
    cb: cb || handleResetPassword,
  });

  const resendOtp = async () => {
    if (loadingResend) return;

    setLoadingResend(true);

    try {
      await axiosInstance.patch('/auth/admin/forgotPassword', {
        email,
      });
    } catch (err) {}

    setLoadingResend(false);
  };

  return (
    <form action="post">
      <Box
        marginBottom="15px"
        borderTop={`1px solid ${quikColorConstants.influenceRed}`}
      >
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

      <Flex justifyContent="flex-end" alignItems="center">
        <Box
          cursor="pointer"
          color={quikColorConstants.influenceRed}
          fontSize="14px"
          fontWeight="bold"
          onClick={resendOtp}
        >
          Resend{' '}
          {loadingResend && (
            <Image src={loader} alt="" width={30} height={30} />
          )}
        </Box>
      </Flex>

      <CustomButton
        maxW="204px"
        height="50px"
        padding={0}
        mt={4}
        onClick={handleSubmit}
      >
        Reset Password{' '}
        {loading && <Image src={loader} alt="" width={50} height={50} />}
      </CustomButton>
    </form>
  );
};
