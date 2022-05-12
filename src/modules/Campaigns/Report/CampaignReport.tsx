import React from 'react';
import {
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  List,
  ListItem,
  useColorMode,
  Box,
  useToast,
  Center,
} from '@chakra-ui/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronLeft,
  faCloudDownloadAlt,
} from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';

import quikColorConstants, {
  basicTextTheme,
  basicTheme,
  cardThemeColor,
  chipBg,
} from 'utils/constants/colorConstants';
import CampaignReportSummary from '../components/CampaignReportSummary';
import { TextInput } from 'components/Input';
import DropdownSelect from 'components/DropdownSelect';
import DataTable from 'components/DataTable';
import { exportToExcel } from 'utils/exportToExcel';

interface IProps {
  campaign: any;
  campaignReports: any;
}
const textInputLabelProps = {
  fontSize: 'small',
  fontWeight: 'semibold',
};

const formControlProps = {
  maxW: '30rem',
};

const columns = [
  {
    Header: 'Lead Id',
    accessor: 'leadId',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Phone',
    accessor: 'phone',
  },
  {
    Header: 'Affilliate',
    accessor: 'affilliate',
  },
  {
    Header: 'Opened On',
    accessor: 'openedOn',
  },
  {
    Header: 'Accepted',
    accessor: 'accepted',
  },
  {
    Header: 'Rejected',
    accessor: 'rejected',
  },
  {
    Header: 'Unsub',
    accessor: 'unsub',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
];

const CampaignReport = ({ campaign, campaignReports }: IProps) => {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const toast = useToast();

  const textInputProps = React.useMemo(
    () => ({
      isDisabled: true,
      py: '1',
      maxW: '30rem',
      bg: basicTheme[colorMode],
      color: basicTextTheme[colorMode],
    }),
    []
  );

  const [selectedReports, setSelectedReports] = React.useState<any[]>([]);

  const onRowSelected = (selectedData: any[]) => {
    setSelectedReports(selectedData);
  };

  const handleReportsDownload = () => {
    if (selectedReports.length < 1)
      return toast({
        title: 'Download Error',
        description: 'No records selected to download!',
        status: 'error',
        duration: 4000,
        isClosable: true,
        variant: 'top-accent',
      });
    // download as excel
    exportToExcel({
      data: selectedReports,
      fileName: 'Quikinfluence Campaign Reports ' + new Date().toISOString(),
    });
  };

  if (!(campaign || campaignReports)) {
    return (
      <Box>
        <Text>Something went wrong, try again!</Text>
      </Box>
    );
  }

  return (
    <>
      <Flex flexDirection="column">
        {/* Back arrow  */}
        <Flex
          flexDir="row"
          alignItems="center"
          onClick={router.back}
          _hover={{ cursor: 'pointer' }}
        >
          <FontAwesomeIcon icon={faChevronLeft as IconProp} size="xs" />
          <Text fontWeight="bold" pl="2">
            Back
          </Text>
        </Flex>

        <Heading size="md" mt="16">
          Campaign: {campaign.name}
        </Heading>

        {/* Report Summary Widget  */}
        <Flex
          flexDirection="column"
          mt="12"
          background={cardThemeColor[colorMode]}
          borderRadius="8px"
          maxW="37rem"
        >
          <CampaignReportSummary />
        </Flex>

        {/* Form  */}
        <SimpleGrid
          columns={2}
          rowGap="10"
          spacing={1}
          mt="32"
          mb="20"
          maxW="container.sm"
        >
          <GridItem maxW="30rem">
            <TextInput
              type="text"
              label="Campaign Name"
              value={campaign.name}
              TextInputProps={{ ...textInputProps }}
              formControlProps={{ ...formControlProps }}
              labelProps={{ ...textInputLabelProps }}
              handleChange={() => {}}
            />
          </GridItem>
          <GridItem>
            <TextInput
              type="text"
              label="Campaign Start Date"
              value={format(new Date(campaign.campaignDate), 'dd/MM/yyyy')}
              TextInputProps={{ ...textInputProps }}
              formControlProps={{ ...formControlProps }}
              labelProps={{ ...textInputLabelProps }}
              handleChange={() => {}}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <DropdownSelect
              selectProps={{
                name: 'type',
                value: campaign.EmailSmsRecord.type,
                bg: basicTheme[colorMode],
                isDisabled: true,
              }}
              onChange={() => {}}
              placeholder={campaign.EmailSmsRecord.type}
              label={'Campaign Type'}
              labelProps={{ ...textInputLabelProps }}
              options={[
                {
                  value: campaign.EmailSmsRecord.type,
                  label: campaign.EmailSmsRecord.type,
                },
              ]}
            />
          </GridItem>
          <GridItem colSpan={2}>
            <Heading as="h6" size="lg" mt="16">
              Campaign Selections
            </Heading>
          </GridItem>
          <GridItem maxW="30rem">
            <TextInput
              type="text"
              label="Gender"
              value={'Male'}
              TextInputProps={{ ...textInputProps }}
              formControlProps={{ ...formControlProps }}
              labelProps={{ ...textInputLabelProps }}
              handleChange={() => {}}
            />
          </GridItem>
          <GridItem maxW="30rem">
            <TextInput
              type="text"
              label="Age"
              value={'10-35'}
              TextInputProps={{ ...textInputProps }}
              formControlProps={{ ...formControlProps }}
              labelProps={{ ...textInputLabelProps }}
              handleChange={() => {}}
            />
          </GridItem>

          <GridItem maxW="30rem" mt="12">
            <Text {...textInputLabelProps} mb="8">
              Interest
            </Text>
            <List display="flex" flexDir="row">
              <ListItem
                fontSize="lg"
                alignItems="center"
                bg={chipBg[colorMode]}
                px="5"
                mr="6"
                h="8"
                borderRadius="xl"
              >
                Sports
              </ListItem>
              <ListItem
                fontSize="lg"
                alignItems="center"
                bg={chipBg[colorMode]}
                px="5"
                mr="6"
                h="8"
                borderRadius="xl"
              >
                TV Shows
              </ListItem>
              <ListItem
                fontSize="lg"
                alignItems="center"
                bg={chipBg[colorMode]}
                px="5"
                mr="6"
                h="8"
                borderRadius="xl"
              >
                Animals
              </ListItem>
            </List>
          </GridItem>

          <GridItem maxW="30rem" mt="12">
            <Text {...textInputLabelProps} mb="8">
              Locations
            </Text>
            <List display="flex" flexDir="row">
              <ListItem
                fontSize="lg"
                alignItems="center"
                bg={chipBg[colorMode]}
                px="5"
                mr="6"
                h="8"
                borderRadius="xl"
              >
                Georgia
              </ListItem>
              <ListItem
                fontSize="lg"
                alignItems="center"
                bg={chipBg[colorMode]}
                px="5"
                mr="6"
                h="8"
                borderRadius="xl"
              >
                Florida
              </ListItem>
            </List>
          </GridItem>
        </SimpleGrid>

        <Box overflowX="auto" width="100%" maxW="70rem" padding="10px 0 10px">
          {/* Download View */}
          {!campaignReports || campaignReports.length < 1 ? (
            <Center>
              <Text fontWeight="bold">
                Reports not available yet! Kindly check back in a few moments.
              </Text>
            </Center>
          ) : (
            <>
              <Flex justifyContent="flex-end" mb="8">
                <Text
                  fontWeight="semibold"
                  fontSize="2xl"
                  onClick={handleReportsDownload}
                  _hover={{ cursor: 'pointer' }}
                >
                  Download Record List
                </Text>
                <FontAwesomeIcon
                  onClick={handleReportsDownload}
                  color={quikColorConstants.influenceRed}
                  icon={faCloudDownloadAlt as IconProp}
                  style={{ margin: 'auto 10px' }}
                />
              </Flex>

              {/* Report DataTable */}
              <DataTable
                title="Contacts"
                columns={columns}
                data={campaignReports}
                pageSize={12}
                onRowSelected={onRowSelected}
                variant="leadTable"
              />
            </>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default CampaignReport;
