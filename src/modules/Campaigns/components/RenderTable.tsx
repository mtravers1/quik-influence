import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Flex,
  Box,
  Center,
  Text
} from "@chakra-ui/react";
import DropdownSelect from "components/DropdownSelect";
import React from "react";
import Image from "next/image";
import loader from "assets/loader.gif";
import quikColorConstants from "utils/constants/colorConstants";
import { OPEN } from "utils/constants/formConstants";
import LoaderGif from "assets/loader.gif";

interface RenderTableProps {
  colorMode: string;
  campaigns: any;
  rowLoading: {};
  loading?: boolean;
  onSelect: (e: any) => void;
  tableHeaders: string[];
}

const RenderTable = ({
  colorMode,
  campaigns,
  loading,
  rowLoading,
  onSelect,
  tableHeaders
}: RenderTableProps) => {
  return (
    <>
      {!campaigns ? (
        <Image width="30px" objectFit="contain" src={LoaderGif} />
      ) : (
        <Table size="lg" bg={colorMode === "light" ? "white" : ""}>
          <Thead>
            <Tr border={`2px solid ${quikColorConstants.black}`}>
              {tableHeaders.map((th) => (
                <Th
                  key={th}
                  fontSize="14px"
                  color={
                    colorMode === "light" ? quikColorConstants.black : "white"
                  }
                >
                  {th}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {campaigns.map((cam: any) => (
              <Tr key={cam.id} border={`2px solid ${quikColorConstants.black}`}>
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
                            label: "View",
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
                        <Image src={loader} alt="" width={50} height={50} />
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
        <Flex minW="100%" maxW="100%" my={10} mx={10} justify="center">
          <Center>
            <Text align="center" lineHeight={2}>
              No Records has been made <br /> Please click the "Create a New
              Campaign" button
            </Text>
          </Center>
        </Flex>
      )}
    </>
  );
};

export default RenderTable;
