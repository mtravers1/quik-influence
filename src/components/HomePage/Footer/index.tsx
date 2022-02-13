import EditableWrapper from 'components/EditableWrapper';
import Section from '../Section';
import { Box, Flex } from '@chakra-ui/react';
import MeetupForm from './MeetupForm';

const Footer = ({ footer }: { footer: any }) => {
  return (
    <Section
      background="#282828"
      h={{ base: '100%', lg: '500px' }}
      padding={{ base: '50px 15px', lg: '70px 15px', xl: '0 15px' }}
    >
      <Flex
        maxW="1440px"
        margin="auto"
        alignItems="center"
        justifyContent="center"
        h="100%"
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
            >
              <Box
                as="h3"
                padding="10px 0"
                color="#FF0000"
                width="fit-content"
                fontWeight="400"
                fontSize="20px"
              >
                {footer.content.sub_header}
              </Box>
            </EditableWrapper>
            <EditableWrapper
              sectionId="header"
              data={footer}
              sectionName="footer"
            >
              <Box
                as="h1"
                color="white"
                fontSize={{ base: '30px', lg: '35px', xl: '50px' }}
                marginBottom="15px"
                fontWeight="500"
              >
                {footer.content.header}
              </Box>
            </EditableWrapper>

            <EditableWrapper
              sectionId="header_desc"
              data={footer}
              sectionName="footer"
            >
              <Box
                as="p"
                color="white"
                fontSize={{ base: '15px', lg: '16px', xl: '18px' }}
              >
                {footer.content.header_desc}
              </Box>
            </EditableWrapper>
          </Box>

          <MeetupForm />
        </Flex>
      </Flex>
    </Section>
  );
};

export default Footer;
