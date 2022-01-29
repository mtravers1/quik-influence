import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react"
import { faMoneyBillWaveAlt, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import quikColorConstants from "../../utils/colorConstants"

type CompanyCardProps = {
  companyName: string
  companyLogo?: string
  users: number
  leads: number
  revenue: number
}


const CompanyCard = ({
  companyName,
  companyLogo,
  users,
  leads,
  revenue
}: CompanyCardProps) => {
  return (
    <Flex
      padding={[6, 6]}
      background={'#FFFFFF'}
      width="100%"
      borderRadius='8px'
      flexWrap="wrap"
    >
      <Flex
        width="100%"
        marginBottom="15px"
      >
        <Box
          height='48px'
          width='48px'
          bgColor={quikColorConstants.influenceRedWithOpacity}
          border="1px solid #FFFFFF"
          marginRight="6px"
          borderRadius="10px">
        </Box>
        <Text margin='auto 0' fontSize='2xl' color={quikColorConstants.black} letterSpacing='0.2px'>{companyName}</Text>
      </Flex>
      <Divider />

      <Flex
        width="100%"
        marginTop="15px"
        justify="space-between"
      >

        <Flex paddingX="1px" >
          <FontAwesomeIcon
            style={{
              margin: "auto"
            }}
            size="sm"
            color={quikColorConstants.greyLighter}
            icon={faUser} />
          <Text color={quikColorConstants.greyLighter} paddingLeft="5px" fontSize="lg" margin="auto">{users} Users</Text>
        </Flex>

        <Flex paddingX="1px" >
          <FontAwesomeIcon
            style={{
              margin: "auto"
            }}
            size="sm"
            color={quikColorConstants.greyLighter}
            icon={faUser} />
          <Text color={quikColorConstants.greyLighter} paddingLeft="5px" fontSize="lg" margin="auto">{leads} Leads</Text>
        </Flex>


        <Flex paddingX="1px" >
          <FontAwesomeIcon
            style={{
              margin: "auto"
            }}
            size="sm"
            color={quikColorConstants.greyLighter}
            icon={faMoneyBillWaveAlt} />
          <Text color={quikColorConstants.greyLighter} paddingLeft="5px" fontSize="lg" margin="auto">{revenue}K</Text>
        </Flex>

      </Flex>


    </Flex>
  )
}

export default CompanyCard