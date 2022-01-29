import { Flex, Box } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import quikColorConstants from "utils/colorConstants";
import NextLink from "./NextLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SideBarMenuOptions } from "modules";
import { SideBarOptionMenu } from "types";
import { useRouter } from "next/router";

const SideBarMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const route = useRouter();
  const { pathname } = route;
  const _sideBarOptions = Object.values(SideBarMenuOptions);

  useEffect(() => {
    if (!activeMenu) {
      setActiveMenu(_sideBarOptions[0].path);
    }
  }, []);

  return (
    <Flex flexDirection="column" width="250px" py={10}>
      {_sideBarOptions.map(({ name, icon, path, isShown }: SideBarOptionMenu) => {
        if (!isShown) return;

        return (
          <Box
            key={name}
            py={5}
            px={10}
            minW="100%"
            _hover={{
              backgroundColor: quikColorConstants.greyLight
            }}
            bg={
              (activeMenu || pathname) === path
                ? quikColorConstants.greyLight
                : "transparent"
            }
            borderLeft={`3px solid ${(activeMenu || pathname) === path
              ? quikColorConstants.influenceRed
              : quikColorConstants.greyLight}`}
            onClick={() => setActiveMenu(path)}
          >
            <NextLink
              href={path}
              display="block"
              _hover={{
                textDecoration: "none"
              }}
              _focus={{
                border: "none",
                textDecoration: "none"
                //   border
              }}
              fontFamily="Avenir"
              fontWeight="bold"
            >
              <FontAwesomeIcon icon={icon} /> {name}
            </NextLink>
          </Box>
        );
      })}
    </Flex>
  );
};

export default SideBarMenu;
