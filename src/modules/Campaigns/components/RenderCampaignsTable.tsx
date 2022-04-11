import { Table, Thead, Tr, Th, Tbody, Td, Flex, Box } from "@chakra-ui/react";
import DropdownSelect from "components/DropdownSelect";
import React from "react";
import Image from "next/image";
import quikColorConstants, { basicTheme } from "utils/constants/colorConstants";
import { OPEN } from "utils/constants/formConstants";
import LoaderGif from "assets/loader.gif";
import NoRecordsMessage from "components/NoRecordsMessage";
import { getStyles } from "modules/Leads/css";

interface RenderCampaignsTableProps {
  colorMode: string;
  campaigns: any;
  rowLoading: {};
  loading?: boolean;
  onSelect: (e: any) => void;
  tableHeaders: string[];
}

const RenderCampaignsTable = ({
  colorMode,
  campaigns,
  loading,
  rowLoading,
  onSelect,
  tableHeaders
}: RenderCampaignsTableProps) => {
  const style = getStyles(colorMode);
  return (
    <>
      {!campaigns ? (
        <Image width={100} height={100} objectFit="contain" src={LoaderGif} />
      ) : (
        <Table size="lg" css={style} bg={basicTheme[colorMode]}>
          <Thead>
            <Tr>
              {tableHeaders.map((th) => (
                <Th key={th} fontSize="14px">
                  {th}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {campaigns.map((cam: any) => (
              <Tr key={cam.id}>
                <Td>{cam.name}</Td>
                <Td>{cam.paidType}</Td>
                <Td>NONE</Td>
                <Td>{cam.status}</Td>
                <Td>{new Date(cam.createdAt).toLocaleDateString("en-US")}</Td>
                <Td cursor="pointer">
                  <Flex>
                    <DropdownSelect
                      onChange={onSelect}
                      placeholder="action"
                      noValue={false}
                      options={
                        [
                          {
                            label:
                              cam.status === OPEN
                                ? "Close campaign"
                                : "Open campaign",
                            value:
                              cam.status === OPEN
                                ? `closeCampaign:${cam.id}`
                                : `openCampaign:${cam.id}`
                          },
                          {
                            label: "Edit",
                            value: `/dashboard/campaigns/edit/${cam.id}`
                          },
                          { label: "Archive", value: `archive:${cam.id}` },
                          {
                            label: "Launch",
                            value: `/campaign/${cam.id}`
                          },
                          {
                            label: "View Registered Leads",
                            value: `/dashboard/leads/${cam.id}`
                          },
                          { label: "Copy link", value: `copy:${cam.id}` }
                        ] || []
                      }
                      name="Actions"
                      selectProps={{
                        fontSize: "1.4rem",
                        border: "none"
                      }}
                    />
                    {/* @ts-expect-error */}
                    {rowLoading[cam.id] && (
                      <Box marginRight="10px">
                        <Image src={LoaderGif} alt="" width={50} height={50} />
                      </Box>
                    )}
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
      {campaigns?.length === 0 && !loading && (
        <NoRecordsMessage>
          <>
            No Records has been made <br /> Please click the "Create a New
            Campaign" button
          </>
        </NoRecordsMessage>
      )}
    </>
  );
};

export default RenderCampaignsTable;
