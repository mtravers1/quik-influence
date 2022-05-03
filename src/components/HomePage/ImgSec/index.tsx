import { Flex, Image, Box } from '@chakra-ui/react';
import EditableWrapper from 'components/EditableWrapper';
import Section from '../Section';

const ImgSec = ({ info }: { info: any }) => {
  return (
    <Section
      background="#fff"
      h="unset"
      padding={{ base: '50px 15px', lg: '70px 15px', xl: '100px 15px' }}
    >
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
          direction={{ base: 'column-reverse', lg: 'row' }}
          marginTop={{ base: '80px', lg: '0' }}
        >
          <Box
            width={{ base: '100%', sm: '80%', lg: '38%' }}
            height="fit-content"
            position="relative"
          >
            <EditableWrapper
              sectionId="image_url"
              data={info}
              sectionName="info"
              isImage
            >
              <Image
                src={info.content.image_url}
                alt="Homepage"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </EditableWrapper>
          </Box>

          <Box
            width={{ base: '100%', lg: '55%' }}
            marginBottom={{ lg: 0, base: '40px' }}
          >
            <EditableWrapper
              sectionId="header"
              data={info}
              sectionName="info"
              as="h1"
              color="red"
              fontSize={{ base: '25px', lg: '50px', xl: '76px' }}
              marginBottom="15px"
              fontWeight="700"
              textAlign={{ base: 'center', lg: 'left' }}
            >
              {info.content.header}
            </EditableWrapper>
          </Box>
        </Flex>
      </Flex>
    </Section>
  );
};

export default ImgSec;
