import { Flex, Box } from "@chakra-ui/layout";
import React, { useState } from "react";
import quikColorConstants from "../util/colorConstants";
import NextLink from "./NextLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SideBarMenuOptions } from "../modules";
import { SideBarOptionMenu } from "../types";

const SideBarMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");

  return (
    <Flex flexDirection="column" width="250px" py={10}>
      {Object.values(
        SideBarMenuOptions
      ).map(({ name, icon, path, isShown }: SideBarOptionMenu) => {
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
              activeMenu === name ? quikColorConstants.greyLight : "transparent"
            }
            borderLeft={`3px solid ${activeMenu === name
              ? quikColorConstants.influenceRed
              : quikColorConstants.greyLight}`}
            onClick={() => setActiveMenu(name)}
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
