import { Box, Divider, Flex, Stack, Image } from '@chakra-ui/react';
import EditableWrapper from 'components/EditableWrapper';
import Section from '../Section';
import MeetupForm from './MeetupForm';
import NextLink from 'components/NextLink';

const Footer = ({ footer }: { footer: any }) => {
  return (
    <Section background="#282828" h={{ base: '100%', lg: '500px' }}>
      <Flex
        maxW="1440px"
        margin="auto"
        alignItems="center"
        justifyContent="center"
        h="100%"
        padding={{ base: '50px 15px', lg: '70px 15px', xl: '0 15px' }}
      >
        <Flex
          justifyContent="space-between"
          direction={{ base: 'column', lg: 'row' }}
        >
          <Box
            width={{ base: '100%', lg: '55%' }}
            marginBottom={{ lg: 0, base: '30px' }}
            marginRight={20}
            flexShrink={0}
          >
            <EditableWrapper
              sectionId="sub_header"
              data={footer}
              sectionName="footer"
              as="h3"
              padding="10px 0"
              color="#FF0000"
              width="fit-content"
              fontWeight="400"
              fontSize="20px"
            >
              {footer.content.sub_header}
            </EditableWrapper>
            <EditableWrapper
              sectionId="header"
              data={footer}
              sectionName="footer"
              as="h1"
              color="white"
              fontSize={{ base: '30px', lg: '35px', xl: '50px' }}
              marginBottom="15px"
              fontWeight="500"
            >
              {footer.content.header}
            </EditableWrapper>

            <EditableWrapper
              sectionId="header_desc"
              data={footer}
              sectionName="footer"
              as="p"
              color="white"
              fontSize={{ base: '15px', lg: '16px', xl: '18px' }}
            >
              {footer.content.header_desc}
            </EditableWrapper>
          </Box>

          <MeetupForm />
        </Flex>
      </Flex>
      <Flex bg="#000" p={10} px={[10, 56]} justify="space-between">
        <NextLink href="/" mr={10}>
          <Image
            src="/logo-white.png"
            alt="logo"
            marginRight="100px"
            h="40px"
            objectFit="contain"
            objectPosition="left"
          />
        </NextLink>

        <Flex w={['80%', '20%']} justify="space-between" alignItems="center">
          <Stack>
            <NextLink _hover={{ color: 'red' }} href="/terms-of-service">
              Terms of service
            </NextLink>
          </Stack>
          <Divider orientation="vertical" />
          <Stack>
            <NextLink _hover={{ color: 'red' }} href="/privacy-policy">
              Privacy Policy
            </NextLink>
          </Stack>
        </Flex>
      </Flex>
    </Section>
  );
};

export default Footer;
