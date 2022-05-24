import { Box, Flex } from '@chakra-ui/react';
import EditableWrapper from 'components/EditableWrapper';
import { useEffect, useState } from 'react';
import Section from '../Section';
import {
  SECTION_COLUMNS,
  SECTION_LENGTH,
} from 'utils/constants/pageDataConstants';

const Categories = ({ info }: { info: any }) => {
  const [splicedArray, setSplicedArray] = useState<any>([]);
  const [arrayMap, setArrayMap] = useState<any>({});

  const sortinfo = () => {
    let tempArrayMap: any = {};
    const sortArray: any[] = [[], [], [], [], []];
    let totalLength = 0;

    const infoCopy: any = info?.content?.cards?.reduce(
      (acc: any, cur: any, i: number) => ({ ...acc, [i]: cur }),
      {}
    );

    for (let i = 0; i < SECTION_COLUMNS; i++) {
      const tempCopy = Object.create(infoCopy);
      for (let j in tempCopy) {
        if (totalLength < SECTION_LENGTH) {
          sortArray[i].push(infoCopy[j]);
          totalLength += infoCopy[j].values.length;

          delete infoCopy[j];
        }

        if (totalLength >= SECTION_LENGTH) {
          if (i === 0) {
            tempArrayMap = {
              [i]: { start: 0, length: sortArray[i].length },
            };
          } else {
            tempArrayMap = {
              ...tempArrayMap,
              [i]: {
                start: tempArrayMap[i - 1].length + tempArrayMap[i - 1].start,
                length: sortArray[i].length,
              },
            };
          }

          totalLength = 0;
          break;
        }
      }
    }

    // console.log(tempArrayMap);

    if (splicedArray.length) return;
    setSplicedArray(sortArray);
    setArrayMap(tempArrayMap);
  };

  useEffect(() => {
    sortinfo();
  }, []);

  const selectKeyIndex = (step: number, index: number) =>
    arrayMap[step]?.start + index;

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
        <Flex marginBottom="32px" w="100%">
          {splicedArray?.map((valueArrays: any, k: number) => (
            <Flex direction="column" key={`info_container_${k}`}>
              {valueArrays.map(
                (card: { title: string; values: string[] }, i: number) => (
                  <Flex
                    key={`info_box_${selectKeyIndex(k, i)}`}
                    direction="column"
                    p="30px 15px"
                  >
                    <EditableWrapper
                      sectionId={`cards__${selectKeyIndex(k, i)}__title`}
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
                          sectionId={`cards__${selectKeyIndex(
                            k,
                            i
                          )}__values__${j}`}
                          key={`cards__${selectKeyIndex(k, i)}__values__${j}`}
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
          ))}
        </Flex>
      </Flex>
    </Section>
  );
};

export default Categories;
