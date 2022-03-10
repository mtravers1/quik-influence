import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';

const TruncatedText: FC<{ lines?: number; as?: any }> = ({
  lines = 1,
  children,
  as = 'span',
}) => {
  const style = css`
    & {
      display: -webkit-box;
      -webkit-line-clamp: ${lines};
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      hyphens: auto;
    }
  `;

  return (
    <Box css={style} as={as}>
      {children}
    </Box>
  );
};

export default TruncatedText;
