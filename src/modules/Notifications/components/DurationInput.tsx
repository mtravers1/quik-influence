import { Box, Text } from '@chakra-ui/react';
import React, { useRef, useState, useEffect } from 'react';

import quikColorConstants from 'utils/constants/colorConstants';

const DurationTrack = ({ numbers, qualifier, border, onChange }: any) => {
  const list = useRef<any>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry: any) => {
          if (!entry.isIntersecting) {
            return;
          }
          onChange(Number.parseFloat(entry.target.textContent));
        });
      },
      { threshold: 0.75 }
    );
    [...list.current.children].forEach(child => {
      //console.log("child", child);
      observer.observe(child);
    });
  }, []);

  const renderNumberJSX = () => {
    return numbers.map((number: number) => (
      <Box
        css={`
          position: relative;
          height: 96px;
          display: flex;
          align-items: center;
          justify-content: center;
          scroll-snap-align: center;
          background-color: ${quikColorConstants.influenceRed};
          color: white;
          font-size: 1.5rem;
          font-weight: 600;

          &::after {
            content: '';
            background-color: white;
            position: absolute;
            height: 8px;
            width: 8px;
            bottom: -4px;
            border-radius: 100%;
            z-index: 5;
          }
        `}
        key={qualifier + number}
      >
        {number}
      </Box>
    ));
  };

  return (
    <Box
      css={`
        width: 33%;
        flex-grow: 1;
        height: 128px;
        overflow-y: hidden;
        border-right: ${border ? '1px solid #c7c7c7' : ''};
      `}
    >
      <Box
        css={`
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid #c7c7c7;
          background-color: #f9f9f9;
        `}
      >
        {qualifier}
      </Box>
      <Box
        css={`
          width: 100%;
          height: 96px;
          overflow-y: scroll;

          scroll-snap-type: y mandatory;
          -ms-overflow-style: none;

          &::-webkit-scrollbar {
            width: 0 !important;
          }
        `}
        ref={list}
      >
        {renderNumberJSX()}
      </Box>
    </Box>
  );
};

interface DurationInputProps {
  /**
   * The duration in minutes
   * @default 0
   * @type number
   * @memberof DurationInputProps
   * @example 60
   **/
  onChange: (value: number) => void;
}

const DurationInput = ({ onChange }: DurationInputProps) => {
  const [duration, setDuration] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const value = days * 1440 + hours * 60 + minutes;
    if (onChange && typeof onChange === 'function') {
      onChange(value);
    }
    setDuration(value);
  }, [days, hours, minutes]);

  return (
    <>
      <Text fontWeight="semibold" my="5">
        {duration} minutes
      </Text>
      <Box
        css={`
          position: relative;
          border: 1px solid #c7c7c7;
          height: 128px;
          width: 256px;
          display: flex;
          align-items: center;
          box-shadow: 0px 0px 16px 0px rgba(255, 255, 255, 0.1);
        `}
      >
        <DurationTrack
          numbers={[...Array(32).keys()]}
          border
          qualifier="day(s)"
          onChange={(value: number) => setDays(value)}
        />
        <DurationTrack
          numbers={[...Array(24).keys()]}
          border
          qualifier="hour(s)"
          onChange={(value: number) => setHours(value)}
        />
        <DurationTrack
          numbers={[...Array(60).keys()]}
          qualifier="min(s)"
          onChange={(value: number) => setMinutes(value)}
        />
      </Box>
    </>
  );
};

export default DurationInput;
