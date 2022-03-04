import { Flex, Heading, Box, useColorMode, Text, Table, Thead, Tr, Th } from "@chakra-ui/react"
import DataTable from "components/DataTable"
import DropdownSelect from "components/DropdownSelect"
import { useSelector } from "react-redux"
import quikColorConstants from "utils/constants/colorConstants"
import CurrentCampaignsTable from "./CurrentCampaignsTable"


const CurrentCampaigns = () => {
    const {colorMode} = useColorMode()
    const campaigns = useSelector((state: any) => state.campaigns) 
    const sortOptions = [
        {
            label: 'Alphabet',
            value: 'alpha'
        },
    ]
    const handleSortChange = (event: any) => {
        console.log(event.target.value);
      };
    return(
        <Flex flexDirection="column" mt="12">
            <Heading size="lg">Current Campaigns</Heading>
            <Flex width="100%" justifyContent="right" mb={8} >
                <Flex>
                    <Text width="10rem" my="auto" color={quikColorConstants.greyLighter}>Sort By:</Text>
                    <DropdownSelect
                        options={sortOptions}
                        onChange={handleSortChange}
                        selectProps={{
                            border:0,
                            width: '10rem',
                            fontSize: 'xl'
                        }}
                        />
                </Flex>
                <Flex>
                    <Text mr={4} my="auto" color={quikColorConstants.greyLighter}>Total:</Text>
                    {campaigns?.campaigns?.length && <Text   my="auto"  > {`${campaigns.campaigns.length} Campaigns`}</Text>}
                </Flex>
            </Flex>
            <CurrentCampaignsTable />
        </Flex>
    )
}

export default CurrentCampaigns