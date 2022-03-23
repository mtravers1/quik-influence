import { useState, useEffect } from "react";

const useResponsiveFilter = () => {
  const [open, setOpen] = useState(true);
  const [openFilter, setOpenFilter] = useState(false);
  const [responsiveFilterMode, setResponsiveFilterMode] = useState(true);

  const openBar = () => {
    setOpen(!open);
  };

  const close = () => {
    setOpen(false);
  };

  const toggleFilter = (state: any) => {
    if (typeof state === "boolean") setOpenFilter(state);
    setOpenFilter((prevtoogle) => !prevtoogle);
  };

  useEffect(() => {
    const closeSlider = () => {
      if (typeof window !== "undefined") {
        const smallerScreen = window.matchMedia("(max-width: 50em)");

        if (smallerScreen?.matches) {
          close();
        } else {
          openBar();
        }

        const smallerFilterScreen = window.matchMedia("(max-width: 1800px)");

        if (smallerFilterScreen?.matches) {
          toggleFilter(true);
          setResponsiveFilterMode(true);
        } else {
          toggleFilter(false);
          setResponsiveFilterMode(false);
        }
      }
    };

    closeSlider();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", closeSlider);
    }
    // window.addEventListener("scroll", close);
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", closeSlider);
        window.removeEventListener("scroll", close);
      }
    };
  }, []);

  return {
    open,
    openFilter,
    responsiveFilterMode,
    toggleFilter,
  };
};

export default useResponsiveFilter;
