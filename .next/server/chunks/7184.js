"use strict";
exports.id = 7184;
exports.ids = [7184];
exports.modules = {

/***/ 7184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_LeadsPageFilters)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./src/utils/constants/colorConstants.ts
var colorConstants = __webpack_require__(3814);
// EXTERNAL MODULE: ./src/components/Button/index.ts + 1 modules
var Button = __webpack_require__(2341);
// EXTERNAL MODULE: ./src/components/Input/index.ts + 1 modules
var Input = __webpack_require__(2666);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
// EXTERNAL MODULE: external "query-string"
var external_query_string_ = __webpack_require__(9103);
var external_query_string_default = /*#__PURE__*/__webpack_require__.n(external_query_string_);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/DropdownSelect/index.tsx
var DropdownSelect = __webpack_require__(7030);
;// CONCATENATED MODULE: ./src/components/LeadsPageFilters/constants.ts
const FILTER_SEARCH_TYPE = {
    FUZZY_TEXT_SEARCH: 'FUZZY_TEXT_SEARCH',
    FULL_TEXT_SEARCH: 'FULL_TEXT_SEARCH',
    OPTIONS_SEARCH: 'OPTIONS_SEARCH',
    INTEGER_SEARCH: 'INTEGER_SEARCH',
    INTEGER_GREATER_THAN_SEARCH: 'INTEGER_GREATER_THAN_SEARCH',
    INTEGER_LESS_THAN_SEARCH: 'INTEGER_LESS_THAN_SEARCH',
    INTEGER_RANGE_SEARCH: 'INTEGER_RANGE_SEARCH'
};

;// CONCATENATED MODULE: ./src/components/LeadsPageFilters/filters.tsx

const allFilters = [
    {
        name: 'Email',
        type: FILTER_SEARCH_TYPE.FULL_TEXT_SEARCH,
        key: 'email',
        id: 'email'
    },
    {
        name: 'First name',
        type: FILTER_SEARCH_TYPE.FUZZY_TEXT_SEARCH,
        key: 'firstName',
        id: 'firstName'
    },
    {
        name: 'Last name',
        type: FILTER_SEARCH_TYPE.FUZZY_TEXT_SEARCH,
        key: 'lastName',
        id: 'lastName'
    },
    {
        name: 'Phone Number',
        type: FILTER_SEARCH_TYPE.FUZZY_TEXT_SEARCH,
        key: 'phone',
        id: 'phone'
    },
    {
        name: 'Address',
        type: FILTER_SEARCH_TYPE.FUZZY_TEXT_SEARCH,
        key: 'address',
        id: 'address'
    },
    {
        name: 'City',
        type: FILTER_SEARCH_TYPE.FUZZY_TEXT_SEARCH,
        key: 'city',
        id: 'city'
    },
    {
        name: 'Age',
        type: FILTER_SEARCH_TYPE.INTEGER_SEARCH,
        key: 'age',
        id: 'age'
    },
    {
        name: 'Age greater than',
        type: FILTER_SEARCH_TYPE.INTEGER_GREATER_THAN_SEARCH,
        key: 'age',
        id: 'age_greater'
    },
    {
        name: 'Age less than',
        type: FILTER_SEARCH_TYPE.INTEGER_LESS_THAN_SEARCH,
        key: 'age',
        id: 'age_less'
    },
    // {
    //     name: 'Age is between',
    //     type: FILTER_SEARCH_TYPE.INTEGER_RANGE_SEARCH,
    //     key: 'age',
    //     id: 'age_between'
    // },
    {
        name: 'State',
        type: FILTER_SEARCH_TYPE.FUZZY_TEXT_SEARCH,
        key: 'state',
        id: 'state'
    },
    {
        name: 'Zip Code',
        type: FILTER_SEARCH_TYPE.FULL_TEXT_SEARCH,
        key: 'postalCode',
        id: 'postalCode'
    },
    {
        name: 'Gender',
        type: FILTER_SEARCH_TYPE.OPTIONS_SEARCH,
        key: 'gender',
        options: [
            {
                label: 'Male',
                value: 'male'
            },
            {
                label: 'Female',
                value: 'female'
            },
            {
                label: 'Other',
                value: 'other'
            }, 
        ],
        id: 'gender'
    }
];

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/LeadsPageFilters/index.tsx













const FilterValue = ({ selectedFilter , handleFilterValueChange , filterIndex  })=>{
    if (selectedFilter.type === FILTER_SEARCH_TYPE.OPTIONS_SEARCH) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(DropdownSelect/* default */.Z, {
            onChange: (e)=>handleFilterValueChange(e, selectedFilter, filterIndex)
            ,
            options: selectedFilter.options,
            placeholder: "Filter",
            selected: selectedFilter.value ?? ""
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(Input/* TextInput */.o, {
        name: selectedFilter.name,
        handleChange: (e)=>handleFilterValueChange(e, selectedFilter, filterIndex)
        ,
        type: selectedFilter.type === FILTER_SEARCH_TYPE.FULL_TEXT_SEARCH || selectedFilter.type === FILTER_SEARCH_TYPE.FUZZY_TEXT_SEARCH ? "text" : "number",
        placeholder: selectedFilter.name,
        value: selectedFilter.value,
        TextInputProps: {
            padding: "0.4rem",
            fontSize: ""
        }
    }));
};
const LeadsPageFilters = ({ setAllSelectedFilters , pageType  })=>{
    const { colorMode  } = (0,react_.useColorMode)();
    const router = (0,router_.useRouter)();
    const emptyFilter = {
        type: "",
        options: [],
        name: "",
        value: "",
        key: "",
        id: ""
    };
    const filters1 = {
        fuzzy: {},
        match: {},
        integerGreater: {},
        integerLess: {},
        pageType
    };
    const { 0: showAddFilter , 1: setShowAddFilter  } = (0,external_react_.useState)(false);
    const { 0: selectedFilters1 , 1: setSelectedFilters  } = (0,external_react_.useState)([
        emptyFilter
    ]);
    const { 0: filterOptions , 1: setFilterOptions  } = (0,external_react_.useState)([
        {
            label: "",
            value: "",
            disabled: false
        }
    ]);
    const allFilterOptions = allFilters.map((filter)=>({
            label: filter.name,
            value: filter.id,
            disabled: false
        })
    );
    (0,external_react_.useEffect)(()=>{
        setFilterOptions(allFilterOptions);
    }, []);
    /**
   * TODO: THIS ISN'T OPTIMAL. NEED TO OPTIMIZE
   */ (0,external_react_.useEffect)(()=>{
        if (Object.keys(selectedFilters1).length && selectedFilters1[0].value) {
            const seen = [];
            selectedFilters1.forEach((filter)=>{
                seen.push(filter.key);
            });
            setFilterOptions((_filterOptions)=>_filterOptions.map((filter)=>seen.includes(filter.value) ? {
                        ...filter,
                        disabled: true
                    } : {
                        ...filter,
                        disabled: false
                    }
                )
            );
        }
    }, [
        selectedFilters1
    ]);
    const addFilter = ()=>{
        setSelectedFilters((filters)=>[
                ...filters,
                emptyFilter
            ]
        );
        setShowAddFilter(false);
    };
    const handleFilterKeyChange = (e, selectedFilter)=>{
        const selectedFilterObject = allFilters.find((val)=>val.id === e.target.value
        );
        if (!selectedFilterObject) return;
        selectedFilterObject.value = "";
        setSelectedFilters((selectedFilters)=>selectedFilters.map((filters)=>filters === selectedFilter ? selectedFilterObject : filters
            )
        );
        setShowAddFilter(false);
    };
    const handleFilterValueChange = (e, selectedFilter, filterIndex)=>{
        const target = e.target;
        const value = target.value;
        setSelectedFilters((selectedFilters)=>selectedFilters.map((filters, index)=>filters === selectedFilter ? {
                    ...filters,
                    value: value
                } : filters
            )
        );
        setShowAddFilter(true);
    };
    const removeFilter = (filterToRemove)=>{
        setSelectedFilters((selectedFilters)=>selectedFilters.filter((filter)=>filter !== filterToRemove
            )
        );
    };
    const handleClearFilters = ()=>{
        setSelectedFilters([
            emptyFilter
        ]);
        setFilterOptions(allFilterOptions);
        const params = router.query;
        params.page = "1";
        router.push(`?${external_query_string_default().stringify(params)}`);
        setAllSelectedFilters(filters1);
    };
    const applyFilter = ()=>{
        selectedFilters1.forEach((selectedFilter)=>{
            const { type , value , key  } = selectedFilter;
            if (value) {
                switch(type){
                    case FILTER_SEARCH_TYPE.FUZZY_TEXT_SEARCH:
                        filters1.fuzzy[key] = value;
                        break;
                    case FILTER_SEARCH_TYPE.INTEGER_SEARCH:
                    case FILTER_SEARCH_TYPE.OPTIONS_SEARCH:
                    case FILTER_SEARCH_TYPE.FULL_TEXT_SEARCH:
                        filters1.match[key] = value;
                        break;
                    case FILTER_SEARCH_TYPE.INTEGER_GREATER_THAN_SEARCH:
                        filters1.integerGreater[key] = value;
                        break;
                    case FILTER_SEARCH_TYPE.INTEGER_LESS_THAN_SEARCH:
                        filters1.integerLess[key] = value;
                        break;
                    default:
                        break;
                }
            }
        });
        const params = router.query;
        params.page = "1";
        router.push(`?${external_query_string_default().stringify(params)}`);
        setAllSelectedFilters(filters1);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        width: "350px",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                padding: "15px 20px",
                alignItems: "center",
                justifyContent: "space-between",
                w: "100%",
                bg: colorConstants/* basicTheme */.We[colorMode],
                borderRadius: "10px 10px 0px 0px",
                marginBottom: "7px",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        as: "h3",
                        fontSize: "16px",
                        color: colorConstants/* default.greyDark */.ZP.greyDark,
                        fontWeight: 500,
                        children: "Filter"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        as: "span",
                        color: colorConstants/* default.influenceRed */.ZP.influenceRed,
                        fontWeight: 500,
                        cursor: "pointer",
                        onClick: handleClearFilters,
                        children: "Clear"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                bg: colorConstants/* basicTheme */.We[colorMode],
                p: "12px",
                children: [
                    selectedFilters1.map((selectedFilter, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                            justifyContent: "flex-start",
                            width: "full",
                            my: 6,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    width: "45%",
                                    pr: 4,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(DropdownSelect/* default */.Z, {
                                        onChange: (e)=>handleFilterKeyChange(e, selectedFilter)
                                        ,
                                        options: filterOptions,
                                        placeholder: "Filter",
                                        noValue: selectedFilter?.type ? true : false,
                                        selected: selectedFilter?.type ? selectedFilter.id : ""
                                    })
                                }),
                                selectedFilter?.type && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            width: "45%",
                                            pr: 2,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(FilterValue, {
                                                selectedFilter: selectedFilter,
                                                handleFilterValueChange: handleFilterValueChange,
                                                filterIndex: index
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            as: "span",
                                            cursor: "pointer",
                                            margin: "auto",
                                            onClick: ()=>removeFilter(selectedFilter)
                                            ,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                                icon: free_solid_svg_icons_.faTimes,
                                                style: {
                                                    margin: "auto 5px"
                                                }
                                            })
                                        })
                                    ]
                                })
                            ]
                        }, index)
                    ),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        as: "div",
                        p: 3,
                        borderTop: "1px solid #ededed",
                        mt: 8,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                            onClick: showAddFilter ? addFilter : ()=>{},
                            as: showAddFilter ? "a" : "p",
                            cursor: showAddFilter ? "pointer" : "default",
                            color: showAddFilter ? "rgb(44 110 203)" : "rgb(140 145 150)",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                    icon: free_solid_svg_icons_.faPlus,
                                    style: {
                                        margin: "auto 5px"
                                    }
                                }),
                                "Add Filter"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        bgColor: colorMode === "light" ? colorConstants/* default.greyDarker */.ZP.greyDarker : colorConstants/* default.influenceRed */.ZP.influenceRed,
                        marginTop: "20px",
                        marginBottom: "25px",
                        type: "button",
                        onClick: applyFilter,
                        disabled: selectedFilters1[0]?.value ? false : true,
                        children: "Apply Filter"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_LeadsPageFilters = (LeadsPageFilters);


/***/ })

};
;