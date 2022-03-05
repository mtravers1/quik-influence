import {
  Heading,
  Flex,
  Text,
  List,
  OrderedList,
  ListItem,
  createStandaloneToast,
  FormLabel,
  useColorMode,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import CustomButton from 'components/Button';
import DropdownSelect, {
  DropdownSelectOption,
} from 'components/DropdownSelect';
import { TextInput } from 'components/Input';
import useForm from 'hooks/useForm';
import Image from 'next/image';
import quikColorConstants from 'utils/constants/colorConstants';
import formdata from 'utils/constants/formData/campaign';
import formFieldsData from 'utils/constants/formData/closeFriends';
import MultiRangeSelector, { Range } from './MultiRangeSelector';
import MultiSelect from './MultiSelect';
import loader from 'assets/loader.gif';
import UploadImage from './UploadImage';
import { axiosInstance } from 'utils/helpers';
import { useRouter } from 'next/router';
import theme from 'styles/theme';

const getFormFields = (inputs: string[]) => {
  return formFieldsData.reduce((acc: any, fields: any) => {
    if (inputs.includes(fields.name)) {
      return [...acc, { ...fields, pattern: fields.pattern.toString() }];
    }

    return acc;
  }, []);
};

const CreateCampaign = ({ initialdata }: { initialdata: any }) => {
  const toast = createStandaloneToast(theme);
  const { colorMode } = useColorMode();
  const router = useRouter();

  const { handleChange, inputTypes, handleSubmit, errors, loading } = useForm({
    inputs: formdata,
    initials: initialdata || {},
    cb: async inputs => {
      const formFieldsInput = getFormFields(inputs.formData);
      const formDataObject = {
        name: inputs.name,
        description: inputs.description,
        status: inputs.status,
        redirectUrl: inputs.redirectUrl,
        paidType: inputs.paidType,
        banner: inputs.banner,
        formData: { form: formFieldsInput },
        campaignDate: inputs.campaignDate,
        prices: inputs.prices,
        facebookHandle: inputs.facebookHandle,
        tiktokHandle: inputs.tiktokHandle,
        twitterHandle: inputs.twitterHandle
      }
      const response = initialdata ?
        await axiosInstance.put(`/users/campaign/${initialdata.id}`, formDataObject)
        : await axiosInstance.post("/users/create/campaign", formDataObject);

      if (response) {
        toast({
          title: initialdata ? 'Campaign updated successfully!' :'Your campaign has been created successfully!',
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

  return (
    <Flex flexDirection="column">
      <Heading size="xl"> {initialdata ? 'Edit' : 'New'} Campaign</Heading>
      <Text my="10" color={quikColorConstants.greyLighter}>
        {initialdata ? "Make changes to your existing campaign here."
          : "Here is where your new campaign will come to life. Select your preferences and design your campaign below."}
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
              {initialdata ? "Update" : "Create"} Campaign{' '}
              {loading && <Image src={loader} alt="" width={50} height={50} />}
            </CustomButton>
          </ListItem>
        </OrderedList>
      </form>
    </Flex>
  );
};

export default CreateCampaign;
