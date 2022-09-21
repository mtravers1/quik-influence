import { useEffect, useRef, useState } from 'react';
import { Input } from '@chakra-ui/react';
import dobPicker from 'components/DateOfBrith';

export const DatePicker = props => {
  const inputRef = useRef();
  const [dob, setDob] = useState();

  const format = el => {
    return el > 9 ? el : `0${el}`;
  };

  useEffect(() => {
    setDob(
      dobPicker(inputRef.current, {
        onChange: (dateObj = {}) =>
          props.onChange({
            target: {
              value: `${dateObj.year}-${format(dateObj.month)}-${format(
                dateObj.day
              )}`,
              name: props.name,
            },
          }),
        initialValue: props.value,
      })
    );
  }, []);

  return (
    <Input
      type="text"
      ref={inputRef}
      {...props}
      border="unset"
      fontSize="15px"
      placeholder={props.label}
    />
  );
};
