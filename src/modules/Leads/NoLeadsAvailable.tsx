import { Box, Center } from "@chakra-ui/react";

const NoLeadsAvailable = ({ isAdmin }: { isAdmin: boolean }) => {
  return (
    <Center flexDir="column" minH="80vh" height="100%">
      <Box as="h2" fontSize="40px" marginBottom="10px" fontWeight="600">
      {isAdmin ? ("You don't have any Leads yet") : ("You can search for Leads")}
      </Box>
      <Box fontSize="18px">
        {isAdmin ? (
          "Copy your link from the campaign lists and share with your users"
        ) : (
          <>
            Click the <i>Filter</i> button at the top right and search for specific
            data
          </>
        )}
      </Box>
    </Center>
  );
};

export default NoLeadsAvailable;
