import { Box, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import Input from '../../Input';
import CustomButton from 'components/Button';
import useInput from 'hooks/useForm';
import formdata from 'utils/constants/formData/meetTeam';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const MeetupForm = () => {
  const { handleChange, inputTypes, handleSubmit, errors } = useInput({
    inputs: formdata.map(data => ({
      name: data.name,
      required: data.required,
    })),
    cb: async inputs => {
      // do what you will with inputs
      console.log('Submitted');
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
            width={{ base: '100%', md: '48%' }}
            isInvalid={errors[data.name]}
            isRequired={data.required}
            margin="3px 0"
          >
            <Box position={'relative'}>
              <Input
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
        CONTACT US
      </CustomButton>
    </Flex>
  );
};

export default MeetupForm;
