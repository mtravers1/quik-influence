import {
  Flex,
  Heading,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import DropdownSelect from "components/DropdownSelect";
import { useSelector } from "react-redux";
import quikColorConstants from "utils/constants/colorConstants";
import CurrentCampaignsTable from "./CurrentCampaignsTable";

const CurrentCampaigns = () => {
  const campaigns = useSelector((state: any) => state.campaigns);
  const sortOptions = [
    {
      label: "Alphabet",
      value: "alpha"
    }
  ];
  const handleSortChange = (event: any) => {};
  return (
    <Flex flexDirection="column" mt="12">
      <Heading size="lg">Current Campaigns</Heading>
      <Flex width="100%" justifyContent="right" mb={8}>
        <Flex>
          <Text width="10rem" my="auto" color={quikColorConstants.greyLighter}>
            Sort By:
          </Text>
          <DropdownSelect
            options={sortOptions}
            onChange={handleSortChange}
            selectProps={{
              border: 0,
              width: "10rem",
              fontSize: "xl"
            }}
          />
        </Flex>
        <Flex>
          <Text mr={4} my="auto" color={quikColorConstants.greyLighter}>
            Total:
          </Text>
          {campaigns?.campaigns?.length && (
            <Text my="auto"> {`${campaigns.campaigns.length} Campaings`}</Text>
          )}
        </Flex>
      </Flex>
      <CurrentCampaignsTable />
    </Flex>
  );
};

export default CurrentCampaigns;
