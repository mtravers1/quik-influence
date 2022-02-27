
import React, { useEffect } from "react";
import { Flex, Heading, Box, useColorMode, Tbody, Td, Table, Thead, Tr, Th, createStandaloneToast } from "@chakra-ui/react"
import quikColorConstants, { themeColor, borderThemeColor } from "utils/constants/colorConstants"
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { makeStore } from "store";
import LoaderGif from 'assets/loader.gif'
import { getCampaigns } from 'redux/actions/campaigns';
import theme from "styles/theme";
import Image from "next/image";


const tableHeaders = [
  "Campaign",
  "Model",
  "Engagement Type",
  "Created On",
  "Actions"
]


const CurrentCampaignsTable = () => {
  const { colorMode } = useColorMode()
  const dispatch = useDispatch();
  const campaigns = useSelector((state: any) => state.campaigns)
  const toast = createStandaloneToast(theme)


  useEffect(() => {
    dispatch(getCampaigns())
  }, [])

  useEffect(() => {
    if (campaigns.error) {
      toast({
        title: campaigns.error,
        description: 'Please refresh the page.',
        status: 'error',
        duration: null,
        isClosable: false,
        position: 'top-right'
      });
    }
  }, [campaigns])

  return (
    <>{
      !campaigns.campaigns ? <Image width='50px' objectFit="contain" src={LoaderGif} />
        :
        <Table size="lg" bg={colorMode === 'light' ? 'white' : ''}>
          <Thead >
            <Tr border={`2px solid ${quikColorConstants.black}`} >
              {tableHeaders.map(th => <Th fontSize="14px" color={colorMode === "light" ? quikColorConstants.black : "white"} >{th}</Th>)}
            </Tr>
          </Thead>
          <Tbody>
            {
              campaigns.campaigns.map((cam: any) =>
                <Tr border={`2px solid ${quikColorConstants.black}`}>

                  <Td>{cam.name}</Td>
                  <Td>{cam.paidType}</Td>
                  <Td>NONE</Td>
                  <Td>{(new Date(cam.createdAt)).toLocaleDateString('en-US')}</Td>
                  <Td cursor="pointer">
                    <Link href={`/campaigns/${cam.id}`}>
                      <span>View Campaign &nbsp;
                        <FontAwesomeIcon size="lg" icon={faChevronCircleRight as IconProp} />
                      </span>
                    </Link>
                  </Td>
                </Tr>)
            }
          </Tbody>
        </Table>}
    </>
  )
}

export default CurrentCampaignsTable