import { useState } from 'react';
import { Box, Flex, createStandaloneToast } from '@chakra-ui/react';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import CustomButton from 'components/Button';
import useInput from 'hooks/useForm';
import DropdownSelect from 'components/DropdownSelect';
import CustomInput from 'components/CustomInput';
import { axiosInstance } from 'utils/helpers';
import Radio from 'components/Radio';
import CheckBox from 'components/Input/CheckBox';
import MultiSelect from 'modules/Campaigns/CreateCampaign/MultiSelect';
import { useRouter } from 'next/router';
import loader from 'assets/loader.gif';
import Image from 'next/image';
import { useSelectLocations } from 'hooks/useSelectLocations';
import { setCookie } from 'utils/helpers';

const LeadsForm = ({
  campaignId,
  handleStripe,
  redirectUrl,
  form,
  paidType,
  showConsent = true,
  query,
  choosenFields = [],
}: {
  campaignId?: string;
  handleStripe?: (email: string, success?: boolean) => {};
  redirectUrl: string;
  form: any;
  paidType?: string;
  showConsent?: boolean;
  postingDocUrl?: string;
  query?: any;
  choosenFields?: string[];
}) => {
  const toast = createStandaloneToast();
  const [submitForm, setSubmitForm] = useState(false);
  const isPaidCampaign = paidType === 'PAID';
  const router = useRouter();

  const {
    handleChange,
    inputTypes,
    handleSubmit,
    errors,
    loading,
    resetInputs,
  } = useInput({
    inputs: form,
    initials: { country: 'US' },
    cb: async inputs => {
      if (showConsent && !submitForm) return;

      let payload, url;

      if (!!campaignId) {
        url = '/users/campaign/';
      } else {
        url = '/users/admin/';
      }

      let newInputs = Object.assign({}, inputs);

      newInputs = Object.keys(newInputs).reduce(
        (acc: any, key: string) => {
          if (choosenFields.includes(key) && key.toLowerCase() !== 'gender') {
            acc.optionalValues[key] = newInputs[key];
            delete newInputs[key];
          } else acc[key] = newInputs[key];

          return acc;
        },
        { optionalValues: {} }
      );

      payload = Object.assign({}, newInputs);

      if (query) {
        const campaignAdminId = query.campaign_admin_id;
        payload = {
          ...payload,
          // lp_campaign_id,
          // lp_campaign_key,
          campaignAdminId,
        };
      }

      const res = await axiosInstance.post(url, payload);
      resetInputs();
      toast({
        title: 'Registered Successfully.',
        description: isPaidCampaign
          ? 'You would be redirected to a payment screen'
          : '',
        duration: 9000,
        position: 'top-right',
        variant: 'subtle',
        isClosable: false,
      });

      setCookie(
        'campaign_data',
        JSON.stringify({
          ...res.data.data,
          campaignId,
        }),
        10
      );
      localStorage.setItem(
        'campaign_data',
        JSON.stringify({
          ...res.data.data,
          campaignId,
        })
      );

      // redirect to stripe checkout
      // handleStripe(inputs.email, res.status === 200);

      if (typeof window !== 'undefined') router.push(redirectUrl);
    },
  });

  const { internalSelectOptions, loadingStates } = useSelectLocations(
    inputTypes.country
  );

  return (
    <Flex
      display="flex"
      as="form"
      flexDirection="column"
      flexGrow={1}
      alignItems="center"
      className="leads-form"
    >
      <Flex flexWrap="wrap" marginBottom={30} justifyContent="space-between">
        {form?.map((data: any, i: number) => {
          switch (data.type) {
            case 'select':
              return (
                <FormControl
                  key={`contact_form_${i}`}
                  width="100%"
                  isInvalid={errors[data?.name]}
                  isRequired={data?.required}
                  margin="3px 0"
                >
                  <Flex alignItems="center">
                    <DropdownSelect
                      error={errors[data.name] ? data.errorMessage : undefined}
                      onChange={handleChange}
                      options={
                        internalSelectOptions[data.name] || data.options || []
                      }
                      label={data.label}
                      name={data.name}
                      selected={inputTypes[data.name]}
                      selectProps={{
                        height: '4.5rem',
                        fontSize: '1.4rem',
                      }}
                    />

                    <Box marginTop="30px">
                      {data.name === 'state' && loadingStates && (
                        <Image src={loader} alt="" width={40} height={40} />
                      )}
                    </Box>
                  </Flex>

                  {errors[data.name] && (
                    <FormErrorMessage paddingLeft={50} fontSize={12}>
                      {data.errorMessage}
                    </FormErrorMessage>
                  )}
                </FormControl>
              );
            case 'multi-select':
              return (
                <FormControl
                  borderWidth={1}
                  borderColor="grey.200"
                  padding="10px 10px 10px 30px"
                  borderRadius={20}
                  margin="3px 0"
                >
                  <MultiSelect
                    selectOptions={data.options}
                    label={data.label}
                    handleChange={handleChange}
                    name={data.name}
                    error={errors[data.name] ? data.errorMessage : undefined}
                  />
                </FormControl>
              );

            case 'radio':
              return (
                <FormControl
                  borderWidth={1}
                  borderColor="grey.200"
                  padding="10px 10px 10px 30px"
                  borderRadius={20}
                  margin="3px 0"
                >
                  <Radio
                    name={data.name}
                    label={data.label}
                    inputs={data.options || []}
                    handleSelect={handleChange}
                    value={inputTypes[data.name]}
                  />

                  {errors[data.name] && (
                    <FormErrorMessage paddingLeft={50} fontSize={12}>
                      {data.errorMessage}
                    </FormErrorMessage>
                  )}
                </FormControl>
              );
            case 'checkbox':
              return (
                <FormControl
                  borderWidth={1}
                  borderColor="grey.200"
                  padding="10px 10px 10px 30px"
                  borderRadius={40}
                  margin="3px 0"
                >
                  <CheckBox
                    value={inputTypes[data.name]}
                    name={data.name}
                    handleChange={handleChange}
                    label={data.label}
                  />

                  {errors[data.name] && (
                    <FormErrorMessage paddingLeft={50} fontSize={12}>
                      {data.errorMessage}
                    </FormErrorMessage>
                  )}
                </FormControl>
              );

            case 'textarea':
            case 'text':
            case 'date':
            case 'number':
            default:
              return (
                <FormControl
                  key={`contact_form_${i}`}
                  width="100%"
                  isInvalid={errors[data?.name]}
                  isRequired={data?.required}
                  margin="3px 0"
                >
                  <CustomInput
                    name={data?.name}
                    placeholder={data?.label}
                    paddingLeft={50}
                    onChange={handleChange}
                    value={inputTypes[data?.name]}
                    s
                    datatest-id={`test-${data?.name}`}
                    options={data?.options}
                    type={data?.type}
                    // icon={data?.icon as IconProp}
                  />

                  {errors[data.name] && (
                    <FormErrorMessage paddingLeft={50} fontSize={12}>
                      {data.errorMessage}
                    </FormErrorMessage>
                  )}
                </FormControl>
              );
          }
        })}
        {showConsent && (
          <Flex p="10px" className="consent">
            <input
              type="checkbox"
              checked={submitForm}
              onChange={() => setSubmitForm(!submitForm)}
              id="consent"
            />

            <Box
              marginLeft="20px"
              as="label"
              htmlFor="consent"
              cursor="pointer"
            >
              By submitting yes, I consent to having a representative from
              QuikInfluence or their partners contact me at this number (insert
              submitted number) and/or this email (insert submitted email
              address). I understand these calls or texts may be generated using
              an automated dialer or software and that my consent is not
              required as a precondition for purchasing or receiving any
              property, goods or service.
            </Box>
          </Flex>
        )}
      </Flex>

      <CustomButton
        borderRadius={40}
        maxWidth={320}
        fontSize={14}
        paddingTop={23}
        paddingBottom={23}
        onClick={handleSubmit}
      >
        {loading ? 'Loading...' : 'Submit'}
      </CustomButton>
    </Flex>
  );
};

export default LeadsForm;
