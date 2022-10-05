import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Box } from '@chakra-ui/react';

export const FizzySelect: FC<{
  title: string;
  styles: any;
  defaultText: string;
  options: {
    name: string;
    value: string;
  }[];
  handleSelect: any;
}> = ({ title, styles, defaultText, options = [], handleSelect }) => {
  return (
    <Box display="flex" alignItems="center" {...styles}>
      <Box width="130px" color="#0bcbfb" fontWeight="500" fontSize="20px">
        {title}
      </Box>
      <Box position="relative" flexGrow={1}>
        <Box
          className="select-arrow-removed"
          as="select"
          backgroundColor="#000"
          border="1px solid #0bcbfb"
          padding="10px 20px"
          borderTopLeftRadius="15px"
          borderBottomRightRadius="15px"
          height="48px"
          width="100%"
          color="#0bcbfb"
          fontWeight="500"
          onChange={handleSelect}
        >
          <Box as="option" value="" disabled>
            {defaultText}
          </Box>

          {options.map((item: any) => (
            <Box as="option" value={item.value}>
              {item.name}
            </Box>
          ))}
        </Box>
        <Box
          height="48px"
          width="48px"
          lineHeight="48px"
          position="absolute"
          top="0"
          right="0"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderLeft="1px solid #0bcbfb"
        >
          <FontAwesomeIcon
            icon={faAngleDown}
            style={{ margin: 'auto 10px' }}
            color="#0bcbfb"
          />
        </Box>
      </Box>
    </Box>
  );
};
