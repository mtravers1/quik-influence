import { useRouter } from 'next/router';

const AllProducts = () => {
  const router = useRouter();
  const { params } = router.query;

  return (
    <div>
      <h1>All Products</h1>
    </div>
  );
};

export default AllProducts;
