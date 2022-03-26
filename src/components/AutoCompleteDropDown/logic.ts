import { useState, useEffect, useRef } from 'react';
import { stringSearch } from 'utils/helpers';

const useLogic = (options: { name: string; value: any }[], onSelect: any) => {
  const [value, setValue] = useState('');
  const [innerOpts, setInnerOpts] = useState(options);
  const [showDropDown, setShowDropDown] = useState(false);
  const [activeIndex, setActIndex] = useState<any>(-1);
  const parent = useRef<any>();
  const activeIndexRef = useRef<any>(activeIndex);
  const suggestionsRef = useRef<any>(innerOpts);

  const setActiveIndex = (value: number) => {
    activeIndexRef.current = value;
    setActIndex(value);
  };

  const handleChange = (e: any) => {
    const val = e.target.value;
    setValue(val);

    onSelect({ target: { value: val } });
    setActiveIndex(-1);
  };

  const handleSelect = (e: any) => {
    setValue(e.name);
    setShowDropDown(false);
    onSelect({ target: { value: e } });
    setActiveIndex(-1);
  };

  useEffect(() => {
    if (value !== '') {
      const newOptions = options.filter(opt => stringSearch(value, opt.name));
      setInnerOpts(newOptions);
      suggestionsRef.current = newOptions;
    } else {
      setInnerOpts(options);
      suggestionsRef.current = options;
    }

    return () => {};
  }, [value, options]);

  useEffect(() => {
    if (showDropDown) {
      if (typeof window !== 'undefined')
        document.body.addEventListener('keydown', handleKeyDown);
    }

    if (!showDropDown) {
      if (typeof window !== 'undefined')
        document.body.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, [showDropDown]);

  const handleFocus = () => {
    setShowDropDown(true);
  };

  const handleBlur = (e: any) => {
    const leavingParent = !parent.current.contains(e.relatedTarget);

    if (leavingParent && e.target !== parent.current) {
      setShowDropDown(false);
      setActiveIndex(-1);
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'ArrowUp' && activeIndexRef.current > 0) {
      event.preventDefault();
      setActiveIndex(activeIndexRef.current - 1);
    }

    if (
      event.key === 'ArrowDown' &&
      activeIndexRef.current < suggestionsRef.current.length - 1
    ) {
      event.preventDefault();
      setActiveIndex(activeIndexRef.current + 1);
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      if (activeIndexRef.current !== -1) {
        const activeOpt = innerOpts.filter(
          (data: any, idx: any) => idx === activeIndexRef.current
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
    value,
    activeIndex,
  };
};

export default useLogic;
