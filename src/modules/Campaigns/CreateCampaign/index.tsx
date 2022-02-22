import { Heading, Flex, Text, List, OrderedList, ListItem, FormControl, FormLabel, useColorMode, FormErrorMessage } from "@chakra-ui/react"
import CustomButton from "components/Button";
import DropdownSelect, { DropdownSelectOption } from "components/DropdownSelect";
import { TextInput } from "components/Input"
import useForm from 'hooks/useForm';
import Image from "next/image";
import quikColorConstants from "utils/constants/colorConstants"
import formdata from 'utils/constants/formData/campaign';
import MultiRangeSelector, { Range } from "./MultiRangeSelector";
import MultiSelect from "./MultiSelect";
import loader from 'assets/loader.gif';
import UploadImage from "./UploadImage";



const CreateCampaign = () => {

  const { colorMode } = useColorMode()

  const { handleChange, inputTypes, handleSubmit, errors, loading } = useForm({
    inputs: formdata,
    cb: async inputs => {
      console.log('inputs')
      console.log(inputs)
    }
  })
  return (
    <Flex flexDirection="column">
      <Heading size='xl'> New Campaign</Heading>
      <Text my="10" color={quikColorConstants.greyLighter} >
        Here is where your new campaign will come to life.
        Select your preferences and design your campaign below.
      </Text>

      <form action="post">
        <OrderedList size="2xl">
          {
            formdata.map((data, i) => {
              if (data.disabled) return null
              switch (data.type) {
                case 'select':
                  return (
                    <ListItem maxW="60rem" pt={8}>
                      <DropdownSelect
                        error={errors[data.name] ? data.errorMessage : undefined}
                        onChange={handleChange}
                        options={data.options || []}
                        label={data.label}
                        name={data.name}
                        selectProps={{
                          height: '4.5rem',
                          fontSize: '1.4rem',
                        }}
                      />
                    </ListItem>
                  )
                case 'multi-select':
                  return (
                    <ListItem>
                      <MultiSelect
                        selectOptions={data.options as DropdownSelectOption[]}
                        label={data.label}
                        extraLabel={data.extraLabel ?? data.extraLabel}
                        handleChange={handleChange}
                        name={data.name}
                      />
                    </ListItem>
                  )
                case 'range-selector':
                  return (
                    <ListItem>
                      <MultiRangeSelector
                        label={data.label}
                        extraLabel={data.extraLabel ?? data.extraLabel}
                        ranges={data.ranges as Range[]}
                      />
                    </ListItem>
                  )
                case 'image-upload':
                  return (
                    <ListItem maxW="60rem" pt={8}>
                      <UploadImage />
                    </ListItem>
                  )
                default:
                  return (
                    <ListItem>
                      <TextInput
                        error={errors[data.name] ? data.errorMessage : undefined}
                        name={data.name}
                        label={data.label}
                        value={inputTypes[data.name]}
                        formControlProps={{
                          pt: 8,
                          maxW: "60rem"
                        }}
                        handleChange={handleChange}
                        type={data.type}
                        placeholder={data.label}
                        TextInputProps={{}}
                        extraLabel={data.extraLabel ?? data.extraLabel}
                      />
                    </ListItem>
                  )
              }
            })
          }
          <ListItem my={20}>
            <FormLabel
              fontSize="1.6rem"
              color={colorMode === 'light' ? quikColorConstants.black : '#FFFFFF'}
              htmlFor='multiRangeSelector'
              data-testid="textInput-label"
            >
              Submit Campaign
            </FormLabel>
            <Text>We will review your campaign and correspond any changes or approval decision to you</Text>
            <CustomButton maxW="204px" mt={12} onClick={handleSubmit}>
              Create Campaign {loading && <Image src={loader} alt="" width={50} height={50} />}
            </CustomButton>
          </ListItem>
        </OrderedList>

      </form>
    </Flex>
  )
}

export default CreateCampaign