import {
  Box,
  Image,
  Container,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  BoxProps,
} from '@chakra-ui/react';
import NavWrapper from 'components/NavBar/NavWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavLink, ButtonListProps, NavLinkProps } from './buttonList';
import {
  DropDown,
  DropDownHeader,
  DropDownChildren,
  DropDownConfigType,
} from '../DropDown';
import { NavLink } from 'components/navLink';
import { faHamburger, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
  const { router, buttonList, navLinks, menu, closeMenu, openMenu } =
    useNavLink();

  return (
    <>
      <NavWrapper>
        {(styles: any) => (
          <Box
            {...styles}
            height={{ base: '80px', lg: '140px' }}
            className="market-regular"
          >
            <Box
              as="header"
              position="absolute"
              key={router.asPath}
              width="100%"
            >
              <Container
                as="nav"
                height="80px"
                maxW="1536px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                className="market-place--nav"
                padding="10px 15px"
              >
                <Box
                  as="button"
                  display={{
                    base: 'flex',
                    lg: 'none',
                  }}
                  className="market-place--nav--hamburger"
                  onClick={() => openMenu('main')}
                >
                  <FontAwesomeIcon
                    icon={faHamburger}
                    style={{ width: '20px', height: '20px' }}
                    color="#fff"
                  />
                </Box>

                <Image
                  src="/logo-white.png"
                  alt="logo"
                  height="90%"
                  objectFit="contain"
                  objectPosition="left"
                />

                <Box className="market-place--nav__nav_buttons">
                  {buttonList.map((buttonProp: ButtonListProps) => (
                    <Box
                      as="button"
                      background="unset"
                      display={buttonProp.display}
                      onClick={
                        buttonProp.actionType === 'click'
                          ? () => openMenu(buttonProp.clickName as string)
                          : () => {}
                      }
                    >
                      <FontAwesomeIcon
                        icon={buttonProp.icon}
                        style={{ width: '20px', height: '20px' }}
                        color="#fff"
                      />
                    </Box>
                  ))}
                </Box>
              </Container>

              <Box
                background="#1f1f1f"
                height="60px"
                display={{
                  base: 'none',
                  lg: 'flex',
                }}
                justifyContent="center"
                alignItems="center"
              >
                {RenderNavWithChildren(navLinks, {
                  margin: '0 10px',
                })}
              </Box>
            </Box>
          </Box>
        )}
      </NavWrapper>
      <SideSlideBar showModal={menu.openPanel} closeModal={closeMenu}>
        <Box>
          <Flex
            height="50px"
            justifyContent="space-between"
            alignItems="center"
            paddingBottom="10px"
            borderBottom="1px solid #fff"
            marginBottom="30px"
          >
            <Image
              src="/logo-white.png"
              alt="logo"
              height="90%"
              objectFit="contain"
              objectPosition="left"
            />

            <Box
              onClick={closeMenu}
              fontSize="35px"
              fontWeight="300"
              transform="rotate(45deg)"
              as="button"
            >
              +
            </Box>
          </Flex>

          {menu.presentMenu === 'main' &&
            RenderNavWithChildren(
              navLinks,
              {
                margin: '0 0 10px',
              },
              {
                useClick: true,
                useMobileStyles: true,
              }
            )}
        </Box>
      </SideSlideBar>
    </>
  );
};

const RenderNavWithChildren: any = (
  links: NavLinkProps[],
  dropStyle: BoxProps,
  config?: DropDownConfigType
) => {
  const renderMenu = (links: NavLinkProps[]) => {
    return links.map((link: NavLinkProps, index: any) => {
      return (
        <DropDown {...dropStyle} config={config}>
          <DropDownHeader>
            <SimpleDropDownNavLink link={link} config={config} />
          </DropDownHeader>

          {link.subPages && (
            <DropDownChildren
              background={config?.useMobileStyles ? '' : '#2d2d2d'}
              padding="10px"
            >
              {link.subPages.map((subLink: NavLinkProps) => (
                <>
                  <SimpleDropDownNavLink link={subLink} config={config} />
                  {subLink?.subPages ? renderMenu(subLink.subPages) : null}
                </>
              ))}
            </DropDownChildren>
          )}
        </DropDown>
      );
    });
  };

  return renderMenu(links);
};

const SimpleDropDownNavLink = ({
  link,
  config,
}: {
  link: NavLinkProps;
  config?: DropDownConfigType;
}) => {
  return (
    <NavLink exact href={link.href}>
      <Flex
        as="a"
        alignItems="center"
        outline="none"
        onClick={
          config?.useMobileStyles
            ? (e: any) => {
                e.preventDefault();
              }
            : () => {}
        }
      >
        {link.name}
        {link.subPages && (
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{
              width: '15px',
              height: '15px',
              marginLeft: '10px',
            }}
            color="#fff"
          />
        )}
      </Flex>
    </NavLink>
  );
};

const SideSlideBar = ({
  showModal,
  closeModal,
  children,
}: {
  showModal: boolean;
  closeModal?: any;
  children: React.ReactNode;
}) => {
  return (
    <Modal
      blockScrollOnMount={true}
      isOpen={showModal}
      onClose={closeModal}
      motionPreset="slideInRight"
    >
      <ModalOverlay />
      <ModalContent
        minW="350px"
        minH="100vh"
        p="3"
        marginTop={0}
        borderRadius={0}
        position="fixed"
        right="0"
      >
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};
