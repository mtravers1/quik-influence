"use strict";
(() => {
var exports = {};
exports.id = 5760;
exports.ids = [5760];
exports.modules = {

/***/ 6135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_UploadTable)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: external "papaparse"
const external_papaparse_namespaceObject = require("papaparse");
var external_papaparse_default = /*#__PURE__*/__webpack_require__.n(external_papaparse_namespaceObject);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/utils/helpers.ts
var helpers = __webpack_require__(8081);
// EXTERNAL MODULE: ./src/utils/constants/index.ts
var constants = __webpack_require__(3329);
// EXTERNAL MODULE: ./src/redux/actions/general.ts
var general = __webpack_require__(6099);
;// CONCATENATED MODULE: ./src/components/UploadTable/useUpload.tsx







const useUpload = (file1, documentTag)=>{
    const { 0: progress , 1: setProgress  } = (0,external_react_.useState)(0);
    const { 0: parsedData , 1: setParsedData  } = (0,external_react_.useState)([]);
    const { 0: status , 1: setStatus  } = (0,external_react_.useState)(constants/* FILE_STATUS.IDLE */.Ih.IDLE);
    const { 0: options1 , 1: setOptions  } = (0,external_react_.useState)({
        startingByte: 0,
        uploadUrl: `${helpers/* baseurl */.gA}/api/v1/admin/import-leads`
    });
    const { 0: matchedHeaders , 1: setMatchedHeaders  } = (0,external_react_.useState)([]);
    const { 0: uploadId , 1: setUploadId  } = (0,external_react_.useState)();
    const cancelRef = (0,external_react_.useRef)(new AbortController());
    const { 0: fileHeaderError , 1: setFileHeaderError  } = (0,external_react_.useState)(false);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const toast = (0,react_.useToast)();
    (0,external_react_.useEffect)(()=>{
        setStatus(constants/* FILE_STATUS.PROCESSING */.Ih.PROCESSING);
        if (file1) {
            external_papaparse_default().parse(file1, {
                worker: true,
                complete: (results)=>{
                    setParsedData({
                        headers: results.data[0],
                        data: results.data.slice(1, 10),
                        count: results.data.length
                    });
                    setStatus(constants/* FILE_STATUS.IDLE */.Ih.IDLE);
                }
            });
        }
    }, []);
    const processFileAndUpload = ()=>{
        setStatus(constants/* FILE_STATUS.PROCESSING */.Ih.PROCESSING);
        external_papaparse_default().parse(file1, {
            worker: true,
            complete: (results)=>{
                results.data.splice(0, 1);
                if (!matchedHeaders.some((header)=>header
                ) && matchedHeaders.includes('phone')) {
                    toast({
                        title: 'Please include headers in your file',
                        description: '',
                        status: 'error',
                        duration: 4000,
                        isClosable: true,
                        position: 'top-right'
                    });
                    return;
                }
                const fileLength = results.data.length;
                let newData = [
                    matchedHeaders,
                    ...results.data
                ];
                const parsedArray = external_papaparse_default().unparse(newData);
                const newFile = new File([
                    parsedArray
                ], file1.name, {
                    type: 'text/csv;charset=utf-8;'
                });
                uploadFileChunks(newFile, {
                    ...options1,
                    fileLength
                });
            }
        });
    };
    const uploadFileChunks = async (file, options)=>{
        let tagId = '';
        if (documentTag) {
            if (typeof documentTag === 'string') {
                const newtag = await helpers/* axiosInstance.post */.be.post('/admin/tag', {
                    name: documentTag
                });
                dispatch((0,general/* addTags */.zl)(newtag.data.data));
                tagId = newtag.data.data.id;
            } else {
                tagId = documentTag.value;
            }
        }
        setStatus(constants/* FILE_STATUS.PENDING */.Ih.PENDING);
        const formData = new FormData();
        const req = new XMLHttpRequest();
        const chunk = file.slice(options.startingByte);
        try {
            const uploadIdRes = await helpers/* axiosInstance.post */.be.post('/admin/leads-upload-request', {
                fileName: file.name,
                tagId,
                fileLength: options.fileLength
            });
            const { UploadId , fileName  } = uploadIdRes.data.data;
            setUploadId(UploadId);
            formData.append('chunk', chunk, fileName);
            req.open('POST', options.uploadUrl, true);
            req.setRequestHeader('Content-Range', `bytes=${options.startingByte}-${options.startingByte + chunk.size}/${file.size}`);
            req.setRequestHeader('token', localStorage.getItem('_q_inf') || '');
            req.setRequestHeader('upload-id', UploadId);
            req.onload = (e)=>{
                if (req.status === 200) {
                    setStatus(constants/* FILE_STATUS.COMPLETED */.Ih.COMPLETED);
                    setProgress(100);
                } else {
                    handleRequestError();
                }
            };
            req.ontimeout = (e)=>handleRequestError()
            ;
            req.onerror = (e)=>handleRequestError()
            ;
            req.onabort = (e)=>handleRequestAbort()
            ;
            req.upload.onprogress = (e)=>{
                const loaded = options.startingByte + e.loaded;
                handleUploadProgress(loaded);
            };
            req.send(formData);
        } catch (err) {
            handleRequestError();
        }
    };
    const handleRequestError = ()=>{
        setStatus(constants/* FILE_STATUS.FAILED */.Ih.FAILED);
        setProgress(100);
    };
    const handleRequestAbort = ()=>{
        setStatus(constants/* FILE_STATUS.PAUSED */.Ih.PAUSED);
    };
    const handleUploadProgress = (loaded)=>{
        setStatus(constants/* FILE_STATUS.UPLOADING */.Ih.UPLOADING);
        const totalLength = file1.size;
        if (totalLength !== null) {
            setProgress(Math.round(loaded * 100 / totalLength));
        }
    };
    const cancelUpload = ()=>{
        cancelRef.current.abort();
    };
    const resumeFIleUpload = async ()=>{
    // const data = await axiosInstance.get(`/upload-status?fileName=${file.name}&fileId=${file}`);
    // call upload again here
    };
    const retry = async ()=>{
    // call upload again with the current options
    };
    const clear = async ()=>{
    // remove file from list
    };
    const chooseStatusColor = ()=>{
        switch(status){
            case constants/* FILE_STATUS.PENDING */.Ih.PENDING:
                return 'yellow';
            case constants/* FILE_STATUS.UPLOADING */.Ih.UPLOADING:
                return 'green';
            case constants/* FILE_STATUS.PAUSED */.Ih.PAUSED:
                return 'yellow';
            case constants/* FILE_STATUS.COMPLETED */.Ih.COMPLETED:
                return 'green';
            case constants/* FILE_STATUS.FAILED */.Ih.FAILED:
                return 'red';
            default:
                return 'red';
        }
    };
    return {
        status,
        progress,
        cancelUpload,
        parsedData,
        colorStatus: chooseStatusColor(),
        matchedHeaders,
        setMatchedHeaders,
        processFileAndUpload,
        fileHeaderError
    };
};
/* harmony default export */ const UploadTable_useUpload = (useUpload);

;// CONCATENATED MODULE: ./src/components/ProgressBar/index.tsx



const ProgressBar = ({ progress , color  })=>{
    const { colorMode  } = (0,react_.useColorMode)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        w: "100%",
        alignItems: "center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                flexGrow: 1,
                backgroundColor: colorMode === 'dark' ? 'white' : '#000',
                height: "1px",
                marginRight: "10px",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    transition: "0.3s ease",
                    width: `${progress}%`,
                    backgroundColor: color || '#000',
                    height: "1px"
                })
            }),
            progress,
            "%"
        ]
    }));
};
/* harmony default export */ const components_ProgressBar = (ProgressBar);

// EXTERNAL MODULE: ./src/components/DropdownSelect/index.tsx
var DropdownSelect = __webpack_require__(7030);
// EXTERNAL MODULE: ./src/assets/loader.gif
var loader = __webpack_require__(2379);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: ./src/utils/constants/colorConstants.ts
var colorConstants = __webpack_require__(3814);
;// CONCATENATED MODULE: ./src/components/AutoCompleteDropDown/logic.ts


const useLogic = (options, onSelect)=>{
    const { 0: value1 , 1: setValue  } = (0,external_react_.useState)('');
    const { 0: innerOpts , 1: setInnerOpts  } = (0,external_react_.useState)(options);
    const { 0: showDropDown , 1: setShowDropDown  } = (0,external_react_.useState)(false);
    const { 0: activeIndex , 1: setActIndex  } = (0,external_react_.useState)(-1);
    const parent = (0,external_react_.useRef)();
    const activeIndexRef = (0,external_react_.useRef)(activeIndex);
    const suggestionsRef = (0,external_react_.useRef)(innerOpts);
    const setActiveIndex = (value)=>{
        activeIndexRef.current = value;
        setActIndex(value);
    };
    const handleChange = (e)=>{
        const val = e.target.value;
        setValue(val);
        onSelect({
            target: {
                value: val
            }
        });
        setActiveIndex(-1);
    };
    const handleSelect = (e)=>{
        setValue(e.name);
        setShowDropDown(false);
        onSelect({
            target: {
                value: e
            }
        });
        setActiveIndex(-1);
    };
    (0,external_react_.useEffect)(()=>{
        if (value1 !== '') {
            const newOptions = options.filter((opt)=>(0,helpers/* stringSearch */.kz)(value1, opt.name)
            );
            setInnerOpts(newOptions);
            suggestionsRef.current = newOptions;
        } else {
            setInnerOpts(options);
            suggestionsRef.current = options;
        }
        return ()=>{};
    }, [
        value1,
        options
    ]);
    (0,external_react_.useEffect)(()=>{
        if (showDropDown) {
            if (false) {}
        }
        if (!showDropDown) {
            if (false) {}
        }
        return ()=>{
            document.body.removeEventListener('keydown', handleKeyDown);
        };
    }, [
        showDropDown
    ]);
    const handleFocus = ()=>{
        setShowDropDown(true);
    };
    const handleBlur = (e)=>{
        const leavingParent = !parent.current.contains(e.relatedTarget);
        if (leavingParent && e.target !== parent.current) {
            setShowDropDown(false);
            setActiveIndex(-1);
        }
    };
    const handleKeyDown = (event)=>{
        if (event.key === 'ArrowUp' && activeIndexRef.current > 0) {
            event.preventDefault();
            setActiveIndex(activeIndexRef.current - 1);
        }
        if (event.key === 'ArrowDown' && activeIndexRef.current < suggestionsRef.current.length - 1) {
            event.preventDefault();
            setActiveIndex(activeIndexRef.current + 1);
        }
        if (event.key === 'Enter') {
            event.preventDefault();
            if (activeIndexRef.current !== -1) {
                const activeOpt = innerOpts.filter((data, idx)=>idx === activeIndexRef.current
                );
                handleSelect(activeOpt[0]);
            }
        }
    };
    return {
        handleChange,
        handleSelect,
        handleFocus,
        handleBlur,
        innerOpts,
        showDropDown,
        parent,
        value: value1,
        activeIndex
    };
};
/* harmony default export */ const logic = (useLogic);

;// CONCATENATED MODULE: ./src/components/AutoCompleteDropDown/index.tsx





const AutoCompleteDropDown = ({ options , onSelect , placeHolder  })=>{
    const { colorMode  } = (0,react_.useColorMode)();
    const inputRef = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        inputRef.current.setAttribute('autocomplete', 'off');
    }, []);
    const { handleChange , handleSelect , handleFocus , handleBlur , innerOpts , showDropDown , value , parent , activeIndex ,  } = logic(options, onSelect);
    const borderColor = colorMode === 'dark' ? 'rgba(255, 255, 255, 0.16)' : '#CBD5E0';
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        position: "relative",
        maxW: "300px",
        ref: parent,
        zIndex: 10,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                value: value,
                onChange: handleChange,
                padding: "10px",
                fontSize: "16px",
                height: "auto",
                onFocus: handleFocus,
                onBlur: handleBlur,
                placeholder: placeHolder || '',
                name: "upload",
                ref: inputRef
            }),
            showDropDown && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                as: "ul",
                listStyleType: "none",
                border: `1px solid ${borderColor}`,
                position: "absolute",
                width: "100%",
                top: "45px",
                bg: colorConstants/* dashboardColor */.o5[colorMode],
                onBlur: handleBlur,
                tabIndex: -1,
                borderRadius: "5px",
                maxHeight: "400px",
                overflowY: "auto",
                children: innerOpts.map((option, i)=>/*#__PURE__*/ jsx_runtime_.jsx(InnerOpts, {
                        option: option,
                        colorMode: colorMode,
                        borderColor: borderColor,
                        value: value,
                        activeIndex: activeIndex,
                        handleSelect: handleSelect,
                        idx: i
                    }, `new_opt_${i}`)
                )
            })
        ]
    }));
};
const InnerOpts = ({ option , colorMode , borderColor , value , activeIndex , handleSelect , idx  })=>{
    const hoverBg = colorMode === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(51, 51, 51, 0.6)';
    const activeBg = colorMode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(51, 51, 51, 0.8)';
    const textColor = colorMode === 'dark' ? '#333' : '#fff';
    const isActive = activeIndex === idx;
    const isSelected = value === option.name;
    const elRef = (0,external_react_.useRef)();
    if (isActive) {
        elRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
        });
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        as: "li",
        ref: elRef,
        borderBottom: `1px solid ${borderColor}`,
        padding: "10px",
        cursor: "pointer",
        color: isSelected || isActive ? textColor : undefined,
        background: isSelected || isActive ? activeBg : undefined,
        onClick: ()=>handleSelect(option)
        ,
        _hover: {
            background: hoverBg,
            color: textColor
        },
        children: option.name
    }));
};
/* harmony default export */ const components_AutoCompleteDropDown = (AutoCompleteDropDown);

;// CONCATENATED MODULE: ./src/components/UploadTable/index.tsx















const UploadTable = ({ file , headers , removeFile , id  })=>{
    const { tags  } = (0,external_react_redux_.useSelector)((state)=>state.generals
    );
    const { 0: tagOptions  } = (0,external_react_.useState)(tags.map((tag)=>({
            name: tag.name,
            value: tag.id
        })
    ));
    const { 0: documentTag , 1: setDocumenttag  } = (0,external_react_.useState)();
    const { progress , status , cancelUpload , parsedData , colorStatus , matchedHeaders , setMatchedHeaders , processFileAndUpload , fileHeaderError ,  } = UploadTable_useUpload(file, documentTag);
    (0,external_react_.useEffect)(()=>{
        const matchHeaders = ()=>{
            let formHeaders = [
                ...headers
            ];
            return parsedData?.headers?.map((header)=>{
                for(let i = 0; i < headers.length; i++){
                    if (!formHeaders[i]) continue;
                    if ((0,helpers/* similarity */.hY)(formHeaders[i], header) > 0.7) {
                        // remove headers[i] from headers list
                        let newHeader = formHeaders[i];
                        formHeaders = formHeaders.filter((hdr, idx)=>i !== idx
                        );
                        return newHeader;
                    }
                }
            });
        };
        setMatchedHeaders(matchHeaders() || []);
    }, [
        parsedData?.headers
    ]);
    const headersMap = [
        {
            label: '',
            value: ''
        },
        ...headers.map((header)=>({
                label: header,
                value: header,
                style: matchedHeaders.includes(header) ? {
                    display: 'none'
                } : {}
            })
        ), 
    ];
    const handleSelect = (e, i)=>{
        setMatchedHeaders((prevMatchedHeaders)=>{
            const newValues = [
                ...prevMatchedHeaders
            ];
            newValues[i] = e.target.value;
            return newValues;
        });
    };
    const deleteFile = ()=>{
        removeFile(id);
    };
    const settag = (e)=>{
        setDocumenttag(e.target.value);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        width: "100%",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                justifyContent: "space-between",
                alignItems: "center",
                margin: "30px 0 15px 0",
                height: "",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                fontWeight: 500,
                                fontSize: "16px",
                                as: "h1",
                                whiteSpace: "nowrap",
                                marginRight: "20px",
                                children: "Data Sample"
                            }),
                            (status === constants/* FILE_STATUS.IDLE */.Ih.IDLE || status === constants/* FILE_STATUS.PROCESSING */.Ih.PROCESSING) && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                style: {
                                    padding: '0 10px'
                                },
                                onClick: processFileAndUpload,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                    icon: free_solid_svg_icons_.faUpload,
                                    color: colorConstants/* default.influenceRed */.ZP.influenceRed,
                                    style: {
                                        width: '16px',
                                        height: '16px'
                                    }
                                })
                            }),
                            status !== constants/* FILE_STATUS.UPLOADING */.Ih.UPLOADING && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                style: {
                                    padding: '0 10px'
                                },
                                onClick: deleteFile,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                    icon: free_solid_svg_icons_.faTrash,
                                    color: colorConstants/* default.influenceRed */.ZP.influenceRed,
                                    style: {
                                        width: '16px',
                                        height: '16px'
                                    }
                                })
                            })
                        ]
                    }),
                    status === constants/* FILE_STATUS.PROCESSING */.Ih.PROCESSING && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        position: "relative",
                        fontSize: "16px",
                        paddingRight: "40px",
                        children: [
                            "Processing Your data",
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                position: "absolute",
                                right: 0,
                                top: "50px",
                                transform: 'translateY(-60px)',
                                width: "40px",
                                height: "40px",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    src: loader/* default */.Z,
                                    alt: "",
                                    width: 40,
                                    height: 40
                                })
                            })
                        ]
                    }),
                    !(status === constants/* FILE_STATUS.IDLE */.Ih.IDLE || status === constants/* FILE_STATUS.PROCESSING */.Ih.PROCESSING) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        fontSize: "13px",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                fontSize: "13px",
                                as: "p",
                                marginRight: "20px",
                                children: [
                                    "Status:",
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        as: "span",
                                        marginLeft: "10px",
                                        color: colorStatus,
                                        textTransform: "capitalize",
                                        fontWeight: "bold",
                                        children: status
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                w: "200px",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        as: "p",
                                        marginRight: "15px",
                                        children: "Progress:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_ProgressBar, {
                                        progress: progress,
                                        color: colorStatus
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_AutoCompleteDropDown, {
                options: tagOptions || [],
                onSelect: settag,
                placeHolder: "Tag your data"
            }),
            fileHeaderError && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        margin: "30px 0 30px",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                marginBottom: "5px",
                                fontSize: "16px",
                                children: "The file uploaded doesn't comform to our standard table format"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                fontWeight: "500",
                                whiteSpace: "pre-wrap",
                                children: [
                                    "The table headers are too many, your headers should not be more than",
                                    ' ',
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        color: "red",
                                        as: "span",
                                        children: headers.length
                                    }),
                                    '\n',
                                    "We will try to match your headers as closey as possible to our own, and will give you a drop down to choose from our list of headers"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                as: "p",
                                marginTop: "20px",
                                children: "Here is a sample Header"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        overflowX: "auto",
                        width: "100%",
                        padding: "10px 0 10px",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Table, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Thead, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Tr, {
                                    children: headers?.map((data, i)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Th, {
                                            fontSize: "16px",
                                            textTransform: "initial",
                                            fontFamily: "Avenir",
                                            whiteSpace: "nowrap",
                                            minWidth: "200px",
                                            padding: "10px 15px 10px 0",
                                            children: data
                                        }, `lead_data_hd_${i}`)
                                    )
                                })
                            })
                        })
                    })
                ]
            }),
            !fileHeaderError && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        overflowX: "auto",
                        width: "100%",
                        padding: "10px 0",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Table, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Thead, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Tr, {
                                        children: parsedData?.headers?.map((data, i)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Th, {
                                                fontSize: "16px",
                                                textTransform: "initial",
                                                fontFamily: "Avenir",
                                                whiteSpace: "nowrap",
                                                minWidth: "200px",
                                                padding: "10px 15px 10px 0",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(DropdownSelect/* default */.Z, {
                                                    onChange: (e)=>handleSelect(e, i)
                                                    ,
                                                    placeholder: "choose header",
                                                    name: "header",
                                                    options: headersMap,
                                                    selected: matchedHeaders[i]
                                                })
                                            }, `lead_data_hd_${i}`)
                                        )
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Tbody, {
                                    children: parsedData?.data?.map((dataArray, i)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Tr, {
                                            children: dataArray.map((data, j)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                                    whiteSpace: "nowrap",
                                                    textTransform: "capitalize",
                                                    fontSize: "13px",
                                                    padding: "10px 15px 10px 0",
                                                    children: data
                                                }, `lead_data_td_${i}${j}`)
                                            )
                                        }, `lead_data_tr_${i}`)
                                    )
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        textAlign: "right",
                        fontWeight: "500",
                        marginTop: 10,
                        as: "h2",
                        children: [
                            "Data Count: ",
                            parsedData?.count
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_UploadTable = (UploadTable);


/***/ }),

/***/ 6491:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6555);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_MainContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1273);
/* harmony import */ var components_UploadTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6135);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__]);
uuid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







const UploadNewLeads = ()=>{
    const { formData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.generals
    );
    const { 0: files1 , 1: setFiles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: headers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(formData.map((form)=>form.name
    ));
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const handleChange = (e)=>{
        const { files  } = e?.target;
        setFiles((prevFiles)=>[
                ...prevFiles,
                {
                    data: files[0],
                    id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)()
                }, 
            ]
        );
        inputRef.current.value = null;
    };
    const removeFile = (id)=>{
        setFiles((prevFiles)=>prevFiles.filter((file)=>id !== file.id
            )
        );
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MainContent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    margin: "30px 0 30px",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            marginBottom: "5px",
                            fontSize: "16px",
                            children: "Click on the button to upload file. You can upload multiple files"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            fontWeight: "500",
                            whiteSpace: "pre-wrap",
                            children: [
                                "Your headers should not be more than ",
                                headers.length,
                                '\n',
                                "We will try to match your headers as closey as possible to our own, and will also give you a drop down to choose from our list of headers"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    width: "100%",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                as: "label",
                                htmlFor: "upload-btn",
                                style: {
                                    cursor: 'pointer'
                                },
                                fontSize: "16px",
                                padding: "5px 10px",
                                border: "1px solid #000",
                                borderRadius: "5px",
                                children: [
                                    "Choose a File",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        ref: inputRef,
                                        id: "upload-btn",
                                        type: "file",
                                        accept: ".csv",
                                        style: {
                                            display: 'none'
                                        },
                                        onChange: handleChange
                                    })
                                ]
                            })
                        }),
                        [
                            ...files1
                        ].reverse().map((file)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_UploadTable__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                file: file.data,
                                id: file.id,
                                removeFile: removeFile,
                                headers: headers
                            }, file.id)
                        )
                    ]
                })
            ]
        })
    }));
};
// export const getServer
// /admin/form-element
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadNewLeads);

});

/***/ }),

/***/ 6099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ki": () => (/* binding */ createFormData),
/* harmony export */   "E0": () => (/* binding */ createTags),
/* harmony export */   "zl": () => (/* binding */ addTags)
/* harmony export */ });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1356);

const createFormData = (data)=>async (dispatch)=>{
        dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .CREATE_FORM_DATA */ .Ng,
            payload: data
        });
    }
;
const createTags = (data)=>async (dispatch)=>{
        dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .CREATE_TAGS */ .qE,
            payload: data
        });
    }
;
const addTags = (data)=>async (dispatch)=>{
        dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .ADD_TAGS */ .bo,
            payload: data
        });
    }
;


/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 1271:
/***/ ((module) => {

module.exports = require("@chakra-ui/layout");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9103:
/***/ ((module) => {

module.exports = require("query-string");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3655:
/***/ ((module) => {

module.exports = require("recharts");

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,5675,8081,3629,3814,2341,6089,3821,9229,4974,4392,1273], () => (__webpack_exec__(6491)));
module.exports = __webpack_exports__;

})();