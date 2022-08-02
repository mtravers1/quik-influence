import { Box, Input, InputProps, Select, SelectProps } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RenderCustomInput = (props: any) => {
  if (props.type === 'select') {
    if (!props.options) {
      throw new Error('Please provide options for select input');
    }
    return (
      <Box borderWidth={1} borderColor="grey.200" borderRadius={40} py={5}>
        <Select width="100%" border="unset" fontSize={14} {...props}>
          {props.options.map((option: any) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </Box>
    );
  } else {
    return (
      <Input
        width="full"
        padding={['20px 10px 20px 50px', '25px 10px 25px 50px']}
        borderRadius={40}
        fontSize={14}
        {...props}
      />
    );
  }
};

const CustomInput = (props: any) => {
  return (
    <Box position="relative">
      {props?.icon && (
        <FontAwesomeIcon
          style={{
            width: '10px',
            position: 'absolute',
            top: '50%',
            left: '30px',
            transform: 'translateY(-50%)',
            zIndex: 1,
          }}
          icon={props?.icon}
          color="red"
        />
      )}
      <RenderCustomInput {...props} />
    </Box>
  );
};

export default CustomInput;
