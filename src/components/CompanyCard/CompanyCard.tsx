import {
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faMoneyBillWaveAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import quikColorConstants, {
  cardThemeColor,
  borderThemeColor,
} from 'utils/constants/colorConstants';

type CompanyCardProps = {
  companyName: string;
  companyLogo?: string;
  users: number;
  leads: number;
  revenue: number;
};

const CompanyCard = ({
  companyName,
  companyLogo,
  users,
  leads,
  revenue,
}: CompanyCardProps) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      padding={[6, 6]}
      background={cardThemeColor[colorMode]}
      width="100%"
      borderRadius="8px"
      flexWrap="wrap"
    >
      <Flex width="100%" marginBottom="15px">
        <Box
          height="48px"
          width="48px"
          bgColor={quikColorConstants.influenceRedWithOpacity}
          border={`1px solid ${borderThemeColor[colorMode]}`}
          marginRight="6px"
          borderRadius="10px"
        ></Box>
        <Text margin="auto 0" fontSize="2xl" letterSpacing="0.2px">
          {companyName}
        </Text>
      </Flex>
      <Divider />

      <Flex width="100%" marginTop="15px" justify="space-between">
        <Flex paddingX="1px">
          <FontAwesomeIcon
            style={{
              margin: 'auto',
            }}
            size="sm"
            icon={faUser as IconProp}
          />
          <Text paddingLeft="5px" fontSize="lg" margin="auto">
            {users} Users
          </Text>
        </Flex>

        <Flex paddingX="1px">
          <FontAwesomeIcon
            style={{
              margin: 'auto',
            }}
            size="sm"
            icon={faUser as IconProp}
          />
          <Text paddingLeft="5px" fontSize="lg" margin="auto">
            {leads} Leads
          </Text>
        </Flex>

        <Flex paddingX="1px">
          <FontAwesomeIcon
            style={{
              margin: 'auto',
            }}
            size="sm"
            icon={faMoneyBillWaveAlt as IconProp}
          />
          <Text paddingLeft="5px" fontSize="lg" margin="auto">
            {revenue}K
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CompanyCard;
