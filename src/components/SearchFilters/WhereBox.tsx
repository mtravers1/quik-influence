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
import { ChangeEvent, useEffect, useState } from "react"
import { borderThemeColor, dashboardColor } from "utils/constants/colorConstants"

import { faPlus, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const PropertyButton = () => {

}

const suggestedFields = [
  {
    label: "State",
    key: "state"
  },
  {
    label: "City",
    key: "city"
  },
  {
    label: "Phone Number",
    key: "phone"
  },
  {
    label: "Gender",
    key: "gender"
  },
]

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

const defaultPropertyValues = [

  {
    label: "FL",
    key: "fl"
  }, {
    label: "NY",
    key: "ny"
  }, {
    label: "CA",
    key: "ca"
  }, {
    label: "CT",
    key: "ct"
  }, {
    label: "DE",
    key: "de"
  }, {
    label: "GA",
    key: "ga"
  }, {
    label: "TN",
    key: "tn"
  }, {
    label: "VT",
    key: "vt"
  }, {
    label: "WA",
    key: "wa"
  },
]


const WhereBox = () => {
  const { colorMode } = useColorMode()
  const [selectedComparator, setSelectedComparator] = useState(comparators[0])
  const [property, setProperty] = useState({})
  const [values, setValues] = useState<string[]>([])
  const [selectAll, setSelectAll] = useState(false)



  const handlePropertyClick = (field: any) => {
    setProperty(field)
  }

  const renderValues = () => {
    return (
      <Text>
        {

        }
      </Text>
    )
  }

  const handlePropertyValues = (e: ChangeEvent, key: any) => {
    e.stopPropagation();
    const target = e.target as HTMLInputElement
    const checked = target.checked
    if (checked) {
      setValues(_key => [..._key, key])
    } else {
      setValues(_key => _key.filter(a => a !== key))
      setSelectAll(false)
    }

  }

  const handleSelectAll = (e: ChangeEvent) => {
    e.stopPropagation();
    const target = e.target as HTMLInputElement
    const checked = target.checked
    const keys = defaultPropertyValues.map(value => value.key)
    checked && setValues(keys)
    setSelectAll(checked)
  }

  useEffect(() => {
    console.log(selectAll)
  }, [selectAll])


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
                    <Input border='none' fontSize="xl" fontStyle="italic" placeholder="Search" />
                  </Flex>
                  <MenuDivider />
                  <MenuGroup title='Suggested fields' fontSize="xl">
                    {
                      suggestedFields.map(field =>
                        <MenuItem
                          onClick={() => handlePropertyClick(field)}
                          key={field.key}>
                          {field.label}
                        </MenuItem>)
                    }
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title='Quik influence fields' fontSize="xl">
                    <MenuItem>Docs</MenuItem>
                    <MenuItem>FAQ</MenuItem>
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
                        {!values.length ? "Select value(s)..." :
                          renderValues()
                        }
                      </Box>
                    </MenuButton>


                    <MenuList padding={0} bg="white" width="500px" maxH="240px" overflow="scroll" fontSize="xl" >
                      <Flex padding={2}>
                        <FontAwesomeIcon icon={faSearch as IconProp} style={{ margin: "auto 5px" }} />
                        <Input border='none' fontSize="xl" fontStyle="italic" placeholder="Search" />
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
                            defaultPropertyValues.map(propertyValue =>
                              <Flex mx="3"
                                key={propertyValue.key}>
                                <Checkbox
                                  size="lg"
                                  // value={propertyValue.key}
                                  isChecked={values.includes(propertyValue.key)}
                                  onChange={(e) => handlePropertyValues(e, propertyValue.key)}
                                  fontSize="xl"
                                >
                                  {propertyValue.label}
                                </Checkbox>

                              </Flex>)
                          }
                        </CheckboxGroup>

                      </MenuGroup>
                      <Box as="div" position="sticky" bottom={0} zIndex={90} bg="white">
                        <MenuDivider />
                        <Flex width="100%" justifyContent="space-between" pb={3} px={5}>
                          <Button>Cancel</Button>
                          <Button>Apply Filter</Button>
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

      <Box as="div" cursor="pointer" onClick={() => { }}>
        <FontAwesomeIcon icon={faTimes as IconProp}
          style={{ margin: "auto 5px" }} />
      </Box>
    </Flex>
  )
}

export default WhereBox