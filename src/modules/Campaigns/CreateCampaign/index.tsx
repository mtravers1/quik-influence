import { Heading, Flex, Text, List, OrderedList, ListItem, FormControl } from "@chakra-ui/react"
import { DropdownSelectOption } from "components/DropdownSelect";
import { TextInput } from "components/Input"
import useForm from 'hooks/useForm';
import quikColorConstants from "utils/constants/colorConstants"
import formdata from 'utils/constants/formData/campaign';
import MultiRangeSelector from "./MultiRangeSelector";
import MultiSelect from "./MultiSelect";



const CreateCampaign = () => {


  const { handleChange, inputTypes, handleSubmit, errors, loading } = useForm({
    inputs: formdata,
    cb: async inputs => {

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

              switch (data.type) {
                case 'multi-select':
                  return (
                    <ListItem>
                      <MultiSelect
                        selectOptions={data.options as DropdownSelectOption[]}
                        label={data.label}
                        extraLabel={data.extraLabel ?? data.extraLabel}
                      />
                    </ListItem>
                  )
                  case 'range-selector':
                    return (
                      <ListItem>
                        <MultiRangeSelector
                        label={data.label}
                        extraLabel={data.extraLabel ?? data.extraLabel}
                        ranges={data.ranges}
                        />
                      </ListItem>
                    )
                default:
                  return (
                    <ListItem>
                      <TextInput
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
        </OrderedList>

      </form>
    </Flex>
  )
}

export default CreateCampaign