import { Box, Flex, Heading, useDisclosure, Image } from '@chakra-ui/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomButton from 'components/Button';
import AsdExchangeImage from '../../assets/asd_exchange.png';
import QuikSessionImage from '../../assets/quik_session.png';
import QuikBarberImage from '../../assets/quik_barber.png';
import TipinImage from '../../assets/tipin.png';
import AppIntegrationImage from './AppIntegrationImage';
import IntegratableAppsModal from './IntegratableAppsModal';

export const integratedApps = [
  {
    id: 'kjhgvytcfrd456789po',
    title: 'ASD Exchange',
    src: AsdExchangeImage.src,
    alt: 'Asd Exchange integration Image',
  },
  {
    id: 'kiohug654er6t7yjhftrf',
    title: 'Quik Session',
    src: QuikSessionImage.src,
    alt: 'Quik Session integration Image',
  },
  {
    id: 'joihugfytdrse3456789',
    title: 'Quik Barber',
    src: QuikBarberImage.src,
    alt: 'Quik Barber integration Image',
  },
  {
    id: 'oji876543s4s56ygurt',
    title: 'Tip In',
    src: TipinImage.src,
    alt: 'Tip In integration Image',
  },
  {
    id: 'oji876543s4s56ygurt',
    title: 'Tip In',
    src: TipinImage.src,
    alt: 'Tip In integration Image',
  },
  {
    id: 'oji876543s4s56ygurt',
    title: 'Tip In',
    src: TipinImage.src,
    alt: 'Tip In integration Image',
  },
];

const ApplicationsOverview = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <IntegratableAppsModal isOpen={isOpen} onClose={onClose} />
      <Flex flexDirection="column">
        <Flex mb={20} flexDirection="row" justifyContent="space-between">
          <Heading alignSelf="center" size="xl">
            {' '}
            Applications Dashboard
          </Heading>
          <CustomButton width="25rem" my="0" onClick={onOpen}>
            <FontAwesomeIcon
              icon={faPlus as IconProp}
              style={{ paddingRight: '1rem' }}
            />
            Add a New Application
          </CustomButton>
        </Flex>

        <Box>
          <Heading alignSelf="center" size="lg">
            Integrated Applications
          </Heading>

          <Flex mt={6} width="100%" flexWrap="wrap">
            {integratedApps.map(app => (
              <AppIntegrationImage
                key={app.id}
                imageSrc={app.src}
                altText={app.alt}
              />
            ))}
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default ApplicationsOverview;
