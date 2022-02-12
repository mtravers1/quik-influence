import { Box } from '@chakra-ui/react';

const Section = (props: any) => {
  return (
    <Box
      as="section"
      h="100vh"
      w="100vw"
      position="relative"
      zIndex={0}
      {...props}
    >
      {props.children}
    </Box>
  );
};

export default Section;
