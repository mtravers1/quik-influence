import {
  Box,
  Flex,
  Text,
  useColorMode,
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
  Image
} from "@chakra-ui/react";
import React, { ChangeEvent, useEffect, useState } from "react";
import {
  borderThemeColor,
  dashboardColor
} from "utils/constants/colorConstants";

import LoaderGif from "assets/loader.gif";
import { faPlus, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useSelector } from "react-redux";
import { PropertyType, WhereBoxProps } from "./types";
import { GENDER, STATES } from "./constants";
import { TextInput } from "components/Input";
import { formDataRelatedToSpecificUser } from "utils/constants";
import { fetchPropertyValues } from "redux/actions/leads";

const comparators = [
  {
    label: "=",
    key: "equal"
  },
  {
    label: "Not =",
    key: "notEqual"
  }
];

const WhereBox: React.FC<WhereBoxProps> = ({
  setSearchParams,
  handleRemoveQuery,
  id
}) => {
  const { colorMode } = useColorMode();
  const { formData } = useSelector((state: any) => state.generals);
  const [selectedComparator, setSelectedComparator] = useState(comparators[0]);
  const [property, setProperty] = useState<PropertyType>();
  const [values, setValues] = useState<string[] | string>();
  const [type, setType] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [loadingPropertyValues, setLoadingPropertyValues] = useState(false);
  const [allProperties, setAllProperties] = useState([]);
  const [allValues, setAllValues] = useState<any>([]);
  const [searchPropertyValues, setSearchPropertyValues] = useState<any>([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchValueInput, setSearchValueInput] = useState("");

  const onCancel = () => {
    setValues("");
    setSearchPropertyValues([]);
    setProperty(undefined);
    handleRemoveQuery(id);
  };

  const renderLoaderGif = () => {
    return (
      <Box>
        <Image
          src={LoaderGif.src}
          mx="auto"
          alt="loader gif"
          width={20}
          height={20}
        />
      </Box>
    );
  };

  const quikInfluenceProperties: any = () =>
    formData
      .filter(
        (data: any) =>
          data.status === "active" &&
          !formDataRelatedToSpecificUser.includes(data.name)
      )
      .map((data: any) => ({
        label: data.name,
        value: data.name,
        type: "dataType" in data.meta ? data.meta.dataType : data.meta.type,
        key: data.id
      }));

  useEffect(() => {
    setAllProperties(quikInfluenceProperties());
  }, []);

  const handlePropertyClick = async (field: PropertyType) => {
    setProperty(field);
    setType(field.type);
    if (field.label === "state" || field.label === "city") {
      setValues([]);
      setSearchPropertyValues([]);
      setAllValues(STATES);
    } else if (field.label === "gender") {
      setValues([]);
      setSearchPropertyValues([]);
      setAllValues(GENDER);
    } else {
      setValues("");
      setSearchPropertyValues([]);
    }
    //values configuration should depend on the field's type & name.
  };

  const renderValues = (values: string[] | String) => {
    if (Array.isArray(values)) {
      //if values is more than 10, truncate
      if (values.length > 20) {
        return (
          <Text>
            {values.slice(0, 10).map((value) => `${value}, `)}
            ....,
            {values.slice(values.length - 10).map((value) => `${value}, `)}
          </Text>
        );
      }
      return <Text>{values.map((value) => `${value}, `)}</Text>;
    }
    return <Text> {values} </Text>;
  };

  const handlePropertyValues = async (e: ChangeEvent, key?: any) => {
    e.stopPropagation();
    const target = e.target as HTMLInputElement;
    const { checked, value } = target;
    if (key) {
      if (checked) {
        setValues((_key: any) => [..._key, key]);
      } else {
        setValues((_key: any) => _key.filter((a: any) => a !== key));
        setSelectAll(false);
      }
    } else {
      setValues(value);

      if (property) {
        setLoadingPropertyValues(true);
        property.value = value;
        const res = await fetchPropertyValues(property);
        if (res) {
          setLoadingPropertyValues(false);
          setSearchPropertyValues(res.data.data.propertyValues);
        }
      }
    }
  };

  const handleSelectAll = (e: ChangeEvent) => {
    e.stopPropagation();
    const target = e.target as HTMLInputElement;
    const checked = target.checked;
    const keys = STATES.map((value) => value.abbreviation);
    checked && setValues(keys);
    setSelectAll(checked);
  };

  const handlePropertySearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchInput(searchValue);
    const updatedProperties = quikInfluenceProperties().filter((a: any) => {
      if (a.label.toLowerCase().includes(searchValue.toLowerCase())) {
        return a;
      }
    });
    setAllProperties(updatedProperties);
  };

  const handleValueSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchValueInput(searchValue);
    const updatedSearchValues = STATES.filter((a: any) => {
      if (a.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return a;
      }
    });
    setAllValues(updatedSearchValues);
  };

  useEffect(() => {
    setSearchParams((params: any) =>
      params.map((param: any) =>
        param.id === id
          ? { ...param, property, values, comparator: selectedComparator.key }
          : param
      )
    );
  }, [values, selectedComparator]);

  //Render value inputs depending on the type of search property field dataname
  const renderValueInput = () => {
    //When searching for state or city, render checkbox.
    if (
      property &&
      (property.label.toLowerCase() === "city" ||
        property.label.toLowerCase() === "state" ||
        property.label.toLowerCase() === "gender")
    ) {
      const isGender = property.label.toLowerCase() === "gender";
      return (
        <>
          {!isGender && (
            <Flex padding={2}>
              <FontAwesomeIcon
                icon={faSearch as IconProp}
                style={{ margin: "auto 5px" }}
              />
              <Input
                value={searchValueInput}
                onChange={handleValueSearch}
                border="none"
                fontSize="xl"
                fontStyle="italic"
                placeholder="Search"
              />
            </Flex>
          )}
          <MenuDivider />
          <MenuGroup title="All Values" fontSize="xl" px={2}>
            {!isGender && (
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

                {allValues.map((state: any) => (
                  <Flex mx="3" key={state.abbreviation}>
                    <Checkbox
                      size="lg"
                      // value={propertyValue.key}
                      isChecked={
                        values ? values.includes(state.abbreviation) : false
                      }
                      onChange={(e) =>
                        handlePropertyValues(e, state.abbreviation)
                      }
                      fontSize="xl"
                    >
                      {state.name}
                    </Checkbox>
                  </Flex>
                ))}
              </CheckboxGroup>
            )}
            {isGender && (
              <>
                {allValues.map((gender: any) => (
                  <MenuItem
                    key={gender.name}
                    onClick={() => setValues(gender.abbreviation)}
                  >
                    <Text>{gender.name}</Text>
                  </MenuItem>
                ))}
              </>
            )}
          </MenuGroup>
        </>
      );
    }
    switch (type) {
      case "string":
      case "date":
        return (
          <Flex padding={6} flexDirection="column">
            <TextInput
              type={type}
              value={values as unknown as string}
              handleChange={handlePropertyValues}
              label="Enter Search Value"
              placeholder="Search Value"
              TextInputProps={{
                padding: "0.4rem"
              }}
            />
            <>
              <MenuDivider />
              {loadingPropertyValues && renderLoaderGif()}
              {searchPropertyValues.length > 0 && (
                <>
                  {searchPropertyValues.map(
                    (propVal: { [key: string]: string }) => (
                      <MenuItem
                        key={propVal.value}
                        onClick={() => setValues(propVal.value)}
                      >
                        <Text>{propVal.value}</Text>
                      </MenuItem>
                    )
                  )}
                </>
              )}
            </>
          </Flex>
        );

      default:
        break;
    }
  };

  return (
    <Flex
      width="full"
      mt={6}
      bgColor={dashboardColor[colorMode]}
      py={2}
      alignItems="center"
      justifyContent="space-between"
      fontSize="xl"
    >
      <Flex alignItems="center">
        <Text fontSize="xl" mr="4" mx="2">
          where
        </Text>
        <Box>
          {/* Property Menu */}
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton isActive={isOpen} as={Button}>
                  <Box
                    fontStyle="italic"
                    fontSize="xl"
                    px="2"
                    border={`1px solid ${borderThemeColor[colorMode]}`}
                  >
                    {!property?.label
                      ? "Select user property..."
                      : property.label}
                  </Box>
                </MenuButton>

                <MenuList
                  width="500px"
                  maxH="240px"
                  overflow="scroll"
                  fontSize="xl"
                  px={2}
                >
                  <Flex>
                    <FontAwesomeIcon
                      icon={faSearch as IconProp}
                      style={{ margin: "auto 5px" }}
                    />
                    <Input
                      onChange={handlePropertySearch}
                      value={searchInput}
                      border="none"
                      fontSize="xl"
                      fontStyle="italic"
                      placeholder="Search"
                    />
                  </Flex>
                  <MenuDivider />
                  <MenuGroup title="Quik influence fields" fontSize="xl">
                    {allProperties.map((field: PropertyType) => (
                      <MenuItem
                        onClick={() => handlePropertyClick(field)}
                        key={field.key}
                        textTransform="capitalize"
                      >
                        {field.label.replace(/([a-z])([A-Z])/g, "$1 $2")}
                      </MenuItem>
                    ))}
                  </MenuGroup>
                </MenuList>
              </>
            )}
          </Menu>
          {property?.label && (
            <>
              {/* Comparator Menu */}
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton isActive={isOpen} as={Button} mx={4}>
                      <Box
                        fontSize="xl"
                        px="2"
                        border={`1px solid ${borderThemeColor[colorMode]}`}
                      >
                        {selectedComparator.label}
                      </Box>
                    </MenuButton>
                    <MenuList overflow="scroll" fontSize="xl" px={2}>
                      {comparators.map((comparator) => (
                        <MenuItem
                          onClick={() => setSelectedComparator(comparator)}
                          key={comparator.key}
                        >
                          {comparator.label}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </>
                )}
              </Menu>

              {/* Property Menu */}
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton isActive={isOpen} as={Button}>
                      <Box
                        fontStyle="italic"
                        fontSize="xl"
                        px="2"
                        border={`1px solid ${borderThemeColor[colorMode]}`}
                      >
                        {!values || !values.length
                          ? "Enter value(s)..."
                          : renderValues(values)}
                      </Box>
                    </MenuButton>

                    <MenuList
                      padding={0}
                      width="500px"
                      maxH="240px"
                      overflow="scroll"
                      fontSize="xl"
                    >
                      {renderValueInput()}
                      <Box
                        as="div"
                        position="sticky"
                        bottom={0}
                        zIndex={90}
                        bg="white"
                      >
                        <MenuDivider />
                        {/* <Flex width="100%" justifyContent="space-between" pb={3} px={5}>
                          <Button >Cancel</Button>
                          <Button colorScheme="brand">Apply Filter</Button>
                        </Flex> */}
                      </Box>
                    </MenuList>
                  </>
                )}
              </Menu>
            </>
          )}
        </Box>
      </Flex>

      <Box as="div" cursor="pointer" onClick={onCancel}>
        <FontAwesomeIcon
          icon={faTimes as IconProp}
          style={{ margin: "auto 5px" }}
        />
      </Box>
    </Flex>
  );
};

export default WhereBox;
