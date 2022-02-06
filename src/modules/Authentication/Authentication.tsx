


import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"
import landingImage from '../../../public/homepage.jpg'
import AuthTab from "./AuthTab"
import { AuthenticationProps } from "./types"



const Authentication: React.FC<AuthenticationProps> = ({
  type
}) => {

  return (
    <section>
      <Flex
        height='100vh'
      >
        <Box
          width='55%'
          position='relative'
          display={['none', 'block']}
          as='div'>
          <Image
            src={landingImage}
            alt='staff at the office'
            layout='fill'
            objectFit="cover"
          />
        </Box>
        <Box
          width={[ '100%', '45%']}>
          <Flex
            width='full'
            height='full'
            justifyContent='center'
            alignItems={['unset', 'center']}
            p={6}
            pt={['10rem', '0']}
          >
            <Box
              maxW='440px'
            >
              <Heading
                fontFamily='montserrat' >
                Get more things done with us
              </Heading>
              <Text
                py={8}>
                Access to thousands of real leads through our multi-platform funnel
                and management system.
              </Text>

              <AuthTab
                type={type} />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </section>
  )
}

export default Authentication