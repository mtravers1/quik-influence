import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  TableColumnHeaderProps,
  As,
  OmitCommonProps,
  TableCellProps,
  TableRowProps,
  Flex,
  Text,
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import {
  Column,
  Row,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// Use declaration merging to extend types https://github.com/tannerlinsley/react-table/commit/7ab63858391ebb2ff621fa71411157df19d916ba
declare module 'react-table' {
  export interface TableOptions<D extends object>
    extends UsePaginationOptions<D>,
      UseFiltersOptions<D> {}

  export interface TableInstance<D extends object = {}>
    extends UsePaginationInstanceProps<D>,
      UseRowSelectInstanceProps<D> {}

  export interface TableState<D extends object = {}>
    extends UsePaginationState<D> {}

  export interface ColumnInstance<D extends object = {}>
    extends UseSortByColumnProps<D> {}
}

type TableProps<D extends object = {}> = {
  title: string;
  data: any;
  pageSize?: number;
  tableHeading?: React.ReactNode;
  columns: Column<D>[];
  onRowClick?: (row: Row<D>) => void;
  onRowSelected?: (rows: any[]) => void;
  variant?: string;
};

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }: { indeterminate: any }, ref) => {
    const defaultRef = React.useRef<any>();
    const resolvedRef: any = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <chakra.input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

const DataTable = <D extends {}>({
  title,
  columns,
  data,
  pageSize: initialPageSize,
  onRowSelected,
  variant,
}: TableProps<D>) => {
  const tableColumns = React.useMemo(() => columns, [columns]);

  const {
    getTableProps,
    headerGroups,
    prepareRow,
    getTableBodyProps,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    selectedFlatRows,
    state: { pageIndex },
  } = useTable<D>(
    {
      columns: tableColumns,
      data,
      initialState: { pageIndex: 0, pageSize: initialPageSize },
    },
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({
            getToggleAllRowsSelectedProps,
          }: {
            getToggleAllRowsSelectedProps: any;
          }) => (
            <chakra.div justifyContent="center" d="flex">
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </chakra.div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }: { row: any }) => (
            <chakra.div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </chakra.div>
          ),
        },
        ...columns,
      ]);
    }
  );

  React.useEffect(() => {
    if (
      selectedFlatRows &&
      onRowSelected &&
      typeof onRowSelected === 'function'
    ) {
      onRowSelected(selectedFlatRows.map(d => d.original));
    }
  }, [selectedFlatRows]);

  return (
    <>
      <Flex flex={1} justifyContent="flex-end" mb="4" mr="8">
        <Flex mr="16">
          {/*<Text fontSize="md">
            Sort by:{' '}
            <Text as="span" fontWeight="semibold">
              Alphabet
            </Text>
          </Text>
         */}
        </Flex>
        <Flex>
          <Text fontSize="md">
            Total:{' '}
            <Text as="span" fontWeight="semibold">
              {data?.length} {title}
            </Text>
          </Text>
        </Flex>
      </Flex>
      <Table variant={variant} {...getTableProps()}>
        <Thead>
          {headerGroups.map(
            (
              headerGroup: {
                getHeaderGroupProps: () => JSX.IntrinsicAttributes &
                  OmitCommonProps<
                    React.DetailedHTMLProps<
                      React.HTMLAttributes<HTMLTableRowElement>,
                      HTMLTableRowElement
                    >,
                    keyof TableRowProps
                  > &
                  TableRowProps &
                  OmitCommonProps<any, keyof TableRowProps> & {
                    as?: As<any> | undefined;
                  };
                headers: any[];
              },
              hdIndex
            ) => (
              <Tr key={hdIndex} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(
                  (
                    column: {
                      getHeaderProps: (arg0: any) => JSX.IntrinsicAttributes &
                        OmitCommonProps<
                          React.DetailedHTMLProps<
                            React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
                            HTMLTableHeaderCellElement
                          >,
                          keyof TableColumnHeaderProps
                        > &
                        TableColumnHeaderProps &
                        OmitCommonProps<any, keyof TableColumnHeaderProps> & {
                          as?: As<any> | undefined;
                        };
                      getSortByToggleProps: () => any;
                      isNumeric: boolean | undefined;
                      render: (
                        arg0: string
                      ) =>
                        | boolean
                        | React.ReactChild
                        | React.ReactFragment
                        | React.ReactPortal
                        | null
                        | undefined;
                      isSorted: any;
                      isSortedDesc: any;
                    },
                    clIndex
                  ) => (
                    <Th
                      key={clIndex}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      isNumeric={column.isNumeric}
                      fontSize="1rem"
                      padding=".5rem"
                      pr=".54rem"
                      textTransform="capitalize"
                    >
                      {column.render('Header')}
                      <chakra.span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <TriangleDownIcon aria-label="sorted descending" />
                          ) : (
                            <TriangleUpIcon aria-label="sorted ascending" />
                          )
                        ) : null}
                      </chakra.span>
                    </Th>
                  )
                )}
              </Tr>
            )
          )}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map(
            (
              row: {
                getRowProps: () => JSX.IntrinsicAttributes &
                  OmitCommonProps<
                    React.DetailedHTMLProps<
                      React.HTMLAttributes<HTMLTableRowElement>,
                      HTMLTableRowElement
                    >,
                    keyof TableRowProps
                  > &
                  TableRowProps &
                  OmitCommonProps<any, keyof TableRowProps> & {
                    as?: As<any> | undefined;
                  };
                cells: any[];
              },
              trIndex
            ) => {
              //@ts-ignore
              prepareRow(row);
              return (
                <Tr key={trIndex} {...row.getRowProps()}>
                  {row.cells.map(
                    (
                      cell: {
                        getCellProps: () => JSX.IntrinsicAttributes &
                          OmitCommonProps<
                            React.DetailedHTMLProps<
                              React.TdHTMLAttributes<HTMLTableDataCellElement>,
                              HTMLTableDataCellElement
                            >,
                            keyof TableCellProps
                          > &
                          TableCellProps &
                          OmitCommonProps<any, keyof TableCellProps> & {
                            as?: As<any> | undefined;
                          };
                        column: {
                          isNumeric: boolean | undefined;
                        };
                        render: (
                          arg0: string
                        ) =>
                          | boolean
                          | React.ReactChild
                          | React.ReactFragment
                          | React.ReactPortal
                          | null
                          | undefined;
                      },
                      tdIndex
                    ) => (
                      <Td
                        key={tdIndex}
                        {...cell.getCellProps()}
                        isNumeric={cell.column.isNumeric}
                        textTransform="capitalize"
                      >
                        {cell.render('Cell')}
                      </Td>
                    )
                  )}
                </Tr>
              );
            }
          )}
        </Tbody>
      </Table>
      {/* Pagination */}
      <Flex
        width="full"
        justifyContent="flex-end"
        alignItems="center"
        my={8}
        mt={2}
      >
        {canPreviousPage && (
          <chakra.button type="button" onClick={() => previousPage()}>
            <FontAwesomeIcon
              icon={faCaretLeft as IconProp}
              style={{ margin: 'auto 10px' }}
            />
          </chakra.button>
        )}
        <Text fontSize="md" mr="6">
          Page <b>{pageIndex + 1}</b> of {pageOptions.length}
        </Text>
        {canNextPage && (
          <chakra.button type="button" onClick={() => nextPage()}>
            <FontAwesomeIcon
              icon={faCaretRight as IconProp}
              style={{ margin: 'auto 10px' }}
            />
          </chakra.button>
        )}
      </Flex>
    </>
  );
};

export default DataTable;

DataTable.defaultProps = {
  pageSize: 50,
};
