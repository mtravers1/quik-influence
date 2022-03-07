import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface PaginationProp {
  currentPage: number;
  totalPages: number;
  count: number;
  onChange: any;
}
const Pagination = ({
  currentPage,
  totalPages,
  count,
  onChange
}: PaginationProp) => {
  const handleButtonClick = (type: string) => {
    if (type === "backward") {
      if (currentPage <= 1) return;
      let nextPage = Number(currentPage) - 1;
      onChange(nextPage);
    } else {
      if (currentPage >= totalPages) return;
      let nextPage = Number(currentPage) + 1;
      onChange(nextPage);
    }
  };
  return (
    <Flex width="full" justifyContent="flex-end" my={8}>
      <button type="button" onClick={() => handleButtonClick("backward")}>
        <FontAwesomeIcon
          icon={faAngleLeft as IconProp}
          style={{ margin: "auto 10px" }}
        />
      </button>
      <Text>
        Page <b>{currentPage}</b> of {totalPages}
      </Text>
      <button type="button" onClick={() => handleButtonClick("forward")}>
        <FontAwesomeIcon
          icon={faAngleRight as IconProp}
          style={{ margin: "auto 10px" }}
        />
      </button>
    </Flex>
  );
};

export default Pagination;
