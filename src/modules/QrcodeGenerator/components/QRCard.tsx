import { Box, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import { DownloadIcon } from './Icons';

type QRCardProps = {
  title: string;
  qr: string;
};

export default function QRCard({ title, qr }: QRCardProps) {
  const bg = useColorModeValue('gray.100', 'gray.800');

  return (
    <Box
      as="a"
      href={qr}
      download={`${title}.png`}
      shadow="md"
      p="3"
      rounded="md"
      overflow="hidden"
      bg={bg}
      position="relative"
      outline="none"
      role="group"
    >
      <Image src={qr} w="full" />
      <Flex
        position="absolute"
        inset="0"
        bg="#1a202a64"
        color="white"
        align="center"
        justify="center"
        opacity={0}
        pointerEvents="none"
        _groupHover={{ opacity: 1, pointerEvents: 'auto' }}
        _groupFocus={{ opacity: 1, pointerEvents: 'auto' }}
        transition="opacity 0.2s ease-in-out"
      >
        <DownloadIcon fontSize="7xl" />
      </Flex>
    </Box>
  );
}
