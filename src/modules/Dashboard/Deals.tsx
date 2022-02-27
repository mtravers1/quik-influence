
import { Flex, Heading, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { cardThemeColor } from 'utils/constants/colorConstants'

const Deals = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex padding={[6, 0]} height="100%" flexDirection="column" justifyContent='space-between' >
      <Flex
        background={cardThemeColor[colorMode]}
        padding={10}
        height="48%"
        alignContent="center"
        wrap="wrap" width="100%">

        <Heading size="xl" width="100%" textAlign='center'>
          $129,812.00
        </Heading>
        <Text width='100%' mt={6} fontSize="md" textAlign='center'>
          Won from 290 Deals
        </Text>

      </Flex>
      <Flex
        background={cardThemeColor[colorMode]}
        padding={10}
        height="48%"
        alignContent="center"
        wrap="wrap" width="100%">

        <Heading size="xl" width="100%" textAlign='center'>
          +126
        </Heading>
        <Text width='100%' mt={6} fontSize="md" textAlign='center'>
          New Deals worth $3000
        </Text>

      </Flex>
    </Flex>
  )
}


export default Deals