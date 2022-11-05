import { NavBar } from 'components/MarketPlace/NavBar';
import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { FC } from 'react';
import { MarketPlaceFooter } from 'components/MarketPlace/MarketPlaceFooter';
import { useDispatch, useSelector } from 'react-redux';
import { closeMessagModal } from 'redux/actions/general';

export const MarketPlaceLayout: FC<{ className?: string }> = ({
  children,
  className,
}) => {
  const {
    generals: { messageModal },
  } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeMessagModal());
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        width="100%"
        background="#121212"
        className={className || 'market-place'}
      >
        <NavBar />
        <Box flexGrow={1}>{children}</Box>

        <MarketPlaceFooter />
      </Box>

      <Modal
        blockScrollOnMount={false}
        isOpen={messageModal.open}
        onClose={handleClose}
      >
        <ModalOverlay />
        <ModalContent
          minW={{ base: '90vw', xl: '40vw' }}
          p="8"
          borderRadius={0}
        >
          <ModalBody>
            {!messageModal.message.isError && (
              <Box fontSize="16px">
                {messageModal.message?.title && (
                  <Box
                    marginBottom="10px"
                    fontWeight="bold"
                    fontSize="25px"
                    color="Red"
                  >
                    {messageModal.message?.title}
                  </Box>
                )}

                {messageModal.message?.description && (
                  <Box marginBottom="10px">
                    {messageModal.message?.description}
                  </Box>
                )}
              </Box>
            )}

            {messageModal.message.isError && (
              <Box fontSize="16px">
                <Box marginBottom="30px">
                  Please bear with us, An Error occured!
                </Box>

                {messageModal.message?.title && (
                  <Box marginBottom="10px" fontWeight="bold" fontSize="20px">
                    {messageModal.message?.title}
                  </Box>
                )}

                {messageModal.message?.description && (
                  <Box marginBottom="10px">
                    {messageModal.message?.description}
                  </Box>
                )}
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
