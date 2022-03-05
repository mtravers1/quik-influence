import { ASDMedia } from '@alliance-software-development/asd-media-react';
import {
  Box,
  Image,
  FormControl,
  FormErrorMessage,
  FormLabel,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import quikColorConstants from 'utils/constants/colorConstants';

type UploadImageProps = {
  handleChange: (event: any) => void;
  name: string;
  label: string;
  error?: string;
  previewImage?: boolean;
};
const UploadImage: React.FC<UploadImageProps> = ({
  handleChange,
  name,
  label,
  error,
  previewImage = true,
}) => {
  const [image, setImage] = React.useState('');
  const asdMediaRef: any = React.useRef();
  const { colorMode } = useColorMode();

  const handleFileDone = (fileInfo: any) => {
    fileInfo['smartURL'] = `${fileInfo.cdnUrl}-/preview/-/quality/smart/`;
    setImage(fileInfo.smartURL);
    const event: any = {};
    event.target = {
      name: name,
      value: fileInfo.cdnUrl,
      type: 'image-upload',
      checked: undefined,
    } as unknown as HTMLInputElement;
    handleChange(event);
  };

  const translation = {
    buttons: {
      choose: {
        images: {
          one: '<div className="image">Upload photo</div>',
        },
      },
    },
  };

  return (
    <>
      <FormControl isInvalid={!!error}>
        {previewImage && (
          <>
            {!!label && (
              <FormLabel
                fontSize="1.6rem"
                color={
                  colorMode === 'light' ? quikColorConstants.black : '#FFFFFF'
                }
                htmlFor="multiRangeSelector"
                data-testid="textInput-label"
              >
                {label}
              </FormLabel>
            )}
            {image && (
              <Box maxW={150}>
                <Image src={image} alt="image to upload" />
              </Box>
            )}
          </>
        )}
        <ASDMedia
          // @ts-ignore
          ref={asdMediaRef}
          publicKey={process.env.NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY as string}
          onChange={console.log}
          localeTranslations={translation}
          imagesOnly
          previewStep
          onFileSelect={(file: any) => {
            if (!file) {
              console.log('File removed from widget');
              return;
            }
            file.done((fileInfo: any) => handleFileDone(fileInfo));
          }}
          clearable
        />
        {error && (
          <FormErrorMessage data-testid="textInput-error" fontSize="xl">
            {error}
          </FormErrorMessage>
        )}
      </FormControl>
    </>
  );
};

export default UploadImage;
