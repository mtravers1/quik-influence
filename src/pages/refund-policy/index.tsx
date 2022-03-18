import { Container, Flex, Stack, Text, useColorMode } from "@chakra-ui/react";
import { css } from "@emotion/react";
import CustomButton from "components/Button";
import Header from "components/Header";
import { bgThemeColor, themeColor } from "utils/constants/colorConstants";

const RefundPolicy = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Header
        type="unauthenticated"
        color={themeColor[colorMode]}
      />
      <Container height="100%" color="black">
        <Flex direction="column">
          <Stack my={10}>
            <Text fontWeight="bold" fontSize="6xl">
              Refund/Cancellation Policy
            </Text>
          </Stack>
          <Stack mb={10}>
            <Text fontSize="2xl">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.”
            </Text>
          </Stack>
          <Stack mb={10}>
            <Text fontSize="2xl">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.”
            </Text>
          </Stack>
          <Stack flexDirection={["column", "row"]} mb={10}>
            <CustomButton mb={[10, 0]} variant="gray" mr={10}>
              Not right now
            </CustomButton>
            <CustomButton
              css={[
                css`
                  margin-top: unset !important;
                `
              ]}
            >
              I agree with the terms
            </CustomButton>
          </Stack>
        </Flex>
      </Container>
    </>
  );
};

export default RefundPolicy;
