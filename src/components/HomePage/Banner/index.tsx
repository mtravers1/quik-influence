import EditableWrapper from 'components/EditableWrapper';
import Section from '../Section';
import { Box, Flex, Image } from '@chakra-ui/react';
import ContactForm from './ContactForm';

const Banner = ({ banner }: { banner: any }) => {
  return (
    <Section
      background={`linear-gradient(to right, #000 50%, transparent), right / cover no-repeat url("/homepage.jpg")`}
      paddingTop="173px"
    >
      <Box
        w="100%"
        h="100%"
        backdropFilter="blur(20px)"
        position="absolute"
        inset="0"
        zIndex="-1"
      ></Box>
      <Flex
        maxW="1440px"
        margin="auto"
        alignItems="center"
        justifyContent="center"
        direction="column"
        h="100%"
      >
        <Flex justifyContent="space-between" marginBottom={90}>
          <Box width="55%">
            <EditableWrapper sectionId="">
              <Box
                as="h3"
                color="white"
                padding="10px 20px"
                bg="#FF0000"
                width="fit-content"
                fontWeight="bold"
                marginBottom="24px"
              >
                {banner.sub_header}
              </Box>
            </EditableWrapper>
            <EditableWrapper sectionId="">
              <Box
                as="h1"
                color="white"
                fontSize="76px"
                marginBottom="15px"
                fontWeight="bold"
              >
                {banner.header}
              </Box>
            </EditableWrapper>

            <EditableWrapper sectionId="">
              <Box as="p" color="white" fontSize="18px">
                {banner.header_desc}
              </Box>
            </EditableWrapper>
          </Box>
          <Box width="38%" border="4px solid red">
            <Image
              src="/homepage.jpg"
              alt="Homepage"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
        </Flex>

        <ContactForm />
      </Flex>
    </Section>
  );
};

export default Banner;
