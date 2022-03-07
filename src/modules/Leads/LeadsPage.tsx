import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Flex,
  Center,
  useColorMode
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { basicTheme, tableTextTheme } from "utils/constants/colorConstants";
import { format } from "date-fns";
import Pagination from "components/Pagination";
import { getStyles } from "./css";

const LeadsPage = ({
  leads,
  pageType = "singleCampaign"
}: {
  leads: any;
  pageType?: string;
}) => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  const style = getStyles(colorMode);

  const handleChange = (page: any) => {
    router.push(`?page=${page}`);
  };

  const status = pageType === "allLeads" ? [] : ["status"];

  const tableHeader = [
    "First Name",
    "Last Name",
    "Email",
    "Phone",
    "Gender",
    // "DOB",
    "City|State|Zip Code",
    "Instagram",
    "Twitter",
    "Tik Tok",
    "Facebook",
    ...status
  ];

  return (
    <Box>
      <Box fontWeight="600" fontSize="24px">
        Records / Leads
      </Box>

      {!leads?.data?.length ? (
        <Center flexDir="column" minH="80vh" height="100%">
          <Box as="h2" fontSize="40px" marginBottom="10px" fontWeight="600">
            You don't have any Leads yet
          </Box>
          <Box fontSize="18px">
            Copy your link from the campaign lists amd share with your users
          </Box>
        </Center>
      ) : (
        <Flex w="100%">
          <Box flexGrow={1}>
            <Table
              size="lg"
              marginTop={10}
              css={style}
              bg={basicTheme[colorMode]}
            >
              <Thead>
                <Tr>
                  {tableHeader.map((th, i) => (
                    <Th
                      fontSize="16px"
                      textTransform="capitalize"
                      fontFamily="Avenir"
                      key={`table_h_2_${i}`}
                      whiteSpace="nowrap"
                    >
                      {th}
                    </Th>
                  ))}
                </Tr>
              </Thead>

              <Tbody>
                {leads.data.map((data: any, i: number) => (
                  <Tr key={`lead_data_${i}`}>
                    <Td whiteSpace="nowrap" textTransform="capitalize">
                      {data.firstName || "N/A"}
                    </Td>
                    <Td whiteSpace="nowrap" textTransform="capitalize">
                      {data.lastName || "N/A"}
                    </Td>
                    <Td whiteSpace="nowrap">{data.email || "N/A"}</Td>
                    <Td>{data.phone}</Td>
                    <Td textTransform="capitalize">{data.gender || "N/A"}</Td>
                    {/* <Td>
                      {(data.dateOfBirth &&
                        format(new Date(data.dateOfBirth), "yyyy-mm-dd")) ||
                        "N/A"}
                    </Td> */}
                    <Td textTransform="capitalize">
                      {`${data.city || ""} ${data.state || ""} ${
                        data.zipCode || ""
                      }`}
                    </Td>
                    <Td textTransform="capitalize">
                      {data.instagramId || "N/A"}
                    </Td>
                    <Td textTransform="capitalize">
                      {data.twitterHandle || "N/A"}
                    </Td>
                    <Td textTransform="capitalize">
                      {data.tiktokHandle || "N/A"}
                    </Td>
                    <Td textTransform="capitalize">
                      {data.facebookHandle || "N/A"}
                    </Td>
                    {status.length > 0 && (
                      <Td>{data?.UserCampaigns?.at(0)?.paymentStatus}</Td>
                    )}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Flex>
      )}

      <Pagination
        totalPages={leads.meta.totalPages}
        currentPage={leads.meta.currentPage}
        count={leads.meta.count}
        onChange={handleChange}
      />
    </Box>
  );
};

export default LeadsPage;
