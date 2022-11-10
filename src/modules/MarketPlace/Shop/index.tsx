import { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { MarketPlaceLayout } from 'layout/marketPlace';
import { useNavLink } from 'components/MarketPlace/NavBar/buttonList';
import {
  PaginatedProductDataType,
  ProductDataType,
  ProductPaginationMeta,
} from 'modules/MarketPlace/interfaces';
import { TitlePlace } from 'components/MarketPlace/TitlePlace';
import { ProductList } from 'layout/marketPlace/productList';
import { ProductCard } from 'components/MarketPlace/ProductCard';
import { useProductFilters } from 'hooks/useProductFilter';
import { useFetch } from 'hooks/useFetch';
import { ProductFilters } from 'components/MarketPlace/ProductFilter';
import { MarketPagination } from 'components/MarketPlace/Pagination';

export const MarketPlaceShop = ({
  initialproducts,
}: {
  initialproducts: PaginatedProductDataType;
}) => {
  const { campaignId } = useNavLink();
  const [products, setProducts] = useState(initialproducts.rows);
  const [paginationMeta, setPaginationMeta] = useState<ProductPaginationMeta>({
    count: initialproducts.count,
    recieved: initialproducts.recieved,
    totalPages: initialproducts.totalPages,
    currentPage: initialproducts.currentPage,
  });
  const [isServerFetched, setIsServerFetched] = useState(true);

  const {
    sorts,
    handleSortChange,
    path,
    pathQuery,
    filters,
    handlePagination,
  } = useProductFilters();

  const [loading, data] = useFetch(
    {
      method: 'get',
      url: `/users/campaign/products/${pathQuery}`,
      pause: isServerFetched,
    },
    [path]
  );

  useEffect(() => {
    setIsServerFetched(true);
  }, []);

  useEffect(() => {
    if (!loading && data?.recieved > 0) {
      setProducts(data.rows);

      setPaginationMeta({
        count: data.count,
        recieved: data.recieved,
        totalPages: data.totalPages,
        currentPage: data.currentPage,
      });
    }
  }, [data]);

  return (
    <MarketPlaceLayout>
      <TitlePlace>Shop</TitlePlace>

      <Flex
        maxW="1200px"
        margin="auto"
        background="#000"
        padding="15px"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="5px"
      >
        <Box as="h3" fontWeight="450" fontSize="15px">
          {paginationMeta.count} Products found
        </Box>

        <Box>
          <Box as="span" fontWeight="450" fontSize="15px">
            Sort By
          </Box>

          <Box
            as="select"
            margin="0 10px"
            padding="10px 15px"
            onChange={handleSortChange}
            value={filters.sort}
            background="transparent"
            border="1px solid"
          >
            {sorts.map(sort => (
              <option key={sort.value} value={sort.value}>
                {sort.label}
              </option>
            ))}
          </Box>
        </Box>
      </Flex>

      <Flex maxW="1200px" margin="auto" marginTop="20px">
        <ProductFilters />
        <Box background="#000" padding="10px" borderRadius="5px">
          <ProductList gap="10px">
            {(openQuickViewModal: any) => {
              return products?.map((product: ProductDataType, i) => (
                <ProductCard
                  data={product}
                  openQuickViewModal={openQuickViewModal}
                  key={`product_card_${i}`}
                />
              ));
            }}
          </ProductList>
        </Box>
      </Flex>

      <Flex
        maxW="1200px"
        marginX="auto"
        marginTop="20px"
        justifyContent="flex-end"
      >
        <MarketPagination
          onPageChange={handlePagination}
          totalCount={paginationMeta.count}
          currentPage={paginationMeta.currentPage}
        />
      </Flex>
    </MarketPlaceLayout>
  );
};
