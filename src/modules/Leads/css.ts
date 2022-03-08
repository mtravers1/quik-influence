import {
  basicTextTheme,
  basicDarkTextTheme,
  tableTextTheme,
  tableBorderTheme
} from "utils/constants/colorConstants";

import { css } from "@emotion/react";

export const getStyles = (colorMode: string) => css`
& {
  border: 1px solid ${tableBorderTheme[colorMode]};

  td, th {
    border-top: 1px solid ${tableBorderTheme[colorMode]};
    border-bottom: 1px solid ${tableBorderTheme[colorMode]};
    padding: 15px;
  }

  th {
    color: ${tableTextTheme[colorMode]}
  }

  td {
    color: ${tableTextTheme[colorMode]}
  }
}
}
`;
