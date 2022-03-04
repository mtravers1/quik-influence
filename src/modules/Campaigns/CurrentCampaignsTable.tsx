import React, { useEffect } from 'react';
import {
  useColorMode,
  Tbody,
  Td,
  Table,
  Thead,
  Tr,
  Th,
  createStandaloneToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import quikColorConstants from 'utils/constants/colorConstants';
import LoaderGif from 'assets/loader.gif';
import { getCampaigns } from 'redux/actions/campaigns';
import DropdownSelect from 'components/DropdownSelect';
import theme from 'styles/theme';

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

  const onSelect = (e: any) => {
    console.log(e);

    const { value } = e.target;
    if (value.includes('/')) router.push(value);
  };

  console.log(campaigns);

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
                  <DropdownSelect
                    onChange={onSelect}
                    placeholder="action"
                    options={
                      [
                        {
                          label: 'Edit',
                          value: `/dashboard/campaigns/edit/${cam.id}`,
                        },
                        { label: 'Archive', value: 'archive' },
                        {
                          label: 'Launch',
                          value: `/dashboard/campaigns/${cam.id}`,
                        },
                        { label: 'View', value: `/dashboard/leads/${cam.id}` },
                        { label: 'Copy link', value: 'copy' },
                        {
                          label:
                            cam.status === 'active'
                              ? 'Set Inactive'
                              : 'Set Active',
                          value:
                            cam.status === 'active'
                              ? 'setInactive'
                              : 'setActive',
                        },
                      ] || []
                    }
                    name="Actions"
                    selectProps={{
                      fontSize: '1.4rem',
                      border: 'none',
                    }}
                  />
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
