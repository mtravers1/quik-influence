import { useState } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { downloadZip } from 'client-zip';

import ZipFolderIcon from './Icons/ZipFolder.icon';
import dataURLtoFile from 'utils/dataURLtoFile';
import downloadFile from 'utils/downloadFile';
import generateRandomString from 'utils/generateRandomString';
import { ZippedUrlAndQR } from 'types/index';

type DownloadBulkProps = {
  zippedCodes: ZippedUrlAndQR;
} & ButtonProps;

export default function DownloadBulk({
  zippedCodes,
  ...props
}: DownloadBulkProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleClick = async () => {
    setIsDownloading(true);
    const files = zippedCodes.map(([title, qr]) => ({
      name: `${title.replace(/\//g, '_')}.png`,
      input: dataURLtoFile(qr, title),
    }));
    const blob = await downloadZip(files).blob();
    downloadFile(`${generateRandomString()}.zip`, blob);
    setIsDownloading(false);
  };

  return (
    <Button
      size="lg"
      leftIcon={<ZipFolderIcon fontSize="3xl" />}
      colorScheme="red"
      isLoading={isDownloading}
      loadingText="Downloading"
      onClick={handleClick}
      {...props}
    >
      Download
    </Button>
  );
}
