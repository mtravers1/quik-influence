import EditableWrapper from 'components/EditableWrapper';
import Section from '../Section';
import { Box, Flex, Image } from '@chakra-ui/react';

const InfoSec = ({ info }: { info: any }) => {
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
        h="100%"
        direction="column"
      >
        <EditableWrapper sectionId="header" data={info} sectionName="info">
          <Box
            as="h2"
            color="#333"
            maxW={{ base: '90%', lg: '600px', xl: '736px' }}
            textAlign="center"
            margin="0 auto 10px"
            fontSize={{ base: '25px', lg: '30px', xl: '43px' }}
          >
            {info.content.header}
          </Box>
        </EditableWrapper>

        <EditableWrapper sectionId="sub_header" data={info} sectionName="info">
          <Box
            as="p"
            color="#333"
            textAlign="center"
            margin="0 auto 35px"
            maxW={{ base: '70%', lg: '500px', xl: '611px' }}
          >
            {info.content.sub_header}
          </Box>
        </EditableWrapper>

        <Flex
          justifyContent="space-between"
          marginBottom="32px"
          maxW={1000}
          textAlign="center"
          direction={{ base: 'column', md: 'row' }}
          alignItems="center"
        >
          {info.content.cards.map(
            (
              card: { header: string; desc: string; img: string },
              i: number
            ) => (
              <Flex
                key={`info_box_${i}`}
                border="1px solid #E6E6E6"
                alignItems="center"
                justifyContent="center"
                direction="column"
                p="30px 15px"
                w={{ base: '100%', xl: '32%' }}
                margin={{ base: '20px', xl: 0 }}
                maxW="450px"
              >
                <EditableWrapper
                  sectionId={`cards__${i}__header`}
                  data={info}
                  sectionName="info"
                >
                  <Box as="h3" fontSize={25} color="#333" fontWeight="500">
                    {card.header}
                  </Box>
                </EditableWrapper>

                <Image margin="25px 0" src="/icon.png" w="75px" h="75px" />

                <EditableWrapper
                  sectionId={`cards__${i}__desc`}
                  data={info}
                  sectionName="info"
                >
                  <Box as="p" color="#333">
                    {card.desc}
                  </Box>
                </EditableWrapper>
              </Flex>
            )
          )}
        </Flex>

        <EditableWrapper sectionId="footer" data={info} sectionName="info">
          <Box as="p" fontSize={14} fontWeight="500">
            {info.content.footer}
          </Box>
        </EditableWrapper>
      </Flex>
    </Section>
  );
};

export default InfoSec;
