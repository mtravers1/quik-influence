import { Box, Flex } from '@chakra-ui/react';
import EditableWrapper from 'components/EditableWrapper';
import Section from '../Section';

const Categories = ({ info }: { info: any }) => {
  return (
    <Section
      background="#fff"
      h="unset"
      padding={{ base: '50px 15px', lg: '70px 15px', xl: '100px 15px' }}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        maxW="1440px"
        margin="auto"
      >
        <Flex
          marginBottom="32px"
          direction="column"
          flexWrap="wrap"
          maxH={{
            base: '100%',
            sm: '1800px',
            md: '1500px',
            xl: '1000px',
            '2xl': '1150px',
          }}
          w="100%"
        >
          {info.content.cards.map(
            (card: { title: string; values: string[] }, i: number) => (
              <Flex key={`info_box_${i}`} direction="column" p="30px 15px">
                <EditableWrapper
                  sectionId={`cards__${i}__title`}
                  data={info}
                  sectionName="info"
                  as="h3"
                  fontWeight="600"
                  color="red"
                  fontSize={{
                    base: '20px',
                    '2xl': '25px',
                  }}
                >
                  {card.title}
                </EditableWrapper>

                <Box as="ul">
                  {card.values.map((value: string, j: number) => (
                    <EditableWrapper
                      sectionId={`cards__${i}__values__${j}`}
                      data={info}
                      sectionName="info"
                      as="li"
                      color="#000"
                      listStyleType="none"
                      fontWeight="600"
                      fontSize={{
                        base: '16px',
                        '2xl': '20px',
                      }}
                    >
                      {value}
                    </EditableWrapper>
                  ))}
                </Box>
              </Flex>
            )
          )}
        </Flex>
      </Flex>
    </Section>
  );
};

export default Categories;
