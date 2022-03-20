import { useState, useEffect } from "react";
import {
  FormControl,
  FormErrorMessage,
  Box,
  useToast,
  Text
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { login } from "redux/actions/auth";
import Image from "next/image";
import CustomButton from "components/Button";
import { TextInput } from "components/Input";
import useForm from "hooks/useForm";
import formdata from "utils/constants/formData/register";
import { axiosInstance } from "utils/helpers";
import quikColorConstants from "utils/constants/colorConstants";
import loader from "assets/loader.gif";
import NextLink from "components/NextLink";
import queryString from "query-string";
import { useRouter } from "next/router";

const Register = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const router = useRouter();
  const { query } = router;
  const isTermsChecked = query.terms === "checked";

  const [showOtpInput, setShowOtpInput] = useState(false);
  const [loadingOtp, setLoadingOtp] = useState(false);
  const [stripeRedirectUrl, setStripeRedirectUrl] = useState();
  const [submitForm, setSubmitForm] = useState(isTermsChecked);
  const [showTermsError, setShowTermsError] = useState<boolean>(
    query?.terms ? false : isTermsChecked ? true : false
  );

  let {
    handleChange,
    handleModChange,
    inputTypes,
    handleSubmit,
    errors,
    loading
  } = useForm({
    inputs: formdata,
    cb: async (inputs) => {
      if (!submitForm) return setShowTermsError(true);

      const response = await axiosInstance.post(
        "/auth/admin/otpRegister",
        inputs
      );

      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 4000,
        isClosable: true
      });

      if (typeof window !== "undefined") {
        sessionStorage.setItem("email", inputs.email);
      }

      setShowOtpInput(true);
      setStripeRedirectUrl(response.data.data.url);
    }
  });

  useEffect(() => {
    delete query.terms;
    handleModChange(query);
  }, [query]);

  const submitOtp = async () => {
    setLoadingOtp(true);

    try {
      const response = await axiosInstance.post("/auth/admin/otpLogin", {
        email: inputTypes.email,
        otp: inputTypes.otp
      });

      dispatch(login(response.data.data));

      if (typeof window !== "undefined") {
        window.location.href = stripeRedirectUrl || "";
      }
    } catch (err) {}

    setLoadingOtp(false);
  };

  return (
    <form action="post">
      <Box marginBottom="15px">
        {formdata.slice(0, showOtpInput ? 5 : 4).map((data, i) => (
          <FormControl isInvalid={errors[data.name]} key={`register_${i}`}>
            <TextInput
              name={data.name}
              label={data.label}
              labelProps={{
                fontSize: "1.2rem"
              }}
              value={inputTypes[data.name] || query[data.name]}
              formControlProps={{
                pt: 8
              }}
              handleChange={handleChange}
              type={data.type}
              placeholder={data.label}
              TextInputProps={{
                border:
                  data.name === "otp"
                    ? `2px solid ${quikColorConstants.influenceRed} !important`
                    : undefined
              }}
            />

            {errors[data.name] && (
              <FormErrorMessage fontSize="14px">
                {data.errorMessage}
              </FormErrorMessage>
            )}
          </FormControl>
        ))}
      </Box>
      {showTermsError && (
        <Text color="red">Please accept the Terms of Service</Text>
      )}
      <Box p="10px">
        <input
          type="checkbox"
          checked={submitForm}
          onChange={() => {
            setSubmitForm(!submitForm);
            setShowTermsError(false);
          }}
        />
        <Box as="small" marginLeft="20px">
          Please Agree to the{" "}
          <NextLink
            href={`/terms-of-service?${queryString.stringify(inputTypes)}`}
            textDecor="underline"
          >
            Terms of Service
          </NextLink>{" "}
          before submitting
        </Box>
      </Box>

      {!showOtpInput ? (
        <CustomButton
          maxW="204px"
          height="50px"
          padding={0}
          mt={4}
          onClick={handleSubmit}
        >
          Signup
          {loading && <Image src={loader} alt="" width={50} height={50} />}
        </CustomButton>
      ) : (
        <CustomButton
          maxW="250px"
          height="50px"
          padding={0}
          mt={4}
          onClick={submitOtp}
        >
          Enter Otp to continue
          {loadingOtp && <Image src={loader} alt="" width={50} height={50} />}
        </CustomButton>
      )}
    </form>
  );
};

export default Register;
