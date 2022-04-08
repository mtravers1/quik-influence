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
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useTable, useSortBy } from 'react-table';
import React from 'react';

const DataTable = () => {
  const data = React.useMemo(
    () => [
      {
        cam: 'inches',
        aff: 'millimetres (mm)',
        mod: 25.4,
        ent: 4343,
        cro: 223232
      }, 
      {
        cam: 'inches',
        aff: 'millimetres (mm)',
        mod: 25.4,
        ent: 4343,
        cro: 223232
      }, 
      {
        cam: 'inches',
        aff: 'millimetres (mm)',
        mod: 25.4,
        ent: 4343,
        cro: 223232
      }, 
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Campaigns',
        accessor: 'cam',
      },
      {
        Header: 'Affiliate',
        accessor: 'aff',
      },
      {
        Header: 'Model',
        accessor: 'mod',
        isNumeric: true,
      },
      {
        Header: 'Engagement Type',
        accessor: 'ent',
        isNumeric: true,
      },
      {
        Header: 'Created on',
        accessor: 'cro',
        isNumeric: true,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    //@ts-ignore
  } = useTable({ columns, data }, useSortBy);

  return (
    <Table {...getTableProps()}>
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
                    fontSize="lg"
                  >
                    <>
                      {column.render('Header')}
                      <chakra.span pl="4">
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <TriangleDownIcon aria-label="sorted descending" />
                          ) : (
                            <TriangleUpIcon aria-label="sorted ascending" />
                          )
                        ) : null}
                      </chakra.span>
                    </>
                  </Th>
                )
              )}
            </Tr>
          )
        )}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map(
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
  );
};

export default DataTable;
