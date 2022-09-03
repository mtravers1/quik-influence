import { useEffect, useState, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import {
  Box,
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useColorMode,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { axiosInstance } from 'utils/helpers';
import MainContent from 'components/MainContent';
import CustomButton from 'components/Button';
import {
  getCampaignProducts,
  archiveCampaignProduct,
} from 'redux/actions/campaigns';
import { AddIcon } from '@chakra-ui/icons';
import { AddEdit } from 'modules/Products.js/AddEdit';
import { formatter } from 'utils/helpers';
import { faTrash, faArchive } from '@fortawesome/free-solid-svg-icons';

const CampaignProducts = (props: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { products } = useSelector((state: any) => state.campaigns);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<any>();
  const campaignId = router.query.campaignId as string;
  const campaignproducts = products[campaignId];

  const { colorMode } = useColorMode();

  const asyncGetCampaignProducts = async () => {
    try {
      setLoading(true);

      await dispatch(getCampaignProducts(campaignId, props?.products));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!campaignproducts) {
      asyncGetCampaignProducts();
    }
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentProduct(null);
  };

  const editProduct = (product: any) => {
    setCurrentProduct(product);
    openModal();
  };

  const archiveProduct = (product: any, e: any) => {
    e.stopPropagation();
    const status = product.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';

    dispatch(archiveCampaignProduct(product.id, status, campaignId));
  };

  return (
    <>
      <MainContent>
        <Box>
          <HStack display="flex" width="full" spacing="20" marginBottom="30px">
            <Heading>Your Products</Heading>
            <CustomButton
              fontSize="md"
              width="fit-content"
              padding="1.2rem"
              borderRadius="md"
              leftIcon={<AddIcon />}
              onClick={openModal}
            >
              Add New Product
            </CustomButton>
          </HStack>

          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, minmax(min(400px), 1fr))"
            gridGap="30px"
          >
            {campaignproducts?.map((product: any) => (
              <Box
                width="100%"
                boxShadow="1px 1px 2px rgba(0,0,0,0.5)"
                borderRadius="7px"
                background={colorMode === 'dark' ? '#19212d' : '#4A5568'}
                overflow="hidden"
                onClick={() => editProduct(product)}
                cursor="pointer"
              >
                <Box
                  height="200px"
                  display="flex"
                  justifyContent="flex-end"
                  borderBottom={`1px solid ${
                    colorMode === 'dark' ? '#19212d' : '#4A5568'
                  }`}
                  flexDirection="column"
                  position="relative"
                  backgroundImage={`url(${product?.image || '/product.jpeg'})`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  zIndex={0}
                >
                  <Box
                    width="100%"
                    height="100%"
                    position="absolute"
                    top={0}
                    left={0}
                    background="linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)"
                    zIndex={-1}
                  ></Box>

                  <Box position="absolute" right="7px" top="7px">
                    {product.status === 'ACTIVE' && (
                      <IconWithToolTip
                        icon={faTrash}
                        toolTipText="Archive product"
                        onClick={(e: any) => archiveProduct(product, e)}
                      />
                    )}

                    {product.status === 'INACTIVE' && (
                      <Box display="flex" alignItems="center">
                        <IconWithToolTip
                          icon={faArchive}
                          toolTipText="UnArchive your product"
                          onClick={(e: any) => archiveProduct(product, e)}
                        />

                        <Box
                          as="p"
                          background="red"
                          boxShadow="1px 1px 2px rgba(0,0,0,0.5)"
                          borderRadius="7px"
                          padding="5px 10px"
                          marginLeft="10px"
                        >
                          Archived
                        </Box>
                      </Box>
                    )}
                  </Box>

                  <Box zIndex={1} padding="10px">
                    <Box fontSize="20px">{formatter.format(product.price)}</Box>
                    <Box>{product.name}</Box>
                  </Box>
                </Box>
                <Box padding="10px" as="p">
                  <Box>
                    <Box as="strong" marginRight="10px">
                      Description:
                    </Box>{' '}
                    {product.description}
                  </Box>
                  <Box>
                    <Box as="strong" marginRight="10px">
                      Payout Amount:
                    </Box>
                    {formatter.format(product.payoutAmount || 0)}
                  </Box>

                  <Box marginTop="10px" display="flex">
                    <Box as="small" marginRight="10px">
                      <Box as="strong" marginRight="10px">
                        Weight:
                      </Box>
                      {product.weight || 0} Kg
                    </Box>
                    <Box as="small" marginRight="10px">
                      <Box as="strong" marginRight="10px">
                        Width:
                      </Box>
                      {product.width || 0} in
                    </Box>
                    <Box as="small" marginRight="10px">
                      <Box as="strong" marginRight="10px">
                        Height:
                      </Box>
                      {product.height || 0} in
                    </Box>
                    <Box as="small" marginRight="10px">
                      <Box as="strong" marginRight="10px">
                        length:
                      </Box>
                      {product.length || 0} in
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </MainContent>
      <Modal blockScrollOnMount={true} isOpen={showModal} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent
          minW={{ base: '90vw', xl: '40vw' }}
          p="8"
          mt="10%"
          borderRadius={0}
        >
          <ModalBody>
            <AddEdit
              close={closeModal}
              currentProduct={currentProduct}
              campaignId={campaignId}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const IconWithToolTip: FC<{
  icon: IconProp;
  toolTipText: string;
  onClick: any;
}> = ({ icon, toolTipText, onClick }) => {
  const { colorMode } = useColorMode();

  return (
    <Box className="icon-with-tooltip" onClick={onClick} cursor="pointer">
      <FontAwesomeIcon
        color={colorMode !== 'dark' ? 'red' : 'inherit'}
        icon={icon}
      />

      <Box className="tool-tipx">{toolTipText}</Box>
    </Box>
  );
};

export async function getServerSideProps(ctx: any) {
  const { campaignId } = ctx.query;

  const response = await axiosInstance.get(
    `/users/campaign/products/${campaignId}?all=true`
  );

  return { props: { products: response.data.data } };
}

export default CampaignProducts;
