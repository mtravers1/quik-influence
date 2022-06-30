import { FC } from 'react';
import { FormComponent, FormContainer } from 'react-authorize-net';

let clientKey = process.env.REACT_APP_AUTHORIZENET_CLIENTKEY as string;
let apiLoginId = process.env.REACT_APP_AUTHORIZENET_LOGINID as string;

const Authorize: FC<{
  onErrorHandler: any;
  onSuccessHandler: any;
}> = ({ onErrorHandler, onSuccessHandler }) => {
  return (
    <FormContainer
      environment="sandbox"
      onError={onErrorHandler}
      onSuccess={onSuccessHandler}
      amount={44.93}
      component={FormComponent}
      clientKey={clientKey}
      apiLoginId={apiLoginId}
    />
  );
};

export default Authorize;
