import { Box, Flex, createStandaloneToast } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import CustomButton from 'components/Button';
import useInput from 'hooks/useForm';
import formdata from 'utils/constants/formData/closeFriends';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import CustomInput from 'components/CustomInput';
import { axiosInstance } from 'utils/helpers';

const LeadsForm = ({ campaignId }: { campaignId: string }) => {
  const toast = createStandaloneToast();
  // const toast = useToast();
  const {
    handleChange,
    inputTypes,
    handleSubmit,
    errors,
    loading,
    resetInputs,
  } = useInput({
    inputs: formdata,
    cb: async inputs => {
      await axiosInstance
        .post(`/users/campaign/`, {
          ...inputs,
          campaignId,
        })
        .then(res => {
          if (res.status === 200) {
            resetInputs();
            toast({
              title: 'Registered Successfully.',
              description: 'You would be redirected to a payment screen',
              duration: 9000,
              position: 'top-right',
              variant: 'subtle',
            });
          }
          console.log('res >>> ', res);
        })
        .catch(err => {
          toast({
            title: err.response.data.message,
            status: 'error',
            duration: 9000,
            position: 'top-right',
          });
        });
    },
  });

  return (
    <Flex
      display="flex"
      as="form"
      flexDirection="column"
      flexGrow={1}
      alignItems="center"
    >
      <Flex flexWrap="wrap" marginBottom={30} justifyContent="space-between">
        {formdata.map((data, i) => (
          <FormControl
            key={`contact_form_${i}`}
            width="100%"
            isInvalid={errors[data.name]}
            isRequired={data.required}
            margin="3px 0"
          >
            <Box position={'relative'}>
              <CustomInput
                name={data.name}
                placeholder={data.label}
                paddingLeft={50}
                onChange={handleChange}
                value={inputTypes[data.name]}
                datatest-id={`test-${data.name}`}
              />
              <FontAwesomeIcon
                style={{
                  width: '10px',
                  position: 'absolute',
                  top: '50%',
                  left: '30px',
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                }}
                icon={data.icon as IconProp}
                color="red"
              />
            </Box>

            {errors[data.name] && (
              <FormErrorMessage paddingLeft={50} fontSize={12}>
                {data.errorMessage}
              </FormErrorMessage>
            )}
          </FormControl>
        ))}
      </Flex>

      <CustomButton
        borderRadius={40}
        maxWidth={320}
        fontSize={14}
        paddingTop={23}
        paddingBottom={23}
        onClick={handleSubmit}
      >
        {loading ? 'Loading...' : 'Submit'}
      </CustomButton>
    </Flex>
  );
};

export default LeadsForm;
