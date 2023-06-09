import { Table, Thead, Tr, Th, Tbody, Td, Flex, Box } from '@chakra-ui/react';
import DropdownSelect from 'components/DropdownSelect';
import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { basicTheme } from 'utils/constants/colorConstants';
import { OPEN } from 'utils/constants/formConstants';
import LoaderGif from 'assets/loader.gif';
import NoRecordsMessage from 'components/NoRecordsMessage';
import { getStyles } from 'modules/Leads/css';
import { hasPermission } from 'utils/helpers';
import { CAN_HANDLE_INFLUENCERS } from 'utils/constants';

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
  tableHeaders,
}: RenderCampaignsTableProps) => {
  const style = getStyles(colorMode);
  const permissions = useSelector((state: any) => state.auth.permissions);

  const DropDownList = (campaign: any) => {
    const { isJoinable, CampaignAdmins } = campaign;

    const regularButtons = [
      {
        label: campaign.status === OPEN ? 'Close campaign' : 'Open campaign',
        value:
          campaign.status === OPEN
            ? `closeCampaign:${campaign.id}`
            : `openCampaign:${campaign.id}`,
      },
      { label: 'Archive', value: `archive:${campaign.id}` },
      {
        label: 'View Registered Leads',
        value: `/dashboard/leads/${campaign.id}`,
      },
      {
        label: 'Reports & Tracking',
        value: `/dashboard/campaigns/report/${campaign.id}`,
      },
      {
        label: 'Copy link',
        value: `copy:campaign/${campaign.id}?lp_campaign_id=${campaign.CampaignAdmins[0].lp_campaign_id}&lp_campaign_key=${campaign.CampaignAdmins[0].lp_campaign_key}&campaign_admin_id=${campaign.CampaignAdmins[0].id}`,
      },
      {
        label: 'View Products',
        value: `/dashboard/campaigns/products/${campaign.id}`,
      },
    ];

    const launchButton =
      !isJoinable ||
      (isJoinable &&
        !CampaignAdmins?.[0]?.isOwner &&
        CampaignAdmins?.[0]?.lp_campaign_id &&
        CampaignAdmins?.[0]?.lp_campaign_key)
        ? [
            {
              label: 'Launch',
              value: `/campaign/${campaign.id}?lp_campaign_id=${campaign.CampaignAdmins[0].lp_campaign_id}&lp_campaign_key=${campaign.CampaignAdmins[0].lp_campaign_key}&campaign_admin_id=${campaign.CampaignAdmins[0].id}`,
            },
          ]
        : [];

    const editButton =
      !isJoinable || (isJoinable && CampaignAdmins?.[0]?.isOwner)
        ? [
            {
              label: 'Edit',
              value: `/dashboard/campaigns/edit/${campaign.id}`,
            },
          ]
        : [];

    const viewInfluencersButton = hasPermission(
      CAN_HANDLE_INFLUENCERS,
      permissions
    )
      ? [
          {
            label: 'View influencers',
            value: `/dashboard/campaigns/influencers/${campaign.id}`,
          },
        ]
      : [];

    return [
      ...regularButtons,
      ...launchButton,
      ...editButton,
      ...viewInfluencersButton,
    ];
  };

  return (
    <>
      {!campaigns ? (
        <Flex justifyContent="center">
          <Image width={100} height={100} objectFit="contain" src={LoaderGif} />
        </Flex>
      ) : (
        <Table size="lg" css={style} bg={basicTheme[colorMode]}>
          <Thead>
            <Tr>
              {tableHeaders.map(th => (
                <Th key={th} fontSize="14px">
                  {th}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {campaigns.map((cam: any) => {
              if (
                cam.CampaignAdmins[0].status === 'PENDING' ||
                cam.CampaignAdmins[0].status === 'INACTIVE'
              )
                return null;
              return (
                <Tr key={cam.id}>
                  <Td>{cam.name}</Td>
                  <Td>{cam.paidType}</Td>
                  <Td>NONE</Td>
                  <Td>{cam.status}</Td>
                  <Td>{new Date(cam.createdAt).toLocaleDateString('en-US')}</Td>
                  <Td cursor="pointer">
                    <Flex>
                      <DropdownSelect
                        onChange={onSelect}
                        placeholder="action"
                        noValue={false}
                        options={DropDownList(cam) || []}
                        name="Actions"
                        selectProps={{
                          fontSize: '1.4rem',
                          border: 'none',
                        }}
                      />
                      {/* @ts-expect-error */}
                      {rowLoading[cam.id] && (
                        <Box marginRight="10px">
                          <Image
                            src={LoaderGif}
                            alt=""
                            width={50}
                            height={50}
                          />
                        </Box>
                      )}
                    </Flex>
                  </Td>
                </Tr>
              );
            })}
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
