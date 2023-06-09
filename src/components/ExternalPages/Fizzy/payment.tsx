import { useState, useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from 'redux/actions/general';
import { Box, Flex } from '@chakra-ui/react';
import { BillingPage } from './BillingPage';
import { PayNow } from './PayNow';
import Image from 'next/image';
import loader from 'assets/loader.gif';

const links = [
  { name: 'Billing Address', value: 0 },
  { name: 'Review & Payment', value: 1 },
];

export const Payment: FC<{
  userData: any;
  openLoginOtp: any;
  otherInfo: any;
  products: any;
  showErrorMessage: any;
  currentFlavour: string;
  quantity: number;
  currentProduct: number;
}> = ({
  userData,
  openLoginOtp,
  otherInfo,
  products,
  showErrorMessage,
  currentFlavour,
  quantity,
  currentProduct,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const { countryData } = useSelector((state: any) => state.generals);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!countryData.country.length) {
      dispatch(fetchCountries());
    }
  }, []);

  return (
    <Flex flexDirection={{ base: 'column', lg: 'row' }} height="100%">
      <Box
        fontSize="18px"
        color="#0bcbfb"
        marginRight={{ base: '0', lg: '20px' }}
        marginBottom={{ base: '20px', lg: '0' }}
      >
        {links.map((link, i) => (
          <Box
            key={`lil_${i}`}
            onClick={() => setCurrentPage(link.value)}
            borderBottom="1px solid rgb(62, 62, 62)"
            padding="20px 0"
            background={
              link.value === currentPage ? 'rgba(226,226,226,0.2)' : ''
            }
            cursor="pointer"
            fontWeight="bold"
          >
            {link.name}
          </Box>
        ))}
      </Box>

      {countryData.country.length ? (
        <>
          {currentPage === 0 && (
            <BillingPage
              setCurrentPage={setCurrentPage}
              userData={userData}
              openLoginOtp={openLoginOtp}
              showErrorMessage={showErrorMessage}
            />
          )}

          {currentPage === 1 && (
            <PayNow
              userData={userData}
              openLoginOtp={openLoginOtp}
              otherInfo={otherInfo}
              products={products}
              showErrorMessage={showErrorMessage}
              currentFlavour={currentFlavour}
              quantity={quantity}
              currentProduct={currentProduct}
            />
          )}
        </>
      ) : (
        <Flex
          flexGrow={1}
          alignItems="center"
          justifyContent="center"
          minHeight="500px"
        >
          <Image src={loader} alt="" width={40} height={40} />
        </Flex>
      )}
    </Flex>
  );
};
