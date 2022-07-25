import React from 'react';
import { HostedForm } from 'react-acceptjs';

const authData = {
  apiLoginID: process.env.NEXT_PUBLIC_AUTHORIZENET_LOGINID,
  clientKey: process.env.NEXT_PUBLIC_AUTHORIZENET_CLIENTKEY,
};

export const Authorize = ({ onSuccessHandler, onErrorHandler, agreed }) => {
  const handleSubmit = (response: any) => {
    console.log('Received response: ====>', response);
  };

  return (
    <HostedForm
      //@ts-ignore
      authData={authData}
      onSubmit={handleSubmit}
      environment="SANDBOX"
      buttonText="Pay Now"
      buttonStyle={{
        background: '#fff',
        color: '#000',
        padding: '10px 30px',
        fontSize: '18px',
        fontWeight: 'bold',
      }}
    />
  );
};
