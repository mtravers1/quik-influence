import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  useDisclosure,
  ColorModeScript,
  Image,
  Avatar,
  Tag,
  TagLabel,
  FlexProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import AppIcon from "../assets/icon.png";
import AppLogo from "../assets/logo.png";
import quikColorConstants from "utils/constants/colorConstants";
import DarkModeSwitch from "./DarkModeSwitch";
import theme from "../styles/theme";
import { css } from "@emotion/react";
import { getUser, logout as removeLocalstorageToken } from "utils/helpers";
import { logout } from "redux/actions/auth";
import { useRouter } from "next/router";
import NextLink from "./NextLink";

interface HeaderProps extends FlexProps {
  type?: "authenticated" | "unauthenticated";
}

const Header = ({ type = "authenticated", ...rest }: HeaderProps) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const { admin, isExpired } = getUser();

  if (type === "unauthenticated") {
    return (
      <Flex
        as="nav"
        align="center"
        justify="center"
        wrap="wrap"
        padding={6}
        color="black"
        boxShadow="base"
        zIndex="2"
        {...rest}
      >
        <Flex justify="center" mr={5}>
          <NextLink href="/">
            <Image
              boxSize="150px"
              objectFit="cover"
              src={AppLogo.src}
              alt="quik-influence logo"
            />
          </NextLink>
        </Flex>
      </Flex>
    );
  }

  if (isExpired) logout();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      color="black"
      boxShadow="base"
      zIndex="2"
      css={css`
        & {
          position: -webkit-sticky;
          position: sticky;
          top: 0;
        }
      `}
      {...rest}
    >
      <Flex align="center" mr={5}>
        <Image
          boxSize="30px"
          objectFit="cover"
          src={AppIcon.src}
          alt="quik-influence logo"
        />
        <Heading as="h1" size="lg" ml={3} letterSpacing={"tighter"}>
          <Flex>
            <Text color={quikColorConstants.influenceRed} mr={1}>
              Quik
            </Text>
            <Text>Influence</Text>
          </Flex>
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Box>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </Box>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Menu>
          <MenuButton>
            <Tag size="lg" colorScheme="grey.500" borderRadius="full">
              <Avatar
                src={admin?.avatar}
                size="md"
                name={admin?.firstName + " " + admin?.lastName}
                ml={1}
                mr={2}
              />
              <TagLabel> {admin?.firstName}</TagLabel>
            </Tag>
          </MenuButton>
          <MenuList>
            <MenuItem>
              Theme: <DarkModeSwitch />
            </MenuItem>
            <MenuItem
              onClick={() => {
                router.push("/profile");
              }}
            >
              Profile
            </MenuItem>{" "}
            <MenuItem
              onClick={() => {
                router.push("/profile/edit");
              }}
            >
              Edit profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                logout();
                removeLocalstorageToken();
              }}
            >
              Log out
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Header;
