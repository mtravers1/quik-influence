import React, { useEffect, useState } from 'react';
import {
  useColorMode,
  createStandaloneToast,
  Heading,
  Flex,
  Box,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import {
  archiveCampaign,
  getCampaigns,
  getFirst10Campaigns,
  getSingleCampaign,
  updateCampaign,
} from 'redux/actions/campaigns';
import theme from 'styles/theme';
import { CLOSED, OPEN } from 'utils/constants/formConstants';
import RenderCampaignsTable from './components/RenderCampaignsTable';
import Pagination from 'components/Pagination';

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
  const { campaigns, firstCampaigns, currentPage } = useSelector(
    (state: any) => state
  );
  const toast = createStandaloneToast(theme);
  const router = useRouter();

  const [rowLoading, setRowLoading] = useState({});
  const [pageNumber, setPageNumber] = useState(campaigns?.currentPage ?? 1);

  const page = router.query.page as string;
  const pageSize = router.query.pageSize as string;

  useEffect(() => {
    if (page === currentPage) dispatch(getCampaigns(pageNumber, pageSize));
  }, [pageNumber, pageSize]);

  useEffect(() => {
    if (!firstCampaigns) {
      dispatch(getFirst10Campaigns());
    }
  }, []);

  useEffect(() => {
    if (campaigns?.error) {
      toast({
        title: campaigns.error,
        description: 'Please refresh the page.',
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      });
    }
  }, [campaigns]);

  const handlePaginate = (page: number) => {
    setPageNumber(page);
  };

  const getNameProp = (fields: []): string[] => {
    const names: string[] = [];
    fields?.forEach((field: any) => {
      names.push(field.name);
    });
    return names;
  };

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

      if (value.includes('campaign') && !value.includes('report')) {
        return window.open(`${window.location.origin}${value}`, '_blank');
      }

      if (value.includes('leads/')) {
        const socialFields = campaigns?.campaigns.find(
          (data: any) => data.id === value.split('leads/')[1]
        );
        return router.push(
          `${value}?sc=${getNameProp(socialFields.formData.form).join(',')}`
        );
      }
      return router.push(value);
    }

    const [verb, urlData] = value.split(':');
    const [id, url] = urlData.split('=');

    setRowLoading(prevloadState => ({ ...prevloadState, [id]: true }));

    switch (verb) {
      case 'archive':
        await dispatch(archiveCampaign(id));
        break;
      case 'copy':
        if (typeof window !== 'undefined') {
          navigator.clipboard
            .writeText(`${window.location.origin}/campaign/${id}?lp=${url}`)
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
      case 'closeCampaign':
        await dispatch(updateCampaign(id, { status: CLOSED }));
        break;
      case 'openCampaign':
        await dispatch(updateCampaign(id, { status: OPEN }));
        break;
      default:
        break;
    }

    setRowLoading(prevloadState => ({ ...prevloadState, [id]: false }));
  };

  const renderPagination = () => (
    <Pagination
      currentPage={campaigns.currentPage}
      count={campaigns.count}
      totalPages={campaigns.totalPages}
      onChange={handlePaginate}
      pageSize={pageSize}
    />
  );

  return (
    <>
      <Flex flexDirection="row" justify="space-between" my="12">
        <Heading size="lg" alignSelf="center">
          Current Campaigns
        </Heading>
        {renderPagination()}
      </Flex>
      <Box overflowX="auto" width="100%" padding="10px 0 10px">
        <RenderCampaignsTable
          tableHeaders={tableHeaders}
          colorMode={colorMode}
          campaigns={campaigns?.campaigns}
          rowLoading={rowLoading}
          loading={campaigns?.loading}
          onSelect={onSelect}
        />
      </Box>
      {renderPagination()}
    </>
  );
};

export default CurrentCampaignsTable;
