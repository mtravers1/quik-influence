import {
  Box, Flex, Text, useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Input,
  Checkbox,
  CheckboxGroup,
  Stack,
} from "@chakra-ui/react"
import React, { ChangeEvent, useEffect, useState } from "react"
import { borderThemeColor, dashboardColor } from "utils/constants/colorConstants"

import { faPlus, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useSelector } from "react-redux";
import { PropertyType, WhereBoxProps } from "./types";
import { STATES } from "./constants";
import { TextInput } from "components/Input";


const comparators = [
  {
    label: "=",
    key: "equal"
  },
  {
    label: "!=",
    key: "notEqual"
  },

]

const WhereBox: React.FC<WhereBoxProps> = ({setSearchParams, handleRemoveQuery, id}) => {
  const { colorMode } = useColorMode()
  const { formData } = useSelector((state: any) => state.generals)
  const [selectedComparator, setSelectedComparator] = useState(comparators[0])
  const [property, setProperty] = useState<PropertyType>()
  const [values, setValues] = useState<string[] | string>()
  const [type, setType] = useState('')
  const [selectAll, setSelectAll] = useState(false)
  const [allProperties, setAllProperties] = useState([])
  const [allValues, setAllValues] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [searchValueInput, setSearchValueInput] = useState('')
  
  
  const onCancle = () => {
    handleRemoveQuery(id)
  }

  const quikInfluenceProperties: any = () => (
    formData
      .filter((data: any) => data.status === 'active')
      .map((data: any) => ({
        label: data.name,
        value: data.name,
        type: ('dataType' in data.meta) ? data.meta.dataType : data.meta.type,
        key: data.id
      }))
  )

  useEffect(() => {
    setAllProperties(quikInfluenceProperties())
  }, [])


  const handlePropertyClick = (field: PropertyType) => {
    setProperty(field)
    setType(field.type)
    if (field.label === 'state' || field.label === 'city') {
      setValues([])
      setAllValues(STATES)
    } else {
      setValues('')
    }
    //values configuration should depend on the field's type & name.
  }

  const renderValues = (values: string[] | String) => {
    if (Array.isArray(values)) {
      //if values is more than 10, truncate
      if (values.length > 20) {

        return (
          <Text>
            {
              values.slice(0, 10).map(value => `${value}, `)
            }
            ....,
            {
              values.slice(values.length - 10).map(value => `${value}, `)
            }
          </Text>
        )
      }
      return (
        <Text >
          {
            values.map(value => `${value}, `)
          }
        </Text>
      )

    }
    return (
      <Text > { values  } </Text>)
  }


  const handlePropertyValues = (e: ChangeEvent, key?: any) => {
    e.stopPropagation();
    const target = e.target as HTMLInputElement
    const { checked, value } = target
    if (key) {
      if (checked) {
        setValues(_key => [..._key, key])
      } else {
        setValues(_key => _key.filter(a => a !== key))
        setSelectAll(false)
      }
    } else {
      setValues(value)

    }


  }

  const handleSelectAll = (e: ChangeEvent) => {
    e.stopPropagation();
    const target = e.target as HTMLInputElement
    const checked = target.checked
    const keys = STATES.map(value => value.abbreviation)
    checked && setValues(keys)
    setSelectAll(checked)
  }

  const handlePropertySearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value
    setSearchInput(searchValue)
    const updatedProperties = quikInfluenceProperties().filter((a: any) => {
      if (a.label.toLowerCase().includes(searchValue.toLowerCase())){
        return a
      }
    })
    setAllProperties(updatedProperties)
  }

  const handleValueSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value
    setSearchValueInput(searchValue)
    const updatedSearchValues = STATES.filter((a: any) => {
      if (a.name.toLowerCase().includes(searchValue.toLowerCase())){
        return a
      }
    })
    setAllValues(updatedSearchValues)
  }

  //Render value inputs depending on the type of search property field dataname 
  const renderValueInput = () => {
    //When searching for state or city, render checkbox. 
    if (property && (property.label.toLowerCase() === "city" || property.label.toLowerCase() === "state")) {
      return (
        <>
          <Flex padding={2}>
            <FontAwesomeIcon icon={faSearch as IconProp} style={{ margin: "auto 5px" }} />
            <Input 
              value={searchValueInput} 
              onChange={handleValueSearch}
              border='none' 
              fontSize="xl" 
              fontStyle="italic" 
              placeholder="Search" />
          </Flex>
          <MenuDivider />
          <MenuGroup title='All Values' fontSize="xl" px={2}>
            <CheckboxGroup colorScheme="brand">
              <Checkbox
                ml={3}
                size="lg"
                isChecked={selectAll}
                onChange={(e) => handleSelectAll(e)}
                fontSize="xl"
              >
                Select All
              </Checkbox>

              {
                allValues.map(state =>
                  <Flex mx="3"
                    key={state.abbreviation}>
                    <Checkbox
                      size="lg"
                      // value={propertyValue.key}
                      isChecked={values.includes(state.abbreviation)} 
                      onChange={(e) => handlePropertyValues(e, state.abbreviation)}
                      fontSize="xl"
                    >
                      {state.name}
                    </Checkbox>

                  </Flex>)
              }
            </CheckboxGroup>
          </MenuGroup>
        </>
      )
    }
    switch (type) {
      case "string":
      case "date":
        return (
          <Flex padding={6}>
            <TextInput
              type={type}
              value={values as unknown as string}
              handleChange={handlePropertyValues}
              label="Enter Search Value"
              placeholder="Search Value"
              TextInputProps={{
                padding: "0.4rem",
              }}
            />
          </Flex>

        );

      default:
        break;
    }
  }

  return (

    <Flex
      width='full'
      mt={6}
      bgColor={dashboardColor[colorMode]}
      py={2}
      alignItems="center"
      justifyContent="space-between"
      fontSize="xl"
    >
      <Flex
        alignItems="center">
        <Text fontSize="xl" mr="4" mx="2" >where</Text>
        <Box  >
          {/* Property Menu */}
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton isActive={isOpen} as={Button} >
                  <Box fontStyle="italic" fontSize="xl" px="2"
                    border={`1px solid ${borderThemeColor[colorMode]}`}>
                    {!property?.label ? "Select user property..." : property.label}
                  </Box>
                </MenuButton>


                <MenuList width="500px" maxH="240px" overflow="scroll" fontSize="xl" px={2}>
                  <Flex>
                    <FontAwesomeIcon icon={faSearch as IconProp} style={{ margin: "auto 5px" }} />
                    <Input onChange={handlePropertySearch} value={searchInput} border='none' fontSize="xl" fontStyle="italic" placeholder="Search" />
                  </Flex>
                  <MenuDivider />
                  <MenuGroup title='Quik influence fields' fontSize="xl">
                    {
                      allProperties.map((field: PropertyType) =>
                        <MenuItem
                          onClick={() => handlePropertyClick(field)}
                          key={field.key}>
                          {field.label}
                        </MenuItem>)
                    }
                  </MenuGroup>
                </MenuList>
              </>
            )}
          </Menu>
          {
            property?.label &&
            <>
              {/* Comparator Menu */}
              <Menu >
                {({ isOpen }) => (
                  <>
                    <MenuButton isActive={isOpen} as={Button} mx={4} >
                      <Box fontSize="xl" px="2"
                        border={`1px solid ${borderThemeColor[colorMode]}`}>
                        {selectedComparator.label}
                      </Box>
                    </MenuButton>
                    <MenuList overflow="scroll" fontSize="xl" px={2}>
                      {
                        comparators.map(comparator =>
                          <MenuItem
                            onClick={() => setSelectedComparator(comparator)}
                            key={comparator.key}>
                            {comparator.label}
                          </MenuItem>)
                      }
                    </MenuList>
                  </>
                )}
              </Menu>

              {/* Property Menu */}
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton isActive={isOpen} as={Button} >
                      <Box fontStyle="italic" fontSize="xl" px="2"
                        border={`1px solid ${borderThemeColor[colorMode]}`}>
                        {!values.length ? "Enter value(s)..." :
                          renderValues(values)
                        }
                      </Box>
                    </MenuButton>


                    <MenuList padding={0} bg="white" width="500px" maxH="240px" overflow="scroll" fontSize="xl" >
                      {
                        renderValueInput()
                      }
                      <Box as="div" position="sticky" bottom={0} zIndex={90} bg="white">
                        <MenuDivider />
                        <Flex width="100%" justifyContent="space-between" pb={3} px={5}>
                          <Button >Cancel</Button>
                          <Button colorScheme="brand">Apply Filter</Button>
                        </Flex>

                      </Box>
                    </MenuList>
                  </>
                )}
              </Menu>
            </>
          }

        </Box>

      </Flex>

      <Box as="div" cursor="pointer" onClick={onCancle}>
        <FontAwesomeIcon icon={faTimes as IconProp}
          style={{ margin: "auto 5px" }} />
      </Box>
    </Flex>
  )
}

export default WhereBox