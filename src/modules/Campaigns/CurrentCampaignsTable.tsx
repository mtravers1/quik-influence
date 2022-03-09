import React, { useEffect, useState } from 'react';
import { useColorMode, createStandaloneToast } from '@chakra-ui/react';
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

  useEffect(() => {
    if (page === currentPage) dispatch(getCampaigns(pageNumber));
  }, [pageNumber]);

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
        duration: null,
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
    fields.forEach((field: any) => {
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

      if (value.includes('campaign')) {
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

    const [verb, id] = value.split(':');

    setRowLoading(prevloadState => ({ ...prevloadState, [id]: true }));

    switch (verb) {
      case 'archive':
        await dispatch(archiveCampaign(id));
        break;
      case 'copy':
        if (typeof window !== 'undefined') {
          navigator.clipboard
            .writeText(`${window.location.origin}/campaign/${id}`)
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

  return (
    <>
      <RenderCampaignsTable
        tableHeaders={tableHeaders}
        colorMode={colorMode}
        campaigns={campaigns?.campaigns}
        rowLoading={rowLoading}
        loading={campaigns?.loading}
        onSelect={onSelect}
      />
      <Pagination
        currentPage={campaigns.currentPage}
        count={campaigns.count}
        totalPages={campaigns.totalPages}
        onChange={handlePaginate}
      />
    </>
  );
};

export default CurrentCampaignsTable;
