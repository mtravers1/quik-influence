import { useEffect, useState } from 'react';
import {
  Flex,
  Box,
  Heading,
  useColorMode,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useToast,
} from '@chakra-ui/react';
import { cardThemeColor } from 'utils/constants/colorConstants';
import { useSelector, useDispatch } from 'react-redux';
import {
  addPaymentInfo,
  getPaymentInfo,
  updatePaymentInfo,
} from 'redux/actions/general';
import useForm from 'hooks/useForm';
import formdata from 'utils/constants/formData/paymentInfo';
import { TextInput } from 'components/Input';
import DropdownSelect from 'components/DropdownSelect';
import CheckBox from 'components/Input/CheckBox';
import { axiosInstance } from 'utils/helpers';
import loader from 'assets/loader.gif';
import CustomButton from 'components/Button';
import Image from 'next/image';

export const PaymentInfoComp = () => {
  const { paymentInfo } = useSelector(state => state.generals);
  const [defaultInfo, setDefaultInfo] = useState({});
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();

  const [viewAll, setViewAll] = useState(false);
  const [createNew, setCreateNew] = useState(false);
  const [editInfo, setEditInfo] = useState();

  const toggleAllPaymentInfo = () => {
    setViewAll(!viewAll);
  };

  useEffect(() => {
    if (!paymentInfo) dispatch(getPaymentInfo());
  }, []);

  useEffect(() => {
    if (paymentInfo?.length > 0) {
      setDefaultInfo(paymentInfo.filter(info => info.isDefault)[0]);
    }
  }, [paymentInfo]);

  const toggleCreatePaymentInfo = () => {
    setCreateNew(!createNew);
  };

  const onClose = () => {
    setEditInfo(null);
    setCreateNew(false);
  };

  return (
    <Box
      bgColor={cardThemeColor[colorMode]}
      p="12"
      borderBottom="1px solid"
      borderColor="inherit"
    >
      <Heading size="md" marginBottom="15px">
        Payment Info
      </Heading>

      <Flex justifyContent="space-between" alignItems="flex-start">
        {paymentInfo?.length ? (
          <>
            <PaymentInfoCard info={defaultInfo} />
            <Box>
              <Box fontWeight="500" as="button" onClick={toggleAllPaymentInfo}>
                {viewAll ? 'View Less' : 'View All'}
              </Box>
              {viewAll && (
                <Box
                  fontWeight="bold"
                  as="button"
                  onClick={toggleCreatePaymentInfo}
                  marginLeft="10px"
                  color="green"
                >
                  Add New
                </Box>
              )}
            </Box>
          </>
        ) : (
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            w="100%"
          >
            <Box as="p">You don't have any Acounts setup</Box>
            <Box
              as="button"
              color="green"
              fontWeight="bold"
              onClick={toggleCreatePaymentInfo}
            >
              Create New
            </Box>
          </Flex>
        )}
      </Flex>

      {viewAll && (
        <Flex
          marginTop="20px"
          flexWrap="wrap"
          borderTop="1px solid red"
          paddingTop="20px"
          w="100%"
        >
          {paymentInfo.map(info => (
            <PaymentInfoCard
              key={info.id}
              info={info}
              setEditInfo={setEditInfo}
            />
          ))}
        </Flex>
      )}

      <Modal
        blockScrollOnMount={false}
        isOpen={createNew || editInfo}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          minW="60vw"
          width="fit-content"
          borderRadius="5px"
          boxShadow="unset"
          background="#3f3f3f"
          padding="10px"
        >
          <ModalBody>
            <CreatePaymentInfo info={editInfo} onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const PaymentInfoCard = ({ info, setEditInfo }) => {
  const { colorMode } = useColorMode();

  const edit = () => setEditInfo(info);

  return (
    <Box
      borderRadius="10px"
      border="1px solid grey"
      padding="10px"
      margin="10px 10px 10px 0"
      maxWidth="350px"
    >
      {setEditInfo && (
        <Flex justifyContent="flex-end">
          <Box
            as="p"
            marginBottom="10px"
            color="red"
            fontWeight="bold"
            onClick={edit}
            cursor="pointer"
          >
            Edit
          </Box>
        </Flex>
      )}

      <Box>
        <Box as="strong">Account name:</Box> {info.accName || 'N/A'}
      </Box>
      <Box>
        <Box as="strong">Account Number:</Box> {info.accNo || 'N/A'}
      </Box>
      <Box>
        <Box as="strong">Bank name:</Box> {info.bankName || 'N/A'}
      </Box>
      <Box>
        <Box as="strong">Sort code:</Box> {info.sortCode || 'N/A'}
      </Box>
      <Box>
        <Box as="strong">
          Futher Instruction: {info.instructions ? '' : 'N/A'}
        </Box>
      </Box>
      {info.instructions && (
        <Box paddingLeft="25px">{info.instructions || 'N/A'}</Box>
      )}

      {info.isDefault && (
        <Flex justifyContent="flex-end">
          <Box
            as="p"
            background={
              colorMode === 'light'
                ? 'rgba(0, 0, 0, 0.6)'
                : 'rgba(255, 255, 255, 0.6)'
            }
            marginTop="10px"
            color={colorMode === 'light' ? '#fff' : '#333'}
            padding="5px"
            paddingTop="7px"
            borderRadius="5px"
          >
            Default
          </Box>
        </Flex>
      )}
    </Box>
  );
};

const CreatePaymentInfo = ({ info, onClose }) => {
  const toast = useToast();
  const dispatch = useDispatch();

  const { handleChange, inputTypes, handleSubmit, errors, loading } = useForm({
    inputs: formdata,
    initials: info || {},
    cb: async inputs => {
      const apiSpec = info
        ? {
            method: 'put',
            url: `/users/payment-info/${info.id}`,
          }
        : {
            method: 'post',
            url: '/users/payment-info',
          };

      await axiosInstance[apiSpec.method](apiSpec.url, inputs);

      if (info) {
        dispatch(updatePaymentInfo({ ...inputs, id: info?.id }));
      } else {
        dispatch(addPaymentInfo(inputs));
      }

      toast({
        title: info ? 'Payment Info Updated' : 'Payment Info Created',
        description: '',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });

      onClose();
    },
  });

  return (
    <Box>
      {formdata.map((data, i) => {
        switch (data.type) {
          case 'select':
            return (
              <Box key={`campaigne_input_${i}`} marginBottom="20px">
                <DropdownSelect
                  error={errors[data.name] ? data.errorMessage : undefined}
                  onChange={handleChange}
                  options={data.options || []}
                  label={data.label}
                  name={data.name}
                  selected={inputTypes[data.name]}
                  selectProps={{
                    height: '4.5rem',
                    fontSize: '1.4rem',
                  }}
                />
              </Box>
            );

          case 'checkbox':
            return (
              <Box p="10px" key={`campaigne_input_${i}`}>
                <CheckBox
                  value={inputTypes[data.name]}
                  name={data.name}
                  handleChange={handleChange}
                  label={data.label}
                />
              </Box>
            );

          default:
            return (
              <Box key={`campaigne_input_${i}`} marginBottom="20px">
                <TextInput
                  error={errors[data.name] ? data.errorMessage : undefined}
                  name={data.name}
                  label={data.label}
                  value={inputTypes[data.name]}
                  handleChange={handleChange}
                  type={data.type}
                  placeholder={data.label}
                  TextInputProps={{}}
                />
              </Box>
            );
        }
      })}

      <Flex justifyContent="flex-end">
        <CustomButton
          maxW="204px"
          height="50px"
          padding={0}
          mt={4}
          onClick={handleSubmit}
        >
          {info ? 'Edit Info' : 'Create Info'}{' '}
          {loading && <Image src={loader} alt="" width={50} height={50} />}
        </CustomButton>
      </Flex>
    </Box>
  );
};
