import { Box, useColorMode } from "@chakra-ui/react";
import Authentication from "modules/Authentication";
import { bgThemeColor } from "utils/constants/colorConstants";
import { getUser } from "utils/helpers";

const Login = () => {
  const { colorMode } = useColorMode();
  const user = getUser();

  if (user.admin) window.location.href = "/dashboard";

  return (
    <Box as="section" bgColor={bgThemeColor[colorMode]}>
      <Authentication type="login" />
    </Box>
  );
};

export default Login;
