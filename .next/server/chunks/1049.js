"use strict";
exports.id = 1049;
exports.ids = [1049];
exports.modules = {

/***/ 1049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Campaigns_CreateCampaign)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./src/components/Button/index.ts + 1 modules
var Button = __webpack_require__(2341);
// EXTERNAL MODULE: ./src/components/DropdownSelect/index.tsx
var DropdownSelect = __webpack_require__(7030);
// EXTERNAL MODULE: ./src/components/Input/index.ts + 1 modules
var Input = __webpack_require__(2666);
// EXTERNAL MODULE: ./src/hooks/useForm.ts
var useForm = __webpack_require__(8091);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/utils/constants/colorConstants.ts
var colorConstants = __webpack_require__(3814);
// EXTERNAL MODULE: ./src/utils/constants/formConstants.ts
var formConstants = __webpack_require__(7525);
// EXTERNAL MODULE: ./src/utils/constants/regexConstants.ts
var regexConstants = __webpack_require__(5851);
;// CONCATENATED MODULE: ./src/utils/constants/formData/campaign.ts


/* harmony default export */ const campaign = ([
    {
        name: 'name',
        label: 'Campaign Name',
        errorMessage: 'Enter your campaign name',
        required: true,
        type: 'text',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'description',
        label: 'Campaign Description',
        errorMessage: 'Describe your campaign',
        required: true,
        type: 'text',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'status',
        label: 'Campaign Status',
        required: true,
        errorMessage: 'Select a campaign status',
        type: 'select',
        options: [
            {
                label: 'OPEN',
                value: formConstants/* OPEN */.o1
            },
            {
                label: 'CLOSED',
                value: formConstants/* CLOSED */.m$
            }, 
        ],
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'campaignDate',
        label: 'Campaign Start Date',
        errorMessage: 'Enter your campaign start date',
        required: true,
        type: 'date',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'paidType',
        label: 'Payment Type',
        errorMessage: 'Select payment type',
        required: true,
        type: 'select',
        options: [
            {
                label: 'Paid',
                value: formConstants/* PAID */.N2
            },
            {
                label: 'Unpaid',
                value: formConstants/* UNPAID */.up
            }, 
        ],
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'prices',
        label: 'Price',
        errorMessage: 'Enter your campaign price',
        type: 'amount',
        dependent: {
            name: 'paidType',
            value: 'PAID'
        }
    },
    // {
    //     name: 'type',
    //     label: 'Campaign Type',
    //     errorMessage: 'Enter your campaign type',
    //     required: true,
    //     disabled: true,
    //     type: 'multi-select',
    //     options: [
    //         { label: 'Direct', value: 'direct' },
    //     ],
    //     pattern: FREE_TEXT_REGEX,
    //     extraLabel: '(add as many as apply)'
    // },
    // {
    //     name: 'audience',
    //     label: 'Select Audience Interest',
    //     errorMessage: 'Enter your audience name',
    //     required: false,
    //     disabled: true,
    //     type: 'multi-select',
    //     options: [
    //         { label: 'Male', value: 'male' },
    //         { label: 'Female', value: 'female' },
    //         { label: 'Other', value: 'other' },],
    //     pattern: FREE_TEXT_REGEX,
    //     extraLabel: '(add as many as apply)'
    // },
    // {
    //     name: 'adSpend',
    //     label: 'Ad Spend',
    //     disabled: true,
    //     extraLabel: 'Select daily spending for your campaign',
    //     errorMessage: 'Enter your ad spend',
    //     required: true,
    //     type: 'range-selector',
    //     pattern: FREE_TEXT_REGEX,
    //     ranges: [
    //         {
    //             title: 'Spend per Day',
    //             min: 10,
    //             max: 1000,
    //             isMoney: true
    //         },
    //         {
    //             title: 'Number of days',
    //             min: 1,
    //             max: 365,
    //             isMoney: false
    //         },
    //     ]
    // },
    {
        name: 'formData',
        label: 'Select Form Fields',
        errorMessage: 'Enter your form fields',
        required: false,
        disabled: false,
        ranges: [],
        type: 'multi-select',
        options: [
            {
                label: 'Instagram Handle',
                value: 'instagramId'
            },
            {
                label: 'Tiktok Handle',
                value: 'tiktokHandle'
            },
            {
                label: 'Facebook Handle',
                value: 'facebookHandle'
            },
            {
                label: 'Twitter Handle',
                value: 'twitterHandle'
            }, 
        ],
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1,
        extraLabel: '(add as many as apply)'
    },
    {
        name: 'redirectUrl',
        label: 'Redirect Url',
        errorMessage: 'Enter a valid URL e.g: http://test.com/something',
        required: true,
        type: 'text',
        pattern: regexConstants/* URL_REGEX */.Wh
    },
    {
        name: 'banner',
        label: 'Campaign Banner',
        errorMessage: 'Upload campaign banner',
        required: true,
        type: 'image-upload',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    }, 
]);

// EXTERNAL MODULE: ./src/utils/constants/stateConstants.ts
var stateConstants = __webpack_require__(5868);
;// CONCATENATED MODULE: ./src/utils/constants/formData/campaignSMS.ts


/* harmony default export */ const campaignSMS = ([
    {
        number: 1,
        name: 'name',
        label: 'Campaign Name',
        errorMessage: 'Enter your campaign name',
        required: true,
        type: 'text',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        number: 2,
        name: 'description',
        label: 'Campaign Description',
        errorMessage: 'Describe your campaign',
        required: true,
        type: 'text',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        number: 3,
        name: 'campaignDate',
        label: 'Campaign Start Date',
        errorMessage: 'Enter your campaign start date',
        required: true,
        type: 'datetime-local',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        number: 4,
        name: 'audience',
        label: 'Audience',
        errorMessage: 'Select atleast one audience',
        required: false,
        disabled: false,
        type: 'multi-select',
        ranges: [],
        options: [
            {
                label: 'Sports ',
                value: 'sports'
            },
            {
                label: 'Tv Shows',
                value: 'tvshows'
            },
            {
                label: 'Animals',
                value: 'animals'
            }, 
        ],
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1,
        extraLabel: '(add as many as apply)'
    },
    {
        name: 'gender',
        label: 'Gender ',
        errorMessage: 'Select your gender',
        required: true,
        disabled: false,
        isChild: true,
        type: 'select',
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
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'age',
        label: 'Age ',
        errorMessage: 'Select your age',
        required: true,
        disabled: false,
        isChild: true,
        type: 'select',
        options: [
            {
                label: '18-25',
                value: '18-25'
            },
            {
                label: '25-35',
                value: '25-35'
            },
            {
                label: '35-50',
                value: '35-50'
            },
            {
                label: '50-71',
                value: '50-71'
            },
            {
                label: '71-100',
                value: '71-100'
            }, 
        ],
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'locations',
        label: 'Locations ',
        errorMessage: 'Add at least one location age',
        required: true,
        disabled: false,
        isChild: true,
        type: 'multi-select',
        options: stateConstants/* stateNames.reduce */.D.reduce((acc, curr)=>[
                ...acc,
                {
                    label: curr,
                    value: curr
                }
            ]
        , []),
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'leadTable',
        label: 'Display Results ',
        errorMessage: 'Add at least one location age',
        required: false,
        disabled: false,
        isChild: true,
        type: 'table',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        // number: 4,
        name: 'adSpend',
        label: 'Ad Spend',
        disabled: true,
        extraLabel: 'select daily spending for your campaign',
        errorMessage: 'Enter your ad spend',
        required: false,
        type: 'range-selector',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1,
        ranges: [
            {
                title: 'How many SMS Messages would you like to send?',
                min: 1,
                max: 1000,
                isMoney: false,
                rangeProps: {
                    maxW: '30rem'
                },
                rangeTitleProps: {
                    fontSize: 'md',
                    fontWeight: 'semibold'
                }
            }, 
        ]
    },
    {
        number: 5,
        name: 'message',
        label: 'SMS Message',
        errorMessage: 'enter the SMS Message',
        required: true,
        type: 'textarea',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'adImage',
        label: 'Add Ad Image',
        errorMessage: 'Add ad image',
        required: false,
        isChild: true,
        type: 'image-upload',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'adPreview',
        label: 'SMS Ad Preview',
        required: false,
        isChild: true,
        type: 'ad-preview',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        number: 6,
        name: 'phone',
        label: 'Send Test Ad',
        placeholder: 'Enter Phone Number',
        errorMessage: 'enter phone number',
        required: true,
        type: 'text',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        number: 7,
        name: 'submit',
        label: 'Submit Campaign',
        extralabel: 'We will review your campaign and a correspond charges and approval decision to you',
        required: false,
        type: 'submit',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    }, 
]);

;// CONCATENATED MODULE: ./src/utils/constants/formData/campaignEmail.ts


/* harmony default export */ const campaignEmail = ([
    {
        number: 1,
        name: 'name',
        label: 'Campaign Name',
        errorMessage: 'Enter your campaign name',
        required: true,
        type: 'text',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        number: 2,
        name: 'description',
        label: 'Campaign Description',
        errorMessage: 'Describe your campaign',
        required: true,
        type: 'text',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        number: 3,
        name: 'campaignDate',
        label: 'Campaign Start Date',
        errorMessage: 'Enter your campaign start date',
        required: true,
        type: 'datetime-local',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        number: 4,
        name: 'audience',
        label: 'Audience',
        errorMessage: 'Select atleast one audience',
        required: false,
        disabled: false,
        type: 'multi-select',
        options: [
            {
                label: 'Sports ',
                value: 'sports'
            },
            {
                label: 'Tv Shows',
                value: 'tvshows'
            },
            {
                label: 'Animals',
                value: 'animals'
            }, 
        ],
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1,
        extraLabel: '(add as many as apply)'
    },
    {
        name: 'gender',
        label: 'Gender ',
        errorMessage: 'Select your gender',
        required: true,
        disabled: false,
        isChild: true,
        type: 'select',
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
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'age',
        label: 'Age ',
        errorMessage: 'Select your age',
        required: true,
        disabled: false,
        isChild: true,
        type: 'select',
        options: [
            {
                label: '18-25',
                value: '18-25'
            },
            {
                label: '25-35',
                value: '25-35'
            },
            {
                label: '35-50',
                value: '35-50'
            },
            {
                label: '50-71',
                value: '50-71'
            },
            {
                label: '71-100',
                value: '71-100'
            }, 
        ],
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'locations',
        label: 'Locations ',
        errorMessage: 'Add at least one location',
        required: true,
        disabled: false,
        isChild: true,
        type: 'multi-select',
        options: stateConstants/* stateNames.reduce */.D.reduce((acc, curr)=>[
                ...acc,
                {
                    label: curr,
                    value: curr
                }
            ]
        , []),
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'leadTable',
        label: 'Display Results ',
        errorMessage: '',
        required: false,
        disabled: false,
        isChild: true,
        type: 'table',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        number: 5,
        name: 'message',
        label: 'Email Message',
        errorMessage: 'enter the Email Message',
        required: false,
        type: 'textarea',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        number: 6,
        name: 'email',
        label: 'Send Test Ad',
        placeholder: 'Enter Email Address',
        errorMessage: 'enter email address',
        required: true,
        type: 'text',
        pattern: regexConstants/* EMAIL_REFEX */.Vm
    },
    {
        number: 7,
        name: 'submit',
        label: 'Submit Campaign',
        extralabel: 'We will review your campaign and a correspond charges and approval decision to you',
        required: false,
        type: 'submit',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    }, 
]);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
;// CONCATENATED MODULE: ./src/utils/constants/formData/closeFriends.ts


/* harmony default export */ const closeFriends = ([
    {
        name: 'firstName',
        label: 'First Name',
        icon: free_solid_svg_icons_.faUser,
        errorMessage: 'Enter your First name',
        required: true,
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'lastName',
        label: 'Last Name',
        icon: free_solid_svg_icons_.faUser,
        errorMessage: 'Enter your last name',
        required: true,
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'phone',
        label: 'Phone Number',
        icon: free_solid_svg_icons_.faPhone,
        required: true,
        errorMessage: 'Enter your phone number',
        pattern: regexConstants/* PHONE_NUMBER_REGEX */.d0
    },
    {
        name: 'email',
        label: 'Your Email Address',
        icon: free_solid_svg_icons_.faMailBulk,
        errorMessage: 'Enter your address',
        required: true,
        pattern: regexConstants/* EMAIL_REFEX */.Vm
    },
    {
        name: 'instagramId',
        label: 'Your Instagram handle',
        icon: free_solid_svg_icons_.faAt,
        errorMessage: 'Enter your instagram handle',
        required: true,
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'facebookHandle',
        label: 'Your Facebook profile',
        icon: free_solid_svg_icons_.faAt,
        errorMessage: 'Enter your facebook profile',
        required: false,
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'tiktokHandle',
        label: 'Your Tiktok handle',
        icon: free_solid_svg_icons_.faAt,
        errorMessage: 'Enter your tiktok handle',
        required: false,
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'twitterHandle',
        label: 'Your twitter Handle',
        icon: free_solid_svg_icons_.faAt,
        errorMessage: 'Enter your twitter handle',
        required: false,
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'age',
        label: 'Age',
        icon: free_solid_svg_icons_.faUser,
        errorMessage: 'Please add your age',
        required: true,
        pattern: regexConstants/* NUMBER_REGEX */.qC
    }, 
]);

;// CONCATENATED MODULE: ./src/modules/Campaigns/CreateCampaign/MultiRangeSelector.tsx




const MultiRangeSelector = ({ label , error , extraLabel , labelProps , ranges ,  })=>{
    const { colorMode  } = (0,react_.useColorMode)();
    const { 0: sliderValue , 1: setSliderValue  } = (0,external_react_.useState)([
        10,
        5
    ]);
    const handleSliderState = (value, index)=>{
        setSliderValue(sliderValue.map((val, i)=>{
            if (i === index) {
                return value;
            } else {
                return val;
            }
        }));
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        maxW: "60rem",
        pt: 8,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
            isInvalid: !!error,
            children: [
                !!label && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormLabel, {
                    fontSize: "1.6rem",
                    color: colorMode === 'light' ? colorConstants/* default.black */.ZP.black : '#FFFFFF',
                    htmlFor: "multiRangeSelector",
                    "data-testid": "textInput-label",
                    ...labelProps,
                    children: [
                        label,
                        extraLabel && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            as: "span",
                            fontSize: "md",
                            mx: "4",
                            children: extraLabel
                        })
                    ]
                }),
                ranges.map((range, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        my: 4,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                size: "md",
                                color: colorConstants/* default.greyDarker */.ZP.greyDarker,
                                ...range.rangeTitleProps,
                                children: range.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Slider, {
                                colorScheme: "teal",
                                id: range.title,
                                min: range.min,
                                max: range.max,
                                mt: 10,
                                defaultValue: 30,
                                onChange: (value)=>handleSliderState(value, i)
                                ,
                                ...range.rangeProps,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.SliderTrack, {
                                        bg: colorConstants/* default.influenceRed */.ZP.influenceRed,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.SliderFilledTrack, {
                                            bg: colorMode === 'light' ? colorConstants/* default.black */.ZP.black : '#FFFFFF'
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Tooltip, {
                                        color: colorMode === 'dark' ? colorConstants/* default.black */.ZP.black : '#FFFFFF',
                                        fontSize: "lg",
                                        placement: "top",
                                        isOpen: true,
                                        label: range.isMoney ? `$${sliderValue[i]}` : sliderValue[i],
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.SliderThumb, {})
                                    })
                                ]
                            }, range.title)
                        ]
                    })
                ),
                error && /*#__PURE__*/ jsx_runtime_.jsx(react_.FormErrorMessage, {
                    "data-testid": "textInput-error",
                    fontSize: "xl",
                    children: error
                })
            ]
        })
    }));
};
/* harmony default export */ const CreateCampaign_MultiRangeSelector = (MultiRangeSelector);

;// CONCATENATED MODULE: ./src/modules/Campaigns/CreateCampaign/MultiSelect.tsx




const MultiSelect = ({ selectOptions , label , labelProps , selectProps , extraLabel , handleChange , name , error , initialvalue ,  })=>{
    const { 0: selectedOpt , 1: setSelectedOpts  } = (0,external_react_.useState)(initialvalue || []);
    const handleMultiSelectChange = (e)=>{
        if (!selectedOpt.includes(e.target.value)) {
            setSelectedOpts([
                ...selectedOpt,
                e.target.value
            ]);
        }
    };
    (0,external_react_.useEffect)(()=>{
        const event = {};
        event.target = {
            name: name,
            value: selectedOpt,
            type: 'multi-select',
            checked: undefined
        };
        handleChange(event);
    }, [
        selectedOpt
    ]);
    const handleRemoveOpt = (removeOpt)=>{
        setSelectedOpts(selectedOpt.filter((opt)=>opt !== removeOpt
        ));
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        maxW: "30rem",
        minW: "30rem",
        pt: 8,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DropdownSelect/* default */.Z, {
                onChange: handleMultiSelectChange,
                options: selectOptions || [],
                selectProps: {
                    height: '4.5rem',
                    fontSize: '1.4rem',
                    ...selectProps
                },
                label: label,
                labelProps: labelProps,
                extraLabel: extraLabel,
                noValue: false
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                flexWrap: "wrap",
                spacing: 4,
                mt: 5,
                children: selectedOpt && selectedOpt.map((opt, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Tag, {
                        size: "lg",
                        variant: "solid",
                        borderRadius: "full",
                        colorScheme: "blackAlpha",
                        mx: 2,
                        children: [
                            opt,
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.TagCloseButton, {
                                "data-test-id": "remove-opt",
                                onClick: ()=>handleRemoveOpt(opt)
                            })
                        ]
                    }, `${opt}_${index}`)
                )
            })
        ]
    }));
};
/* harmony default export */ const CreateCampaign_MultiSelect = (MultiSelect);

// EXTERNAL MODULE: ./src/assets/loader.gif
var loader = __webpack_require__(2379);
// EXTERNAL MODULE: ./src/modules/Campaigns/CreateCampaign/UploadImage.tsx
var UploadImage = __webpack_require__(5566);
// EXTERNAL MODULE: ./src/utils/helpers.ts
var helpers = __webpack_require__(8081);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/styles/theme.tsx
var theme = __webpack_require__(9229);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
;// CONCATENATED MODULE: ./src/utils/urilify.ts
function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
        return '<a style="color: #007FFF;" href="' + url + '">' + url + '</a>';
    });
}

;// CONCATENATED MODULE: ./src/utils/constants/leadsPageTableData.ts
const recordsTableHead = [
    {
        name: 'All Leads'
    },
    {
        name: 'Sold Leads'
    },
    {
        name: 'Scrubbed Leads'
    },
    {
        name: 'Lead by Verticals'
    },
    {
        name: 'Trashed Leads, Tools'
    }, 
];
const leadsTableColumns = [
    {
        Header: 'Lead Id',
        accessor: 'id'
    },
    {
        Header: 'Name',
        accessor: 'name'
    },
    {
        Header: 'Phone',
        accessor: 'phone'
    },
    {
        Header: 'Email',
        accessor: 'email'
    },
    {
        Header: 'State',
        accessor: 'state'
    },
    {
        Header: 'Created On',
        accessor: 'createdOn'
    }, 
];

// EXTERNAL MODULE: ./src/utils/apiHelpers.ts
var apiHelpers = __webpack_require__(662);
// EXTERNAL MODULE: ./src/components/DataTable/index.ts + 1 modules
var DataTable = __webpack_require__(1312);
;// CONCATENATED MODULE: ./src/modules/Campaigns/CreateCampaign/index.tsx



























const selectLabelProps = {
    fontSize: '1.4rem',
    fontWeight: 'semibold'
};
const selectProps = {
    height: '3rem',
    width: '30rem',
    fontSize: '1.4rem'
};
const getFormFields = (inputs)=>{
    if (!inputs) return;
    return closeFriends.reduce((acc, fields)=>{
        if (inputs.includes(fields.name)) {
            return [
                ...acc,
                {
                    ...fields,
                    pattern: fields.pattern.toString()
                }
            ];
        }
        return acc;
    }, []);
};
const CreateCampaign = ({ initialdata , type: type1  })=>{
    const toast = (0,react_.createStandaloneToast)(theme/* default */.Z);
    const { colorMode  } = (0,react_.useColorMode)();
    const router = (0,router_.useRouter)();
    const { 0: isSending , 1: setIsSending  } = (0,external_react_.useState)(false);
    const { 0: checkedItems , 1: setCheckedItems  } = (0,external_react_.useState)([]);
    const { 0: myLeadData , 1: setMyLeadData  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        getMyLeads();
    }, []);
    const getMyLeads = async ()=>{
        try {
            const resp = await helpers/* axiosInstance.get */.be.get('/users/leads/get-own-leads?pageSize=1000&page=1');
            let respData = resp.data.data.rows;
            respData = respData.map((item)=>({
                    ...item,
                    name: `${item.firstName} ${item.lastName}`,
                    createdOn: (0,external_date_fns_.format)(new Date(item.createdAt), 'dd/MM/yyyy')
                })
            );
            setMyLeadData(respData);
        } catch (err) {
            toast({
                title: 'Error While Fetching...',
                description: err.message,
                status: 'error',
                duration: 4000,
                isClosable: true
            });
        }
    };
    /**
   * Sends SMS
   * @param {message: string, phone: string}
   * @returns
   */ const handleSendSMS = async ({ to: phone , message  })=>{
        if (!(phone && message)) return;
        try {
            setIsSending(true);
            // Send SMS.
            const response = await (0,apiHelpers/* fetchPostJSON */.Gf)('/api/messages', {
                to: [
                    phone
                ],
                body: message,
                mediaUrls: [
                    inputTypes['adImage']
                ]
            });
            if (response.statusCode === 500) {
                throw new Error(response.message);
            }
            if (response.status === 'success') {
                toast({
                    title: 'SMS Successfully Sent.',
                    description: `The SMS has been successfully sent.`,
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                    variant: 'top-accent'
                });
            }
        } catch (error) {
            const err = Array.isArray(error.message) ? error.message.join(', ') : error.message;
            toast({
                title: err,
                description: '',
                status: 'error',
                duration: 4000,
                isClosable: true
            });
        } finally{
            setIsSending(false);
        }
    };
    /**
   * Sends Email
   * @param {message: string, email: string}
   * @returns
   */ const handleSendEmail = async ({ to , message  })=>{
        if (!(to && message)) return;
        try {
            setIsSending(true);
            // Send SMS.
            const response = await (0,apiHelpers/* fetchPostJSON */.Gf)('/api/send_email', {
                subject: 'QuickInfluence Lead',
                to: [
                    to
                ],
                body: message
            });
            if (response.statusCode === 500) {
                throw new Error(response.message);
            }
            if (response.status === 'success') {
                toast({
                    title: 'Email Successfully Sent.',
                    description: `The Email has been successfully sent.`,
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                    variant: 'top-accent'
                });
            }
        } catch (error) {
            const err = Array.isArray(error.message) ? error.message.join(', ') : error.message;
            toast({
                title: err,
                description: '',
                status: 'error',
                duration: 4000,
                isClosable: true
            });
        } finally{
            setIsSending(false);
        }
    };
    /**
   * Sends Test Ad
   * @param type {type: string; to: string[]; message: string;}
   * @returns
   */ const handleSendTestAd = ({ type , to , message  })=>{
        if (type == 'SMS') {
            handleSendSMS({
                to,
                message
            });
            return;
        }
        if (type == 'Email') {
            handleSendEmail({
                to,
                message
            });
            return;
        }
    };
    /**
   * Returns Form Render Field
   * @param data any
   */ const formFieldRender = (formData)=>{
        return formData.map((data)=>{
            if (data.disabled) return null;
            switch(data.type){
                case 'select':
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ListItem, {
                        ml: data.isChild ? '5' : 0,
                        pt: 8,
                        display: "flex",
                        flexDir: "row",
                        alignItems: "center",
                        mb: "8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "2xl",
                                mx: "8",
                                fontWeight: "black",
                                children: `${data.number ? data.number + '.' : ''}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(DropdownSelect/* default */.Z, {
                                error: errors[data.name] ? data.errorMessage : undefined,
                                onChange: handleChange,
                                options: data.options || [],
                                label: data.label,
                                labelProps: selectLabelProps,
                                name: data.name,
                                selected: inputTypes[data.name],
                                selectProps: selectProps
                            })
                        ]
                    }, `campaigne_form_${data.name}`));
                case 'multi-select':
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ListItem, {
                        ml: data.isChild ? '5' : 0,
                        maxW: "30rem",
                        minW: "30rem",
                        display: "flex",
                        flexDir: "row",
                        alignItems: "center",
                        mb: "8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "2xl",
                                mx: "8",
                                fontWeight: "black",
                                children: `${data.number ? data.number + '.' : ''}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(CreateCampaign_MultiSelect, {
                                selectOptions: data.options,
                                selectProps: selectProps,
                                label: data.label,
                                labelProps: selectLabelProps,
                                extraLabel: data.extraLabel ?? data.extraLabel,
                                handleChange: handleChange,
                                name: data.name,
                                error: errors[data.name] ? data.errorMessage : undefined
                            })
                        ]
                    }, `campaigne_form_${data.name}`));
                case 'range-selector':
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ListItem, {
                        ml: data.isChild ? '5' : 0,
                        display: "flex",
                        flexDir: "row",
                        alignItems: "center",
                        mb: "8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "2xl",
                                mx: "8",
                                fontWeight: "black",
                                children: `${data.number ? data.number + '.' : ''}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(CreateCampaign_MultiRangeSelector, {
                                label: data.label,
                                labelProps: selectLabelProps,
                                extraLabel: data.extraLabel ?? data.extraLabel,
                                ranges: data.ranges
                            })
                        ]
                    }, `campaigne_form_${data.name}`));
                case 'image-upload':
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ListItem, {
                        display: "flex",
                        flexDir: "row",
                        alignItems: "center",
                        ml: data.isChild ? '5' : 0,
                        maxW: "30rem",
                        mb: "8",
                        pt: 8,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "2xl",
                                mx: "8",
                                fontWeight: "black",
                                children: `${data.number ? data.number + '.' : ''}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(UploadImage/* default */.Z, {
                                name: data.name,
                                handleChange: handleChange,
                                label: data.label,
                                labelProps: selectLabelProps,
                                initialImage: inputTypes[data.name]
                            })
                        ]
                    }, `campaigne_form_${data.name}`));
                case 'table':
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ListItem, {
                        display: "flex",
                        flexDir: "column",
                        alignItems: "flex-start",
                        ml: data.isChild ? '5' : 0,
                        maxW: "80rem",
                        mb: "8",
                        pt: 8,
                        overflow: "auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                ml: "14",
                                color: colorMode === 'dark' ? 'white' : 'black',
                                ...selectLabelProps,
                                children: data.label
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(DataTable/* default */.Z, {
                                    title: "Leads",
                                    data: myLeadData,
                                    columns: leadsTableColumns,
                                    onRowSelected: setCheckedItems,
                                    variant: "leadTable"
                                })
                            })
                        ]
                    }, `campaigne_form_${data.name}`));
                case 'submit':
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ListItem, {
                        display: "flex",
                        flexDir: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        ml: data.isChild ? '5' : 0,
                        maxW: "60rem",
                        mb: "8",
                        pt: 8,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "2xl",
                                mx: "8",
                                fontWeight: "black",
                                children: `${data.number ? data.number + '.' : ''}`
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                                        mb: "3",
                                        color: colorMode === 'dark' ? 'white' : 'black',
                                        ...selectLabelProps,
                                        children: "Submit Campaign"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        fontSize: "lg",
                                        children: "We will review your campaign and correspond any changes or approval decision to you"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                        maxW: "204px",
                                        mt: "8",
                                        p: "6",
                                        fontSize: "lg",
                                        isDisabled: loading,
                                        onClick: handleSubmit,
                                        children: [
                                            initialdata ? 'Update' : 'Submit',
                                            " Campaign",
                                            ' ',
                                            loading && /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                src: loader/* default */.Z,
                                                alt: "",
                                                width: 50,
                                                height: 50
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, `campaigne_form_${data.name}`));
                case 'ad-preview':
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ListItem, {
                        alignItems: "center",
                        ml: data.isChild ? '5rem' : 0,
                        maxW: "30rem",
                        mb: "8",
                        pt: 8,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "xl",
                                mb: "3",
                                color: colorMode === 'dark' ? 'white' : 'gray',
                                fontWeight: "semibold",
                                children: data.label
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                                bgColor: colorMode === 'light' ? '#CECECE' : 'black',
                                minW: "50rem",
                                maxW: "50rem",
                                h: "20rem",
                                mb: "8",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                    alignSelf: "end",
                                    mb: "4",
                                    ml: "4",
                                    h: "15rem",
                                    w: "35rem",
                                    maxH: "15rem",
                                    overflow: "auto",
                                    bgColor: colorConstants/* bgThemeColor */.YI[colorMode],
                                    border: `1px solid ${colorConstants/* borderThemeColor */.uH[colorMode]}`,
                                    borderRadius: 30,
                                    borderBottomLeftRadius: "none",
                                    p: "8",
                                    pb: 0,
                                    flexDir: "column",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            dangerouslySetInnerHTML: {
                                                __html: urlify(inputTypes['message'])
                                            },
                                            fontSize: "md",
                                            fontWeight: "semibold",
                                            mb: "5"
                                        }),
                                        inputTypes['adImage'] && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            justifyContent: "center",
                                            alignItems: "center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                src: inputTypes['adImage'],
                                                alt: "Ad Image",
                                                width: "200",
                                                height: "70"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }, `campaigne_form_${data.name}`));
                default:
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ListItem, {
                        ml: data.isChild ? '5' : 0,
                        display: "flex",
                        flexDir: "row",
                        alignItems: "center",
                        mb: "8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontSize: "2xl",
                                mx: "8",
                                fontWeight: "black",
                                children: `${data.number ? data.number + '.' : ''}`
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                flexDir: "column",
                                flex: 1,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Input/* TextInput */.o, {
                                        error: errors[data.name] ? data.errorMessage : undefined,
                                        name: data.name,
                                        label: data.label,
                                        value: inputTypes[data.name],
                                        handleChange: handleChange,
                                        type: data.type,
                                        placeholder: data.placeholder || data.label,
                                        extraLabel: data.extraLabel ?? data.extraLabel,
                                        formControlProps: {
                                            pt: 8,
                                            maxW: data.label.includes('Send Test Ad') ? '25rem' : '40rem'
                                        },
                                        labelProps: {
                                            fontSize: '1.4rem',
                                            fontWeight: 'semibold'
                                        },
                                        TextInputProps: {
                                            p: '.6rem',
                                            pl: 4,
                                            size: 'lg'
                                        }
                                    }),
                                    data.label.includes('Send Test Ad') && /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        maxW: "25rem",
                                        mt: "8",
                                        mb: "8",
                                        p: "6",
                                        disabled: isSending,
                                        isLoading: isSending,
                                        fontSize: "lg",
                                        onClick: ()=>{
                                            const sendData = {
                                                type: type1,
                                                to: type1 === 'Email' ? inputTypes['email'] : type1 === 'SMS' ? inputTypes['phone'] : '',
                                                message: inputTypes['message']
                                            };
                                            handleSendTestAd(sendData);
                                        },
                                        bgColor: "#7B7B7B",
                                        children: "Send"
                                    })
                                ]
                            })
                        ]
                    }, `campaigne_form_${data.name}`));
            }
        });
    };
    /**
   * Returns Form Data
   * @param type  CreateCampaignType
   */ const getFormData = (type)=>{
        switch(type){
            case 'Email':
                return campaignEmail;
            case 'SMS':
                return campaignSMS;
            default:
                return campaign;
        }
    };
    const { handleChange , inputTypes , handleSubmit , errors , loading  } = (0,useForm/* default */.Z)({
        inputs: getFormData(type1),
        initials: initialdata || {},
        cb: async (inputs)=>{
            const smsEmailRecord = type1 !== 'Default' && {
                message: inputTypes['message'],
                to: checkedItems.map((lead)=>({
                        id: lead.id,
                        email: lead.email,
                        phone: lead.phone
                    })
                ),
                mediaUrls: [
                    inputTypes['adImage']
                ],
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
            };
            const formFieldsInput = getFormFields(inputs.formData);
            const formDataObject = {
                type: type1,
                name: inputs.name,
                description: inputs.description,
                status: inputs.status || 'SCHEDULED',
                redirectUrl: inputs.redirectUrl,
                paidType: inputs.paidType,
                banner: inputs.banner,
                formData: {
                    form: formFieldsInput
                },
                campaignDate: inputs.campaignDate,
                prices: inputs.prices,
                ...smsEmailRecord
            };
            const response = initialdata ? await helpers/* axiosInstance.put */.be.put(`/users/campaign/${initialdata.id}`, formDataObject) : await helpers/* axiosInstance.post */.be.post('/users/create/campaign', formDataObject);
            if (response) {
                toast({
                    title: initialdata ? 'Campaign updated successfully!' : 'Your campaign has been created successfully!',
                    description: '',
                    status: 'success',
                    duration: 4000,
                    isClosable: true
                });
                setTimeout(()=>{
                    router.push('/dashboard/campaigns');
                }, 2000);
            }
        }
    });
    if (type1 === 'SMS') {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
            flexDirection: "column",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                    flexDir: "row",
                    alignItems: "center",
                    onClick: router.back,
                    _hover: {
                        cursor: 'pointer'
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                            icon: free_solid_svg_icons_.faChevronLeft,
                            size: "xs"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            fontWeight: "bold",
                            pl: "2",
                            children: "Back"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                    flexDir: "column",
                    mt: "16",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                            fontSize: "1.5rem",
                            children: "New SMS Campaign"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            mt: "3",
                            fontSize: "lg",
                            children: "Here is where your new campaign will come to life. Select you preferences and design your campaign below."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    bg: colorConstants/* cardThemeColor */.fP[colorMode],
                    minH: "100%",
                    h: "100%",
                    w: "60vw",
                    mt: "8",
                    pb: "16",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                        action: "post",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.OrderedList, {
                            size: "2xl",
                            style: {
                                listStyle: 'none'
                            },
                            children: formFieldRender(campaignSMS)
                        })
                    })
                })
            ]
        }));
    }
    if (type1 === 'Email') {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
            flexDirection: "column",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                    flexDir: "row",
                    alignItems: "center",
                    onClick: router.back,
                    _hover: {
                        cursor: 'pointer'
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                            icon: free_solid_svg_icons_.faChevronLeft,
                            size: "xs"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            fontWeight: "bold",
                            pl: "2",
                            children: "Back"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                    flexDir: "column",
                    mt: "16",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                            fontSize: "1.5rem",
                            children: "New Email Campaign"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            mt: "3",
                            fontSize: "lg",
                            children: "Here is where your new campaign will come to life. Select you preferences and design your campaign below."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    bg: colorConstants/* cardThemeColor */.fP[colorMode],
                    minH: "100%",
                    h: "100%",
                    w: "60vw",
                    mt: "8",
                    pb: "16",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                        action: "post",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.OrderedList, {
                            size: "2xl",
                            style: {
                                listStyle: 'none'
                            },
                            children: formFieldRender(campaignEmail)
                        })
                    })
                })
            ]
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        flexDirection: "column",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Heading, {
                size: "xl",
                children: [
                    " ",
                    initialdata ? 'Edit' : 'New',
                    " Campaign"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                my: "10",
                color: colorConstants/* default.greyLighter */.ZP.greyLighter,
                children: initialdata ? 'Make changes to your existing campaign here.' : 'Here is where your new campaign will come to life. Select your preferences and design your campaign below.'
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                action: "post",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.OrderedList, {
                    size: "2xl",
                    children: [
                        campaign.map((data, i)=>{
                            if (data.disabled) return null;
                            switch(data.type){
                                case 'select':
                                    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.ListItem, {
                                        maxW: "60rem",
                                        pt: 8,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(DropdownSelect/* default */.Z, {
                                            error: errors[data.name] ? data.errorMessage : undefined,
                                            onChange: handleChange,
                                            options: data.options || [],
                                            label: data.label,
                                            name: data.name,
                                            selected: inputTypes[data.name],
                                            selectProps: {
                                                height: '4.5rem',
                                                fontSize: '1.4rem'
                                            }
                                        })
                                    }, `campaigne_form_${i}`));
                                case 'multi-select':
                                    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.ListItem, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CreateCampaign_MultiSelect, {
                                            selectOptions: data.options,
                                            label: data.label,
                                            extraLabel: data.extraLabel ?? data.extraLabel,
                                            handleChange: handleChange,
                                            name: data.name,
                                            error: errors[data.name] ? data.errorMessage : undefined,
                                            initialvalue: inputTypes.formData || []
                                        })
                                    }, `campaigne_form_${i}`));
                                case 'range-selector':
                                    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.ListItem, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(CreateCampaign_MultiRangeSelector, {
                                            label: data.label,
                                            extraLabel: data.extraLabel ?? data.extraLabel,
                                            ranges: data.ranges
                                        })
                                    }, `campaigne_form_${i}`));
                                case 'image-upload':
                                    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.ListItem, {
                                        maxW: "60rem",
                                        pt: 8,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(UploadImage/* default */.Z, {
                                            name: data.name,
                                            handleChange: handleChange,
                                            label: data.label,
                                            initialImage: inputTypes[data.name]
                                        })
                                    }, `campaigne_form_${i}`));
                                default:
                                    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.ListItem, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Input/* TextInput */.o, {
                                            error: errors[data.name] ? data.errorMessage : undefined,
                                            name: data.name,
                                            label: data.label,
                                            value: inputTypes[data.name],
                                            formControlProps: {
                                                pt: 8,
                                                maxW: '60rem'
                                            },
                                            handleChange: handleChange,
                                            type: data.type,
                                            placeholder: data.label,
                                            TextInputProps: {},
                                            extraLabel: data.extraLabel ?? data.extraLabel
                                        })
                                    }, `campaigne_form_${i}`));
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ListItem, {
                            my: 20,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.FormLabel, {
                                    fontSize: "1.6rem",
                                    color: colorMode === 'light' ? colorConstants/* default.black */.ZP.black : '#FFFFFF',
                                    htmlFor: "multiRangeSelector",
                                    "data-testid": "textInput-label",
                                    children: "Submit Campaign"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    children: "We will review your campaign and correspond any changes or approval decision to you"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                    maxW: "204px",
                                    mt: 12,
                                    onClick: handleSubmit,
                                    children: [
                                        initialdata ? 'Update' : 'Create',
                                        " Campaign",
                                        ' ',
                                        loading && /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                            src: loader/* default */.Z,
                                            alt: "",
                                            width: 50,
                                            height: 50
                                        })
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
/* harmony default export */ const Campaigns_CreateCampaign = (CreateCampaign);


/***/ })

};
;