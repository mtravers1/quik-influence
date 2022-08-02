import { QRCodeToDataURLOptions } from 'qrcode';
import { QrCodeRawData } from 'types';

import getQRCodeImages from './getQRCodeImages';

export async function generateImages(
  values: QrCodeRawData[],
  options?: QRCodeToDataURLOptions,
): Promise<string[]> {
  const qrCodeImages = await getQRCodeImages(values, options);
  return qrCodeImages;
}
