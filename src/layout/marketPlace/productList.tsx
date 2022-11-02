import { FC, useState } from 'react';
import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { ProductDataType } from 'modules/MarketPlace/interfaces';
import { MarketProductCarousel } from 'components/MarketPlace/ProductCarousel';
import { ProductInfo } from 'components/MarketPlace/ProductInfo';

export const ProductList: FC<{ children: any }> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<ProductDataType | null>(
    null
  );

  const closeModal = () => {
    setShowModal(false);
    setCurrentProduct(null);
  };

  const openQuickViewModal = (product: ProductDataType) => {
    setCurrentProduct(product);
    setShowModal(true);
  };

  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns={{
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        maxWidth="1200px"
        margin="30px auto"
        padding="0 15px"
        gridGap="30px"
      >
        {children(openQuickViewModal)}
      </Box>

      <Modal
        blockScrollOnMount={true}
        isOpen={showModal}
        onClose={closeModal}
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent
          minW={{ base: '90vw', lg: '960px' }}
          borderRadius={0}
          background="#1f1f1f"
        >
          <ModalBody padding="30px 15px">
            {currentProduct && (
              <Box
                display="flex"
                padding="0 15px"
                flexDirection={{ base: 'column', md: 'row' }}
              >
                <Box
                  width={{ base: '100%', md: '50%' }}
                  flexShrink={0}
                  marginBottom={{ base: '40px', md: '0' }}
                >
                  <MarketProductCarousel
                    images={currentProduct.meta.images}
                    showThumbs={Boolean(currentProduct.meta.images.length > 0)}
                  />
                </Box>

                <Box
                  flexShrink={0}
                  width={{ base: '100%', md: '50%' }}
                  padding="0 15px"
                  overflow="scroll"
                >
                  <ProductInfo product={currentProduct} />
                </Box>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
