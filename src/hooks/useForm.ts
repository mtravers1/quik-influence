import { useState, SyntheticEvent } from 'react';
import { validate } from 'utils/helpers';

type input = { name: string; required?: boolean };

type props = {
  inputs?: input[];
  cb: (args: any) => {};
  validateForm?: boolean;
  initials?: any;
};

export default function Input({
  inputs,
  cb,
  validateForm = true,
  initials = {},
}: props) {
  const initialInputs = inputs?.reduce(
    (acc: any, input: any) => ({
      ...acc,
      [input.name]: initials[input.name] ? initials[input.name] : '',
    }),
    {}
  );

  const initialError = inputs?.reduce(
    (acc: any, input: any) => ({
      ...acc,
      [input.name]: initials[input.name] ? false : '',
    }),
    {}
  );

  const inputMap = inputs?.reduce(
    (acc: any, input: any) => ({
      ...acc,
      [input.name]: { ...input, validateSelf: input.validateSelf || true },
    }),
    {}
  );

  const [loading, setLoading] = useState(false);
  const [inputTypes, setInputTypes] = useState(initialInputs);
  const [errors, setErrors] = useState(initialError);

  const handleSubmit = async (e: SyntheticEvent) => {
    // e.preventDefault();

    const requiredKeys = inputs?.reduce((acc: any, input: any) => {
      if (input.required || inputTypes[input.name]) {
        return { ...acc, [input.name]: inputTypes[input.name] };
      }
      return acc;
    }, {});

    // validate forms
    const errorMap: any = Object.keys(requiredKeys).reduce(
      (acc, inputName) => ({
        ...acc,
        [inputName]: inputMap[inputName].validateSelf
          ? !validate(requiredKeys[inputName], inputName)
          : false,
      }),
      {}
    );
    
    setErrors(errorMap);

    // check if at least one element fails validation
    const shouldNotSubmit = Object.keys(errorMap).some(
      inputName => errorMap[inputName]
    );

    if (shouldNotSubmit && validateForm) {
      // you can add a toast here

      errorMap.reset = false;
      errorMap.onSubmit = true;

      return;
    }

    errorMap.onSubmit = true;
    errorMap.reset = false;

    setLoading(true);

    let response;

    try {
      response = await cb(
        Object.keys(inputTypes).reduce(
          (acc, cur) => ({
            ...acc,
            [cur]: inputTypes[cur] ? inputTypes[cur] : undefined,
          }),
          {}
        )
      );

      setLoading(false);
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 500) {
          error.message = 'Network error please try again';
        } else error.message = error.response.data.error;
      } else error.message = error.message || 'Error occured';

      const err = Array.isArray(error.message)
        ? error.message.join(', ')
        : error.message;

      // add a toast or do soemthing with the error

      setLoading(false);
      return;
    }

    return { msg: 'success', response };
  };

  const handleChange = (event: SyntheticEvent<EventTarget>) => {
    const { name, value, type, checked } = event.target as HTMLInputElement;

    if (inputMap[name].validateSelf) {
      const newErrors = { ...errors, [name]: !validate(value, name) };
      newErrors.onSubmit = false;
      newErrors.reset = false;

      setErrors(newErrors);
    }

    setInputTypes({
      ...inputTypes,
      [name]: type === 'checkbox' ? !!checked : value,
    });
  };

  const resetInputs = () => {
    setInputTypes(initialInputs);
    setErrors({ ...initialError, reset: true });
  };

  return {
    handleSubmit,
    handleChange,
    inputTypes,
    errors,
    setInputTypes,
    loading,
    resetInputs,
  };
}
