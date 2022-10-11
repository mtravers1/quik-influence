import NextImage from 'next/image';
import { chakra, Box } from '@chakra-ui/react';

const Image = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: prop =>
    ['width', 'height', 'src', 'alt', '_hover'].includes(prop),
});

const CustomImage = (props: any) => {
  const { src, width, height, alt, ...rest } = props;

  return (
    <Box position="relative" {...rest}>
      <Image src={src} alt={alt} width={width} height={height} />
    </Box>
  );
};

export default CustomImage;
