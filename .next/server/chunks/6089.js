"use strict";
exports.id = 6089;
exports.ids = [6089];
exports.modules = {

/***/ 8091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8081);



function Input({ inputs , cb , validateForm =true , initials ={}  }) {
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useToast)();
    const initialInputs = inputs?.reduce((acc, input)=>({
            ...acc,
            [input.name]: initials[input.name] ? initials[input.name] : ''
        })
    , {});
    const initialError = inputs?.reduce((acc, input)=>({
            ...acc,
            [input.name]: initials[input.name] ? false : ''
        })
    , {});
    const inputMap = inputs?.reduce((acc, input)=>({
            ...acc,
            [input.name]: {
                ...input,
                validateSelf: input.validateSelf || true
            }
        })
    , {});
    const dependentsMap = inputs?.reduce((acc, input)=>{
        if (input.dependent?.name) {
            return {
                ...acc,
                [input.name]: {
                    [input.dependent.name]: input.dependent.value
                }
            };
        }
        return acc;
    }, {});
    // check if at least one element fails validation
    const shouldNotSubmit = (errorMap)=>Object.keys(errorMap).some((inputName)=>errorMap[inputName]
        )
    ;
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: inputTypes , 1: setInputTypes  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialInputs);
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialError);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const requiredKeys = inputs?.reduce((acc, input)=>{
            if (input.required || inputTypes[input.name]) {
                return {
                    ...acc,
                    [input.name]: inputTypes[input.name]
                };
            }
            return acc;
        }, {});
        // validate forms
        let errorMap = {};
        errorMap = Object.keys(requiredKeys).reduce((acc, inputName)=>({
                ...acc,
                [inputName]: inputMap[inputName].validateSelf ? !(0,utils_helpers__WEBPACK_IMPORTED_MODULE_2__/* .validate */ .Gu)(requiredKeys[inputName], inputMap[inputName].pattern) : false
            })
        , {});
        if (!shouldNotSubmit(errorMap) && dependentsMap) {
            errorMap = Object.keys(dependentsMap).reduce((acc, dependent)=>{
                const key = Object.keys(dependentsMap[dependent])[0];
                const val = dependentsMap[dependent][key];
                if (requiredKeys[key] == val && !requiredKeys[dependent]) {
                    return {
                        ...acc,
                        [dependent]: true
                    };
                }
                return acc;
            }, {});
        }
        setErrors(errorMap);
        if (shouldNotSubmit(errorMap) && validateForm) {
            // you can add a toast here
            toast({
                title: 'An error occurred. Please check your form for uncompleted fields',
                description: '',
                status: 'error',
                duration: 4000,
                isClosable: true
            });
            errorMap.reset = false;
            errorMap.onSubmit = true;
            return;
        }
        errorMap.onSubmit = true;
        errorMap.reset = false;
        setLoading(true);
        let response;
        try {
            response = await cb(Object.keys(inputTypes).reduce((acc, cur)=>({
                    ...acc,
                    [cur]: inputTypes[cur] ? inputTypes[cur] : undefined
                })
            , {}));
            setLoading(false);
        } catch (error) {
            if (error.response) {
                if (error.response.status === 500) {
                    error.message = 'Network error please try again';
                } else error.message = error?.response?.data?.message || error.message;
            } else error.message = error.message || 'Error occured';
            const err = Array.isArray(error.message) ? error.message.join(', ') : error.message;
            // add a toast or do soemthing with the error
            toast({
                title: err,
                description: '',
                status: 'error',
                duration: 4000,
                isClosable: true
            });
            setLoading(false);
            return;
        }
        return {
            msg: 'success',
            response
        };
    };
    const handleModChange = (values)=>{
        setInputTypes({
            ...inputTypes,
            ...values
        });
    };
    const handleChange = (event)=>{
        event?.preventDefault?.();
        const { name , value , type , checked  } = event.target;
        if (inputMap[name].validateSelf) {
            const newErrors = {
                ...errors,
                [name]: !(0,utils_helpers__WEBPACK_IMPORTED_MODULE_2__/* .validate */ .Gu)(value, inputMap[name].pattern)
            };
            newErrors.onSubmit = false;
            newErrors.reset = false;
            setErrors(newErrors);
        }
        let inputValue = '';
        switch(type){
            case 'checkbox':
                inputValue = !!checked;
                break;
            default:
                inputValue = value;
        }
        setInputTypes({
            ...inputTypes,
            [name]: inputValue
        });
    };
    const resetInputs = ()=>{
        setInputTypes(initialInputs);
        setErrors({
            ...initialError,
            reset: true
        });
    };
    return {
        handleSubmit,
        handleChange,
        inputTypes,
        errors,
        setInputTypes,
        loading,
        resetInputs,
        handleModChange
    };
};


/***/ }),

/***/ 5851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y1": () => (/* binding */ FREE_TEXT_REGEX),
/* harmony export */   "Sd": () => (/* binding */ CREDIT_CARD_REGEX),
/* harmony export */   "Vm": () => (/* binding */ EMAIL_REFEX),
/* harmony export */   "d0": () => (/* binding */ PHONE_NUMBER_REGEX),
/* harmony export */   "_t": () => (/* binding */ FULL_NAME_REGEX),
/* harmony export */   "qC": () => (/* binding */ NUMBER_REGEX),
/* harmony export */   "Wh": () => (/* binding */ URL_REGEX)
/* harmony export */ });
const FREE_TEXT_REGEX = /[^\n]{1,}/;
const CREDIT_CARD_REGEX = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
const EMAIL_REFEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:]|])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:)+)\])/;
const PHONE_NUMBER_REGEX = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
const FULL_NAME_REGEX = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
const NUMBER_REGEX = /^[0-9]{1,}$/;
const URL_REGEX = /^https?:\/\//g;


/***/ })

};
;