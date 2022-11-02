import { useEffect, useState, useRef, FC } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import ReactStars from 'react-rating-stars-component';
import { AddReview } from './AddReview';
import SubmitButton from 'components/Button';
import loader from 'assets/loader.gif';
import { ProductDataType } from 'modules/MarketPlace/interfaces';
import Image from 'next/image';
import { ReviewLoader } from '../loaders';
import { axiosInstance } from 'utils/helpers';
import { Box, Flex, Text } from '@chakra-ui/react';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const colors = ['#Ed2790', '#00A85A', '#00B0F0', '#B8272C', '#CD983C'];

export interface ReviewDatatype {
  id: string;
  user: {
    firstName: string;
    lastName: string;
  };
  userId: string;
  productId: string;
  rating: number;
  review: string;
  createdAt: Date;
}

export const ProductReview: FC<{ product: ProductDataType }> = ({
  product,
}) => {
  const router = useRouter();
  const [reviews, setReview] = useState<any>({
    data: [
      {
        id: '5f9f1b0b-9b5e-4b9e-8c1a-0c1b0b9b5e4b',
        user: {
          firstName: 'John',
          lastName: 'Doe',
        },
        userId: '5f9f1b0b-9b5e-4b9e-8c1a-0c1b0b9b5e4b',
        productId: '5f9f1b0b-9b5e-4b9e-8c1a-0c1b0b9b5e4b',
        rating: 5,
        review: 'This is a review',
        createdAt: '2021-08-04T12:00:00.000Z',
      },
    ],
    paginationMeta: null,
  });
  const [currentReview, setCurrentReview] = useState();
  const [loadingreviews, setLoadingReviews] = useState(false);

  const {
    query: { productId },
  } = router;

  const getData = async (page: number) => {
    const res = await axiosInstance.get(
      `/review/${product.id}?currentPage=${page}&&pageLimit=4`
    );

    setReview((rev: any) => ({
      data: [...rev.data, ...res.data.data.rows],
      paginationMeta: res.data.data.paginationMeta,
    }));
  };

  useEffect(() => {
    // review fetching code
  }, [productId]);

  const fetchMore = () => {
    // review ferching code
  };

  return (
    <Box w="100%" padding="10px" borderTop="1px solid #e2e2e2">
      <Box marginTop={{ base: '20px', md: '56px' }}>
        <Flex
          as="nav"
          marginBottom={{ base: '20px', md: '56px' }}
          alignItems="center"
          justifyContent="center"
        >
          <Box fontSize={{ base: '20px', lg: '30px' }}>
            Review{product.totalUserRating || 0 > 1 ? 's' : ''} (
            {product.totalUserRating || 0})
          </Box>
        </Flex>
        <Box marginX="auto">
          <Box
            fontSize={{ base: '20px', lg: '24px' }}
            textAlign="center"
            marginBottom="20px"
          >
            {product?.totalUserRating} Reviews
            {product.totalUserRating || 0 > 1 ? 's' : ''} on {product?.name}
          </Box>

          {loadingreviews && reviews.length === 0 && <ReviewLoader />}

          <Box className="review-sec" width="100%">
            {reviews.data.map((rev: ReviewDatatype, i: number) => (
              <ReviewComp
                rev={rev}
                key={rev.id}
                setReview={setReview}
                index={i}
                setCurrentReview={setCurrentReview}
              />
            ))}
          </Box>

          {reviews?.paginationMeta?.count > 0 && (
            <Flex
              marginBottom="40px"
              alignItems="center"
              justifyContent="center"
              style={{
                display:
                  reviews?.paginationMeta?.currentPage ===
                  reviews?.paginationMeta?.pageCount
                    ? 'none'
                    : 'flex',
              }}
            >
              <SubmitButton onClick={fetchMore}>Load more</SubmitButton>
            </Flex>
          )}

          {!loadingreviews && reviews.data.length === 0 && (
            <Box as="p" marginBottom="40px" textAlign="center" fontSize="15px">
              Hey there this product has no reviews. Be the first to review
            </Box>
          )}

          <AddReview
            setReview={setReview}
            productId={product?.id}
            currentReview={currentReview}
          />
        </Box>
      </Box>
    </Box>
  );
};

const ReviewComp: FC<{
  index: number;
  rev: ReviewDatatype;
  setReview: any;
  setCurrentReview: any;
}> = ({ index, rev, setReview, setCurrentReview }) => {
  const { user, isAdmin } = useSelector((state: any) => state.auth);
  const [deleteRev, setDeleteReview] = useState(false);

  const editReview = () => {
    document
      .querySelector('#review-sec')
      ?.scrollIntoView({ behavior: 'smooth' });
    setCurrentReview(rev);
  };

  const deleteReview = async () => {
    setDeleteReview(true);

    await axiosInstance.delete(`review/${rev.productId}`);
    setReview((prevData: any) => ({
      ...prevData,
      data: prevData.data.filter((dt: any) => dt.id !== rev.id),
    }));

    setDeleteReview(false);
  };

  return (
    <Flex
      marginBottom="40px"
      paddingBottom="40px"
      borderBottom="1px solid #e2e2e2"
    >
      <Flex
        style={{
          background: colors[index % colors.length],
        }}
        width={{ base: '64px', md: '40px' }}
        height={{ base: '64px', md: '40px' }}
        borderRadius="100%"
        alignItems="center"
        justifyContent="center"
        fontSize="16px"
        fontWeight="bold"
      >
        {rev.user.firstName[0]}
      </Flex>
      <Box flexGrow={1} paddingLeft="28px">
        <Flex className="flex justify-between" justifyContent="space-between">
          <ReactStars
            count={5}
            edit={false}
            size={20}
            activeColor="#ffd700"
            isHalf={true}
            value={rev.rating}
          />

          <Flex>
            {rev.userId === user?.id && (
              <button onClick={editReview}>
                <FontAwesomeIcon
                  icon={faEdit as IconProp}
                  style={{ width: '20px', height: '20px' }}
                  color={colors[index % colors.length]}
                />
              </button>
            )}

            {(rev.userId === user?.id || isAdmin) && (
              <button onClick={deleteReview}>
                <FontAwesomeIcon
                  icon={faTrash as IconProp}
                  style={{ width: '20px', height: '20px' }}
                  color="red"
                />
              </button>
            )}

            {deleteRev && (
              <Image src={loader} alt="loader" width={40} height={40} />
            )}
          </Flex>
        </Flex>
        <Box as="p" margin="5px 0 10px" fontSize="16px" fontWeight="500">
          {rev.user.firstName} {rev.user.lastName}{' '}
          <Box as="span" fontSize="14px" opacity="0.8">
            / {format(new Date(rev.createdAt), 'MM-dd-yyyy')}
          </Box>
        </Box>
        <Box
          as="p"
          fontSize={{ base: '14px', md: '16px' }}
          whiteSpace="pre-wrap"
        >
          {rev.review}
        </Box>
      </Box>
    </Flex>
  );
};
