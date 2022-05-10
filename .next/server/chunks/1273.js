"use strict";
exports.id = 1273;
exports.ids = [1273];
exports.modules = {

/***/ 7030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3814);




const DropdownSelect = ({ size ='lg' , label , options , onChange , inputId ='' , labelProps , selectProps , error , extraLabel , name , placeholder , selected , noValue =true  })=>{
    const { colorMode  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
        isInvalid: !!error,
        children: [
            !!label && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                fontSize: "1.6rem",
                color: colorMode === 'light' ? utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].black */ .ZP.black : utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].white */ .ZP.white,
                htmlFor: inputId,
                ...labelProps,
                children: [
                    label,
                    extraLabel && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        as: "span",
                        fontSize: "md",
                        mx: "4",
                        children: extraLabel
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Select, {
                onChange: onChange,
                name: name,
                size: size,
                border: "1px solid #D5D5DC",
                borderRadius: "xl",
                id: inputId,
                "data-test-id": "select-component",
                defaultValue: selected,
                value: selected,
                ...!noValue && {
                    value: ''
                },
                ...selectProps,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "",
                        disabled: true,
                        children: `Select ${label || placeholder || '---'}`
                    }),
                    options.map((option, i)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            "data-testid": "select-option",
                            value: option.value,
                            style: option.style || {},
                            ...option.disabled && {
                                disabled: option.disabled
                            },
                            children: option.label
                        }, option.value));
                    })
                ]
            }),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormErrorMessage, {
                fontSize: "xl",
                children: error
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownSelect);


/***/ }),

/***/ 1273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_MainContent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@emotion/react"
var external_emotion_react_ = __webpack_require__(2805);
// EXTERNAL MODULE: ./src/components/Header.tsx + 3 modules
var Header = __webpack_require__(4392);
// EXTERNAL MODULE: external "@chakra-ui/layout"
var layout_ = __webpack_require__(1271);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils/constants/colorConstants.ts
var colorConstants = __webpack_require__(3814);
// EXTERNAL MODULE: ./src/components/NextLink.tsx
var NextLink = __webpack_require__(3629);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/modules/Dashboard/index.ts + 17 modules
var Dashboard = __webpack_require__(8250);
// EXTERNAL MODULE: ./src/modules/Campaigns/index.ts + 6 modules
var Campaigns = __webpack_require__(6478);
// EXTERNAL MODULE: ./src/modules/Leads/index.ts + 3 modules
var Leads = __webpack_require__(7667);
// EXTERNAL MODULE: ./src/modules/Search/index.ts + 5 modules
var Search = __webpack_require__(3874);
;// CONCATENATED MODULE: ./src/modules/index.ts





const useSideBarMenuOptions = ()=>{
    const { firstCampaigns  } = (0,external_react_redux_.useSelector)((state)=>state.campaigns
    );
    return {
        dashboardMenu: Dashboard/* dashboardMenu */.Sr,
        campaignsMenu: {
            ...Campaigns/* campaignsMenu */.VO,
            child: firstCampaigns || []
        },
        creditsMenu: Dashboard/* creditsMenu */.OT,
        leadMenu: Leads/* leadMenu */.k,
        searchMenu: Search/* searchMenu */.O
    };
};
const SideBarMenuOptions = {
    dashboardMenu: Dashboard/* dashboardMenu */.Sr,
    campaignsMenu: Campaigns/* campaignsMenu */.VO,
    creditsMenu: Dashboard/* creditsMenu */.OT,
    leadMenu: Leads/* leadMenu */.k,
    searchMenu: Search/* searchMenu */.O
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
;// CONCATENATED MODULE: ./src/components/TruncatedText/index.tsx



const TruncatedText = ({ lines =1 , children , as ='span' ,  })=>{
    const style = external_emotion_react_.css`
    & {
      display: -webkit-box;
      -webkit-line-clamp: ${lines};
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      hyphens: auto;
    }
  `;
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        css: style,
        as: as,
        children: children
    }));
};
/* harmony default export */ const components_TruncatedText = (TruncatedText);

// EXTERNAL MODULE: ./src/utils/helpers.ts
var helpers = __webpack_require__(8081);
;// CONCATENATED MODULE: ./src/components/SideBarMenu.tsx














const SideBarMenu = ({ bgColor , colorMode , open  })=>{
    const route = (0,router_.useRouter)();
    const { pathname , asPath  } = route || {
        pathname: "/"
    };
    const SideBarMenuOptions = useSideBarMenuOptions();
    const _sideBarOptions = Object.values(SideBarMenuOptions);
    const { 0: activeIndex , 1: setActiveIndex  } = (0,external_react_.useState)();
    const permissions = (0,external_react_redux_.useSelector)((state)=>state.auth.permissions
    );
    const navcss = (isActive)=>external_emotion_react_.css`
    & {
      &:hover {
        &::before {
          background: ${colorConstants/* default.influenceRed */.ZP.influenceRed};
          height: 80%;
        }
      }

      &::before {
        background: ${isActive ? colorConstants/* default.influenceRed */.ZP.influenceRed : colorConstants/* sidebarBg */.jN[colorMode]};
        height: ${isActive ? "80%;" : "0"};
      }
    }
  `
    ;
    const maincss = external_emotion_react_.css`
    & {
      left: ${open ? "0" : "-300px"};
      transition: 0.3s ease;
    }
  `;
    let currentRoute;
    const paths = pathname.split("/");
    if (paths.length === 2) {
        currentRoute = "/dashboard";
    } else currentRoute = paths[2];
    return(/*#__PURE__*/ jsx_runtime_.jsx(layout_.Flex, {
        flexDirection: "column",
        width: "250px",
        py: 10,
        bgColor: bgColor,
        position: {
            base: "fixed",
            md: "sticky"
        },
        top: "60px",
        overflow: "hidden",
        flexShrink: 0,
        css: maincss,
        height: "95vh",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Accordion, {
            allowMultiple: true,
            defaultIndex: activeIndex ? [
                activeIndex
            ] : undefined,
            children: _sideBarOptions.map(({ name , icon , path , isShown , child , permission  }, i)=>{
                if (!isShown) return;
                const currentPath = path.split("/dashboard/")[1] || "/dashboard";
                const isActive = currentRoute === currentPath;
                if (isActive && child?.length && activeIndex !== i) setActiveIndex(i);
                if (!(0,helpers/* hasPermission */.Fs)(permission, permissions)) return;
                return(/*#__PURE__*/ jsx_runtime_.jsx(NavComponent, {
                    isActive: isActive,
                    colorMode: colorMode,
                    navcss: navcss,
                    path: path,
                    icon: icon,
                    child: child,
                    asPath: asPath,
                    name: name,
                    permissions: permissions
                }, name));
            })
        })
    }));
};
const styles = {
    display: "block",
    _hover: {
        textDecoration: "none",
        color: "inherit"
    },
    _focus: {
        border: "none",
        textDecoration: "none"
    },
    fontFamily: "Avenir",
    fontWeight: "bold",
    fontSize: "16px"
};
const NavComponent = ({ isActive , colorMode , navcss , path , icon , child , asPath , name , permissions  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_.Box, {
            minW: "100%",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.AccordionItem, {
                border: "none",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_.Box, {
                        position: "relative",
                        css: navcss(isActive),
                        _before: {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            top: "50%",
                            transform: "translateY(-50%)",
                            height: 0,
                            width: "5px",
                            background: colorConstants/* default.influenceRed */.ZP.influenceRed,
                            borderRadius: "0 10px 10px 0",
                            transition: "0.3s ease"
                        },
                        bg: isActive ? colorConstants/* sidebarBg */.jN[colorMode] : "transparent",
                        children: child.length ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.AccordionButton, {
                            fontSize: "16px",
                            py: 2,
                            px: 10,
                            children: [
                                path ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NextLink/* default */.Z, {
                                    href: path,
                                    ...styles,
                                    width: "100%",
                                    textAlign: "left",
                                    py: 3,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                            icon: icon,
                                            style: {
                                                marginRight: "20px"
                                            }
                                        }),
                                        name
                                    ]
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout_.Box, {
                                    ...styles,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                            icon: icon,
                                            style: {
                                                marginRight: "20px"
                                            }
                                        }),
                                        name
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                    icon: free_solid_svg_icons_.faAngleDown,
                                    style: {
                                        marginLeft: "20px",
                                        padding: "10px 10px"
                                    }
                                })
                            ]
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(layout_.Box, {
                            py: 2,
                            px: 10,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NextLink/* default */.Z, {
                                href: path,
                                ...styles,
                                width: "100%",
                                textAlign: "left",
                                py: 3,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                        icon: icon,
                                        style: {
                                            marginRight: "20px"
                                        }
                                    }),
                                    name
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.AccordionPanel, {
                        paddingLeft: "35px",
                        children: child.map((childEl)=>{
                            if (!(0,helpers/* hasPermission */.Fs)(childEl.permission, permissions)) return;
                            return(/*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                href: childEl.path,
                                color: asPath === childEl.path ? "red" : undefined,
                                ...styles,
                                _hover: {
                                    textDecoration: "none",
                                    color: asPath === childEl.path ? "red" : "inherit"
                                },
                                py: 3,
                                px: 10,
                                fontSize: "14px",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_TruncatedText, {
                                    children: childEl.name
                                })
                            }, childEl.name));
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const components_SideBarMenu = (SideBarMenu);

;// CONCATENATED MODULE: ./src/hooks/useResponsiveFilter.ts

const useResponsiveFilter = ()=>{
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(true);
    const { 0: openFilter , 1: setOpenFilter  } = (0,external_react_.useState)(false);
    const { 0: responsiveFilterMode , 1: setResponsiveFilterMode  } = (0,external_react_.useState)(true);
    const openBar = ()=>{
        setOpen(!open);
    };
    const close = ()=>{
        setOpen(false);
    };
    const toggleFilter = (state)=>{
        if (typeof state === "boolean") setOpenFilter(state);
        setOpenFilter((prevtoogle)=>!prevtoogle
        );
    };
    (0,external_react_.useEffect)(()=>{
        const closeSlider = ()=>{
            if (false) {}
        };
        closeSlider();
        if (false) {}
        // window.addEventListener("scroll", close);
        return ()=>{
            if (false) {}
        };
    }, []);
    return {
        open,
        openFilter,
        responsiveFilterMode,
        toggleFilter
    };
};
/* harmony default export */ const hooks_useResponsiveFilter = (useResponsiveFilter);

;// CONCATENATED MODULE: ./src/components/MainContent/index.tsx







const MainContent = ({ children , filter  })=>{
    const { colorMode  } = (0,react_.useColorMode)();
    const { open , openFilter , responsiveFilterMode , toggleFilter  } = hooks_useResponsiveFilter();
    const filterOpenStyles = external_emotion_react_.css`
    & {
      position: fixed;
      height: 100%;
      background: ${colorConstants/* dashboardColor */.o5[colorMode]};
      right: ${openFilter ? "-15px" : "-700px"};
      top: 61px;
      padding: 20px;
      border-left: 1px solid #000;
      transition: 0.3s ease;
    }
  `;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
        position: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {
                bgColor: colorConstants/* bgThemeColor */.YI[colorMode],
                color: colorConstants/* themeColor */.EN[colorMode],
                toggleFilter: toggleFilter,
                showFilter: !!filter && responsiveFilterMode
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                flexDirection: "row",
                position: "relative",
                css: external_emotion_react_.css`
          & {
            margin-top: 1px !important;
          }
        `,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SideBarMenu, {
                        bgColor: colorConstants/* bgThemeColor */.YI[colorMode],
                        colorMode: colorMode,
                        open: open
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {
                        bgColor: colorConstants/* bgThemeColor */.YI[colorMode],
                        orientation: "vertical",
                        height: "100vh"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        flexGrow: 1,
                        bgColor: colorConstants/* dashboardColor */.o5[colorMode],
                        color: colorConstants/* themeColor */.EN[colorMode],
                        px: 20,
                        py: 10,
                        overflow: "hidden",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                flexGrow: 1,
                                width: "100%",
                                mx: "auto",
                                overflowX: "scroll",
                                children: children
                            }),
                            filter && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                flexShrink: 0,
                                marginX: "15px",
                                css: responsiveFilterMode ? filterOpenStyles : external_emotion_react_.css`
                      & {
                        position: sticky;
                        top: 0;
                      }
                    `,
                                children: filter
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_MainContent = (MainContent);


/***/ }),

/***/ 3956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3814);
/* harmony import */ var components_DropdownSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7030);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3329);










const PageSizeOptionsValue = [
    {
        label: "20",
        value: "20"
    },
    {
        label: "50",
        value: "50"
    },
    {
        label: "100",
        value: "100"
    },
    {
        label: "200",
        value: "200"
    }
];
const Pagination = ({ currentPage , totalPages , count , onChange , pageSize: pageSize1 = utils_constants__WEBPACK_IMPORTED_MODULE_9__/* .DEFAULT_PAGE_SIZE */ .L8 , showTotal =true  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const handleButtonClick = (type)=>{
        if (type === "backward") {
            if (currentPage <= 1) return;
            let nextPage = Number(currentPage) - 1;
            onChange(nextPage);
        } else {
            if (currentPage >= totalPages) return;
            let nextPage = Number(currentPage) + 1;
            onChange(nextPage);
        }
    };
    const handlePageSizeChange = (pageSize)=>{
        const params = router.query;
        params.pageSize = pageSize;
        router.push(`?${query_string__WEBPACK_IMPORTED_MODULE_3___default().stringify(params)}`);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        justifyContent: "flex-end",
        children: [
            showTotal && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                mr: 20,
                my: "auto",
                color: utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_6__/* ["default"].greyLighter */ .ZP.greyLighter,
                children: [
                    "Total Records: ",
                    count
                ]
            }),
            !!pageSize1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        width: "25rem",
                        my: "auto",
                        color: utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_6__/* ["default"].greyLighter */ .ZP.greyLighter,
                        children: "Change Page Size:"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_DropdownSelect__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        size: "lg",
                        options: PageSizeOptionsValue,
                        onChange: (e)=>handlePageSizeChange(e.target.value)
                        ,
                        selected: router.query.pageSize || pageSize1,
                        selectProps: {
                            border: 0,
                            width: "10rem",
                            fontSize: "xl",
                            marginTop: "1.5rem"
                        }
                    })
                ]
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                my: 8,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        onClick: ()=>handleButtonClick("backward")
                        ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngleLeft,
                            style: {
                                margin: "auto 10px"
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        children: [
                            "Page ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                children: currentPage
                            }),
                            " of ",
                            totalPages
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        onClick: ()=>handleButtonClick("forward")
                        ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngleRight,
                            style: {
                                margin: "auto 10px"
                            }
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ }),

/***/ 9130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gl": () => (/* binding */ TablePageLoader),
/* harmony export */   "kA": () => (/* binding */ SearchPageLoader)
/* harmony export */ });
/* unused harmony export OverviewSkeletonLoaders */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const OverviewSkeletonLoaders = ()=>{
    return(/*#__PURE__*/ _jsx(Flex, {
        mb: 4,
        children: /*#__PURE__*/ _jsxs(Grid, {
            h: "300px",
            w: "100%",
            templateRows: "repeat(2, 1fr)",
            templateColumns: "repeat(4, 1fr)",
            gap: 4,
            children: [
                /*#__PURE__*/ _jsx(GridItem, {
                    rowSpan: 2,
                    colSpan: 1,
                    children: /*#__PURE__*/ _jsx(Skeleton, {
                        w: "100%",
                        h: "100%"
                    })
                }),
                /*#__PURE__*/ _jsx(GridItem, {
                    colSpan: 1,
                    children: /*#__PURE__*/ _jsx(Skeleton, {
                        w: "100%",
                        h: "100%"
                    })
                }),
                /*#__PURE__*/ _jsx(GridItem, {
                    colSpan: 1,
                    children: /*#__PURE__*/ _jsx(Skeleton, {
                        w: "100%",
                        h: "100%"
                    })
                }),
                /*#__PURE__*/ _jsx(GridItem, {
                    rowSpan: 2,
                    colSpan: 1,
                    children: /*#__PURE__*/ _jsx(Skeleton, {
                        w: "100%",
                        h: "100%"
                    })
                }),
                /*#__PURE__*/ _jsx(GridItem, {
                    colSpan: 2,
                    children: /*#__PURE__*/ _jsx(Skeleton, {
                        w: "100%",
                        h: "100%"
                    })
                })
            ]
        })
    }));
};
const TablePageLoader = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        mb: 4,
        flexDir: "column",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                marginBottom: "100px",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                    w: "200px",
                    h: "30px"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                w: "100%",
                h: "50px",
                marginBottom: "10px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                w: "100%",
                h: "50px",
                marginBottom: "10px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                w: "100%",
                h: "50px",
                marginBottom: "10px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                w: "100%",
                h: "50px",
                marginBottom: "10px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                w: "100%",
                h: "50px",
                marginBottom: "10px"
            })
        ]
    }));
};
const SearchPageLoader = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        mt: 20,
        flexDir: "column",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                w: "40%",
                h: "150px",
                marginBottom: "20px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                w: "400%",
                h: "150px",
                marginBottom: "10px"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                w: "100%",
                h: "50px",
                marginBottom: "10px"
            })
        ]
    }));
};


/***/ }),

/***/ 6478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "VO": () => (/* reexport */ campaignsMenu),
  "ZP": () => (/* binding */ Campaigns)
});

// UNUSED EXPORTS: createCampaignsMenu

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: ./src/components/Button/index.ts + 1 modules
var Button = __webpack_require__(2341);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/utils/constants/colorConstants.ts
var colorConstants = __webpack_require__(3814);
;// CONCATENATED MODULE: ./src/utils/constants/campaignCreationConstants.ts

const campaignCreations = [
    {
        name: 'sms',
        label: 'SMS',
        icon: free_solid_svg_icons_.faSms
    },
    {
        name: 'email',
        label: 'Email',
        icon: free_solid_svg_icons_.faComment
    },
    {
        name: 'default',
        label: 'Default',
        icon: free_solid_svg_icons_.faComment
    }
];

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/redux/actions/campaigns.ts
var actions_campaigns = __webpack_require__(7586);
// EXTERNAL MODULE: ./src/styles/theme.tsx
var theme = __webpack_require__(9229);
// EXTERNAL MODULE: ./src/utils/constants/formConstants.ts
var formConstants = __webpack_require__(7525);
// EXTERNAL MODULE: ./src/components/DropdownSelect/index.tsx
var DropdownSelect = __webpack_require__(7030);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/assets/loader.gif
var loader = __webpack_require__(2379);
;// CONCATENATED MODULE: ./src/components/NoRecordsMessage/index.tsx



const NoRecordsMessage = ({ children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
        minW: "100%",
        maxW: "100%",
        my: 10,
        mx: 10,
        justify: "center",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                align: "center",
                lineHeight: 2,
                children: children
            })
        })
    }));
};
/* harmony default export */ const components_NoRecordsMessage = (NoRecordsMessage);

// EXTERNAL MODULE: ./src/modules/Leads/css.ts
var css = __webpack_require__(6982);
;// CONCATENATED MODULE: ./src/modules/Campaigns/components/RenderCampaignsTable.tsx










const RenderCampaignsTable = ({ colorMode , campaigns , loading , rowLoading , onSelect , tableHeaders  })=>{
    const style = (0,css/* getStyles */.W)(colorMode);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            !campaigns ? /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                width: 100,
                height: 100,
                objectFit: "contain",
                src: loader/* default */.Z
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Table, {
                size: "lg",
                css: style,
                bg: colorConstants/* basicTheme */.We[colorMode],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Thead, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Tr, {
                            children: tableHeaders.map((th)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Th, {
                                    fontSize: "14px",
                                    children: th
                                }, th)
                            )
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Tbody, {
                        children: campaigns.map((cam)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Tr, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                        children: cam.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                        children: cam.paidType
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                        children: "NONE"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                        children: cam.status
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                        children: new Date(cam.createdAt).toLocaleDateString('en-US')
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                        cursor: "pointer",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(DropdownSelect/* default */.Z, {
                                                    onChange: onSelect,
                                                    placeholder: "action",
                                                    noValue: false,
                                                    options: [
                                                        {
                                                            label: cam.status === formConstants/* OPEN */.o1 ? 'Close campaign' : 'Open campaign',
                                                            value: cam.status === formConstants/* OPEN */.o1 ? `closeCampaign:${cam.id}` : `openCampaign:${cam.id}`
                                                        },
                                                        {
                                                            label: 'Edit',
                                                            value: `/dashboard/campaigns/edit/${cam.id}`
                                                        },
                                                        {
                                                            label: 'Archive',
                                                            value: `archive:${cam.id}`
                                                        },
                                                        {
                                                            label: 'Launch',
                                                            value: `/campaign/${cam.id}`
                                                        },
                                                        {
                                                            label: 'View Registered Leads',
                                                            value: `/dashboard/leads/${cam.id}`
                                                        },
                                                        {
                                                            label: 'Reports & Tracking',
                                                            value: `/dashboard/campaigns/report/${cam.id}`
                                                        },
                                                        {
                                                            label: 'Copy link',
                                                            value: `copy:${cam.id}`
                                                        }, 
                                                    ] || 0,
                                                    name: "Actions",
                                                    selectProps: {
                                                        fontSize: '1.4rem',
                                                        border: 'none'
                                                    }
                                                }),
                                                rowLoading[cam.id] && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                    marginRight: "10px",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                        src: loader/* default */.Z,
                                                        alt: "",
                                                        width: 50,
                                                        height: 50
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }, cam.id)
                        )
                    })
                ]
            }),
            campaigns?.length === 0 && !loading && /*#__PURE__*/ jsx_runtime_.jsx(components_NoRecordsMessage, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "No Records has been made ",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        " Please click the \"Create a New Campaign\" button"
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const components_RenderCampaignsTable = (RenderCampaignsTable);

// EXTERNAL MODULE: ./src/components/Pagination/index.tsx
var Pagination = __webpack_require__(3956);
;// CONCATENATED MODULE: ./src/modules/Campaigns/CurrentCampaignsTable.tsx










const tableHeaders = [
    'Campaign',
    'Model',
    'Engagement Type',
    'Status',
    'Created On',
    'Actions', 
];
const CurrentCampaignsTable = ()=>{
    const { colorMode  } = (0,react_.useColorMode)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { campaigns , firstCampaigns , currentPage  } = (0,external_react_redux_.useSelector)((state)=>state
    );
    const toast = (0,react_.createStandaloneToast)(theme/* default */.Z);
    const router = (0,router_.useRouter)();
    const { 0: rowLoading , 1: setRowLoading  } = (0,external_react_.useState)({});
    const { 0: pageNumber , 1: setPageNumber  } = (0,external_react_.useState)(campaigns?.currentPage ?? 1);
    const page1 = router.query.page;
    const pageSize = router.query.pageSize;
    (0,external_react_.useEffect)(()=>{
        if (page1 === currentPage) dispatch((0,actions_campaigns/* getCampaigns */._z)(pageNumber, pageSize));
    }, [
        pageNumber,
        pageSize
    ]);
    (0,external_react_.useEffect)(()=>{
        if (!firstCampaigns) {
            dispatch((0,actions_campaigns/* getFirst10Campaigns */.Rp)());
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (campaigns?.error) {
            toast({
                title: campaigns.error,
                description: 'Please refresh the page.',
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: 'top-right'
            });
        }
    }, [
        campaigns
    ]);
    const handlePaginate = (page)=>{
        setPageNumber(page);
    };
    const getNameProp = (fields)=>{
        const names = [];
        fields?.forEach((field)=>{
            names.push(field.name);
        });
        return names;
    };
    const onSelect = async (e)=>{
        const { value  } = e.target;
        if (value.includes('/')) {
            if (value.includes('edit')) {
                dispatch((0,actions_campaigns/* getSingleCampaign */.xd)(undefined, campaigns?.campaigns.find((data)=>data.id === value.split('edit/')[1]
                )));
            }
            if (value.includes('campaign') && !value.includes('report')) {
                return window.open(`${window.location.origin}${value}`, '_blank');
            }
            if (value.includes('leads/')) {
                const socialFields = campaigns?.campaigns.find((data)=>data.id === value.split('leads/')[1]
                );
                return router.push(`${value}?sc=${getNameProp(socialFields.formData.form).join(',')}`);
            }
            return router.push(value);
        }
        const [verb, id] = value.split(':');
        setRowLoading((prevloadState)=>({
                ...prevloadState,
                [id]: true
            })
        );
        switch(verb){
            case 'archive':
                await dispatch((0,actions_campaigns/* archiveCampaign */.Zl)(id));
                break;
            case 'copy':
                if (false) {}
                break;
            case 'closeCampaign':
                await dispatch((0,actions_campaigns/* updateCampaign */.hm)(id, {
                    status: formConstants/* CLOSED */.m$
                }));
                break;
            case 'openCampaign':
                await dispatch((0,actions_campaigns/* updateCampaign */.hm)(id, {
                    status: formConstants/* OPEN */.o1
                }));
                break;
            default:
                break;
        }
        setRowLoading((prevloadState)=>({
                ...prevloadState,
                [id]: false
            })
        );
    };
    const renderPagination = ()=>/*#__PURE__*/ jsx_runtime_.jsx(Pagination/* default */.Z, {
            currentPage: campaigns.currentPage,
            count: campaigns.count,
            totalPages: campaigns.totalPages,
            onChange: handlePaginate,
            pageSize: pageSize
        })
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                flexDirection: "row",
                justify: "space-between",
                my: "12",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        size: "lg",
                        alignSelf: "center",
                        children: "Current Campaigns"
                    }),
                    renderPagination()
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                overflowX: "auto",
                width: "100%",
                padding: "10px 0 10px",
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_RenderCampaignsTable, {
                    tableHeaders: tableHeaders,
                    colorMode: colorMode,
                    campaigns: campaigns?.campaigns,
                    rowLoading: rowLoading,
                    loading: campaigns?.loading,
                    onSelect: onSelect
                })
            }),
            renderPagination()
        ]
    }));
};
/* harmony default export */ const Campaigns_CurrentCampaignsTable = (CurrentCampaignsTable);

;// CONCATENATED MODULE: ./src/modules/Campaigns/CampaignsOverview.tsx










const CampaignsOverview = ()=>{
    const router = (0,router_.useRouter)();
    const { colorMode  } = (0,react_.useColorMode)();
    const { isOpen , onOpen , onClose  } = (0,react_.useDisclosure)();
    const handleCreateCampaign = (type)=>{
        onClose();
        switch(type){
            case "SMS":
                return router.push("/dashboard/campaigns/create/sms");
            case "Email":
                return router.push("/dashboard/campaigns/create/email");
            default:
                router.push("/dashboard/campaigns/create");
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Modal, {
                blockScrollOnMount: false,
                isOpen: isOpen,
                onClose: onClose,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalOverlay, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.ModalContent, {
                        minW: "40vw",
                        minH: "30vh",
                        p: "8",
                        border: `1px solid ${colorConstants/* borderThemeColor */.uH[colorMode]}`,
                        borderRadius: 0,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ModalBody, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.HStack, {
                                    mb: "10",
                                    height: "100%",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                        children: "Create A New Campaign "
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.HStack, {
                                    children: campaignCreations.map((campaignCreation)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                            border: `1px solid ${colorConstants/* default.influenceRedWithOpacity */.ZP.influenceRedWithOpacity}`,
                                            w: "12rem",
                                            h: "6rem",
                                            borderRadius: "md",
                                            justifyContent: "space-evenly",
                                            alignItems: "center",
                                            _hover: {
                                                bg: colorConstants/* default.grey */.ZP.grey
                                            },
                                            onClick: ()=>handleCreateCampaign(campaignCreation.label)
                                            ,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                    icon: campaignCreation.icon,
                                                    fontSize: 20,
                                                    color: colorConstants/* default.influenceRed */.ZP.influenceRed
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                    fontWeight: "bold",
                                                    children: campaignCreation.label
                                                })
                                            ]
                                        }, `capign_creation_${campaignCreation.name}`)
                                    )
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                flexDirection: "column",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        size: "xl",
                        children: " Campaigns Dashboard"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                        width: "25rem",
                        my: "12",
                        onClick: onOpen,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                icon: free_solid_svg_icons_.faPlus,
                                style: {
                                    paddingRight: "1rem"
                                }
                            }),
                            "Create a New Campaign"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        flexDirection: "column",
                        mt: "12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Campaigns_CurrentCampaignsTable, {})
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Campaigns_CampaignsOverview = (CampaignsOverview);

;// CONCATENATED MODULE: ./src/modules/Campaigns/sideBarOption.ts

const campaignsMenu = {
    name: 'Campaigns',
    icon: free_solid_svg_icons_.faCalendarMinus,
    path: '/dashboard/campaigns',
    order: 2,
    permission: [],
    isShown: true,
    isActive: false,
    child: []
};
const createCampaignsMenu = {
    name: 'Create Campaign',
    icon: free_solid_svg_icons_.faCalendarMinus,
    path: '/dashboard/campaigns/create',
    order: 2,
    permission: [],
    isShown: true,
    isActive: false,
    child: []
};

;// CONCATENATED MODULE: ./src/modules/Campaigns/index.ts


/* harmony default export */ const Campaigns = (Campaigns_CampaignsOverview);



/***/ }),

/***/ 8250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ap": () => (/* reexport */ Dashboard_DashboardCredits),
  "K7": () => (/* reexport */ Dashboard_DashboardOverview),
  "OT": () => (/* reexport */ creditsMenu),
  "Sr": () => (/* reexport */ dashboardMenu)
});

// UNUSED EXPORTS: DashboardLeads, leadsMenu

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/layout"
var layout_ = __webpack_require__(1271);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/utils/constants/colorConstants.ts
var colorConstants = __webpack_require__(3814);
// EXTERNAL MODULE: external "recharts"
var external_recharts_ = __webpack_require__(3655);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
;// CONCATENATED MODULE: ./src/modules/Dashboard/charts/ChartsHeader.tsx






const ChartsHeader = ({ title  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        justify: "space-between",
        mb: 5,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                w: "75%",
                maxW: "fit-content",
                justify: "space-between",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_.Heading, {
                        size: "md",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_.Divider, {
                        mx: 4,
                        h: "60%",
                        orientation: "vertical"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_.Text, {
                        fontSize: "md",
                        children: "March 2020"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                            "aria-label": "menu options",
                            variant: "ghost",
                            icon: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                icon: free_solid_svg_icons_.faEllipsisH
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                children: "Delete Widget"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                children: "Export as Email"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const charts_ChartsHeader = (ChartsHeader);

;// CONCATENATED MODULE: ./src/modules/Dashboard/charts/EmailConversions.tsx





const data = [
    {
        name: 'Spam',
        value: 160,
        fill: '#FF974A'
    },
    {
        name: 'Open',
        value: 560,
        fill: '#82C43C'
    },
    {
        name: 'Send',
        value: 860,
        fill: '#A461D8'
    }, 
];
const style = {
    top: 290,
    left: 0,
    lineHeight: '4px'
};
const EmailConversions = ({})=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        padding: [
            6,
            8
        ],
        flexDirection: "column",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(charts_ChartsHeader, {
                title: "Email Conversions"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                justifyContent: "center",
                width: "100%",
                mt: "-20px",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.ResponsiveContainer, {
                    width: 300,
                    height: 315,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_recharts_.RadialBarChart, {
                        width: 420,
                        height: 220,
                        cx: 150,
                        cy: 150,
                        innerRadius: 15,
                        outerRadius: 140,
                        barSize: 15,
                        data: data,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.RadialBar, {
                                label: {
                                    position: 'insideStart',
                                    fill: '#fff'
                                },
                                background: true,
                                dataKey: "value"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.Legend, {
                                iconSize: 10,
                                width: 220,
                                height: 140,
                                layout: "horizontal",
                                wrapperStyle: style,
                                verticalAlign: "top",
                                align: "center"
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const charts_EmailConversions = (EmailConversions);

;// CONCATENATED MODULE: ./src/modules/Dashboard/charts/Revenue.tsx





const Revenue_data = [
    {
        name: 'Moday',
        value: 4000
    },
    {
        name: 'Tuesday',
        value: 3000
    },
    {
        name: 'Wednesday',
        value: 2000
    },
    {
        name: 'Thursday',
        value: 2780
    },
    {
        name: 'Friday',
        value: 1890
    }, 
];
const Revenue_style = {
    top: 290,
    left: 0,
    lineHeight: '4px'
};
const Revenue = ({})=>{
    const { colorMode  } = (0,react_.useColorMode)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        padding: [
            6,
            8
        ],
        flexDirection: "column",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(charts_ChartsHeader, {
                title: "Revenue"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                wrap: "wrap",
                width: "100%",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        size: "xl",
                        width: "100%",
                        children: "$129,812.00"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontSize: "md",
                        children: "Won from 290 Deals"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                justifyContent: "center",
                width: "100%",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.ResponsiveContainer, {
                    width: "100%",
                    height: 315,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_recharts_.AreaChart, {
                        width: 420,
                        height: 220,
                        data: Revenue_data,
                        margin: {
                            top: 10,
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.Tooltip, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.Area, {
                                type: "natural",
                                fillOpacity: 0.4,
                                dataKey: "value",
                                stroke: "#FF974A",
                                fill: "#FFB177"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {})
        ]
    }));
};
/* harmony default export */ const charts_Revenue = (Revenue);

;// CONCATENATED MODULE: ./src/modules/Dashboard/charts/Activity.tsx





const Activity_data = [
    {
        name: 'JAN 1',
        SMS: 4000,
        Email: 2400,
        amt: 2400
    },
    {
        name: 'JAN 2',
        SMS: 3000,
        Email: 1398,
        amt: 2210
    },
    {
        name: 'JAN 3',
        SMS: 2000,
        Email: 9800,
        amt: 2290
    },
    {
        name: 'JAN 4',
        SMS: 2780,
        Email: 3908,
        amt: 2000
    },
    {
        name: 'JAN 5',
        SMS: 1890,
        Email: 4800,
        amt: 2181
    }, 
];
const Activity_style = {
    top: -20,
    left: 0,
    lineHeight: '4px'
};
const Activity = ({})=>{
    const { colorMode  } = (0,react_.useColorMode)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        padding: [
            6,
            8
        ],
        flexDirection: "column",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(charts_ChartsHeader, {
                title: "Activity"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                justifyContent: "center",
                width: "100%",
                mt: "30px",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.ResponsiveContainer, {
                    height: 315,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_recharts_.LineChart, {
                            width: 500,
                            height: 300,
                            data: Activity_data,
                            margin: {
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.CartesianGrid, {
                                    strokeDasharray: "3 3"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.XAxis, {
                                    dataKey: "name"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.YAxis, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.Tooltip, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.Legend, {
                                    iconSize: 10,
                                    width: 220,
                                    layout: "horizontal",
                                    wrapperStyle: Activity_style,
                                    verticalAlign: "top",
                                    align: "center",
                                    iconType: "square"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.Line, {
                                    type: "monotone",
                                    dataKey: "Email",
                                    stroke: "#8884d8",
                                    activeDot: {
                                        r: 8
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.Line, {
                                    type: "monotone",
                                    dataKey: "SMS",
                                    stroke: "#82ca9d"
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {})
        ]
    }));
};
/* harmony default export */ const charts_Activity = (Activity);

;// CONCATENATED MODULE: ./src/modules/Dashboard/Deals.tsx




const Deals = ()=>{
    const { colorMode  } = (0,react_.useColorMode)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        padding: [
            6,
            0
        ],
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                background: colorConstants/* cardThemeColor */.fP[colorMode],
                padding: 10,
                height: "48%",
                alignContent: "center",
                wrap: "wrap",
                width: "100%",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        size: "xl",
                        width: "100%",
                        textAlign: "center",
                        children: "$129,812.00"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        width: "100%",
                        mt: 6,
                        fontSize: "md",
                        textAlign: "center",
                        children: "Won from 290 Deals"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                background: colorConstants/* cardThemeColor */.fP[colorMode],
                padding: 10,
                height: "48%",
                alignContent: "center",
                wrap: "wrap",
                width: "100%",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        size: "xl",
                        width: "100%",
                        textAlign: "center",
                        children: "+126"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        width: "100%",
                        mt: 6,
                        fontSize: "md",
                        textAlign: "center",
                        children: "New Deals worth $3000"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Dashboard_Deals = (Deals);

;// CONCATENATED MODULE: ./src/modules/Dashboard/Summary.tsx




const Summary = ()=>{
    const metrics = [
        {
            title: "Email Sent",
            value: 112
        },
        {
            title: "Skipped",
            value: 112
        },
        {
            title: "Opened",
            value: 112
        },
        {
            title: "Clicked",
            value: 112
        },
        {
            title: "Hard Bounce",
            value: 84
        },
        {
            title: "Soft Bounce",
            value: 29
        },
        {
            title: "Unsubscribe",
            value: 33
        },
        {
            title: "Spam",
            value: 45
        },
        {
            title: "Order In",
            value: 767
        },
        {
            title: "Rejected",
            value: 21
        },
        {
            title: "Last Order",
            value: 343
        },
        {
            title: "New Member",
            value: 2
        }, 
    ];
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        padding: [
            6,
            8
        ],
        flexDirection: "column",
        height: "100%",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(charts_ChartsHeader, {
                title: "Summary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                w: "100%",
                height: "100%",
                templateColumns: "repeat(4, minmax(0,1fr))",
                alignItems: "center",
                gap: 4,
                children: metrics.map((metric)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        p: 4,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                textAlign: "center",
                                size: "xl",
                                children: metric.value
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                textAlign: "center",
                                fontSize: "md",
                                children: metric.title
                            })
                        ]
                    }, metric.title)
                )
            })
        ]
    }));
};
/* harmony default export */ const Dashboard_Summary = (Summary);

;// CONCATENATED MODULE: ./src/modules/Dashboard/DashboardOverview.tsx










const DashboardOverview = ()=>{
    const { colorMode  } = (0,react_.useColorMode)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(layout_.Box, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(layout_.Box, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                mb: 4,
                flexWrap: "wrap",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                        w: "100%",
                        templateColumns: "repeat(3, minmax(0,1fr))",
                        gap: 4,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                rowSpan: 1,
                                colSpan: 1,
                                background: colorConstants/* cardThemeColor */.fP[colorMode],
                                borderRadius: "8px",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(charts_EmailConversions, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                rowSpan: 1,
                                colSpan: 1,
                                background: colorConstants/* cardThemeColor */.fP[colorMode],
                                borderRadius: "8px",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(charts_Revenue, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                rowSpan: 1,
                                colSpan: 1,
                                borderRadius: "8px",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Dashboard_Deals, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                        w: "100%",
                        py: 5,
                        gap: 5,
                        templateColumns: "repeat(2, minmax(0,1fr))",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                rowSpan: 1,
                                colSpan: 1,
                                background: colorConstants/* cardThemeColor */.fP[colorMode],
                                borderRadius: "8px",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(charts_Activity, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                rowSpan: 1,
                                colSpan: 1,
                                background: colorConstants/* cardThemeColor */.fP[colorMode],
                                borderRadius: "8px",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Dashboard_Summary, {})
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const Dashboard_DashboardOverview = (DashboardOverview);

// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/hooks/useForm.ts
var hooks_useForm = __webpack_require__(8091);
// EXTERNAL MODULE: ./src/utils/constants/regexConstants.ts
var regexConstants = __webpack_require__(5851);
;// CONCATENATED MODULE: ./src/utils/constants/formData/addCredit.ts

/* harmony default export */ const addCredit = ([
    {
        name: 'amount',
        label: 'How many credits would you like to add?',
        type: 'number',
        placeholder: '$',
        required: true,
        errorMessage: 'Enter credit to add',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1,
        colSpan: 2
    },
    {
        name: 'name',
        label: 'Full Name on Card',
        errorMessage: 'Enter Full Name on Card',
        type: 'text',
        placeholder: 'Noah',
        required: true,
        pattern: regexConstants/* FULL_NAME_REGEX */._t,
        colSpan: 2
    },
    {
        name: 'number',
        label: 'Card Number',
        errorMessage: 'Enter a valid card number',
        type: 'number',
        placeholder: "0000 0000 0000 0000",
        required: true,
        pattern: regexConstants/* CREDIT_CARD_REGEX */.Sd,
        colSpan: 2
    },
    {
        name: 'exp_month',
        label: 'Exp Month',
        errorMessage: 'Select Card Exp Month',
        type: 'select',
        required: true,
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1,
        colSpan: 1
    },
    {
        name: 'exp_year',
        label: 'Exp Year',
        errorMessage: 'Select Card Exp Year',
        type: 'select',
        required: true,
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1,
        colSpan: 1
    },
    {
        name: 'cvc',
        label: 'CVC',
        type: 'text',
        placeholder: "000",
        errorMessage: 'Enter card CVC',
        required: true,
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1,
        colSpan: 2
    },
    {
        name: 'address_line1',
        label: 'Address 1',
        type: 'text',
        placeholder: "000 place drive",
        errorMessage: 'Enter your address 1',
        required: true,
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1,
        colSpan: 2
    },
    {
        name: 'address_line2',
        label: 'Address 2',
        type: 'text',
        placeholder: "000 place drive",
        errorMessage: '',
        required: false,
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1,
        colSpan: 2
    },
    {
        name: 'address_zip',
        label: 'Zip Code',
        type: 'text',
        placeholder: "030303",
        errorMessage: 'Enter your zip code',
        required: true,
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1,
        colSpan: 1
    },
    {
        name: 'address_state',
        label: 'State',
        type: 'select',
        errorMessage: 'Select a state',
        required: true,
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1,
        colSpan: 1
    }, 
]);

// EXTERNAL MODULE: ./src/components/Button/index.ts + 1 modules
var components_Button = __webpack_require__(2341);
// EXTERNAL MODULE: ./src/components/Input/index.ts + 1 modules
var Input = __webpack_require__(2666);
// EXTERNAL MODULE: ./src/components/DropdownSelect/index.tsx
var DropdownSelect = __webpack_require__(7030);
;// CONCATENATED MODULE: ./src/components/Dashboard/Credits/TransactionDataTable.tsx




const TransactionDataTable = ({ data  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: data && data.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
            alignItems: "flex-start",
            spacing: '10',
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                    size: "lg",
                    children: "Transaction History"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Table, {
                    variant: "creditsTransactionalTable",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Thead, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Tr, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Th, {
                                        fontSize: "lg",
                                        textTransform: "capitalize",
                                        children: "Date"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Th, {
                                        fontSize: "lg",
                                        textTransform: "capitalize",
                                        children: "Transaction"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Tbody, {
                            children: data.map((el)=>{
                                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Tr, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                            fontSize: "md",
                                            children: new Date(el.date).toLocaleDateString()
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                                fontSize: "md",
                                                letterSpacing: 'tight',
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                                        color: colorConstants/* default.influenceRed */.ZP.influenceRed,
                                                        as: "span",
                                                        children: [
                                                            "$",
                                                            el.amount
                                                        ]
                                                    }),
                                                    ' ',
                                                    "in credits added to account from card ending in",
                                                    ' ',
                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                        color: colorConstants/* default.influenceRed */.ZP.influenceRed,
                                                        as: "span",
                                                        children: el.lastCardDigit
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }, el.id));
                            })
                        })
                    ]
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/Dashboard/Credits/index.tsx



// EXTERNAL MODULE: ./src/utils/helpers.ts
var helpers = __webpack_require__(8081);
// EXTERNAL MODULE: ./src/utils/apiHelpers.ts
var apiHelpers = __webpack_require__(662);
// EXTERNAL MODULE: ./src/utils/constants/stateConstants.ts
var stateConstants = __webpack_require__(5868);
// EXTERNAL MODULE: ./src/redux/selectors/auth.ts
var auth = __webpack_require__(8635);
;// CONCATENATED MODULE: ./src/redux/selectors/campaigns.ts
const getState = (state)=>state.campaigns
;
const getSMSCampaign = (state)=>state.campaigns.SMSCampaign
;

;// CONCATENATED MODULE: ./src/utils/stripeHelpers.ts
function formatAmountForDisplay(amount, currency) {
    let numberFormat = new Intl.NumberFormat([
        'en-US'
    ], {
        style: 'currency',
        currency: currency,
        currencyDisplay: 'symbol'
    });
    return numberFormat.format(amount);
}
function formatAmountForStripe(amount, currency) {
    let numberFormat = new Intl.NumberFormat([
        'en-US'
    ], {
        style: 'currency',
        currency: currency,
        currencyDisplay: 'symbol'
    });
    const parts = numberFormat.formatToParts(amount);
    let zeroDecimalCurrency = true;
    for (let part of parts){
        if (part.type === 'decimal') {
            zeroDecimalCurrency = false;
        }
    }
    return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}

;// CONCATENATED MODULE: ./src/utils/stripeConfig.ts
const CURRENCY = 'usd';
// Set your amount limits: Use float for decimal currencies and
// Integer for zero-decimal currencies: https://stripe.com/docs/currencies#zero-decimal.
const MIN_AMOUNT = 10;
const MAX_AMOUNT = 5000;
const AMOUNT_STEP = 5;

;// CONCATENATED MODULE: ./src/modules/Dashboard/DashboardCredits.tsx


















const stateSelectOptions = stateConstants/* stateNames.map */.D.map((stateName)=>({
        label: stateName,
        value: stateName
    })
);
const textInputLabelProps = {
    fontWeight: 'bold',
    fontSize: 'lg'
};
const textInputProps = {
    p: '.50rem'
};
const currentYear = new Date().getFullYear();
const DashboardCredits = ()=>{
    const { colorMode  } = (0,react_.useColorMode)();
    const toast = (0,react_.useToast)();
    const colSpan = (0,react_.useBreakpointValue)({
        base: 2,
        md: 1
    });
    const user = (0,external_react_redux_.useSelector)(auth/* getUser */.P);
    const SMSCampaign = (0,external_react_redux_.useSelector)(getSMSCampaign);
    const [transaction, setTransaction] = external_react_default().useState();
    const [transactions, setTransactions] = external_react_default().useState([]);
    const [currentBalance, setCurrentBalance] = external_react_default().useState(0); // Just for testing
    // alert(JSON.stringify(SMSCampaign));
    const getSelectionOptions = (selectionType)=>{
        switch(selectionType){
            case 'address_state':
                return stateSelectOptions;
            case 'exp_month':
                return (0,helpers/* getNumberRange */.hN)(1, 12, 1);
            case 'exp_year':
                return (0,helpers/* getNumberRange */.hN)(currentYear, currentYear + 10, 1);
            default:
                return [];
        }
    };
    const { handleChange , inputTypes , handleSubmit , errors , loading , resetInputs ,  } = (0,hooks_useForm/* default */.Z)({
        inputs: addCredit,
        cb: async (inputs)=>{
            // Reset prev state
            setTransaction(null);
            // Create a Card Token.
            const response = await (0,apiHelpers/* fetchPostJSON */.Gf)('/api/create_card_token', inputs);
            if (response.statusCode === 500) {
                throw new Error(response.message);
            }
            // Create a Charge.
            const chargeRes = await (0,apiHelpers/* fetchPostJSON */.Gf)('/api/create_charge', {
                token: response.id,
                amount: inputs.amount,
                receipt_email: user.admin.email
            });
            if (chargeRes.statusCode === 500) {
                throw new Error(chargeRes.message);
            }
            // TODO:: Make a request to the server to persist the `charge Data`
            if (chargeRes.status === 'succeeded') {
                setTransaction(chargeRes);
                setCurrentBalance((v)=>v + chargeRes.amount
                );
                setTransactions((prevData)=>[
                        ...prevData,
                        {
                            id: chargeRes.id,
                            amount: chargeRes.amount,
                            lastCardDigit: chargeRes.source.last4,
                            date: new Date()
                        }, 
                    ]
                );
                toast({
                    title: 'Credits Added Successfully.',
                    description: `We've added $${chargeRes.amount} credits your account for you.`,
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                    variant: 'top-accent'
                });
            }
            resetInputs();
        }
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        flexDir: {
            base: 'column',
            md: 'column',
            lg: 'row'
        },
        width: "full",
        maxW: "2000px",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                py: "3%",
                pb: "3rem",
                width: [
                    null,
                    null,
                    '50%'
                ],
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                    width: "full",
                    alignItems: "flex-start",
                    spacing: "14",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                            alignItems: "flex-start",
                            display: "flex",
                            width: "full",
                            spacing: "10",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                                    display: "flex",
                                    width: "full",
                                    spacing: "20",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                            children: "Credits"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(components_Button/* default */.Z, {
                                            fontSize: "md",
                                            width: "40",
                                            padding: "1.2rem",
                                            borderRadius: "md",
                                            leftIcon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.AddIcon, {}),
                                            children: "Add Credits"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    display: "flex",
                                    w: "100",
                                    height: "20",
                                    bgColor: colorConstants/* cardThemeColor */.fP[colorMode],
                                    textAlign: "center",
                                    fontSize: "xlg",
                                    fontWeight: "semibold",
                                    color: colorConstants/* default.influenceRed */.ZP.influenceRed,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    p: "5",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                        children: [
                                            formatAmountForDisplay(currentBalance, CURRENCY),
                                            ' ',
                                            "Available Credits"
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                            spacing: "10",
                            width: "full",
                            alignItems: "flex-start",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                    size: "lg",
                                    children: "Add Credits"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SimpleGrid, {
                                    columns: 2,
                                    columnGap: 3,
                                    rowGap: 6,
                                    children: [
                                        addCredit.map((data, i)=>{
                                            if (data.type === 'select') {
                                                return(/*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                                    colSpan: data.colSpan === 1 ? colSpan : data.colSpan,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(DropdownSelect/* default */.Z, {
                                                        selectProps: {
                                                            name: data.name,
                                                            value: inputTypes[data.name]
                                                        },
                                                        onChange: handleChange,
                                                        label: data.label,
                                                        labelProps: {
                                                            ...textInputLabelProps
                                                        },
                                                        options: getSelectionOptions(data.name) || [],
                                                        error: errors[data.name] && data.errorMessage
                                                    })
                                                }, `gridItem_${i}`));
                                            }
                                            return(/*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                                colSpan: data.colSpan === 1 ? colSpan : data.colSpan,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                                                    isInvalid: errors[data.name],
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Input/* TextInput */.o, {
                                                            name: data.name,
                                                            label: data.label,
                                                            value: inputTypes[data.name],
                                                            type: data.type,
                                                            placeholder: data.placeholder,
                                                            TextInputProps: {
                                                                ...textInputProps
                                                            },
                                                            labelProps: {
                                                                ...textInputLabelProps
                                                            },
                                                            handleChange: handleChange
                                                        }),
                                                        errors[data.name] && /*#__PURE__*/ jsx_runtime_.jsx(react_.FormErrorMessage, {
                                                            fontSize: "xl",
                                                            children: data.errorMessage
                                                        })
                                                    ]
                                                }, `credits_${i}`)
                                            }, `gridItem_${i}`));
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                            mt: "7",
                                            colSpan: 2,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_Button/* default */.Z, {
                                                fontSize: "md",
                                                width: "100",
                                                padding: "1.2rem",
                                                borderRadius: "md",
                                                type: "submit",
                                                disabled: loading,
                                                isLoading: loading,
                                                onClick: handleSubmit,
                                                children: [
                                                    "Process Card",
                                                    `${inputTypes['amount'] && ` for ${formatAmountForDisplay(inputTypes['amount'], CURRENCY)}`}`
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {
                display: {
                    base: 'block',
                    md: 'none'
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                py: "3%",
                width: [
                    null,
                    null,
                    '50%'
                ],
                minH: "100vh",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                    spacing: "20",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(TransactionDataTable, {
                            data: transactions
                        }),
                        transaction && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Alert, {
                            status: "error",
                            variant: "subtle",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            height: "sm",
                            bgColor: colorConstants/* cardThemeColor */.fP[colorMode],
                            border: `1px solid ${colorConstants/* borderThemeColor */.uH[colorMode]}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.AlertIcon, {
                                    boxSize: "40px",
                                    mr: 0,
                                    mb: 5
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.AlertTitle, {
                                    mt: 4,
                                    mb: 5,
                                    fontSize: "xlg",
                                    children: "Thank you for your order!"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.AlertDescription, {
                                    fontSize: "lg",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    color: colorConstants/* default.influenceRed */.ZP.influenceRed,
                                    maxWidth: "lg",
                                    children: [
                                        "Your transaction in the mount of",
                                        ' ',
                                        formatAmountForDisplay(transaction?.amount, CURRENCY),
                                        ' ',
                                        "should be displayed on your account momentarily. An email with your receipt has been sent to ",
                                        transaction?.receipt_email
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const Dashboard_DashboardCredits = (DashboardCredits);

;// CONCATENATED MODULE: ./src/utils/constants/formData/leadSMS.ts

/* harmony default export */ const leadSMS = ([
    {
        name: 'message',
        label: 'Message',
        type: 'textarea',
        placeholder: "Welcome to Quik Session! Here you will find all the information you need to get settled in within the app.Did you know that there are over 3000 studios Listed on quiksession? You have access to all of the m with one click.Visit www.wuiksession.com or enter the app to explore all of the possibilities!",
        required: true,
        errorMessage: 'Enter message',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    }, 
]);

;// CONCATENATED MODULE: ./src/modules/Dashboard/DashboardLeads.tsx












const DashboardLeads = ()=>{
    const { colorMode  } = useColorMode();
    const { isOpen , onOpen , onClose  } = useDisclosure();
    const toast = useToast();
    const user = useSelector(authSelectors.getUser);
    const [choosenLeadSendtype, setChoosenLeadSendtype] = React.useState();
    const { handleChange , inputTypes , handleSubmit , errors , loading , resetInputs ,  } = useForm({
        inputs: formdata,
        cb: async (inputs)=>{
            if (choosenLeadSendtype === 'email') {
                // Send Email
                const response = await fetchPostJSON('/api/send_email', {
                    subject: 'QuickInfluence Lead Email Testing',
                    to: user?.admin?.email || 'mojaray2k@gmail.com',
                    body: inputs.message
                });
                if (response.statusCode === 500) {
                    throw new Error(response.message);
                }
                if (response.status === 'success') {
                    toast({
                        title: 'Email Successfully Sent.',
                        description: `The lead has been successfully sent.`,
                        status: 'success',
                        duration: 4000,
                        isClosable: true,
                        variant: 'top-accent'
                    });
                }
                return resetInputs();
            }
            if (choosenLeadSendtype === 'sms') {
                // Send SMS.
                const response = await fetchPostJSON('/api/messages', {
                    to: user.admin.phone || '+12026078069',
                    body: inputs.message
                });
                if (response.statusCode === 500) {
                    throw new Error(response.message);
                }
                if (response.status === 'success') {
                    toast({
                        title: 'SMS Successfully Sent.',
                        description: `The lead has been successfully sent.`,
                        status: 'success',
                        duration: 4000,
                        isClosable: true,
                        variant: 'top-accent'
                    });
                }
                return resetInputs();
            }
        }
    });
    const handleSendLead = (type)=>{
        setChoosenLeadSendtype(type);
        onOpen();
    };
    return(/*#__PURE__*/ _jsxs(Flex, {
        flexDir: {
            base: 'column',
            md: 'column',
            lg: 'row'
        },
        width: "full",
        maxW: "2000px",
        children: [
            /*#__PURE__*/ _jsx(Button, {
                onClick: ()=>handleSendLead('sms')
                ,
                variant: "solid",
                children: "Send Lead as SMS"
            }),
            /*#__PURE__*/ _jsx(Button, {
                onClick: ()=>handleSendLead('email')
                ,
                variant: "solid",
                children: "Send Lead as Email"
            }),
            /*#__PURE__*/ _jsxs(Modal, {
                blockScrollOnMount: false,
                isOpen: isOpen,
                onClose: onClose,
                children: [
                    /*#__PURE__*/ _jsx(ModalOverlay, {}),
                    /*#__PURE__*/ _jsx(ModalContent, {
                        minW: "60vw",
                        minH: "70vh",
                        p: "8",
                        border: `1px solid ${borderThemeColor[colorMode]}`,
                        borderRadius: 0,
                        children: /*#__PURE__*/ _jsxs(ModalBody, {
                            children: [
                                /*#__PURE__*/ _jsxs(HStack, {
                                    spacing: "8",
                                    height: "100%",
                                    children: [
                                        /*#__PURE__*/ _jsx(FontAwesomeIcon, {
                                            icon: faComment,
                                            fontSize: 30,
                                            color: quikColorConstants.influenceRed
                                        }),
                                        /*#__PURE__*/ _jsxs(Heading, {
                                            children: [
                                                choosenLeadSendtype?.toUpperCase(),
                                                " - "
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(VStack, {
                                    width: "100%",
                                    mt: "16",
                                    children: [
                                        /*#__PURE__*/ _jsx(Heading, {
                                            size: "md",
                                            as: "span",
                                            mb: "8px",
                                            alignSelf: "flex-start",
                                            children: formdata[0].label
                                        }),
                                        /*#__PURE__*/ _jsx(Textarea, {
                                            name: formdata[0].name,
                                            size: "sm",
                                            value: inputTypes[formdata[0].name],
                                            placeholder: formdata[0].placeholder,
                                            onChange: handleChange,
                                            resize: "none",
                                            borderRadius: 6
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs(Flex, {
                                    flexDir: {
                                        base: 'column-reverse',
                                        md: 'row'
                                    },
                                    mt: "28",
                                    children: [
                                        /*#__PURE__*/ _jsxs(Flex, {
                                            flexDir: {
                                                base: 'row-reverse',
                                                md: 'column'
                                            },
                                            alignItems: {
                                                base: 'center',
                                                md: 'flex-start'
                                            },
                                            justifyContent: "center",
                                            children: [
                                                /*#__PURE__*/ _jsx(Text, {
                                                    fontSize: {
                                                        base: 'sm',
                                                        md: 'xl'
                                                    },
                                                    fontWeight: "bold",
                                                    children: "Auto re-send after 3 days unopened"
                                                }),
                                                /*#__PURE__*/ _jsx(Switch, {
                                                    size: "lg",
                                                    variant: "brand",
                                                    py: "4",
                                                    pr: "4",
                                                    pb: "0"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(Spacer, {}),
                                        /*#__PURE__*/ _jsxs(VStack, {
                                            spacing: [
                                                4,
                                                4,
                                                8
                                            ],
                                            children: [
                                                /*#__PURE__*/ _jsx(CustomButton, {
                                                    height: 30,
                                                    width: "sm",
                                                    padding: '0.2rem',
                                                    fontSize: 10,
                                                    onClick: handleSubmit,
                                                    isLoading: loading,
                                                    disabled: loading,
                                                    children: "Re-Send Message"
                                                }),
                                                /*#__PURE__*/ _jsx(CustomButton, {
                                                    width: "sm",
                                                    height: 30,
                                                    padding: '0.2rem',
                                                    fontSize: 10,
                                                    disabled: loading,
                                                    children: "Delete Message"
                                                }),
                                                /*#__PURE__*/ _jsx(CustomButton, {
                                                    width: "sm",
                                                    height: 30,
                                                    padding: '0.2rem',
                                                    fontSize: 10,
                                                    disabled: loading,
                                                    children: "Save To Drafts"
                                                })
                                            ]
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
/* harmony default export */ const Dashboard_DashboardLeads = ((/* unused pure expression or super */ null && (DashboardLeads)));

;// CONCATENATED MODULE: ./src/modules/Dashboard/sideBarOption.ts

const dashboardMenu = {
    name: 'Overview',
    icon: free_solid_svg_icons_.faGripHorizontal,
    path: '/dashboard',
    order: 1,
    permission: [],
    isShown: true,
    isActive: false,
    child: []
};
const creditsMenu = {
    name: 'Credits',
    icon: free_solid_svg_icons_.faCreditCard,
    path: '/dashboard/credits',
    order: 1,
    permission: [],
    isShown: true,
    isActive: false,
    child: []
};
const leadsMenu = {
    name: 'Leads',
    icon: free_solid_svg_icons_.faUserPlus,
    path: '/dashboard/leads',
    order: 1,
    permission: [],
    isShown: true,
    isActive: false,
    child: []
};

;// CONCATENATED MODULE: ./src/modules/Dashboard/index.ts







/***/ }),

/***/ 9889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3814);



const LeadsDataPoint = ({ totalCount , filteredCount , malecount , femalecount  })=>{
    const { colorMode  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        mt: 20,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                size: "md",
                children: [
                    "Total Number of Records: ",
                    totalCount
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                mt: 10,
                flexDir: "row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        bg: utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_2__/* .basicTheme */ .We[colorMode],
                        p: 16,
                        mr: 20,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                size: "3xl",
                                mb: 5,
                                children: filteredCount || 0
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                size: "md",
                                children: "Total Number of Results"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        bg: utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_2__/* .basicTheme */ .We[colorMode],
                        p: 16,
                        mr: 20,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                size: "3xl",
                                mb: 5,
                                children: malecount || 0
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                size: "md",
                                children: "Total Male Records"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        bg: utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_2__/* .basicTheme */ .We[colorMode],
                        p: 16,
                        mr: 20,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                size: "3xl",
                                mb: 5,
                                children: femalecount || 0
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                size: "md",
                                children: "Total Female Records"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeadsDataPoint);


/***/ }),

/***/ 6982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3814);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);


const getStyles = (colorMode)=>_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css`
& {
  border: 1px solid ${utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_0__/* .tableBorderTheme */ .L[colorMode]};

  td, th {
    border-top: 1px solid ${utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_0__/* .tableBorderTheme */ .L[colorMode]};
    border-bottom: 1px solid ${utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_0__/* .tableBorderTheme */ .L[colorMode]};
    padding: 15px;
  }

  th {
    color: ${utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_0__/* .tableTextTheme */ .hG[colorMode]}
  }

  td {
    color: ${utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_0__/* .tableTextTheme */ .hG[colorMode]}
  }
}
}
`
;


/***/ }),

/***/ 7667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Leads),
  "k": () => (/* reexport */ leadMenu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "query-string"
var external_query_string_ = __webpack_require__(9103);
var external_query_string_default = /*#__PURE__*/__webpack_require__.n(external_query_string_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/utils/constants/colorConstants.ts
var colorConstants = __webpack_require__(3814);
// EXTERNAL MODULE: ./src/components/Pagination/index.tsx
var Pagination = __webpack_require__(3956);
// EXTERNAL MODULE: ./src/modules/Leads/css.ts
var css = __webpack_require__(6982);
// EXTERNAL MODULE: ./src/utils/helpers.ts
var helpers = __webpack_require__(8081);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
;// CONCATENATED MODULE: ./src/modules/Leads/NoLeadsAvailable.tsx


const NoLeadsAvailable = ({ isAdmin  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Center, {
        flexDir: "column",
        minH: "80vh",
        height: "100%",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                as: "h2",
                fontSize: "40px",
                marginBottom: "10px",
                fontWeight: "600",
                children: isAdmin ? "You don't have any Leads yet" : "You can search for Leads"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                fontSize: "18px",
                children: isAdmin ? "Copy your link from the campaign lists and share with your users" : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "Click the ",
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            children: "Filter"
                        }),
                        " button at the top right and search for specific data"
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const Leads_NoLeadsAvailable = (NoLeadsAvailable);

// EXTERNAL MODULE: ./src/modules/Leads/LeadsDataPoint.tsx
var LeadsDataPoint = __webpack_require__(9889);
;// CONCATENATED MODULE: ./src/modules/Leads/LeadsPage.tsx












const LeadsPage = ({ leads , pageType ="singleCampaign" , socialColumns =[] , pageSize  })=>{
    const { colorMode  } = (0,react_.useColorMode)();
    const router = (0,router_.useRouter)();
    const params = router.query;
    const style = (0,css/* getStyles */.W)(colorMode);
    const isLeadsDataPoint = leads?.resType === "LEADS_DATA_POINTS";
    const isAllowed = (0,helpers/* isAdmin */.GJ)();
    const handleChange = (page)=>{
        params.page = page;
        router.push(`?${external_query_string_default().stringify(params)}`);
    };
    const handleSortChange = (sortBy)=>{
        params.sortBy = sortBy;
        router.push(`?${external_query_string_default().stringify(params)}`);
    };
    const status = pageType === "allLeads" ? [] : [
        "status"
    ];
    const sc = (0,helpers/* getSocialHandleHeader */.M6)(socialColumns);
    const tableHeader = [
        "First Name",
        "Last Name",
        "Email",
        "Phone",
        "Gender",
        "City|State|Zip Code",
        ...sc,
        ...status
    ];
    const renderPagination = ()=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: !isLeadsDataPoint && /*#__PURE__*/ jsx_runtime_.jsx(Pagination/* default */.Z, {
                totalPages: leads?.meta.totalPages,
                currentPage: leads?.meta.currentPage,
                count: leads?.meta.count,
                onChange: handleChange,
                pageSize: pageSize
            })
        })
    ;
    const renderSortButton = ()=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
            type: "button",
            onClick: ()=>handleSortChange("paymentStatus")
            ,
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                icon: free_solid_svg_icons_.faAngleDown,
                style: {
                    margin: "auto 10px"
                }
            })
        })
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                width: "full",
                alignItems: "center",
                justify: "space-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        fontWeight: "600",
                        fontSize: "24px",
                        children: "Records / Leads"
                    }),
                    renderPagination()
                ]
            }),
            !leads?.data?.length ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: !isLeadsDataPoint ? /*#__PURE__*/ jsx_runtime_.jsx(Leads_NoLeadsAvailable, {
                    isAdmin: isAllowed
                }) : /*#__PURE__*/ jsx_runtime_.jsx(LeadsDataPoint/* default */.Z, {
                    totalCount: leads?.meta?.totalCount,
                    filteredCount: leads?.meta?.filteredCount,
                    malecount: leads?.meta?.malecount,
                    femalecount: leads?.meta?.femalecount
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                w: "100%",
                overflowX: "auto",
                width: "100%",
                padding: "10px 0",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    flexGrow: 1,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Table, {
                        size: "lg",
                        marginTop: 10,
                        css: style,
                        bg: colorConstants/* basicTheme */.We[colorMode],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Thead, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Tr, {
                                    children: tableHeader.map((th, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Th, {
                                            fontSize: "16px",
                                            textTransform: "capitalize",
                                            fontFamily: "Avenir",
                                            whiteSpace: "nowrap",
                                            children: [
                                                th,
                                                th === "status" && renderSortButton()
                                            ]
                                        }, `table_h_2_${i}`)
                                    )
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Tbody, {
                                children: leads?.data.map((data, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Tr, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                                whiteSpace: "nowrap",
                                                textTransform: "capitalize",
                                                fontSize: "16px",
                                                children: data.firstName || "N/A"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                                whiteSpace: "nowrap",
                                                textTransform: "capitalize",
                                                fontSize: "16px",
                                                children: data.lastName || "N/A"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                                whiteSpace: "nowrap",
                                                fontSize: "16px",
                                                children: data.email || "N/A"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                                textTransform: "capitalize",
                                                fontSize: "16px",
                                                whiteSpace: "nowrap",
                                                children: data.phone
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                                textTransform: "capitalize",
                                                fontSize: "16px",
                                                whiteSpace: "nowrap",
                                                children: data.gender || "N/A"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                                textTransform: "capitalize",
                                                fontSize: "16px",
                                                whiteSpace: "nowrap",
                                                children: `${data.city || ""} ${data.state || ""} ${data.postalCode || ""}`
                                            }),
                                            socialColumns.length >= 1 && !!socialColumns[0] && socialColumns?.map((s, j)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                                    fontSize: "16px",
                                                    whiteSpace: "nowrap",
                                                    children: data[s] || "N/A"
                                                }, `social_${j}`)
                                            ),
                                            status.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                                fontSize: "16px",
                                                whiteSpace: "nowrap",
                                                children: data?.UserCampaigns?.at(0)?.paymentStatus
                                            })
                                        ]
                                    }, `lead_data_${i}`)
                                )
                            })
                        ]
                    })
                })
            }),
            renderPagination()
        ]
    }));
};
/* harmony default export */ const Leads_LeadsPage = (LeadsPage);

;// CONCATENATED MODULE: ./src/modules/Leads/sideBarOption.ts

const leadMenu = {
    name: 'Leads',
    icon: free_solid_svg_icons_.faUserPlus,
    path: '/dashboard/leads',
    order: 2,
    permission: [
        'can_get_all_leads'
    ],
    isShown: true,
    isActive: false,
    child: [
        {
            name: 'Create Lead',
            path: '/dashboard/leads/create',
            permission: [
                'can_create_leads'
            ]
        },
        {
            name: 'Upload Leads',
            path: '/dashboard/leads/upload',
            permission: []
        }, 
    ]
};

;// CONCATENATED MODULE: ./src/modules/Leads/index.ts



/* harmony default export */ const Leads = (Leads_LeadsPage);


/***/ }),

/***/ 3874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Search),
  "O": () => (/* reexport */ searchMenu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./src/components/Button/index.ts + 1 modules
var Button = __webpack_require__(2341);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils/constants/colorConstants.ts
var colorConstants = __webpack_require__(3814);
// EXTERNAL MODULE: ./src/assets/loader.gif
var loader = __webpack_require__(2379);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/components/SearchFilters/constants.ts
const GENDER = [
    {
        name: "Male",
        abbreviation: "male"
    },
    {
        name: "Female",
        abbreviation: "female"
    }, 
];
const STATES = [
    {
        name: "Alabama",
        abbreviation: "AL"
    },
    {
        name: "Alaska",
        abbreviation: "AK"
    },
    {
        name: "American Samoa",
        abbreviation: "AS"
    },
    {
        name: "Arizona",
        abbreviation: "AZ"
    },
    {
        name: "Arkansas",
        abbreviation: "AR"
    },
    {
        name: "California",
        abbreviation: "CA"
    },
    {
        name: "Colorado",
        abbreviation: "CO"
    },
    {
        name: "Connecticut",
        abbreviation: "CT"
    },
    {
        name: "Delaware",
        abbreviation: "DE"
    },
    {
        name: "District Of Columbia",
        abbreviation: "DC"
    },
    {
        name: "Federated States Of Micronesia",
        abbreviation: "FM"
    },
    {
        name: "Florida",
        abbreviation: "FL"
    },
    {
        name: "Georgia",
        abbreviation: "GA"
    },
    {
        name: "Guam",
        abbreviation: "GU"
    },
    {
        name: "Hawaii",
        abbreviation: "HI"
    },
    {
        name: "Idaho",
        abbreviation: "ID"
    },
    {
        name: "Illinois",
        abbreviation: "IL"
    },
    {
        name: "Indiana",
        abbreviation: "IN"
    },
    {
        name: "Iowa",
        abbreviation: "IA"
    },
    {
        name: "Kansas",
        abbreviation: "KS"
    },
    {
        name: "Kentucky",
        abbreviation: "KY"
    },
    {
        name: "Louisiana",
        abbreviation: "LA"
    },
    {
        name: "Maine",
        abbreviation: "ME"
    },
    {
        name: "Marshall Islands",
        abbreviation: "MH"
    },
    {
        name: "Maryland",
        abbreviation: "MD"
    },
    {
        name: "Massachusetts",
        abbreviation: "MA"
    },
    {
        name: "Michigan",
        abbreviation: "MI"
    },
    {
        name: "Minnesota",
        abbreviation: "MN"
    },
    {
        name: "Mississippi",
        abbreviation: "MS"
    },
    {
        name: "Missouri",
        abbreviation: "MO"
    },
    {
        name: "Montana",
        abbreviation: "MT"
    },
    {
        name: "Nebraska",
        abbreviation: "NE"
    },
    {
        name: "Nevada",
        abbreviation: "NV"
    },
    {
        name: "New Hampshire",
        abbreviation: "NH"
    },
    {
        name: "New Jersey",
        abbreviation: "NJ"
    },
    {
        name: "New Mexico",
        abbreviation: "NM"
    },
    {
        name: "New York",
        abbreviation: "NY"
    },
    {
        name: "North Carolina",
        abbreviation: "NC"
    },
    {
        name: "North Dakota",
        abbreviation: "ND"
    },
    {
        name: "Northern Mariana Islands",
        abbreviation: "MP"
    },
    {
        name: "Ohio",
        abbreviation: "OH"
    },
    {
        name: "Oklahoma",
        abbreviation: "OK"
    },
    {
        name: "Oregon",
        abbreviation: "OR"
    },
    {
        name: "Palau",
        abbreviation: "PW"
    },
    {
        name: "Pennsylvania",
        abbreviation: "PA"
    },
    {
        name: "Puerto Rico",
        abbreviation: "PR"
    },
    {
        name: "Rhode Island",
        abbreviation: "RI"
    },
    {
        name: "South Carolina",
        abbreviation: "SC"
    },
    {
        name: "South Dakota",
        abbreviation: "SD"
    },
    {
        name: "Tennessee",
        abbreviation: "TN"
    },
    {
        name: "Texas",
        abbreviation: "TX"
    },
    {
        name: "Utah",
        abbreviation: "UT"
    },
    {
        name: "Vermont",
        abbreviation: "VT"
    },
    {
        name: "Virgin Islands",
        abbreviation: "VI"
    },
    {
        name: "Virginia",
        abbreviation: "VA"
    },
    {
        name: "Washington",
        abbreviation: "WA"
    },
    {
        name: "West Virginia",
        abbreviation: "WV"
    },
    {
        name: "Wisconsin",
        abbreviation: "WI"
    },
    {
        name: "Wyoming",
        abbreviation: "WY"
    }
];

// EXTERNAL MODULE: ./src/components/Input/index.ts + 1 modules
var Input = __webpack_require__(2666);
// EXTERNAL MODULE: ./src/utils/constants/index.ts
var constants = __webpack_require__(3329);
// EXTERNAL MODULE: ./src/redux/actions/leads.ts
var leads = __webpack_require__(5406);
;// CONCATENATED MODULE: ./src/components/SearchFilters/WhereBox.tsx












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
const WhereBox = ({ setSearchParams , handleRemoveQuery , id  })=>{
    const { colorMode  } = (0,react_.useColorMode)();
    const { formData  } = (0,external_react_redux_.useSelector)((state)=>state.generals
    );
    const { 0: selectedComparator , 1: setSelectedComparator  } = (0,external_react_.useState)(comparators[0]);
    const { 0: property , 1: setProperty  } = (0,external_react_.useState)();
    const { 0: values1 , 1: setValues  } = (0,external_react_.useState)();
    const { 0: type , 1: setType  } = (0,external_react_.useState)("");
    const { 0: selectAll , 1: setSelectAll  } = (0,external_react_.useState)(false);
    const { 0: loadingPropertyValues , 1: setLoadingPropertyValues  } = (0,external_react_.useState)(false);
    const { 0: allProperties , 1: setAllProperties  } = (0,external_react_.useState)([]);
    const { 0: allValues , 1: setAllValues  } = (0,external_react_.useState)([]);
    const { 0: searchPropertyValues , 1: setSearchPropertyValues  } = (0,external_react_.useState)([]);
    const { 0: searchInput , 1: setSearchInput  } = (0,external_react_.useState)("");
    const { 0: searchValueInput , 1: setSearchValueInput  } = (0,external_react_.useState)("");
    const onCancel = ()=>{
        setValues("");
        setSearchPropertyValues([]);
        setProperty(undefined);
        handleRemoveQuery(id);
    };
    const renderLoaderGif = ()=>{
        return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                src: loader/* default.src */.Z.src,
                mx: "auto",
                alt: "loader gif",
                width: 20,
                height: 20
            })
        }));
    };
    const quikInfluenceProperties = ()=>formData.filter((data)=>data.status === "active" && !constants/* formDataRelatedToSpecificUser.includes */._r.includes(data.name)
        ).map((data)=>({
                label: data.name,
                value: data.name,
                type: "dataType" in data.meta ? data.meta.dataType : data.meta.type,
                key: data.id
            })
        )
    ;
    (0,external_react_.useEffect)(()=>{
        setAllProperties(quikInfluenceProperties());
    }, []);
    const handlePropertyClick = async (field)=>{
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
    const renderValues = (values)=>{
        if (Array.isArray(values)) {
            //if values is more than 10, truncate
            if (values.length > 20) {
                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                    children: [
                        values.slice(0, 10).map((value)=>`${value}, `
                        ),
                        "....,",
                        values.slice(values.length - 10).map((value)=>`${value}, `
                        )
                    ]
                }));
            }
            return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                children: values.map((value)=>`${value}, `
                )
            }));
        }
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
            children: [
                " ",
                values,
                " "
            ]
        }));
    };
    const handlePropertyValues = async (e, key)=>{
        e.stopPropagation();
        const target = e.target;
        const { checked , value  } = target;
        if (key) {
            if (checked) {
                setValues((_key)=>[
                        ..._key,
                        key
                    ]
                );
            } else {
                setValues((_key)=>_key.filter((a)=>a !== key
                    )
                );
                setSelectAll(false);
            }
        } else {
            setValues(value);
            if (property) {
                setLoadingPropertyValues(true);
                property.value = value;
                const res = await (0,leads/* fetchPropertyValues */.$v)(property);
                if (res) {
                    setLoadingPropertyValues(false);
                    setSearchPropertyValues(res.data.data.propertyValues);
                }
            }
        }
    };
    const handleSelectAll = (e)=>{
        e.stopPropagation();
        const target = e.target;
        const checked = target.checked;
        const keys = STATES.map((value)=>value.abbreviation
        );
        checked && setValues(keys);
        setSelectAll(checked);
    };
    const handlePropertySearch = (e)=>{
        const searchValue = e.target.value;
        setSearchInput(searchValue);
        const updatedProperties = quikInfluenceProperties().filter((a)=>{
            if (a.label.toLowerCase().includes(searchValue.toLowerCase())) {
                return a;
            }
        });
        setAllProperties(updatedProperties);
    };
    const handleValueSearch = (e)=>{
        const searchValue = e.target.value;
        setSearchValueInput(searchValue);
        const updatedSearchValues = STATES.filter((a)=>{
            if (a.name.toLowerCase().includes(searchValue.toLowerCase())) {
                return a;
            }
        });
        setAllValues(updatedSearchValues);
    };
    (0,external_react_.useEffect)(()=>{
        setSearchParams((params)=>params.map((param)=>param.id === id ? {
                    ...param,
                    property,
                    values: values1,
                    comparator: selectedComparator.key
                } : param
            )
        );
    }, [
        values1,
        selectedComparator
    ]);
    //Render value inputs depending on the type of search property field dataname
    const renderValueInput = ()=>{
        //When searching for state or city, render checkbox.
        if (property && (property.label.toLowerCase() === "city" || property.label.toLowerCase() === "state" || property.label.toLowerCase() === "gender")) {
            const isGender = property.label.toLowerCase() === "gender";
            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    !isGender && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        padding: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                icon: free_solid_svg_icons_.faSearch,
                                style: {
                                    margin: "auto 5px"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                value: searchValueInput,
                                onChange: handleValueSearch,
                                border: "none",
                                fontSize: "xl",
                                fontStyle: "italic",
                                placeholder: "Search"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuDivider, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuGroup, {
                        title: "All Values",
                        fontSize: "xl",
                        px: 2,
                        children: [
                            !isGender && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.CheckboxGroup, {
                                colorScheme: "brand",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Checkbox, {
                                        ml: 3,
                                        size: "lg",
                                        isChecked: selectAll,
                                        onChange: (e)=>handleSelectAll(e)
                                        ,
                                        fontSize: "xl",
                                        children: "Select All"
                                    }),
                                    allValues.map((state)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                                            mx: "3",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Checkbox, {
                                                size: "lg",
                                                // value={propertyValue.key}
                                                isChecked: values1 ? values1.includes(state.abbreviation) : false,
                                                onChange: (e)=>handlePropertyValues(e, state.abbreviation)
                                                ,
                                                fontSize: "xl",
                                                children: state.name
                                            })
                                        }, state.abbreviation)
                                    )
                                ]
                            }),
                            isGender && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: allValues.map((gender)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                        onClick: ()=>setValues(gender.abbreviation)
                                        ,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            children: gender.name
                                        })
                                    }, gender.name)
                                )
                            })
                        ]
                    })
                ]
            }));
        }
        switch(type){
            case "string":
            case "date":
                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                    padding: 6,
                    flexDirection: "column",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Input/* TextInput */.o, {
                            type: type,
                            value: values1,
                            handleChange: handlePropertyValues,
                            label: "Enter Search Value",
                            placeholder: "Search Value",
                            TextInputProps: {
                                padding: "0.4rem"
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuDivider, {}),
                                loadingPropertyValues && renderLoaderGif(),
                                searchPropertyValues.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: searchPropertyValues.map((propVal)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                            onClick: ()=>setValues(propVal.value)
                                            ,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                children: propVal.value
                                            })
                                        }, propVal.value)
                                    )
                                })
                            ]
                        })
                    ]
                }));
            default:
                break;
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        width: "full",
        mt: 6,
        bgColor: colorConstants/* dashboardColor */.o5[colorMode],
        py: 2,
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "xl",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                alignItems: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontSize: "xl",
                        mr: "4",
                        mx: "2",
                        children: "where"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Menu, {
                                children: ({ isOpen  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                                                isActive: isOpen,
                                                as: react_.Button,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                    fontStyle: "italic",
                                                    fontSize: "xl",
                                                    px: "2",
                                                    border: `1px solid ${colorConstants/* borderThemeColor */.uH[colorMode]}`,
                                                    children: !property?.label ? "Select user property..." : property.label
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                                                width: "500px",
                                                maxH: "240px",
                                                overflow: "scroll",
                                                fontSize: "xl",
                                                px: 2,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                                icon: free_solid_svg_icons_.faSearch,
                                                                style: {
                                                                    margin: "auto 5px"
                                                                }
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                                                onChange: handlePropertySearch,
                                                                value: searchInput,
                                                                border: "none",
                                                                fontSize: "xl",
                                                                fontStyle: "italic",
                                                                placeholder: "Search"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuDivider, {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuGroup, {
                                                        title: "Quik influence fields",
                                                        fontSize: "xl",
                                                        children: allProperties.map((field)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                                onClick: ()=>handlePropertyClick(field)
                                                                ,
                                                                textTransform: "capitalize",
                                                                children: field.label.replace(/([a-z])([A-Z])/g, "$1 $2")
                                                            }, field.key)
                                                        )
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                            }),
                            property?.label && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Menu, {
                                        children: ({ isOpen  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                                                        isActive: isOpen,
                                                        as: react_.Button,
                                                        mx: 4,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                            fontSize: "xl",
                                                            px: "2",
                                                            border: `1px solid ${colorConstants/* borderThemeColor */.uH[colorMode]}`,
                                                            children: selectedComparator.label
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuList, {
                                                        overflow: "scroll",
                                                        fontSize: "xl",
                                                        px: 2,
                                                        children: comparators.map((comparator)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                                onClick: ()=>setSelectedComparator(comparator)
                                                                ,
                                                                children: comparator.label
                                                            }, comparator.key)
                                                        )
                                                    })
                                                ]
                                            })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Menu, {
                                        children: ({ isOpen  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                                                        isActive: isOpen,
                                                        as: react_.Button,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                            fontStyle: "italic",
                                                            fontSize: "xl",
                                                            px: "2",
                                                            border: `1px solid ${colorConstants/* borderThemeColor */.uH[colorMode]}`,
                                                            children: !values1 || !values1.length ? "Enter value(s)..." : renderValues(values1)
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                                                        padding: 0,
                                                        width: "500px",
                                                        maxH: "240px",
                                                        overflow: "scroll",
                                                        fontSize: "xl",
                                                        children: [
                                                            renderValueInput(),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                                as: "div",
                                                                position: "sticky",
                                                                bottom: 0,
                                                                zIndex: 90,
                                                                bg: "white",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuDivider, {})
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                as: "div",
                cursor: "pointer",
                onClick: onCancel,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                    icon: free_solid_svg_icons_.faTimes,
                    style: {
                        margin: "auto 5px"
                    }
                })
            })
        ]
    }));
};
/* harmony default export */ const SearchFilters_WhereBox = (WhereBox);

// EXTERNAL MODULE: ./src/components/SkeletonLoaders/index.tsx
var SkeletonLoaders = __webpack_require__(9130);
// EXTERNAL MODULE: ./src/modules/Leads/LeadsDataPoint.tsx
var LeadsDataPoint = __webpack_require__(9889);
;// CONCATENATED MODULE: ./src/modules/Search/SearchResults.tsx




const SearchResults = ({ leads , loading  })=>{
    return loading ? /*#__PURE__*/ jsx_runtime_.jsx(SkeletonLoaders/* SearchPageLoader */.kA, {}) : /*#__PURE__*/ jsx_runtime_.jsx(LeadsDataPoint/* default */.Z, {
        totalCount: leads?.meta?.totalCount,
        filteredCount: leads?.meta?.filteredCount,
        malecount: leads?.meta?.malecount,
        femalecount: leads?.meta?.femalecount
    });
};
/* harmony default export */ const Search_SearchResults = (SearchResults);

;// CONCATENATED MODULE: ./src/modules/Search/SearchPage.tsx










const SearchPage = ()=>{
    const { colorMode  } = (0,react_.useColorMode)();
    const { formData  } = (0,external_react_redux_.useSelector)((state)=>state.generals
    );
    const { allLeads , loading  } = (0,external_react_redux_.useSelector)((state)=>state.leads
    );
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { 0: searchParams , 1: setSearchParams  } = (0,external_react_.useState)([
        {
            id: 1
        }
    ]);
    const { 0: showResults , 1: setShowResults  } = (0,external_react_.useState)(false);
    const handleAddQuery = ()=>{
        setSearchParams((params)=>[
                ...params,
                {
                    id: params[params.length - 1].id + 1
                }
            ]
        );
    };
    const handleRemoveQuery = (id)=>{
        if (searchParams.length < 2) return;
        setSearchParams((params)=>params.filter((param)=>param.id !== id
            )
        );
    };
    const isDisabled = ()=>{
    // searchParams[searchParams.length-1]
    };
    const applySearch = ()=>{
        const filters = {};
        //populate filters
        formData.filter((data)=>data.status === "active" && !constants/* formDataRelatedToSpecificUser.includes */._r.includes(data.name)
        ).forEach((data)=>{
            filters[data.name] = {};
        });
        // Group all similar properties & signs into arrays and do a full text match for now
        searchParams.forEach((searchParam)=>{
            const { property , values , comparator  } = searchParam;
            if (property && values) {
                const { label  } = property;
                if (Object.keys(filters[label]).length && comparator in filters[label]) {
                    if (Array.isArray(values)) {
                        filters[label][comparator].push(...values);
                    } else {
                        filters[label][comparator].push(values);
                    }
                } else {
                    filters[label][comparator] = Array.isArray(values) ? values : [
                        values
                    ];
                }
            }
        });
        setShowResults(true);
        dispatch((0,leads/* searchAllLeads */.EI)({
            filters
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                width: "full",
                alignItems: "center",
                justify: "space-between",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    fontWeight: "600",
                    fontSize: "24px",
                    children: "Search Leads"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                w: "80%",
                p: 6,
                marginTop: 10,
                bg: colorConstants/* basicTheme */.We[colorMode],
                wrap: "wrap",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        textAlign: "left",
                        fontSize: "2xl",
                        fontWeight: "medium",
                        children: "Search users based on their properties"
                    }),
                    searchParams.map((params, index)=>/*#__PURE__*/ jsx_runtime_.jsx(SearchFilters_WhereBox, {
                            setSearchParams: setSearchParams,
                            handleRemoveQuery: handleRemoveQuery,
                            id: params.id
                        }, index)
                    ),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        width: "full",
                        mt: 4,
                        justifyContent: "flex-end",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                            onClick: handleAddQuery,
                            variant: "gray",
                            disabled: false,
                            fontSize: "sm",
                            py: 1,
                            px: 4,
                            width: "",
                            children: "Add query"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                justifyContent: "flex-end",
                width: "80%",
                mt: 6,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                    width: "",
                    onClick: applySearch,
                    fontSize: "md",
                    py: 4,
                    px: 10,
                    children: "Apply Search"
                })
            }),
            showResults && /*#__PURE__*/ jsx_runtime_.jsx(Search_SearchResults, {
                leads: allLeads,
                loading: loading
            })
        ]
    }));
};
/* harmony default export */ const Search_SearchPage = (SearchPage);

;// CONCATENATED MODULE: ./src/modules/Search/sideBarOption.ts

const searchMenu = {
    name: 'Search',
    icon: free_solid_svg_icons_.faSearch,
    path: '/dashboard/search',
    order: 5,
    permission: [],
    isShown: true,
    isActive: false,
    child: []
};

;// CONCATENATED MODULE: ./src/modules/Search/index.ts



/* harmony default export */ const Search = (Search_SearchPage);


/***/ }),

/***/ 7586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xd": () => (/* binding */ getSingleCampaign),
/* harmony export */   "_z": () => (/* binding */ getCampaigns),
/* harmony export */   "Rp": () => (/* binding */ getFirst10Campaigns),
/* harmony export */   "Mu": () => (/* binding */ getCampaignLeads),
/* harmony export */   "hm": () => (/* binding */ updateCampaign),
/* harmony export */   "Zl": () => (/* binding */ archiveCampaign)
/* harmony export */ });
/* unused harmony exports loading, doneloading, setSMSCampaign */
/* harmony import */ var utils_apiHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(662);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3329);
/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8081);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1356);




const loading = ()=>async (dispatch)=>{
        dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__/* .CAMPAIGNS_LOADING */ .pw,
            payload: true
        });
    }
;
const doneloading = ()=>async (dispatch)=>{
        dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__/* .CAMPAIGNS_LOADING */ .pw,
            payload: false
        });
    }
;
const getSingleCampaign = (campaignId, campaignData)=>async (dispatch)=>{
        dispatch(loading());
        try {
            let campaign = campaignData;
            if (!campaign) {
                const response = await utils_helpers__WEBPACK_IMPORTED_MODULE_1__/* .axiosInstance.get */ .be.get(`/users/campaign/${campaignId}`);
                campaign = response.data.data;
            }
            dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__/* .GET_SINGLE_CAMPAIGN */ .t8,
                payload: campaign
            });
        } catch (error) {
            const errorMessage = (0,utils_apiHelpers__WEBPACK_IMPORTED_MODULE_3__/* .errorParser */ .LT)(error);
            dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__/* .CAMPAIGNS_ERROR */ .S0,
                payload: errorMessage
            });
        } finally{
            dispatch(doneloading());
        }
    }
;
const getCampaigns = (pageNumber = "1", pageSize = utils_constants__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_PAGE_SIZE */ .L8)=>async (dispatch)=>{
        dispatch(loading());
        try {
            const response = await utils_helpers__WEBPACK_IMPORTED_MODULE_1__/* .axiosInstance.get */ .be.get(`/users/campaigns?page=${pageNumber}&pageSize=${pageSize}`);
            const campaigns = response.data.data;
            dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__/* .CAMPAIGNS */ .hJ,
                payload: campaigns
            });
        } catch (error) {
            const errorMessage = (0,utils_apiHelpers__WEBPACK_IMPORTED_MODULE_3__/* .errorParser */ .LT)(error);
            dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__/* .CAMPAIGNS_ERROR */ .S0,
                payload: errorMessage
            });
        } finally{
            dispatch(doneloading());
        }
    }
;
const getFirst10Campaigns = ()=>async (dispatch)=>{
        const response = await utils_helpers__WEBPACK_IMPORTED_MODULE_1__/* .axiosInstance.get */ .be.get(`/users/campaigns?page=${1}&pageSize=${10}`);
        const campaigns = response.data.data.rows?.map((data)=>({
                name: data.name,
                path: `/campaign/${data.id}`
            })
        );
        dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__/* .FIRST_TEN_CAMPAIGNS */ .B5,
            payload: campaigns
        });
    }
;
const getCampaignLeads = (campaignId, page, pageSize = utils_constants__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_PAGE_SIZE */ .L8, sortBy = "createdAt", filters = {})=>async (dispatch)=>{
        try {
            dispatch(loading());
            const response = await utils_helpers__WEBPACK_IMPORTED_MODULE_1__/* .axiosInstance.get */ .be.get(`/users/leads/${campaignId}?sortField=${sortBy}&orderBy=ASC&pageSize=${pageSize}&${page ? `page=${page}` : ""}`, {
                params: filters
            });
            const { rows , count , currentPage , recieved , totalPages  } = response.data.data;
            dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__/* .GET_CAMPAIGN_LEADS */ .$q,
                payload: {
                    leads: {
                        data: rows,
                        meta: {
                            count,
                            recieved,
                            totalPages,
                            currentPage
                        }
                    },
                    campaignId
                }
            });
        } catch (error) {
            const errorMessage = (0,utils_apiHelpers__WEBPACK_IMPORTED_MODULE_3__/* .errorParser */ .LT)(error);
            dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__/* .CAMPAIGNS_ERROR */ .S0,
                payload: errorMessage
            });
        } finally{
            dispatch(doneloading());
        }
    }
;
const updateCampaign = (campaignId, data)=>async (dispatch)=>{
        await utils_helpers__WEBPACK_IMPORTED_MODULE_1__/* .axiosInstance.put */ .be.put(`/users/campaign/${campaignId}`, data);
        dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_CAMPAIGN */ .tY,
            payload: {
                campaignId,
                data
            }
        });
    }
;
const archiveCampaign = (campaignId)=>async (dispatch)=>{
        await utils_helpers__WEBPACK_IMPORTED_MODULE_1__/* .axiosInstance.put */ .be.put(`/users/campaign/${campaignId}`, {
            status: "archive"
        });
        dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_2__/* .ARCHIVE_CAMPAIGN */ .kS,
            payload: campaignId
        });
    }
;
const setSMSCampaign = (campaign)=>async (dispatch)=>{
        dispatch({
            type: SET_SMS_CAMPAIGN,
            payload: campaign
        });
    }
;


/***/ }),

/***/ 5406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oC": () => (/* binding */ getAllLeads),
/* harmony export */   "EI": () => (/* binding */ searchAllLeads),
/* harmony export */   "$v": () => (/* binding */ fetchPropertyValues)
/* harmony export */ });
/* unused harmony exports leadsLoading, leadsDoneLoading */
/* harmony import */ var utils_apiHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(662);
/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1356);



const leadsLoading = ()=>async (dispatch)=>{
        dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__/* .LEADS_LOADING */ .Vk,
            payload: true
        });
    }
;
const leadsDoneLoading = ()=>async (dispatch)=>{
        dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__/* .LEADS_LOADING */ .Vk,
            payload: false
        });
    }
;
const getAllLeads = (params, filters = {})=>async (dispatch)=>{
        dispatch(leadsLoading());
        const isAllowed = (0,utils_helpers__WEBPACK_IMPORTED_MODULE_0__/* .isAdmin */ .GJ)();
        try {
            const query = (0,utils_helpers__WEBPACK_IMPORTED_MODULE_0__/* .getQueryString */ .Wz)({
                ...params
            });
            let response;
            if (filters?.filters && filters?.filters.pageType === "LEADS_DATA_POINTS" && !isAllowed) {
                const url = `/users/leads-data-points?${query}`;
                delete filters.filters.pageType;
                response = await utils_helpers__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.get */ .be.get(url, {
                    params: filters
                });
                dispatch({
                    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__/* .LEADS */ .vi,
                    payload: {
                        data: [],
                        resType: "LEADS_DATA_POINTS",
                        meta: response.data.data
                    }
                });
            } else {
                const url = `/users/leads?${query}`;
                response = await utils_helpers__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.get */ .be.get(url, {
                    params: filters
                });
                const { rows , count , currentPage , recieved , totalPages  } = response.data.data;
                dispatch({
                    type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__/* .LEADS */ .vi,
                    payload: {
                        data: rows,
                        resType: "ALL_LEADS",
                        meta: {
                            count,
                            currentPage,
                            recieved,
                            totalPages
                        }
                    }
                });
            }
        } catch (error) {
            const errorMessage = (0,utils_apiHelpers__WEBPACK_IMPORTED_MODULE_2__/* .errorParser */ .LT)(error);
            dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__/* .LEADS_ERROR */ .$W,
                payload: {
                    errorMessage,
                    resType: !isAllowed ? "LEADS_DATA_POINTS" : "ALL_LEADS"
                }
            });
        } finally{
            dispatch(leadsDoneLoading());
        }
    }
;
const searchAllLeads = (filters = {})=>async (dispatch)=>{
        dispatch(leadsLoading());
        const isAllowed = (0,utils_helpers__WEBPACK_IMPORTED_MODULE_0__/* .isAdmin */ .GJ)();
        try {
            let response;
            const url = `/users/leads-search-all`;
            response = await utils_helpers__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.get */ .be.get(url, {
                params: filters
            });
            dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__/* .LEADS */ .vi,
                payload: {
                    data: [],
                    resType: "LEADS_DATA_POINTS",
                    meta: {
                        totalCount: response.data.data.totalCount,
                        ...response.data.data.result
                    }
                }
            });
        } catch (error) {
            const errorMessage = (0,utils_apiHelpers__WEBPACK_IMPORTED_MODULE_2__/* .errorParser */ .LT)(error);
            dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__/* .LEADS_ERROR */ .$W,
                payload: {
                    errorMessage,
                    resType: "LEADS_DATA_POINTS"
                }
            });
        } finally{
            dispatch(leadsDoneLoading());
        }
    }
;
const fetchPropertyValues = async (field)=>{
    try {
        let response;
        const url = `/users/get-property-values`;
        response = await utils_helpers__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.get */ .be.get(url, {
            params: field
        });
        return response;
    } catch (err) {
        const errorMessage = (0,utils_apiHelpers__WEBPACK_IMPORTED_MODULE_2__/* .errorParser */ .LT)(err);
        console.log('errorMessage  >>> ', errorMessage);
    }
};


/***/ }),

/***/ 8635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ getUser)
/* harmony export */ });
/* unused harmony export getState */
const getState = (state)=>state.auth
;
const getUser = (state)=>state.auth.user
;


/***/ }),

/***/ 7525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N2": () => (/* binding */ PAID),
/* harmony export */   "up": () => (/* binding */ UNPAID),
/* harmony export */   "o1": () => (/* binding */ OPEN),
/* harmony export */   "m$": () => (/* binding */ CLOSED)
/* harmony export */ });
/* unused harmony exports DRIP, DIRECT, SCHEDULED */
const PAID = 'PAID';
const UNPAID = 'UNPAID';
const DRIP = 'DRIP';
const DIRECT = 'DIRECT';
const SCHEDULED = "SCHEDULED";
const OPEN = "OPEN";
const CLOSED = "CLOSED";


/***/ }),

/***/ 5868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ stateNames)
/* harmony export */ });
const stateNames = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
];


/***/ })

};
;