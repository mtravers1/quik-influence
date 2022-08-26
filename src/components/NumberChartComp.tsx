import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '@chakra-ui/layout';
import Image from 'next/image';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import loader from 'assets/loader.gif';
import { ChartContainer } from './ChartContainer';
import { formatter } from 'utils/helpers';

export const NumberChartComp: FC<{
  name: String;
  value: number;
  icon: any;
  loading: boolean;
  isCurrency?: boolean;
  styles?: any;
}> = ({
  name,
  value,
  icon = '',
  loading = false,
  isCurrency = false,
  styles = {},
}) => {
  const addSign = (value?: number) => {
    if (value === undefined) return 0;

    if (isCurrency) {
      return formatter.format(value);
    }
    return value;
  };

  return (
    <ChartContainer styles={styles}>
      <Box marginBottom="20px">
        <FontAwesomeIcon
          icon={icon as IconProp}
          style={{ width: '35px', height: '35px' }}
        />
      </Box>

      <Box as="h2" fontWeight="500">
        {name}
      </Box>

      <Box
        display="flex"
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
        color="red"
      >
        {!loading ? (
          <Box fontSize="40px" as="h2" fontWeight="600">
            {addSign(value)}
          </Box>
        ) : (
          <Image src={loader} alt="loader" width={60} height={60} />
        )}
      </Box>
    </ChartContainer>
  );
};
