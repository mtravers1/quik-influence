import { Flex, Image, Box } from '@chakra-ui/react';

const AppIntegrationImage = ({
  imageSrc,
  altText,
}: {
  imageSrc: string;
  altText: string;
}) => {
  return (
    <Flex
      minW="30.3333%"
      bg="white"
      border="1px solid gray"
      borderRadius="50px"
      px={10}
      flexDirection="column"
      mr={10}
      mt={10}
    >
      <Box height="100%" alignItems="center">
        <Image alignSelf="center" src={imageSrc} alt={altText} />
      </Box>
    </Flex>
  );
};

export default AppIntegrationImage;
