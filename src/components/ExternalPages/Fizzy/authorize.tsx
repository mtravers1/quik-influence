import React, { FC, useEffect, useState } from 'react';
import { AuthNetEnvironment, HostedForm } from 'react-acceptjs';

const authData = {
  apiLoginID: process.env.NEXT_PUBLIC_AUTHORIZENET_LOGINID,
  clientKey: process.env.NEXT_PUBLIC_AUTHORIZENET_CLIENTKEY,
};

export const Authorize: FC<{ onSuccessHandler: any }> = ({
  onSuccessHandler,
}) => {
  const [submitResponse, setSubmitResponse] = useState(null);

  const handleSubmit = (response: any) => {
    setSubmitResponse(response);
  };

  useEffect(() => {
    if (!submitResponse) return;

    onSuccessHandler(submitResponse);
    setSubmitResponse(null);
  }, [submitResponse]);

  return (
    <HostedForm
      //@ts-ignore
      authData={authData}
      onSubmit={handleSubmit}
      environment={
        process.env.NEXT_PUBLIC_AUTHORIZENET_MODE as AuthNetEnvironment
      }
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
