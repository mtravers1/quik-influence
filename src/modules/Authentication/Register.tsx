import CustomButton from 'components/Button';
import { TextInput } from 'components/Input';
import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <form action="post" onSubmit={handleSubmit}>
      <TextInput
        label="First Name"
        labelProps={{
          fontSize: '1.2rem',
        }}
        value={firstname}
        formControlProps={{
          pt: 8,
        }}
        handleChange={e => setFirstname(e.target.value)}
        type="text"
        placeholder="First Name"
        TextInputProps={{}}
      />
      <TextInput
        label="Last Name"
        labelProps={{
          fontSize: '1.2rem',
        }}
        value={lastname}
        formControlProps={{
          pt: 8,
        }}
        handleChange={e => setLastname(e.target.value)}
        type="text"
        placeholder="Last Name"
        TextInputProps={{}}
      />
      <TextInput
        label="Email Address"
        labelProps={{
          fontSize: '1.2rem',
        }}
        value={email}
        formControlProps={{
          pt: 8,
        }}
        handleChange={e => setEmail(e.target.value)}
        type="email"
        placeholder="Email Address"
        TextInputProps={{}}
      />
      <TextInput
        label="Phone Number"
        labelProps={{
          fontSize: '1.2rem',
        }}
        value={phone}
        formControlProps={{
          pt: 8,
        }}
        handleChange={e => setPhone(e.target.value)}
        type="text"
        placeholder="Phone Number"
        TextInputProps={{}}
      />
      <TextInput
        label="Password"
        labelProps={{
          fontSize: '1.2rem',
        }}
        value={password}
        formControlProps={{
          py: 8,
        }}
        handleChange={e => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        TextInputProps={{}}
      />
      <CustomButton maxW="204px" height="64px" mt={4} type="submit">
        Signup
      </CustomButton>
    </form>
  );
};

export default Register;
