import QRCode, { QRCodeToDataURLOptions } from 'qrcode';
import { QrCodeRawData } from 'types';

const defaultOptions: Partial<QRCodeToDataURLOptions> = {
  errorCorrectionLevel: 'M',
  width: 256,
};

export default async function getQRImages(
  list: QrCodeRawData[],
  options?: QRCodeToDataURLOptions,
): Promise<string[]> {
  const qrCodeUrlPromises = list.map(({ text }) =>
    QRCode.toDataURL(text, { ...defaultOptions, ...options }),
  );
  const images = await Promise.all(qrCodeUrlPromises);
  return images;
}
