import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
  HStack,
} from '@chakra-ui/react';
import CustomButton from 'components/Button';
import DropdownSelect, {
  DropdownSelectOption,
} from 'components/DropdownSelect';
import { TextInput } from 'components/Input';
import useForm from 'hooks/useForm';
import { format } from 'date-fns';
import Image from 'next/image';
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
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { urlify } from 'utils/urilify';
import { leadsTableColumns } from 'utils/constants/leadsPageTableData';
import { fetchPostJSON } from 'utils/apiHelpers';
import DataTable from 'components/DataTable';
import MultiSelectPopUp from 'components/MultiSelectPopUp';
import CheckBox from 'components/Input/CheckBox';
import { hasPermission } from 'utils/helpers';
import { MARKETING_ADMIN } from 'utils/constants';

type CreateCampaignType = 'SMS' | 'Email' | 'Default';

const selectLabelProps = {
  fontSize: '1.4rem',
  fontWeight: 'semibold',
};

const selectProps = { height: '3rem', width: '30rem', fontSize: '1.4rem' };

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
  const [isSending, setIsSending] = useState(false);
  const [isJoinable, setIsJoinable] = useState(false);

  const [checkedItems, setCheckedItems] = useState<any>([]);
  const [myLeadData, setMyLeadData] = useState<any>([]);

  const { permissions } = useSelector((state: any) => state.auth);

  useEffect(() => {
    getMyLeads();
  }, []);

  const getMyLeads = async () => {
    try {
      const resp = await axiosInstance.get(
        '/users/leads/get-own-leads?pageSize=1000&page=1'
      );
      let respData = resp.data.data.rows;
      respData = respData.map((item: any) => ({
        ...item,
        name: `${item.firstName} ${item.lastName}`,
        createdOn: format(new Date(item.createdAt), 'dd/MM/yyyy'),
      }));

      setMyLeadData(respData);
    } catch (err: any) {
      toast({
        title: 'Error While Fetching...',
        description: err.message,
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    }
  };

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
        mediaUrls: [inputTypes['adImage']],
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
                <DataTable
                  title="Leads"
                  data={myLeadData}
                  columns={leadsTableColumns}
                  onRowSelected={setCheckedItems}
                  variant="leadTable"
                />
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
        to: checkedItems.map((lead: any) => ({
          id: lead.id,
          email: lead.email,
          phone: lead.phone,
        })),
        mediaUrls: [inputTypes['adImage']],
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      };

      let smsObj = {};
      if (type === 'SMS') {
        smsObj = smsEmailRecord;
      }

      const formDataObject = {
        type,
        name: inputs.name,
        description: inputs.description,
        status: inputs.status || 'SCHEDULED',
        redirectUrl: inputs.redirectUrl,
        paidType: inputs.paidType,
        banner: inputs.banner,
        formData: JSON.stringify(inputs.formData),
        campaignDate: inputs.campaignDate,
        prices: inputs.prices,
        ...smsObj,
      };
      if (inputs.isJoinable && !inputs.expectedResponse) {
        //@ts-ignore
        formDataObject = {
          ...formDataObject,
          postingDocUrl: inputs.postingDocUrl,
          isJoinable: inputs.isJoinable,
          expectedResponse: {
            successKey: inputs.successKey,
            successValue: inputs.successValue,
            failureKey: inputs.failureKey,
            failureValue: inputs.failureValue,
          },
        };
      }

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
        <OrderedList size="2xl" marginInlineStart="2em">
          {formdata.map((data, i) => {
            if (data.disabled) return null;
            if (
              !hasPermission(MARKETING_ADMIN, permissions) &&
              data.name === 'isJoinable'
            )
              return null;

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
                    <MultiSelectPopUp
                      // selectOptions={data.options as DropdownSelectOption[]}
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
              case 'checkbox':
                return (
                  <ListItem key={`campaigne_form_${i}`} pt={8}>
                    <CheckBox
                      value={inputTypes[data.name]}
                      name={data.name}
                      handleChange={(e: any) => {
                        if (data.name === 'isJoinable') {
                          setIsJoinable(
                            inputTypes['isJoinable'] || !isJoinable
                          );
                        }
                        handleChange(e);
                      }}
                      label={data.label}
                    />
                  </ListItem>
                );
              case 'key_value':
                if (
                  data.name === 'expectedResponse' &&
                  !inputTypes['isJoinable']
                )
                  return null;
                if (
                  data.name === 'successKey' ||
                  data.name === 'failureKey' ||
                  data.name === 'successValue' ||
                  data.name === 'failureValue'
                )
                  return null;
                // console.log('name >>> ', inputTypes[data.name]);
                return (
                  <ListItem key={`campaigne_form_${i}`}>
                    <Text mt={10} fontWeight="500" fontSize="16px">
                      {data.label}
                    </Text>
                    {data?.fields &&
                      data?.fields.map(item => (
                        <HStack key={item.keyName} maxW="400px">
                          <TextInput
                            error={
                              errors[item.keyName]
                                ? data.errorMessage
                                : undefined
                            }
                            name={item.keyName}
                            value={inputTypes[data.name][item.keyName] || ''}
                            formControlProps={{
                              pt: 8,
                              maxW: '20rem',
                            }}
                            handleChange={handleChange}
                            type={data.type}
                            placeholder={item.keyName}
                            TextInputProps={{}}
                            extraLabel={data.extraLabel ?? data.extraLabel}
                          />
                          <TextInput
                            error={
                              errors[item.valueName]
                                ? data.errorMessage
                                : undefined
                            }
                            name={item.valueName}
                            value={inputTypes[data.name][item.valueName] || ''}
                            formControlProps={{
                              pt: 8,
                              maxW: '20rem',
                            }}
                            handleChange={handleChange}
                            type={data.type}
                            placeholder={item.valueName}
                            TextInputProps={{}}
                            extraLabel={data.extraLabel ?? data.extraLabel}
                          />
                        </HStack>
                      ))}
                  </ListItem>
                );
              default:
                if (data.name === 'postingDocUrl' && !inputTypes['isJoinable'])
                  return null;
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
