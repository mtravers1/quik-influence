import { useMemo, useState } from 'react';
import { Button, Flex, IconButton, Text } from '@chakra-ui/react';
import { createWorkerFactory, useWorker } from '@shopify/react-web-worker';

import { useSettings } from '../context/Settings.context';
import QRInput from './QRInput';
import pluralize from 'utils/pluralize';
import { MAX_CODES } from '../constants';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';

const createQRWorker = createWorkerFactory(() => import('utils/qr.worker'));

type QRFormProps = {
  onSubmit: (zippedValues: any) => void;
};

export default function QRForm({ onSubmit }: QRFormProps) {
  const qrWokrer = useWorker(createQRWorker);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { settings } = useSettings();
  const [values, setValues] = useState([{ id: 1, text: '' }]);

  const numberOfQRCodes = values.length;
  const isInvalid = numberOfQRCodes > MAX_CODES;
  const isInputValid = useMemo(
    () => values.every(({ text }) => text.length > 0),
    [values]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isInputValid) return;

    setIsSubmitting(true);

    const qrCodeImages = await qrWokrer.generateImages(values, settings);

    const zippedRawData = values.map((rawData, idx) => [
      `quikinfluence QRCode ${idx + 1} - ${Date.now()}`,
      qrCodeImages[idx],
    ]);

    onSubmit(zippedRawData);
    setIsSubmitting(false);
  };

  const handleNewField = () => {
    setValues([...values, { id: values.length + 1, text: '' }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      {values.map((value, idx) => (
        <Flex>
          <Text alignSelf="center" p="5" fontWeight="medium">
            {idx + 1}.
          </Text>
          <QRInput
            value={values[idx].text}
            onChange={value => {
              setValues(
                values.map((v, i) => (i === idx ? { ...v, text: value } : v))
              );
            }}
            isInvalid={isInvalid}
          />
          {idx !== 0 && (
            <IconButton
              alignSelf="center"
              ml="2"
              aria-label="remove field"
              icon={<CloseIcon color="red" />}
              onClick={() => setValues(values.filter(v => v.id !== value.id))}
            />
          )}
        </Flex>
      ))}

      <Flex justify="flex-end">
        <Button
          leftIcon={<AddIcon />}
          colorScheme="red"
          variant="solid"
          onClick={handleNewField}
        >
          Add new data
        </Button>
      </Flex>
      <Button
        type="submit"
        disabled={!isInputValid || isInvalid}
        size="lg"
        display="flex"
        mt="5"
        mx="auto"
        w="sm"
        maxW="full"
        isLoading={isSubmitting}
      >
        Generate {numberOfQRCodes} QR {pluralize('code', numberOfQRCodes)}{' '}
        {numberOfQRCodes ? '🚀' : '😢'}
      </Button>
    </form>
  );
}
