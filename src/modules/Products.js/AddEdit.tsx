import { FC } from 'react';
import { Box, Flex, useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { TextInput } from 'components/Input';
import useForm from 'hooks/useForm';
import formdata from 'utils/constants/formData/campaignProduct';
import CustomButton from 'components/Button';
import loader from 'assets/loader.gif';
import {
  createCampaignProduct,
  editCampaignProduct,
} from 'redux/actions/campaigns';

export const AddEdit: FC<{
  close: Function;
  currentProduct: any;
  campaignId: String;
}> = ({ close, currentProduct, campaignId }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const { handleChange, inputTypes, handleSubmit, errors, loading } = useForm({
    inputs: formdata,
    initials: currentProduct || {},
    cb: async inputs => {
      const { name, payoutAmount, ...rest } = inputs;

      const formated = {
        name: inputs.name,
        payoutAmount: inputs.payoutAmount,
        meta: rest,
      };

      const func = currentProduct ? editCampaignProduct : createCampaignProduct;

      await dispatch(func(formated, inputs, campaignId, currentProduct?.id));

      toast({
        title: currentProduct
          ? 'Product Updated successfully'
          : 'Product created successfully',
        description: '',
        duration: 4000,
        isClosable: true,
      });

      close();
    },
  });

  return (
    <>
      <Box
        fontSize="18px"
        marginBottom="30px"
        display="flex"
        alignItems="center"
        flexDirection="column"
        width="100%"
      >
        <Box as="p" fontWeight="bold" marginBottom="30px">
          {currentProduct ? 'Edit product' : 'Create new product'}
        </Box>

        <form style={{ width: '100%' }}>
          {formdata.slice(0, 2).map((data, i) => {
            return (
              <Box key={`campaigne_input_${i}`} marginBottom="20px">
                <TextInput
                  error={errors[data.name] ? data.errorMessage : undefined}
                  name={data.name}
                  label={data.label}
                  value={inputTypes[data.name]}
                  handleChange={handleChange}
                  type={data.type}
                  TextInputProps={{}}
                />
              </Box>
            );
          })}

          <Box as="h2" fontWeight="bold" marginBottom="20px">
            Pricing
          </Box>

          <Box
            display="grid"
            gridTemplateColumns={{ md: 'repeat(2, 1fr)' }}
            gridGap="20px"
          >
            {formdata.slice(2, 4).map((data, i) => {
              return (
                <Box key={`campaigne_input_${i}`} marginBottom="20px">
                  <TextInput
                    error={errors[data.name] ? data.errorMessage : undefined}
                    name={data.name}
                    label={data.label}
                    value={inputTypes[data.name]}
                    handleChange={handleChange}
                    type={data.type}
                    TextInputProps={{}}
                  />
                </Box>
              );
            })}
          </Box>

          <Box as="h2" fontWeight="bold" marginBottom="20px">
            Dimensions
          </Box>

          <Box
            display="grid"
            gridTemplateColumns={{ md: 'repeat(4, 1fr)' }}
            gridGap="20px"
          >
            {formdata.slice(4, 8).map((data, i) => {
              return (
                <Box key={`campaigne_input_${i}`} marginBottom="20px">
                  <TextInput
                    error={errors[data.name] ? data.errorMessage : undefined}
                    name={data.name}
                    label={data.label}
                    value={inputTypes[data.name]}
                    handleChange={handleChange}
                    type={data.type}
                    TextInputProps={{}}
                  />
                </Box>
              );
            })}
          </Box>

          <Flex justifyContent="center">
            <CustomButton
              onClick={handleSubmit}
              maxWidth="200px"
              marginTop="30px"
            >
              Finish{' '}
              {loading && <Image src={loader} alt="" width={50} height={50} />}
            </CustomButton>
          </Flex>
        </form>
      </Box>
    </>
  );
};
