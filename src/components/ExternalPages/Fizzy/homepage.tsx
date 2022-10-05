import { FC } from 'react';
import { FizzyLayout } from 'layout/fizzy';
import { Box, Flex } from '@chakra-ui/react';
import { ProductCarousel } from 'components/Carousel';
import { FizzySelect } from 'components/ExternalPages/Fizzy/select';
import { QuantitySelector } from 'components/ExternalPages/Fizzy/QuantitySelector';

export const FizzyHomePage: FC<{
  products: any;
  additionalData: any;
  currentProduct: any;
  setCurrentProduct: any;
  setCurrentFlavour: any;
  quantity: any;
  setQuantity: any;
  setPage: any;
}> = ({
  products = [],
  additionalData,
  currentProduct,
  setCurrentProduct,
  setCurrentFlavour,
  quantity,
  setQuantity,
  setPage,
}) => {
  const selectOptions = [
    {
      title: 'Flavour',
      defaultText: 'Select a flavour',
      options: additionalData.flavours,
      handleSelect: (e: any) => setCurrentFlavour(e.target.value),
    },
    {
      title: 'Quantity',
      defaultText: 'Select a quantity',
      options: products.map((product: any, i: number) => ({
        name: product.option,
        value: i,
      })),
      handleSelect: (e: any) => setCurrentProduct(e.target.value),
    },
  ];

  return (
    <>
      <FizzyLayout>
        <Box
          as="section"
          padding="50px 30px"
          flexGrow={1}
          backgroundColor="#012438"
        >
          <Flex
            maxW="1250px"
            margin="auto"
            width="100%"
            height="100%"
            flexDirection="column"
          >
            <Box
              fontSize={{ base: '30px', md: '40px' }}
              fontWeight="600"
              textAlign="center"
              marginBottom="55px"
              color="#0bcbfb"
            >
              Fizzy Delta-8 Infused Seltzer
            </Box>

            <Flex flexDirection={{ base: 'column', lg: 'row' }}>
              <Box
                width={{ base: '100%', lg: '50%' }}
                margin={{ base: '0 0 30px 0', lg: '0 2% 0 0' }}
              >
                <ProductCarousel
                  images={products[currentProduct].images}
                  showThumbs
                />
              </Box>

              <Box
                backgroundColor="#000913"
                width={{ base: '100%', lg: '48%' }}
                padding="20px 15px"
                height="fit-content"
              >
                <Box marginBottom="20px">
                  <Box fontSize="14px" color="#8ffca0" marginBottom="10px">
                    HIGH QUALITY, LAB TESTED AND APPROVED
                  </Box>
                  <Box
                    fontSize={{ base: '20px', lg: '38px' }}
                    fontWeight="500"
                    marginBottom="15px"
                    color="#8ffca0"
                  >
                    Fizzy Delta-8 Infused Seltzer
                  </Box>
                  <Box
                    fontSize={{ base: '20px', lg: '38px' }}
                    textAlign="center"
                    fontWeight="600"
                    color="#0bcbfb"
                  >
                    <Box
                      lineHeight="1.7em"
                      dangerouslySetInnerHTML={{
                        __html: additionalData.price_html,
                      }}
                    ></Box>
                  </Box>
                </Box>

                <Box backgroundColor="#001c28" width="100%" padding="10px">
                  {selectOptions.map((option, i) => (
                    <FizzySelect
                      styles={{ marginBottom: i === 0 ? '20px' : '' }}
                      title={option.title}
                      defaultText={option.defaultText}
                      options={option.options}
                      handleSelect={option.handleSelect}
                    />
                  ))}
                </Box>

                <Box
                  color="#0bcbfb"
                  fontSize="20px"
                  fontWeight="500"
                  margin="20px 0 30px 0"
                >
                  {products[currentProduct].meta.price}
                  <Box as="span" display="inline-block" marginLeft="30px">
                    Available on backorder
                  </Box>
                </Box>

                <Box
                  as="form"
                  display="flex"
                  alignItems={{ base: 'flex-start', md: 'center' }}
                  flexDirection={{
                    base: 'column',
                    md: 'row',
                  }}
                >
                  <QuantitySelector
                    value={quantity}
                    handleChange={(value: any) => {
                      setQuantity(value);
                    }}
                  />

                  <Box
                    as="button"
                    padding="13px 29px"
                    lineHeight="17px"
                    fontSize="14px"
                    flexGrow={1}
                    width="100%"
                    color="#000"
                    background="#0bcbfb"
                    backgroundImage="linear-gradient( to top, #8ffca0, #0bcbfb )"
                    margin={{ base: '20px 0 0 0', md: '0 0 0 30px' }}
                    maxW="300px"
                    onClick={(e: any) => {
                      e.preventDefault();
                      setPage(1);
                    }}
                    fontWeight="bold"
                  >
                    BUY NOW
                  </Box>
                </Box>
              </Box>
            </Flex>

            <Box
              marginTop="50px"
              padding="20px"
              background="#000"
              color="#90fca0"
              border="1px solid #0bcbfb"
            >
              <Box marginBottom="20px" fontSize="20px" fontWeight="bold">
                Description
              </Box>
              <Box
                lineHeight="1.7em"
                fontSize="18px"
                fontWeight="500"
                dangerouslySetInnerHTML={{ __html: additionalData.description }}
              ></Box>
            </Box>
          </Flex>
        </Box>
      </FizzyLayout>
    </>
  );
};
