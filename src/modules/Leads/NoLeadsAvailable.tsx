import { Box, Center } from "@chakra-ui/react";
import { isAdmin } from "utils/helpers";

const NoLeadsAvailable = ({ isAdmin }: { isAdmin: boolean }) => {
  if (isAdmin) {
    return (
      <Center flexDir="column" minH="80vh" height="100%">
        <Box as="h2" fontSize="40px" marginBottom="10px" fontWeight="600">
          You don't have any Leads yet
        </Box>
        <Box fontSize="18px">
          Copy your link from the campaign lists and share with your users
        </Box>
      </Center>
    );
  }
  return (
    <Center flexDir="column" minH="80vh" height="100%">
      <Box as="h2" fontSize="40px" marginBottom="10px" fontWeight="600">
        You don't have any Leads yet
      </Box>
      <Box fontSize="18px">
        Click the <i>Filter</i> at the top right and search for specific data
      </Box>
    </Center>
  );
};

export default NoLeadsAvailable;
