import React, { useEffect, useState } from 'react';
import {
  useColorMode,
  Tbody,
  Td,
  Table,
  Thead,
  Tr,
  Th,
  createStandaloneToast,
  Flex,
  Box,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import quikColorConstants from 'utils/constants/colorConstants';
import LoaderGif from 'assets/loader.gif';
import {
  archiveCampaign,
  getCampaigns,
  getSingleCampaign,
  updateCampaign,
} from 'redux/actions/campaigns';
import DropdownSelect from 'components/DropdownSelect';
import theme from 'styles/theme';
import { dataBody } from 'utils/constants/leadsPageTableData';
import loader from 'assets/loader.gif';

const tableHeaders = [
  'Campaign',
  'Model',
  'Engagement Type',
  'Status',
  'Created On',
  'Actions',
];

const CurrentCampaignsTable = () => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const campaigns = useSelector((state: any) => state.campaigns);
  const toast = createStandaloneToast(theme);

  const [loading, setLoading] = useState({});

  const router = useRouter();

  useEffect(() => {
    dispatch(getCampaigns());
  }, []);

  useEffect(() => {
    if (campaigns?.error) {
      toast({
        title: campaigns.error,
        description: 'Please refresh the page.',
        status: 'error',
        duration: null,
        isClosable: true,
        position: 'top-right',
      });
    }
  }, [campaigns]);

  const onSelect = async (e: any) => {
    const { value } = e.target;

    if (value.includes('/')) {
      if (value.includes('edit')) {
        dispatch(
          getSingleCampaign(
            undefined,
            campaigns?.campaigns.find(
              (data: any) => data.id === value.split('edit/')[1]
            )
          )
        );
      }

      return router.push(value);
    }

    const [verb, id] = value.split(':');

    setLoading(prevloadState => ({ ...prevloadState, [id]: true }));

    switch (verb) {
      case 'archive':
        await dispatch(archiveCampaign(id));
        break;
      case 'copy':
        if (typeof window !== 'undefined') {
          navigator.clipboard
            .writeText(`${window.location.host}/campaign/${id}`)
            .then(success =>
              toast({
                title: 'Copied to clipboard',
                status: 'success',
                duration: 4000,
                isClosable: true,
                position: 'top-right',
              })
            );
        }
        break;
      case 'setInactive':
        await dispatch(updateCampaign(id, { status: 'inactive' }));
        break;
      case 'setActive':
        await dispatch(updateCampaign(id, { status: 'active' }));
        break;
      default:
        break;
    }

    setLoading(prevloadState => ({ ...prevloadState, [id]: false }));
  };

  return (
    <>
      {!campaigns?.campaigns ? (
        <Image width="50px" objectFit="contain" src={LoaderGif} />
      ) : (
        <Table size="lg" bg={colorMode === 'light' ? 'white' : ''}>
          <Thead>
            <Tr border={`2px solid ${quikColorConstants.black}`}>
              {tableHeaders.map(th => (
                <Th
                  fontSize="14px"
                  color={
                    colorMode === 'light' ? quikColorConstants.black : 'white'
                  }
                >
                  {th}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {campaigns.campaigns.map((cam: any) => (
              <Tr border={`2px solid ${quikColorConstants.black}`}>
                <Td>{cam.name}</Td>
                <Td>{cam.paidType}</Td>
                <Td>NONE</Td>
                <Td>{cam.status || 'Inactive'}</Td>
                <Td>{new Date(cam.createdAt).toLocaleDateString('en-US')}</Td>
                <Td cursor="pointer">
                  <Flex>
                    <DropdownSelect
                      onChange={onSelect}
                      placeholder="action"
                      options={
                        [
                          {
                            label:
                              cam.status === 'active'
                                ? 'Set Inactive'
                                : 'Set Active',
                            value:
                              cam.status === 'active'
                                ? `setInactive:${cam.id}`
                                : `setActive:${cam.id}`,
                          },
                          {
                            label: 'Edit',
                            value: `/dashboard/campaigns/edit/${cam.id}`,
                          },
                          { label: 'Archive', value: `archive:${cam.id}` },
                          {
                            label: 'Launch',
                            value: `/campaign/${cam.id}`,
                          },
                          {
                            label: 'View',
                            value: `/dashboard/leads/${cam.id}`,
                          },
                          { label: 'Copy link', value: `copy:${cam.id}` },
                        ] || []
                      }
                      name="Actions"
                      selectProps={{
                        fontSize: '1.4rem',
                        border: 'none',
                      }}
                    />
                    {/* @ts-expect-error */}
                    {loading[cam.id] && (
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
    </>
  );
};

export default CurrentCampaignsTable;

{
  /* <Link href={`/campaigns/${cam.id}`}>
<span>
  View Campaign &nbsp;
  <FontAwesomeIcon
    size="lg"
    icon={faChevronCircleRight as IconProp}
  />
</span>
</Link> */
}
