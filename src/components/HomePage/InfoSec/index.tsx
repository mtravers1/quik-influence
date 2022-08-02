import EditableWrapper from 'components/EditableWrapper';
import Section from '../Section';
import { Flex, Image } from '@chakra-ui/react';

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
        <EditableWrapper
          sectionId="header"
          data={info}
          sectionName="info"
          as="h2"
          color="#333"
          maxW={{ base: '90%', lg: '600px', xl: '736px' }}
          textAlign="center"
          margin="0 auto 10px"
          fontSize={{ base: '25px', lg: '30px', xl: '43px' }}
        >
          {info.content.header}
        </EditableWrapper>

        <EditableWrapper
          sectionId="sub_header"
          data={info}
          sectionName="info"
          as="p"
          color="#333"
          textAlign="center"
          margin="0 auto 35px"
          maxW={{ base: '70%', lg: '500px', xl: '611px' }}
        >
          {info.content.sub_header}
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
                bg={i % 2 === 1 ? 'red' : '#fff'}
              >
                <EditableWrapper
                  sectionId={`cards__${i}__header`}
                  data={info}
                  sectionName="info"
                  as="h3"
                  fontSize={25}
                  color={i % 2 === 1 ? '#fff' : '#333'}
                  fontWeight="500"
                >
                  {card.header}
                </EditableWrapper>

                <EditableWrapper
                  sectionId={`cards__${i}__img`}
                  data={info}
                  sectionName="info"
                  isImage
                >
                  <Image margin="25px 0" src={card.img} w="75px" h="75px" />
                </EditableWrapper>

                <EditableWrapper
                  sectionId={`cards__${i}__desc`}
                  data={info}
                  sectionName="info"
                  as="p"
                  color={i % 2 === 1 ? '#fff' : '#333'}
                >
                  {card.desc}
                </EditableWrapper>
              </Flex>
            )
          )}
        </Flex>

        <EditableWrapper
          sectionId="footer"
          data={info}
          sectionName="info"
          as="p"
          fontSize={14}
          fontWeight="500"
          color="#333"
        >
          {info.content.footer}
        </EditableWrapper>
      </Flex>
    </Section>
  );
};

export default InfoSec;
