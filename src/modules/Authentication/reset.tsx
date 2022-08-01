import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';
import Image from 'next/image';
import CustomButton from 'components/Button';
import { TextInput } from 'components/Input';
import useForm from 'hooks/useForm';
import formdata from 'utils/constants/formData/reset';
import { FormControl, FormErrorMessage, Box } from '@chakra-ui/react';
import { axiosInstance } from 'utils/helpers';
import quikColorConstants from 'utils/constants/colorConstants';
import loader from 'assets/loader.gif';

export const ResetPassword = () => {
  const router = useRouter();
  const toast = useToast();

  const { redirect } = router.query;

  const { handleChange, inputTypes, handleSubmit, errors, loading } = useForm({
    inputs: formdata,
    cb: async inputs => {
      await axiosInstance.patch('/auth/admin/forgotPassword', {
        email: inputs.email,
      });

      toast({
        title: `An otp has been sent to  ${inputs.email}`,
        description: '',
        duration: 4000,
        isClosable: true,
      });

      if (redirect) return router.push(redirect as string);

      router.push(`/change-password?email=${encodeURIComponent(inputs.email)}`);
    },
  });

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

      <CustomButton
        maxW="204px"
        height="50px"
        padding={0}
        mt={4}
        onClick={handleSubmit}
      >
        Get Otp
        {loading && <Image src={loader} alt="" width={50} height={50} />}
      </CustomButton>
    </form>
  );
};
