import { Box, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import Input from 'components/Input';
import CustomButton from 'components/Button';
import useInput from 'hooks/useInput';

const formdata = [
  {
    name: 'name',
    label: 'Your Name',
    icon: faUser,
    errorMessage: 'Enter your full name',
    required: true,
  },
  {
    name: 'phoneNumber',
    label: 'Phone Number',
    icon: faPhone,
    required: true,
    errorMessage: 'Enter your phone number',
  },
  {
    name: 'email',
    label: 'Your Email Address',
    icon: faMailBulk,
    errorMessage: 'Enter your address',
    required: true,
  },
];

const ContactForm = () => {
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
    <Box display="flex" width="full" as="form" onClick={handleSubmit}>
      <Flex flexGrow={1} justifyContent="space-between">
        {formdata.map((data, i) => (
          <FormControl
            key={`contact_form_${i}`}
            width="32%"
            isInvalid={errors[data.name]}
            isRequired={data.required}
          >
            <Box position={'relative'}>
              {' '}
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
                icon={data.icon}
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
        marginLeft={50}
        maxWidth={320}
        fontSize={14}
      >
        CONTACT US
      </CustomButton>
    </Box>
  );
};

export default ContactForm;
