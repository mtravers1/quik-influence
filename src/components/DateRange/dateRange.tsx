import { FC } from 'react';
import { DateRange } from 'components/DateRange';

export const CustomDateRange: FC<{
  handleChange?: any;
  name?: string;
  disableDates?: any;
  endDate?: any;
}> = ({ handleChange, name, disableDates, endDate }) => {
  return (
    <DateRange
      handleChange={handleChange}
      name={name}
      disableDates={disableDates}
      endDate={endDate}
    />
  );
};
