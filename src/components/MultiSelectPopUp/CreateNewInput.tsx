import { FC } from 'react';
import { Box, useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { TextInput } from 'components/Input';
import DropdownSelect from 'components/DropdownSelect';
import useForm from 'hooks/useForm';
import formdata from 'utils/constants/formData/createNewInput';
import { axiosInstance } from 'utils/helpers';
import SelectOptionsSelector from './SelectOptionsSelector';
import CustomButton from 'components/Button';
import { updateFormInputs } from 'redux/actions/general';
import CheckBox from 'components/Input/CheckBox';

const CreateNewInput: FC<{ close: Function }> = ({ close }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const { handleChange, inputTypes, handleSubmit, errors, loading } = useForm({
    inputs: formdata,
    cb: async inputs => {
      const formated = {
        name: inputs.name,
        meta: JSON.stringify(inputTypes),
      };

      const response = await axiosInstance.post(`/admin/form-inputs`, formated);

      toast({
        title: `Input create successfully`,
        description: '',
        status: 'success',
        duration: 4000,
        isClosable: true,
      });

      dispatch(updateFormInputs(response.data.data));
      close();
    },
  });

  return (
    <>
      <Box fontSize="18px" marginBottom="30px">
        <Box as="p" fontWeight="bold" marginBottom="30px">
          Create new input field
        </Box>

        <form>
          <Box maxW="3xl">
            {formdata.slice(0, 6).map((data, i) => {
              switch (data.type) {
                case 'select':
                  return (
                    <Box key={`campaigne_input_${i}`} marginBottom="20px">
                      <DropdownSelect
                        error={
                          errors[data.name] ? data.errorMessage : undefined
                        }
                        onChange={handleChange}
                        options={data.options || []}
                        label={data.label}
                        name={data.name}
                        selected={inputTypes[data.name]}
                        selectProps={{
                          height: '4.5rem',
                          fontSize: '1.4rem',
                        }}
                      />
                    </Box>
                  );

                case 'checkbox':
                  return (
                    <Box p="10px" key={`campaigne_input_${i}`}>
                      <CheckBox
                        value={inputTypes[data.name]}
                        name={data.name}
                        handleChange={handleChange}
                        label={data.label}
                      />
                    </Box>
                  );

                default:
                  return (
                    <Box key={`campaigne_input_${i}`} marginBottom="20px">
                      <TextInput
                        error={
                          errors[data.name] ? data.errorMessage : undefined
                        }
                        name={data.name}
                        label={data.label}
                        value={inputTypes[data.name]}
                        handleChange={handleChange}
                        type={data.type}
                        placeholder={data.label}
                        TextInputProps={{}}
                      />
                    </Box>
                  );
              }
            })}

            {(inputTypes.type === 'select' ||
              inputTypes.type === 'multi-select') && (
              <SelectOptionsSelector onChange={handleChange} name={'options'} />
            )}
          </Box>

          <CustomButton
            onClick={handleSubmit}
            maxWidth="200px"
            marginTop="30px"
          >
            Finish
          </CustomButton>
        </form>
      </Box>
    </>
  );
};

export default CreateNewInput;
