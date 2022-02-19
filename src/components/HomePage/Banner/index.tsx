import EditableWrapper from 'components/EditableWrapper';
import Section from '../Section';
import { Box, Flex, Image } from '@chakra-ui/react';
import ContactForm from './ContactForm';
import { css } from '@emotion/react';

const Banner = ({ banner }: { banner: any }) => {
  return (
    <Section
      background={`linear-gradient(to right, #000 50%, transparent), right / cover no-repeat url("/homepage.jpg")`}
      padding={{ base: '200px 15px 50px', lg: '173px 15px 0' }}
      h={{ base: 'unset', lg: '100vh' }}
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
        <Flex
          justifyContent="space-between"
          alignItems="center"
          marginBottom={{ lg: '90px', base: '40px' }}
          direction={{ base: 'column', lg: 'row' }}
        >
          <Box
            width={{ base: '100%', lg: '55%' }}
            marginBottom={{ lg: 0, base: '40px' }}
          >
            <EditableWrapper
              sectionId="sub_header"
              data={banner}
              sectionName="banner"
            >
              <Box
                as="h3"
                color="white"
                padding="10px 20px"
                bg="#FF0000"
                width="fit-content"
                fontWeight="bold"
                marginBottom="24px"
              >
                {banner.content.sub_header}
              </Box>
            </EditableWrapper>
            <EditableWrapper
              sectionId="header"
              data={banner}
              sectionName="banner"
            >
              <Box
                as="h1"
                color="white"
                fontSize={{ base: '30px', lg: '50px', xl: '76px' }}
                marginBottom="15px"
                fontWeight="500"
              >
                {banner.content.header}
              </Box>
            </EditableWrapper>

            <EditableWrapper
              sectionId="header_desc"
              data={banner}
              sectionName="banner"
            >
              <Box
                as="p"
                color="white"
                fontSize={{ base: '15px', lg: '16px', xl: '18px' }}
                textAlign={{ base: 'justify', sm: 'left' }}
                whiteSpace={{ base: 'pre-line', md: 'unset' }}
                css={css`
                  & {
                    hyphens: auto;
                  }
                `}
              >
                {banner.content.header_desc}
              </Box>
            </EditableWrapper>
          </Box>

          <Box
            width={{ base: '100%', lg: '38%' }}
            border="4px solid red"
            height="fit-content"
          >
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
