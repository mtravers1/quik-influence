import { Flex, Heading, Box, useColorMode, Text } from "@chakra-ui/react"
import DataTable from "components/DataTable"
import DropdownSelect from "components/DropdownSelect"
import quikColorConstants from "utils/constants/colorConstants"


const CurrentCampaigns = () => {
    const {colorMode} = useColorMode()

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
            <Heading size="lg">Currrent Campaigns</Heading>
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
                    <Text   my="auto"  >3 Campaings</Text>
                </Flex>
            </Flex>

            <DataTable />
        </Flex>
    )
}

export default CurrentCampaigns