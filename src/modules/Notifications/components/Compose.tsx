import React from 'react';
import { Box, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import formdata from 'utils/constants/formData/notifier';
import { TextInput } from 'components/Input';
import DropdownSelect from 'components/DropdownSelect';

const selectProps = { height: '3rem', width: '30rem', fontSize: '1.4rem' };
const selectLabelProps = {
  fontSize: '1.4rem',
  fontWeight: 'semibold',
};

interface ICompose {
  applicationLists: any[];
  handleChange: any;
  inputTypes: any;
  errors: any;
}

const Compose = ({
  applicationLists,
  handleChange,
  inputTypes,
  errors,
}: ICompose) => {
  const getDataOptions = (name: string) => {
    switch (name) {
      case 'applicationId':
        return applicationLists?.map(app => ({
          label: app.name,
          value: app.id,
        }));
      default:
        return [];
    }
  };

  return (
    <Box>
      {formdata &&
        formdata.map(data => (
          <FormControl
            isInvalid={errors[data.name]}
            key={`notification_${data.name}`}
            pb="1.563rem"
          >
            {data.type === 'select' ? (
              <DropdownSelect
                error={errors[data.name] ? data.errorMessage : undefined}
                onChange={handleChange}
                options={getDataOptions(data.name)}
                label={data.label}
                labelProps={selectLabelProps}
                name={data.name}
                selected={inputTypes[data.name]}
                selectProps={selectProps}
              />
            ) : (
              <>
                <TextInput
                  name={data.name}
                  label={data.label}
                  handleChange={handleChange}
                  value={inputTypes[data.name]}
                  type={data.type}
                  labelProps={selectLabelProps}
                  error={errors[data.name] ? data.errorMessage : undefined}
                  TextInputProps={{
                    h: '2.5rem',
                    borderRadius: '5px',
                    mb: '0.188rem',
                    fontSize: '1rem',
                  }}
                  placeholder={data.label}
                />
              </>
            )}
          </FormControl>
        ))}
    </Box>
  );
};

export default Compose;
