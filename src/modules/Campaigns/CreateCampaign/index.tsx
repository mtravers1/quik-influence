import React, { useState, useEffect } from 'react';
import {
  Heading,
  Flex,
  Text,
  OrderedList,
  ListItem,
  createStandaloneToast,
  FormLabel,
  useColorMode,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
} from '@chakra-ui/react';
import CustomButton from 'components/Button';
import DropdownSelect, {
  DropdownSelectOption,
} from 'components/DropdownSelect';
import { TextInput } from 'components/Input';
import useForm from 'hooks/useForm';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import draftToHtml from 'draftjs-to-html';
import { EditorState, convertToRaw } from 'draft-js';
import quikColorConstants, {
  bgThemeColor,
  borderThemeColor,
  cardThemeColor,
} from 'utils/constants/colorConstants';
import formdata from 'utils/constants/formData/campaign';
import smsFormdata from 'utils/constants/formData/campaignSMS';
import emailFormdata from 'utils/constants/formData/campaignEmail';
import formFieldsData from 'utils/constants/formData/closeFriends';
import MultiRangeSelector, { Range } from './MultiRangeSelector';
import MultiSelect from './MultiSelect';
import loader from 'assets/loader.gif';
import UploadImage from './UploadImage';
import { axiosInstance } from 'utils/helpers';
import { useRouter } from 'next/router';
import theme from 'styles/theme';
import { faCaretRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { urlify } from 'utils/urilify';
import { leadsTableHead, dataBody } from 'utils/constants/leadsPageTableData';
import { fetchPostJSON } from 'utils/apiHelpers';
import { setSMSCampaign } from 'redux/actions/campaigns';

type CreateCampaignType = 'SMS' | 'Email' | 'Default';

const selectLabelProps = {
  fontSize: '1.4rem',
  fontWeight: 'semibold',
};

const selectProps = { height: '3rem', width: '30rem', fontSize: '1.4rem' };

const getFormFields = (inputs: string[]) => {
  if (!inputs) return;
  return formFieldsData.reduce((acc: any, fields: any) => {
    if (inputs.includes(fields.name)) {
      return [...acc, { ...fields, pattern: fields.pattern.toString() }];
    }

    return acc;
  }, []);
};

const CreateCampaign = ({
  initialdata,
  type,
}: {
  initialdata: any;
  type?: CreateCampaignType;
}) => {
  const toast = createStandaloneToast(theme);
  const { colorMode } = useColorMode();
  const router = useRouter();
  const dispatch = useDispatch();
  const [isSending, setIsSending] = useState(false);
  const [editorState, setEditorState] = useState<EditorState>(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState<any>([]);
  const [checkedItems, setCheckedItems] = useState<any>([]);
  const allChecked = checkedItems.every(
    (checkItem: any) => checkItem.isChecked
  );

  const isIndeterminate =
    checkedItems.some((checkItem: any) => checkItem.isChecked) && !allChecked;

  useEffect(() => {
    setCheckedItems(dataBody.map(el => ({ ...el, isChecked: false })));
  }, []);

  /**
   * Sends SMS
   * @param {message: string, phone: string}
   * @returns
   */
  const handleSendSMS = async ({
    to: phone,
    message,
  }: {
    to: string;
    message: string;
  }) => {
    if (!(phone && message)) return;

    try {
      setIsSending(true);
      // Send SMS.
      const response = await fetchPostJSON('/api/messages', {
        to: [phone],
        body: message,
      });

      if (response.statusCode === 500) {
        throw new Error(response.message);
      }

      if (response.status === 'success') {
        toast({
          title: 'SMS Successfully Sent.',
          description: `The SMS has been successfully sent.`,
          status: 'success',
          duration: 4000,
          isClosable: true,
          variant: 'top-accent',
        });
      }
    } catch (error: any) {
      const err = Array.isArray(error.message)
        ? error.message.join(', ')
        : error.message;

      toast({
        title: err,
        description: '',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setIsSending(false);
    }
  };

  /**
   * Sends Email
   * @param {message: string, email: string}
   * @returns
   */
  const handleSendEmail = async ({
    to,
    message,
  }: {
    to: string;
    message: string;
  }) => {
    if (!(to && message)) return;

    try {
      setIsSending(true);
      // Send SMS.
      const response = await fetchPostJSON('/api/send_email', {
        subject: 'QuickInfluence Lead',
        to: [to],
        body: message,
      });

      if (response.statusCode === 500) {
        throw new Error(response.message);
      }

      if (response.status === 'success') {
        toast({
          title: 'Email Successfully Sent.',
          description: `The Email has been successfully sent.`,
          status: 'success',
          duration: 4000,
          isClosable: true,
          variant: 'top-accent',
        });
      }
    } catch (error: any) {
      const err = Array.isArray(error.message)
        ? error.message.join(', ')
        : error.message;

      toast({
        title: err,
        description: '',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setIsSending(false);
    }
  };

  /**
   * Handles Page Pagination
   * @param page number
   * @returns
   */
  const handlePaginate = (page: number) => {};

  /**
   * Sends Test Ad
   * @param type {type: string; to: string[]; message: string;}
   * @returns
   */
  const handleSendTestAd = ({
    type,
    to,
    message,
  }: {
    type: CreateCampaignType;
    to: string;
    message: string;
  }) => {
    if (type == 'SMS') {
      handleSendSMS({
        to,
        message,
      });
      return;
    }
    if (type == 'Email') {
      handleSendEmail({
        to,
        message,
      });
      return;
    }
  };

  /**
   * Returns Form Render Field
   * @param data any
   */
  const formFieldRender = (formData: any) => {
    return formData.map((data: any) => {
      if (data.disabled) return null;
      switch (data.type) {
        case 'select':
          return (
            <ListItem
              ml={data.isChild ? '5' : 0}
              key={`campaigne_form_${data.name}`}
              pt={8}
              display="flex"
              flexDir="row"
              alignItems="center"
              mb="8"
            >
              <Text fontSize="2xl" mx="8" fontWeight="black">
                {`${data.number ? data.number + '.' : ''}`}
              </Text>
              <DropdownSelect
                error={errors[data.name] ? data.errorMessage : undefined}
                onChange={handleChange}
                options={data.options || []}
                label={data.label}
                labelProps={selectLabelProps}
                name={data.name}
                selected={inputTypes[data.name]}
                selectProps={selectProps}
              />
            </ListItem>
          );
        case 'multi-select':
          return (
            <ListItem
              key={`campaigne_form_${data.name}`}
              ml={data.isChild ? '5' : 0}
              maxW="30rem"
              minW="30rem"
              display="flex"
              flexDir="row"
              alignItems="center"
              mb="8"
            >
              <Text fontSize="2xl" mx="8" fontWeight="black">
                {`${data.number ? data.number + '.' : ''}`}
              </Text>
              <MultiSelect
                selectOptions={data.options as DropdownSelectOption[]}
                selectProps={selectProps}
                label={data.label}
                labelProps={selectLabelProps}
                extraLabel={data.extraLabel ?? data.extraLabel}
                handleChange={handleChange}
                name={data.name}
                error={errors[data.name] ? data.errorMessage : undefined}
              />
            </ListItem>
          );
        case 'range-selector':
          return (
            <ListItem
              key={`campaigne_form_${data.name}`}
              ml={data.isChild ? '5' : 0}
              display="flex"
              flexDir="row"
              alignItems="center"
              mb="8"
            >
              <Text fontSize="2xl" mx="8" fontWeight="black">
                {`${data.number ? data.number + '.' : ''}`}
              </Text>
              <MultiRangeSelector
                label={data.label}
                labelProps={selectLabelProps}
                extraLabel={data.extraLabel ?? data.extraLabel}
                ranges={data.ranges as Range[]}
              />
            </ListItem>
          );
        case 'image-upload':
          return (
            <ListItem
              key={`campaigne_form_${data.name}`}
              display="flex"
              flexDir="row"
              alignItems="center"
              ml={data.isChild ? '5' : 0}
              maxW="30rem"
              mb="8"
              pt={8}
            >
              <Text fontSize="2xl" mx="8" fontWeight="black">
                {`${data.number ? data.number + '.' : ''}`}
              </Text>
              <UploadImage
                name={data.name}
                handleChange={handleChange}
                label={data.label}
                labelProps={selectLabelProps}
                initialImage={inputTypes[data.name]}
              />
            </ListItem>
          );
        case 'table':
          return (
            <ListItem
              key={`campaigne_form_${data.name}`}
              display="flex"
              flexDir="column"
              alignItems="flex-start"
              ml={data.isChild ? '5' : 0}
              maxW="80rem"
              mb="8"
              pt={8}
              overflow="auto"
            >
              <Text
                ml="14"
                color={colorMode === 'dark' ? 'white' : 'black'}
                {...selectLabelProps}
              >
                {data.label}
              </Text>
              {/* DataTable*/}
              <Box>
                <Flex flex={1} justifyContent="flex-end" mb="4" mr="8">
                  <Flex mr="16">
                    <Text fontSize="md">
                      Sort by:{' '}
                      <Text as="span" fontWeight="semibold">
                        Alphabet
                      </Text>
                    </Text>
                  </Flex>
                  <Flex>
                    <Text fontSize="md">
                      Total:{' '}
                      <Text as="span" fontWeight="semibold">
                        {dataBody.length} Contacts
                      </Text>
                    </Text>
                  </Flex>
                </Flex>

                <Table variant="leadTable">
                  <Thead>
                    <Tr>
                      {leadsTableHead.map((th, i) => {
                        return (
                          <Th
                            fontSize="md"
                            textTransform="capitalize"
                            fontFamily="Avenir"
                            key={`table_h_2_${data.name}`}
                          >
                            {th.name === 'Lead ID' && (
                              <Checkbox
                                size="lg"
                                colorScheme="red"
                                variant="brand"
                                isChecked={allChecked}
                                isIndeterminate={isIndeterminate}
                                onChange={(e: { target: { checked: any; }; }) =>
                                  setCheckedItems(
                                    checkedItems.reduce(
                                      (acc: any, checkItem: any) => [
                                        ...acc,
                                        {
                                          ...checkItem,
                                          isChecked: e.target.checked,
                                        },
                                      ],
                                      []
                                    )
                                  )
                                }
                              />
                            )}
                            {th.name}
                          </Th>
                        );
                      })}
                    </Tr>
                  </Thead>

                  <Tbody>
                    {dataBody.map((data, i) => (
                      <Tr key={`lead_data_${data.name}`}>
                        <Td>
                          <Checkbox
                            size="lg"
                            colorScheme="red"
                            variant="brand"
                            isChecked={checkedItems[i]?.isChecked}
                            onChange={(e: { target: { checked: any; }; }) => {
                              const newItems = [...checkedItems];
                              newItems[i].isChecked = e.target.checked;
                              setCheckedItems(newItems);
                            }}
                          />
                          {data.leadId}
                        </Td>
                        <Td>{data.name}</Td>
                        <Td>{data.phoneNumber}</Td>
                        <Td>{data.afflicate}</Td>
                        <Td>
                          <Flex justifyContent="center" alignItems="center">
                            <Text> {data.status}</Text>
                            <Box
                              h="4"
                              w="6"
                              ml="2"
                              borderRadius="100%"
                              border="1px solid #707070"
                              bgColor={quikColorConstants.influenceRed}
                            />
                          </Flex>
                        </Td>
                        <Td>{data.createdAt}</Td>
                        <Td>${data.cost}</Td>
                        <Td>${data.revenue}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
                {/* Pagination */}
                <Flex
                  width="full"
                  justifyContent="flex-end"
                  alignItems="center"
                  my={8}
                  mt={2}
                >
                  {/* 
                <button type="button" onClick={() => {}}>
                  <FontAwesomeIcon
                    icon={faCaretLeft as IconProp}
                    style={{ margin: 'auto 10px' }}
                  />
                </button>
               */}
                  <Text fontSize="md" mr="6">
                    Page <b>1</b> of 50
                  </Text>
                  <button type="button" onClick={() => {}}>
                    <FontAwesomeIcon
                      icon={faCaretRight as IconProp}
                      style={{ margin: 'auto 10px' }}
                    />
                  </button>
                </Flex>
              </Box>
            </ListItem>
          );
        case 'submit':
          return (
            <ListItem
              key={`campaigne_form_${data.name}`}
              display="flex"
              flexDir="row"
              alignItems="center"
              justifyContent="center"
              ml={data.isChild ? '5' : 0}
              maxW="60rem"
              mb="8"
              pt={8}
            >
              <Text fontSize="2xl" mx="8" fontWeight="black">
                {`${data.number ? data.number + '.' : ''}`}
              </Text>
              <Box>
                <FormLabel
                  mb="3"
                  color={colorMode === 'dark' ? 'white' : 'black'}
                  {...selectLabelProps}
                >
                  Submit Campaign
                </FormLabel>
                <Text fontSize="lg">
                  We will review your campaign and correspond any changes or
                  approval decision to you
                </Text>
                <CustomButton
                  maxW="204px"
                  mt="8"
                  p="6"
                  fontSize="lg"
                  isDisabled={loading}
                  onClick={handleSubmit}
                >
                  {initialdata ? 'Update' : 'Submit'} Campaign{' '}
                  {loading && (
                    <Image src={loader} alt="" width={50} height={50} />
                  )}
                </CustomButton>
              </Box>
            </ListItem>
          );
        case 'ad-preview':
          return (
            <ListItem
              key={`campaigne_form_${data.name}`}
              alignItems="center"
              ml={data.isChild ? '5rem' : 0}
              maxW="30rem"
              mb="8"
              pt={8}
            >
              <Text
                fontSize="xl"
                mb="3"
                color={colorMode === 'dark' ? 'white' : 'gray'}
                fontWeight="semibold"
              >
                {data.label}
              </Text>
              <Flex
                bgColor={colorMode === 'light' ? '#CECECE' : 'black'}
                minW="50rem"
                maxW="50rem"
                h="20rem"
                mb="8"
              >
                <Flex
                  alignSelf="end"
                  mb="4"
                  ml="4"
                  h="15rem"
                  w="35rem"
                  maxH="15rem"
                  overflow="auto"
                  bgColor={bgThemeColor[colorMode]}
                  border={`1px solid ${borderThemeColor[colorMode]}`}
                  borderRadius={30}
                  borderBottomLeftRadius="none"
                  p="8"
                  pb={0}
                  flexDir="column"
                >
                  <Text
                    dangerouslySetInnerHTML={{
                      __html: urlify(inputTypes['message']),
                    }}
                    fontSize="md"
                    fontWeight="semibold"
                    mb="5"
                  />
                  {inputTypes['adImage'] && (
                    <Box justifyContent="center" alignItems="center">
                      <Image
                        src={inputTypes['adImage']}
                        alt="Ad Image"
                        width="200"
                        height="70"
                      />
                    </Box>
                  )}
                </Flex>
              </Flex>
            </ListItem>
          );
        default:
          return (
            <ListItem
              key={`campaigne_form_${data.name}`}
              ml={data.isChild ? '5' : 0}
              display="flex"
              flexDir="row"
              alignItems="center"
              mb="8"
            >
              <Text fontSize="2xl" mx="8" fontWeight="black">
                {`${data.number ? data.number + '.' : ''}`}
              </Text>

              <Flex flexDir="column" flex={1}>
                <TextInput
                  error={errors[data.name] ? data.errorMessage : undefined}
                  name={data.name}
                  label={data.label}
                  value={inputTypes[data.name]}
                  handleChange={handleChange}
                  type={data.type}
                  placeholder={data.placeholder || data.label}
                  extraLabel={data.extraLabel ?? data.extraLabel}
                  formControlProps={{
                    pt: 8,
                    maxW: data.label.includes('Send Test Ad')
                      ? '25rem'
                      : '40rem',
                  }}
                  labelProps={{
                    fontSize: '1.4rem',
                    fontWeight: 'semibold',
                  }}
                  TextInputProps={{ p: '.6rem', pl: 4, size: 'lg' }}
                />
                {data.label.includes('Send Test Ad') && (
                  <CustomButton
                    maxW="25rem"
                    mt="8"
                    mb="8"
                    p="6"
                    disabled={isSending}
                    isLoading={isSending}
                    fontSize="lg"
                    onClick={() => {
                      const sendData = {
                        type,
                        to:
                          type === 'Email'
                            ? inputTypes['email']
                            : type === 'SMS'
                            ? inputTypes['phone']
                            : '',
                        message: inputTypes['message'],
                      };

                      handleSendTestAd(sendData as any);
                    }}
                    bgColor="#7B7B7B"
                  >
                    Send
                  </CustomButton>
                )}
              </Flex>
            </ListItem>
          );
      }
    });
  };

  /**
   * Returns Form Data
   * @param type  CreateCampaignType
   */
  const getFormData = (type: CreateCampaignType): any[] => {
    switch (type) {
      case 'Email':
        return emailFormdata;
      case 'SMS':
        return smsFormdata;
      default:
        return formdata;
    }
  };

  const { handleChange, inputTypes, handleSubmit, errors, loading } = useForm({
    inputs: getFormData(type as CreateCampaignType),
    initials: initialdata || {},
    cb: async inputs => {
      const smsEmailRecord = type !== 'Default' && {
        message: inputTypes['message'],
        to: checkedItems
          .filter((el: any) => el.isChecked)
          .map((lead: any) =>
            type === 'Email' ? lead.email : lead.phoneNumber
          ),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      };
      console.log('inputs here', inputs);
      console.log('smsEmailRecord here', smsEmailRecord);

      const formFieldsInput = getFormFields(inputs.formData);
      const formDataObject = {
        type,
        name: inputs.name,
        description: inputs.description,
        status: inputs.status || 'SCHEDULED',
        redirectUrl: inputs.redirectUrl,
        paidType: inputs.paidType,
        banner: inputs.banner,
        formData: { form: formFieldsInput },
        campaignDate: inputs.campaignDate,
        prices: inputs.prices,
        ...smsEmailRecord,
      };
      const response = initialdata
        ? await axiosInstance.put(
            `/users/campaign/${initialdata.id}`,
            formDataObject
          )
        : await axiosInstance.post('/users/create/campaign', formDataObject);

      if (response) {
        toast({
          title: initialdata
            ? 'Campaign updated successfully!'
            : 'Your campaign has been created successfully!',
          description: '',
          status: 'success',
          duration: 4000,
          isClosable: true,
        });
        setTimeout(() => {
          router.push('/dashboard/campaigns');
        }, 2000);
      }
    },
  });

  if (type === 'SMS') {
    return (
      <Flex flexDirection="column">
        {/* Back arrow  */}
        <Flex
          flexDir="row"
          alignItems="center"
          onClick={router.back}
          _hover={{ cursor: 'pointer' }}
        >
          <FontAwesomeIcon icon={faChevronLeft as IconProp} size="xs" />
          <Text fontWeight="bold" pl="2">
            Back
          </Text>
        </Flex>

        {/* Headline Block  */}
        <Flex flexDir="column" mt="16">
          <Heading fontSize="1.5rem">New SMS Campaign</Heading>
          <Text mt="3" fontSize="lg">
            Here is where your new campaign will come to life. Select you
            preferences and design your campaign below.
          </Text>
        </Flex>

        {/* Main Content  */}
        <Flex
          bg={cardThemeColor[colorMode]}
          minH="100%"
          h="100%"
          w="60vw"
          mt="8"
          pb="16"
        >
          <form action="post">
            <OrderedList size="2xl" style={{ listStyle: 'none' }}>
              {formFieldRender(smsFormdata)}
            </OrderedList>
          </form>
        </Flex>
      </Flex>
    );
  }

  if (type === 'Email') {
    return (
      <Flex flexDirection="column">
        {/* Back arrow  */}
        <Flex
          flexDir="row"
          alignItems="center"
          onClick={router.back}
          _hover={{ cursor: 'pointer' }}
        >
          <FontAwesomeIcon icon={faChevronLeft as IconProp} size="xs" />
          <Text fontWeight="bold" pl="2">
            Back
          </Text>
        </Flex>

        {/* Headline Block  */}
        <Flex flexDir="column" mt="16">
          <Heading fontSize="1.5rem">New Email Campaign</Heading>
          <Text mt="3" fontSize="lg">
            Here is where your new campaign will come to life. Select you
            preferences and design your campaign below.
          </Text>
        </Flex>

        {/* Main Content  */}
        <Flex
          bg={cardThemeColor[colorMode]}
          minH="100%"
          h="100%"
          w="60vw"
          mt="8"
          pb="16"
        >
          <form action="post">
            <OrderedList size="2xl" style={{ listStyle: 'none' }}>
              {formFieldRender(emailFormdata)}
            </OrderedList>
          </form>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex flexDirection="column">
      <Heading size="xl"> {initialdata ? 'Edit' : 'New'} Campaign</Heading>
      <Text my="10" color={quikColorConstants.greyLighter}>
        {initialdata
          ? 'Make changes to your existing campaign here.'
          : 'Here is where your new campaign will come to life. Select your preferences and design your campaign below.'}
      </Text>

      <form action="post">
        <OrderedList size="2xl">
          {formdata.map((data, i) => {
            if (data.disabled) return null;
            switch (data.type) {
              case 'select':
                return (
                  <ListItem maxW="60rem" pt={8} key={`campaigne_form_${i}`}>
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
                  </ListItem>
                );
              case 'multi-select':
                return (
                  <ListItem key={`campaigne_form_${i}`}>
                    <MultiSelect
                      selectOptions={data.options as DropdownSelectOption[]}
                      label={data.label}
                      extraLabel={data.extraLabel ?? data.extraLabel}
                      handleChange={handleChange}
                      name={data.name}
                      error={errors[data.name] ? data.errorMessage : undefined}
                      initialvalue={inputTypes.formData || []}
                    />
                  </ListItem>
                );
              case 'range-selector':
                return (
                  <ListItem key={`campaigne_form_${i}`}>
                    <MultiRangeSelector
                      label={data.label}
                      extraLabel={data.extraLabel ?? data.extraLabel}
                      ranges={data.ranges as Range[]}
                    />
                  </ListItem>
                );
              case 'image-upload':
                return (
                  <ListItem maxW="60rem" pt={8} key={`campaigne_form_${i}`}>
                    <UploadImage
                      name={data.name}
                      handleChange={handleChange}
                      label={data.label}
                      initialImage={inputTypes[data.name]}
                    />
                  </ListItem>
                );
              default:
                return (
                  <ListItem key={`campaigne_form_${i}`}>
                    <TextInput
                      error={errors[data.name] ? data.errorMessage : undefined}
                      name={data.name}
                      label={data.label}
                      value={inputTypes[data.name]}
                      formControlProps={{
                        pt: 8,
                        maxW: '60rem',
                      }}
                      handleChange={handleChange}
                      type={data.type}
                      placeholder={data.label}
                      TextInputProps={{}}
                      extraLabel={data.extraLabel ?? data.extraLabel}
                    />
                  </ListItem>
                );
            }
          })}

          <ListItem my={20}>
            <FormLabel
              fontSize="1.6rem"
              color={
                colorMode === 'light' ? quikColorConstants.black : '#FFFFFF'
              }
              htmlFor="multiRangeSelector"
              data-testid="textInput-label"
            >
              Submit Campaign
            </FormLabel>
            <Text>
              We will review your campaign and correspond any changes or
              approval decision to you
            </Text>
            <CustomButton maxW="204px" mt={12} onClick={handleSubmit}>
              {initialdata ? 'Update' : 'Create'} Campaign{' '}
              {loading && <Image src={loader} alt="" width={50} height={50} />}
            </CustomButton>
          </ListItem>
        </OrderedList>
      </form>
    </Flex>
  );
};

export default CreateCampaign;
