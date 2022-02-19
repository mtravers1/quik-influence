import React, { useEffect, useRef, useState } from 'react';

const defaultStyles = {
  position: 'static',
  top: '0',
  background: 'linear-gradient(#000, transparent)',
};

const NavBar = ({ children }: { children: (styles: any) => {} }) => {
  const navRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const currentScroll = useRef<number>();
  const [styles, setStyles] = useState({ ...defaultStyles });

  useEffect(() => {
    let reqId: number;

    const scroll =
      window.requestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };

    const loop = () => {
      if (currentScroll.current !== window.scrollY) {
        currentScroll.current = window.scrollY;

        if (currentScroll.current > 150) {
          let newState = {
            position: 'fixed',
            top: '-200px',
            background: '#000',
            transition: 'unset',
          };

          if (currentScroll.current > 250) {
            newState = {
              position: 'fixed',
              top: '0',
              background: '#000',
              transition: 'top 0.5s ease',
            };
          }

          setStyles(prevStyles => ({
            ...prevStyles,
            ...newState,
          }));
        } else {
          setStyles(defaultStyles);
        }
      }

      reqId = scroll(loop);
    };
    loop();
    return () => {
      window.cancelAnimationFrame(reqId);
    };
  }, [currentScroll, navRef]);

  return <div ref={navRef}>{children(styles)}</div>;
};

export default NavBar;
