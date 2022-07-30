import { OrdersTable } from './table';
import { FizzyLayout } from 'layout/fizzy';

const Orders = () => {
  return (
    <FizzyLayout maxWidth="1440px">
      <OrdersTable />
    </FizzyLayout>
  );
};

export default Orders;
