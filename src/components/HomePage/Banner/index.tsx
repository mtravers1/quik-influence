import EditableWrapper from 'components/EditableWrapper';
import Section from '../Section';
import { Box, Flex, Image } from '@chakra-ui/react';
import ContactForm from './ContactForm';
import { css } from '@emotion/react';

const Banner = ({
  banner,
  height,
  minHeight,
}: {
  banner: any;
  height?: string;
  minHeight?: string;
}) => {
  return (
    <Section
      background={`linear-gradient(to right, #000 50%, transparent), right / cover no-repeat url("/homepage.jpg")`}
      padding={{ base: '200px 15px 50px', lg: '173px 15px 0' }}
      minHeight={minHeight || '1000px'}
      h={{ base: 'unset', lg: height || '75vh' }}
      zIndex={1}
      paddingBottom={minHeight ? { base: '70px', sm: '200px' } : null}
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
        position="relative"
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
              as="h3"
              color="white"
              padding="10px 20px"
              bg="#FF0000"
              width="fit-content"
              fontWeight="bold"
              marginBottom="24px"
              textTransform="uppercase"
            >
              {banner.content.sub_header}
            </EditableWrapper>
            <EditableWrapper
              sectionId="header"
              data={banner}
              sectionName="banner"
              as="h1"
              color="white"
              fontSize={{ base: '30px', lg: '50px', xl: '76px' }}
              marginBottom="15px"
              fontWeight="500"
            >
              {banner.content.header}
            </EditableWrapper>

            <EditableWrapper
              sectionId="header"
              data={banner}
              sectionName="banner"
              as="h3"
              color="red"
              fontSize={{ base: '20px', lg: '25px', xl: '32px' }}
              marginBottom="20px"
              fontWeight="500"
            >
              {banner.content.second_header}
            </EditableWrapper>

            <EditableWrapper
              sectionId="header_desc"
              data={banner}
              sectionName="banner"
              fontFamily={['Roboto', 'sans-serif']}
              as="p"
              color="#D9D9D9"
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
            </EditableWrapper>
          </Box>

          <Box
            width={{ base: '100%', sm: '80%', lg: '38%' }}
            height="fit-content"
            position="relative"
          >
            <EditableWrapper
              sectionId="image_url"
              data={banner}
              sectionName="banner"
              border="4px solid red"
              isImage
            >
              <Image
                src={banner.content.image_url}
                alt="Homepage"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </EditableWrapper>

            {banner.content.image_url_2 && (
              <EditableWrapper
                sectionId="image_url_2"
                data={banner}
                border="4px solid red"
                sectionName="banner"
                isImage
                position="absolute"
                top="58%"
                left={{
                  base: '3%',
                  sm: '10%',
                  xl: '5%',
                  '2xl': '10%',
                }}
                w="100%"
              >
                <Image
                  src={banner.content.image_url_2}
                  alt="Homepage"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </EditableWrapper>
            )}
          </Box>
        </Flex>

        {!banner.content.disable_footer &&
          (!banner.content.second_desc ? (
            <ContactForm />
          ) : (
            <Box
              marginTop={{ base: '70px', sm: '50px', md: '100px', xl: '80px' }}
            >
              <EditableWrapper
                sectionId="header_desc"
                data={banner}
                sectionName="banner"
                w={{ base: '100%', '2xl': '1600px' }}
                as="h1"
                color="white"
                fontWeight="600"
                textShadow="0px 3px 30px #000000B4"
                fontSize={{
                  base: '35px',
                  sm: '50px',
                  md: '70px',
                  lg: '80px',
                  xl: '90px',
                  '2xl': '100px',
                }}
                whiteSpace="pre-line"
                position="absolute"
                bottom="0"
                left="0"
                transform={{
                  base: 'translateY(80%)',
                  sm: 'translateY(50%)',
                  lg: 'translateY(20%)',
                }}
              >
                {banner.content.second_desc}
              </EditableWrapper>
            </Box>
          ))}
      </Flex>
    </Section>
  );
};

export default Banner;
