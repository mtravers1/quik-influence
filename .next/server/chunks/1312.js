"use strict";
exports.id = 1312;
exports.ids = [1312];
exports.modules = {

/***/ 1312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_DataTable)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: external "react-table"
var external_react_table_ = __webpack_require__(2154);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
;// CONCATENATED MODULE: ./src/components/DataTable/DataTable.tsx







const IndeterminateCheckbox = /*#__PURE__*/ external_react_default().forwardRef(({ indeterminate , ...rest }, ref)=>{
    const defaultRef = external_react_default().useRef();
    const resolvedRef = ref || defaultRef;
    external_react_default().useEffect(()=>{
        resolvedRef.current.indeterminate = indeterminate;
    }, [
        resolvedRef,
        indeterminate
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.input, {
            type: "checkbox",
            ref: resolvedRef,
            ...rest
        })
    }));
});
const DataTable = ({ title , columns: columns1 , data , pageSize: initialPageSize , onRowSelected , variant  })=>{
    const tableColumns = external_react_default().useMemo(()=>columns1
    , [
        columns1
    ]);
    const { getTableProps , headerGroups , prepareRow , getTableBodyProps , page , canPreviousPage , canNextPage , pageOptions , nextPage , previousPage , selectedFlatRows , state: { pageIndex  } ,  } = (0,external_react_table_.useTable)({
        columns: tableColumns,
        data,
        initialState: {
            pageIndex: 0,
            pageSize: initialPageSize
        }
    }, external_react_table_.useSortBy, external_react_table_.usePagination, external_react_table_.useRowSelect, (hooks)=>{
        hooks.visibleColumns.push((columns)=>[
                // Let's make a column for selection
                {
                    id: 'selection',
                    // The header can use the table's getToggleAllRowsSelectedProps method
                    // to render a checkbox
                    Header: ({ getToggleAllRowsSelectedProps  })=>/*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.div, {
                            justifyContent: "center",
                            d: "flex",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(IndeterminateCheckbox, {
                                ...getToggleAllRowsSelectedProps()
                            })
                        })
                    ,
                    // The cell can use the individual row's getToggleRowSelectedProps method
                    // to the render a checkbox
                    Cell: ({ row  })=>/*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.div, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(IndeterminateCheckbox, {
                                ...row.getToggleRowSelectedProps()
                            })
                        })
                },
                ...columns, 
            ]
        );
    });
    external_react_default().useEffect(()=>{
        if (selectedFlatRows && onRowSelected && typeof onRowSelected === 'function') {
            onRowSelected(selectedFlatRows.map((d)=>d.original
            ));
        }
    }, [
        selectedFlatRows
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                flex: 1,
                justifyContent: "flex-end",
                mb: "4",
                mr: "8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        mr: "16"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                            fontSize: "md",
                            children: [
                                "Total:",
                                ' ',
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                    as: "span",
                                    fontWeight: "semibold",
                                    children: [
                                        data?.length,
                                        " ",
                                        title
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Table, {
                variant: variant,
                ...getTableProps(),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Thead, {
                        children: headerGroups.map((headerGroup, hdIndex)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Tr, {
                                ...headerGroup.getHeaderGroupProps(),
                                children: headerGroup.headers.map((column, clIndex)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Th, {
                                        ...column.getHeaderProps(column.getSortByToggleProps()),
                                        isNumeric: column.isNumeric,
                                        fontSize: "1rem",
                                        padding: ".5rem",
                                        pr: ".54rem",
                                        textTransform: "capitalize",
                                        children: [
                                            column.render('Header'),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.span, {
                                                children: column.isSorted ? column.isSortedDesc ? /*#__PURE__*/ jsx_runtime_.jsx(icons_.TriangleDownIcon, {
                                                    "aria-label": "sorted descending"
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx(icons_.TriangleUpIcon, {
                                                    "aria-label": "sorted ascending"
                                                }) : null
                                            })
                                        ]
                                    }, clIndex)
                                )
                            }, hdIndex)
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Tbody, {
                        ...getTableBodyProps(),
                        children: page.map((row, trIndex)=>{
                            //@ts-ignore
                            prepareRow(row);
                            return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Tr, {
                                ...row.getRowProps(),
                                children: row.cells.map((cell, tdIndex)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                        ...cell.getCellProps(),
                                        isNumeric: cell.column.isNumeric,
                                        textTransform: "capitalize",
                                        children: cell.render('Cell')
                                    }, tdIndex)
                                )
                            }, trIndex));
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                width: "full",
                justifyContent: "flex-end",
                alignItems: "center",
                my: 8,
                mt: 2,
                children: [
                    canPreviousPage && /*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.button, {
                        type: "button",
                        onClick: ()=>previousPage()
                        ,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                            icon: free_solid_svg_icons_.faCaretLeft,
                            style: {
                                margin: 'auto 10px'
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                        fontSize: "md",
                        mr: "6",
                        children: [
                            "Page ",
                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                children: pageIndex + 1
                            }),
                            " of ",
                            pageOptions.length
                        ]
                    }),
                    canNextPage && /*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.button, {
                        type: "button",
                        onClick: ()=>nextPage()
                        ,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                            icon: free_solid_svg_icons_.faCaretRight,
                            style: {
                                margin: 'auto 10px'
                            }
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const DataTable_DataTable = (DataTable);
DataTable.defaultProps = {
    pageSize: 50
};

;// CONCATENATED MODULE: ./src/components/DataTable/index.ts

/* harmony default export */ const components_DataTable = (DataTable_DataTable);


/***/ })

};
;