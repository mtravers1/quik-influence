import DataTable from 'components/DataTable';

export const leadsTableColumns = [
  {
    Header: 'Lead Id',
    accessor: 'id',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Phone',
    accessor: 'phone',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'State',
    accessor: 'state',
  },
  {
    Header: 'Created On',
    accessor: 'createdOn',
  },
];

const Orders = () => {
  const myLeadData: any = [];

  return (
    <DataTable
      title="Leads"
      data={myLeadData}
      columns={leadsTableColumns}
      onRowSelected={() => {}}
      variant="leadTable"
    />
  );
};

export default Orders;
