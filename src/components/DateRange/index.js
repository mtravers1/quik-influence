import React, { useEffect, useState, useRef } from 'react';
import { addDays, format } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Menu, MenuButton, MenuList } from '@chakra-ui/react';

export const DateRange = ({
  handleChange,
  name,
  disableDates = [],
  endDate = 7,
}) => {
  const [direction, setDirection] = useState('horizontal', 'vertical');
  const [showSelectionPreview, setShowSelectionPreview] = useState(true);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), endDate),
      key: 'selection',
    },
  ]);

  useEffect(() => {
    function init() {
      if (window.matchMedia('(max-width: 1300px)').matches) {
        setDirection('vertical');
      } else {
        setDirection('horizontal');
      }

      if (window.matchMedia('(max-width: 800px)').matches) {
        setShowSelectionPreview(false);
      } else {
        setShowSelectionPreview(true);
      }
    }

    init();

    window.addEventListener('resize', init);
    return () => {
      window.removeEventListener('resize', init);
    };
  }, []);

  const handleDateChange = date => {
    setDate(date);
  };

  const handleClose = e => {
    handleChange({
      startDate: format(date[0].startDate, 'yyyy-MM-dd', new Date()),
      endDate: format(date[0].endDate, 'yyyy-MM-dd', new Date()),
    });
  };

  return (
    <Menu onClose={handleClose}>
      <MenuButton
        width="fit-content"
        fontSize="16px"
        border="1px solid red"
        padding="5px 10px"
        borderRadius="5px"
        boxShadow="0 0 5px 0 rgba(0, 0, 0, 0.5)"
      >
        {format(date[0].startDate, 'MM-dd-yy', new Date())} {' - '}
        {format(date[0].endDate, 'MM-dd-yy', new Date())}
        <FontAwesomeIcon icon={faAngleDown} style={{ margin: 'auto 10px' }} />
      </MenuButton>
      <MenuList>
        <DateRangePicker
          onChange={item => {
            handleDateChange([item.selection]);
          }}
          showSelectionPreview={showSelectionPreview}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={date}
          direction={direction}
          rangeColors={['#000']}
          maxDate={new Date()}
          disabledDates={disableDates}
        />
      </MenuList>
    </Menu>
  );
};
