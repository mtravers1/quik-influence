import { useState } from "react";
import { Box, Flex, createStandaloneToast } from "@chakra-ui/react";
import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import CustomButton from "components/Button";
import useInput from "hooks/useForm";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import CustomInput from "components/CustomInput";
import { axiosInstance } from "utils/helpers";

const LeadsForm = ({
  campaignId,
  handleStripe,
  redirectUrl,
  form,
  paidType,
}: {
  campaignId: string;
  handleStripe?: (email: string, success?: boolean) => {};
  redirectUrl: string;
  form: any;
  paidType?: string;
}) => {
  const toast = createStandaloneToast();
  const [submitForm, setSubmitForm] = useState(false);
  const isPaidCampaign = paidType === "PAID";

  const {
    handleChange,
    inputTypes,
    handleSubmit,
    errors,
    loading,
    resetInputs
  } = useInput({
    inputs: form,
    cb: async (inputs) => {
      if (!submitForm) return;

      await axiosInstance
        .post(`/users/campaign/`, {
          ...inputs,
          campaignId
        })
        .then(async (res) => {
          if (res.status === 200) {
            resetInputs();
            toast({
              title: "Registered Successfully.",
              description: isPaidCampaign ? "You would be redirected to a payment screen" : "",
              duration: 9000,
              position: "top-right",
              variant: "subtle",
              isClosable: false
            });
          }

          // redirect to stripe checkout
          // handleStripe(inputs.email, res.status === 200);

          if (typeof window !== "undefined")
            localStorage.setItem("redirectUrl", redirectUrl);
        })
        .catch((err) => {
          toast({
            title: err?.response?.data?.message || err.message,
            status: "error",
            duration: 9000,
            position: "top-right"
          });
        });
    }
  });

  return (
    <Flex
      display="flex"
      as="form"
      flexDirection="column"
      flexGrow={1}
      alignItems="center"
    >
      <Flex flexWrap="wrap" marginBottom={30} justifyContent="space-between">
        {form?.map((data: any, i: number) => (
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
              datatest-id={`test-${data?.name}`}
              options={data?.options}
              type={data?.type}
              icon={data?.icon as IconProp}
            />

            {errors[data.name] && (
              <FormErrorMessage paddingLeft={50} fontSize={12}>
                {data.errorMessage}
              </FormErrorMessage>
            )}
          </FormControl>
        ))}
        <Box p="10px">
          <input
            type="checkbox"
            checked={submitForm}
            onChange={() => setSubmitForm(!submitForm)}
          />

          <Box as="small" marginLeft="20px">
            By submitting yes, I consent to having a representative from
            QuikInfluence or their partners contact me at this number (insert
            submitted number) and/or this email (insert submitted email
            address). I understand these calls or texts may be generated using
            an automated dialer or software and that my consent is not required
            as a precondition for purchasing or receiving any property, goods or
            service.
          </Box>
        </Box>
      </Flex>

      <CustomButton
        borderRadius={40}
        maxWidth={320}
        fontSize={14}
        paddingTop={23}
        paddingBottom={23}
        onClick={handleSubmit}
      >
        {loading ? "Loading..." : "Submit"}
      </CustomButton>
    </Flex>
  );
};

export default LeadsForm;
