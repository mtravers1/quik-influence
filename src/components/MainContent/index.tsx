import { useState, useEffect } from 'react';
import { Stack, Flex, Divider, Box, useColorMode } from '@chakra-ui/react';
import { css } from '@emotion/react';
import Header from 'components/Header';
import SideBarMenu from 'components/SideBarMenu';
import {
  bgThemeColor,
  themeColor,
  dashboardColor,
} from 'utils/constants/colorConstants';

interface MainContentProps {
  children: React.ReactElement;
  filter?: React.ReactElement;
}

const MainContent = ({ children, filter }: MainContentProps) => {
  const { colorMode } = useColorMode();
  const [open, setOpen] = useState(true);

  const openBar = () => {
    setOpen(!open);
  };

  const close = () => {
    setOpen(false);
  };

  useEffect(() => {
    const closeSlider = () => {
      const smallerScreen = window.matchMedia('(max-width: 50em)');

      if (smallerScreen.matches) {
        close();
      } else {
        openBar();
      }
    };

    window.addEventListener('resize', closeSlider);
    // window.addEventListener("scroll", close);
    return () => {
      window.removeEventListener('resize', closeSlider);
      window.removeEventListener('scroll', close);
    };
  }, []);

  return (
    <Stack position="relative">
      <Header bgColor={bgThemeColor[colorMode]} color={themeColor[colorMode]} />
      <Flex
        flexDirection="row"
        position="relative"
        css={css`
          & {
            margin-top: 1px !important;
          }
        `}
      >
        <SideBarMenu
          bgColor={bgThemeColor[colorMode]}
          colorMode={colorMode}
          open={open}
        />
        <Divider
          bgColor={bgThemeColor[colorMode]}
          orientation="vertical"
          height="100vh"
        />
        <Flex
          width="100%"
          bgColor={dashboardColor[colorMode]}
          color={themeColor[colorMode]}
          px={20}
          py={10}
        >
          <Box flexGrow={1} maxWidth="2500px" mx="auto">
            {children}
          </Box>
          {filter && (
            <Box flexShrink={0} marginLeft="30px">
              {filter}
            </Box>
          )}
        </Flex>
      </Flex>
    </Stack>
  );
};

export default MainContent;
