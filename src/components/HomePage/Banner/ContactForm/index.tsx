import { Box, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import Input from '../../Input';
import CustomButton from 'components/Button';
import useInput from 'hooks/useForm';
import formdata from 'utils/constants/formData/contactus';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

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
    <Box
      display="flex"
      width="full"
      as="form"
      flexWrap={{ base: 'wrap', lg: 'unset' }}
    >
      <Flex
        flexGrow={1}
        justifyContent="space-between"
        flexWrap={{ base: 'wrap', lg: 'unset' }}
      >
        {formdata.map((data, i) => (
          <FormControl
            key={`contact_form_${i}`}
            width={{ base: '100%', lg: '32%' }}
            maxW={{ base: '100%', md: '300px', lg: 'unset' }}
            isInvalid={errors[data.name]}
            isRequired={data.required}
            marginBottom={{ base: '10px', lg: 'unset' }}
          >
            <Box position={'relative'}>
              {' '}
              <Input
                name={data.name}
                placeholder={data.label}
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
        padding="25px 10px"
        marginLeft={{ base: 'unset', lg: '50px' }}
        onClick={handleSubmit}
      >
        CONTACT US
      </CustomButton>
    </Box>
  );
};

export default ContactForm;
