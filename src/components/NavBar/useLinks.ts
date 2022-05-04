import { useState } from 'react';

const useLinks = (
  links: [
    {
      link: string;
      name: string;
      isNotClickable?: boolean;
      submenu: [{ link: string; name: string }];
    }
  ]
) => {
  const [accordionMap, setAccordionMap] = useState<any>({});

  const isActive = (path: string, link: string, index: number) => {
    return path.split('/')[index] === link?.split('/')[index];
  };

  const getLinkColor = (path: string, link: string, index: number) => {
    return isActive(path, link, index) ? 'red' : '#333';
  };

  const showBorder = (i: number) => {
    return i !== 0 || i !== links.length - 1 ? '2px solid #414141' : 'none';
  };

  const setMap = (index: number) => {
    setAccordionMap((prevMap: any) => {
      const newlinks = Object.keys(prevMap).reduce((acc, key) => {
        return { ...acc, [key]: false };
      }, {});

      return { ...newlinks, [index]: !prevMap[index] };
    });
  };

  return { accordionMap, setMap, isActive, getLinkColor, showBorder };
};

export default useLinks;
