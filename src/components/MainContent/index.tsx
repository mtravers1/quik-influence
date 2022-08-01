import { Stack, Flex, Divider, Box, useColorMode } from '@chakra-ui/react';
import { css } from '@emotion/react';
import Header from 'components/Header';
import SideBarMenu from 'components/SideBarMenu';
import {
  bgThemeColor,
  themeColor,
  dashboardColor,
} from 'utils/constants/colorConstants';
import useResponsiveFilter from 'hooks/useResponsiveFilter';
import { AccountUpdatePrompt } from 'components/AccountUpdatePromt';

interface MainContentProps {
  children: React.ReactElement;
  filter?: React.ReactElement;
}

const MainContent = ({ children, filter }: MainContentProps) => {
  const { colorMode } = useColorMode();
  const { open, openFilter, responsiveFilterMode, toggleFilter } =
    useResponsiveFilter();

  const filterOpenStyles = css`
    & {
      position: fixed;
      height: 100%;
      background: ${dashboardColor[colorMode]};
      right: ${openFilter ? '-15px' : '-700px'};
      top: 61px;
      padding: 20px;
      border-left: 1px solid #000;
      transition: 0.3s ease;
    }
  `;

  return (
    <>
      <Stack position="relative">
        <Header
          bgColor={bgThemeColor[colorMode]}
          color={themeColor[colorMode]}
          toggleFilter={toggleFilter}
          showFilter={!!filter && responsiveFilterMode}
        />
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
            flexGrow={1}
            bgColor={dashboardColor[colorMode]}
            color={themeColor[colorMode]}
            px={20}
            py={10}
            overflow="hidden"
          >
            <Box flexGrow={1} width="100%" mx="auto" overflowX="scroll">
              {children}
            </Box>
            {filter && (
              <Box
                flexShrink={0}
                marginX="15px"
                css={
                  responsiveFilterMode
                    ? filterOpenStyles
                    : css`
                        & {
                          position: sticky;
                          top: 0;
                        }
                      `
                }
              >
                {filter}
              </Box>
            )}
          </Flex>
        </Flex>
      </Stack>
      <AccountUpdatePrompt />
    </>
  );
};

export default MainContent;
