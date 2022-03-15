import { Box, Flex, Text } from "@chakra-ui/react";
import React, { SyntheticEvent } from "react";
import queryString from "query-string";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import quikColorConstants from "utils/constants/colorConstants";
import DropdownSelect from "components/DropdownSelect";
import { useRouter } from "next/router";
import { DEFAULT_PAGE_SIZE } from "utils/constants";

const PageSizeOptionsValue = [
  { label: "20", value: "20" },
  { label: "50", value: "50" },
  { label: "100", value: "100" },
  { label: "200", value: "200" }
];

interface PaginationProp {
  currentPage: number;
  totalPages: number;
  count: number;
  onChange: any;
  pageSize?: string;
}
const Pagination = ({
  currentPage,
  totalPages,
  count,
  onChange,
  pageSize = DEFAULT_PAGE_SIZE
}: PaginationProp) => {
  const router = useRouter();

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

  const handlePageSizeChange = (pageSize: string) => {
    const params = router.query;
    params.pageSize = pageSize;
    router.push(`?${queryString.stringify(params)}`);
  };

  return (
    <Flex justifyContent="flex-end">
      {!!pageSize ? (
        <Flex>
          <Text width="15rem" fontSize="10px" my="auto" color={quikColorConstants.greyLighter}>
            Change Page Size:
          </Text>
          <DropdownSelect
            size="lg"
            options={PageSizeOptionsValue}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handlePageSizeChange(e.target.value)
            }
            selected={router.query.pageSize as string || pageSize}
            selectProps={{
              border: 0,
              width: "10rem",
              fontSize: "xl",
              marginTop: '1.5rem',
            }}
          />
        </Flex>
      ) : null}
      <Flex my={8}>
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
    </Flex>
  );
};

export default Pagination;
