import React, { FC, useState, useEffect } from 'react';
// import Auth from 'subpages/Auth/auth';
import ReactStars from 'react-rating-stars-component';
import useForm from 'hooks/useForm';
import { TextInput } from 'components/Input';
import SubmitButton from 'components/Button';
import { Box, Flex, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { axiosInstance } from 'utils/helpers';
import formdata from 'utils/constants/formData/reviewData';
import { ReviewDatatype } from '.';

export const AddReview: FC<{
  productId: string;
  currentReview: ReviewDatatype | undefined;
  setReview: any;
}> = ({ setReview, currentReview, productId }) => {
  const [key, setKey] = useState(Math.floor(Math.random() * 33244));
  const [openAuth, setOpenAuth] = useState(false);
  const [chooseAuth, setChooseAuth] = useState(0);

  function reset(fn: any) {
    setKey(Math.floor(Math.random() * 33244999));
    fn({
      review: '',
      rating: 0,
    });
  }

  const {
    handleChange,
    inputTypes,
    handleSubmit,
    errors,
    loading,
    setInputTypes,
  } = useForm({
    inputs: formdata,
    cb: async inputs => {
      const { review, rating } = inputs;

      const method = currentReview ? 'patch' : 'post';
      const slug = currentReview ? `review/${productId}` : '/review/create';

      const response = await axiosInstance[method](slug, {
        rating,
        review: review || undefined,
        productId: currentReview ? undefined : productId,
      });

      //jude (todo): handle success messages

      // addToast(
      //   currentReview
      //     ? 'Your review has been updated'
      //     : 'Your review has been added',
      //   {
      //     appearance: 'success',
      //     autoDismiss: true,
      //   }
      // );

      reset(setInputTypes);

      if (currentReview) {
        return setReview((prevData: any) => ({
          ...prevData,
          data: prevData.data.map((dt: any) => {
            if (dt.id === currentReview.id) {
              return { ...currentReview, ...inputs };
            }

            return dt;
          }),
        }));
      }
      setReview((prevData: any) => ({
        ...prevData,
        data: [response.data.data, ...prevData.data],
      }));
    },
  });

  useEffect(() => {
    if (!currentReview) return;
    setInputTypes({
      review: currentReview.review,
      rating: currentReview.rating,
    });
  }, [currentReview]);

  // const closeAuth = () => {
  //   setOpenAuth(false);
  //   document.querySelector('body')?.classList.remove('overflow-hidden');
  // };

  // const setAuth = (e: any) => {
  //   setChooseAuth(Number(e.target.id));
  // };

  return (
    <Box className="auth-section" id="review-sec" key={key}>
      {/* {openAuth && (
        <Auth close={closeAuth} setAuth={setAuth} chooseAuth={chooseAuth} />
      )} */}

      <Box className="reg-text" textAlign="center" marginBottom="48px">
        <Box fontSize="32px">Add a review</Box>{' '}
        {currentReview ? (
          <Box as="button" fontWeight="bold" onClick={reset}>
            Reset
          </Box>
        ) : (
          ''
        )}
      </Box>
      <Box as="form" className="form">
        <Flex className="flex">
          <Box
            as="p"
            marginRight="12px"
            paddingX="8px"
            fontSize="15px"
            fontWeight={500}
          >
            Your Rating
          </Box>
          <ReactStars
            count={5}
            onChange={(r: any) =>
              // @ts-ignore
              handleChange({ target: { name: 'rating', value: r } })
            }
            size={15}
            activeColor="#ffd700"
            isHalf={true}
            value={inputTypes.rating || 0}
            key={inputTypes.rating}
          />
        </Flex>

        {formdata.slice(0, 1).map((data, i) => (
          <FormControl
            isInvalid={errors[data.name]}
            key={`register_${i}`}
            paddingX="8px"
          >
            <TextInput
              name={data.name}
              label={data.label}
              labelProps={{
                fontSize: '1.2rem',
              }}
              value={inputTypes[data.name]}
              formControlProps={{
                pt: 8,
              }}
              handleChange={handleChange}
              type={data.type}
              placeholder={data.label}
              TextInputProps={{
                className: `${
                  inputTypes[data.name] && !errors[data.name] ? ' valid' : ''
                }${errors[data.name] ? ' invalid' : ''}`,
                // @ts-ignore
                fontSize: '15px',
              }}
            />

            {errors[data.name] && (
              <FormErrorMessage fontSize="14px">
                {data.errorMessage}
              </FormErrorMessage>
            )}
          </FormControl>
        ))}

        <Flex alignItems="center" justifyContent="center" marginTop="20px">
          <SubmitButton onClick={handleSubmit} maxW="300px">
            {currentReview ? 'Edit' : 'Submit'}{' '}
          </SubmitButton>
        </Flex>
      </Box>
    </Box>
  );
};
