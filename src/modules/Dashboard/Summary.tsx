import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react"
import React from "react"
import ChartsHeader from "./charts/ChartsHeader"

const Summary = () => {

  const metrics = [
    {
      title: "Email Sent",
      value: 112
    },
    {
      title: "Skipped",
      value: 112
    },
    {
      title: "Opened",
      value: 112
    },
    {
      title: "Clicked",
      value: 112
    },
    {
      title: "Hard Bounce",
      value: 84
    },
    {
      title: "Soft Bounce",
      value: 29
    },
    {
      title: "Unsubscribe",
      value: 33
    },
    {
      title: "Spam",
      value: 45
    },
    {
      title: "Order In",
      value: 767
    },
    {
      title: "Rejected",
      value: 21
    },
    {
      title: "Last Order",
      value: 343
    },
    {
      title: "New Member",
      value: 2
    },
  ]
  return (
    <Flex
      padding={[6, 8]}
      flexDirection="column"
      height='100%'
    >
      <ChartsHeader title="Summary" />
      <Grid
        w="100%"
        height='100%'
        templateColumns="repeat(4, minmax(0,1fr))"
        alignItems='center' gap={4}>
        {
          metrics.map(metric =>
            <Box key={metric.title} p={4}>
              <Heading textAlign="center" size="xl">{metric.value}</Heading>
              <Text textAlign="center" fontSize="md">{metric.title}</Text>

            </Box>
          )
        }

      </Grid>
    </Flex>
  )
}

export default Summary