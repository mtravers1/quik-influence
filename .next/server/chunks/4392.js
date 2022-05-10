"use strict";
exports.id = 4392;
exports.ids = [4392];
exports.modules = {

/***/ 4392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
;// CONCATENATED MODULE: ./src/assets/icon.png
/* harmony default export */ const icon = ({"src":"/_next/static/media/icon.77983023.png","height":3000,"width":3000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAiElEQVR42lXPvwoBAQCA8V9YTOSKwYyLXApRpMwm5R1kMHkPfxZe4sJl8Eoe4UxnvPzmb/mgANBn2GMsVwSo14hxwanGA00AVRJsMkoZRayqvAGiDgl82afsoEOMCURhHhxSttDmiSkIeGGdUc4oYR5wI9cIuOOIc4UPrlj+bQ4YhSzQLTBD6wcWhhqdYYbmIAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/assets/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.43b9fab3.png","height":3000,"width":3000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAe1BMVEX/AAD+AADsAADDAADBAAC8AAC3AACdAACSAABUAABPAAAnAAAhAAAWAAAKAAADAAAAAAB9AAAEAAAAAAAAAAAsAAAAAACVAAAoAAAAAAAAAAAAAABYAAABAAD/AADxAABwAAATAAAAAAB4AAAAAABaAACcAABeAACMAADjnVXyAAAAKXRSTlMAAAAAAAAAAAAAAAAAAAAAAAEBAQQFBQcKCx8gIyMnJycoKDpKTE1TW1lKga8AAABCSURBVHjaBYCFEYQwAAQvL7gsBHeH/itklFtXH2OMgN+XBLUdzh9S3dc+zXVV6nyOZVi3UUXfeAqIBWEmn0hYC8ALlwMEbVEykjgAAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./src/utils/constants/colorConstants.ts
var colorConstants = __webpack_require__(3814);
;// CONCATENATED MODULE: ./src/components/DarkModeSwitch.tsx


const DarkModeSwitch = ()=>{
    const { colorMode , toggleColorMode  } = (0,react_.useColorMode)();
    const isDark = colorMode === 'dark';
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Switch, {
        _focus: {
            borderOutline: 'none'
        },
        color: "green",
        ml: 3,
        mb: 0,
        isChecked: isDark,
        onChange: toggleColorMode
    }));
};
/* harmony default export */ const components_DarkModeSwitch = (DarkModeSwitch);

// EXTERNAL MODULE: ./src/styles/theme.tsx
var theme = __webpack_require__(9229);
// EXTERNAL MODULE: external "@emotion/react"
var external_emotion_react_ = __webpack_require__(2805);
// EXTERNAL MODULE: ./src/utils/helpers.ts
var helpers = __webpack_require__(8081);
// EXTERNAL MODULE: ./src/redux/actions/auth.ts
var auth = __webpack_require__(3821);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/NextLink.tsx
var NextLink = __webpack_require__(3629);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/components/Header.tsx















const Header = ({ type ='authenticated' , ...rest })=>{
    const router = (0,router_.useRouter)();
    const { isOpen , onOpen , onClose  } = (0,react_.useDisclosure)();
    const handleToggle = ()=>isOpen ? onClose() : onOpen()
    ;
    const { admin , isExpired  } = (0,helpers/* getUser */.PR)();
    if (type === 'unauthenticated') {
        return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
            as: "nav",
            align: "center",
            justify: "center",
            wrap: "wrap",
            padding: 6,
            color: "black",
            boxShadow: "base",
            zIndex: "2",
            ...rest,
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                justify: "center",
                mr: 5,
                children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                        boxSize: "150px",
                        objectFit: "cover",
                        src: logo.src,
                        alt: "quik-influence logo"
                    })
                })
            })
        }));
    }
    if (isExpired) (0,auth/* logout */.kS)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        dispatch((0,auth/* getUserPermissions */.$h)());
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        as: "nav",
        align: "center",
        justify: "space-between",
        wrap: "wrap",
        padding: 6,
        color: "black",
        boxShadow: "base",
        zIndex: "2",
        css: external_emotion_react_.css`
        & {
          position: -webkit-sticky;
          position: sticky;
          top: 0;
        }
      `,
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                align: "center",
                mr: 5,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                        boxSize: "30px",
                        objectFit: "cover",
                        src: icon.src,
                        alt: "quik-influence logo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        as: "h1",
                        size: "lg",
                        ml: 3,
                        letterSpacing: 'tighter',
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    color: colorConstants/* default.influenceRed */.ZP.influenceRed,
                                    mr: 1,
                                    children: "Quik"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    children: "Influence"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                display: {
                    base: 'block',
                    md: 'none'
                },
                onClick: handleToggle,
                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.HamburgerIcon, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.ColorModeScript, {
                    initialColorMode: theme/* default.config.initialColorMode */.Z.config.initialColorMode
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                alignItems: "center",
                children: [
                    rest.showFilter && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        marginRight: "20px",
                        padding: "5px 10px",
                        onClick: rest.toggleFilter,
                        cursor: "pointer",
                        fontSize: "16px",
                        children: "Filter"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        display: {
                            base: isOpen ? 'block' : 'none',
                            md: 'block'
                        },
                        mt: {
                            base: 4,
                            md: 0
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Tag, {
                                        size: "lg",
                                        colorScheme: "grey.500",
                                        borderRadius: "full",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                                                src: admin?.avatar,
                                                size: "md",
                                                name: admin?.firstName + ' ' + admin?.lastName,
                                                ml: 1,
                                                mr: 2
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.TagLabel, {
                                                children: [
                                                    " ",
                                                    admin?.firstName
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuItem, {
                                            children: [
                                                "Theme: ",
                                                /*#__PURE__*/ jsx_runtime_.jsx(components_DarkModeSwitch, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                            onClick: ()=>{
                                                router.push('/profile');
                                            },
                                            children: "Profile"
                                        }),
                                        ' ',
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                            onClick: ()=>{
                                                router.push('/profile/edit');
                                            },
                                            children: "Edit profile"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                            onClick: ()=>{
                                                (0,auth/* logout */.kS)();
                                                (0,helpers/* logout */.kS)();
                                            },
                                            children: "Log out"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Header = (Header);


/***/ })

};
;