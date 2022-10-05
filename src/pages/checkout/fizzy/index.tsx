import { useEffect, useState, FC } from 'react';
import { useRouter } from 'next/router';
import { axiosInstance } from 'utils/helpers';
import { FizzyHomePage } from 'components/ExternalPages/Fizzy/homepage';
import { FizzyCheckout } from 'components/ExternalPages/Fizzy/paymentSection';

const filterUserData = (userData: any) => ({
  firstName: userData.firstName,
  lastName: userData.lastName,
  phone: userData.phone,
  email: userData.email,
  address: userData.address,
  city: userData.city,
  state: userData.state,
  country: userData.country,
  token: userData.token,
  postalCode: userData.postalCode,
  id: userData.id,
});

const filterOtherInfo = (otherInfoData: any) => ({
  campaignId: otherInfoData.campaignId,
});

const Fizzy: FC<{ products: any; additionalData: any }> = ({
  products = [],
  additionalData,
}) => {
  const router = useRouter();
  const [currentProduct, setCurrentProduct] = useState<any>(0);
  const [currentFlavour, setCurrentFlavour] = useState<string>(
    additionalData.flavours[0].value
  );
  const [quantity, setQuantity] = useState<number>(1);

  const [page, setPage] = useState(0);
  const [openModal, setOpenModal] = useState<{
    status: boolean;
    state: string;
    message?: {
      title?: string;
      description?: string;
    };
  }>({
    status: false,
    state: '',
    message: {},
  });

  const [userDataInfo, setUserData] = useState<any>();
  const [otherInfo, setOtherInfo] = useState<any>({
    campaignId: router.query.campaignId,
  });

  const [fetchdata, sethasFetched] = useState(false);

  useEffect(() => {
    let campaign_data;

    campaign_data = localStorage.getItem('campaign_data');

    if (campaign_data) {
      const parsed_campaign_data = JSON.parse(campaign_data);
      setUserData(filterUserData(parsed_campaign_data));
      setOtherInfo(filterOtherInfo(parsed_campaign_data));
    }

    if (router.query.refresh) {
      window.location.href = `${window.location.origin}${window.location.pathname}?campaign_admin_id=${router?.query.campaign_admin_id}&campaignId=${router?.query.campaignId}`;
    }

    sethasFetched(true);
  }, []);

  const openLoginOtp = () => {
    setOpenModal({ status: true, state: 'login' });
  };

  useEffect(() => {
    if (!fetchdata) {
      return;
    }

    if (!userDataInfo || !otherInfo) {
      openLoginOtp();
    }
  }, [fetchdata, userDataInfo, otherInfo]);

  const onClose = () => {
    setOpenModal({ status: false, state: '' });
  };

  const updateOnLogin = (data: any) => {
    let userData: any;
    const campaign_data = localStorage.getItem('campaign_data');
    if (campaign_data) {
      userData = JSON.parse(campaign_data) || {};
    }

    const newuserData = { ...userData, ...data.user, token: data.token };
    localStorage.setItem('campaign_data', JSON.stringify(newuserData));

    const newUserDataInfo = filterUserData(newuserData);

    setUserData(newUserDataInfo);
    onClose();

    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  const showErrorMessage = (message: {}) => {
    setOpenModal({ status: true, state: 'error', message });
  };

  return (
    <>
      {page === 0 && (
        <FizzyHomePage
          products={products}
          additionalData={additionalData}
          currentProduct={currentProduct}
          setCurrentProduct={setCurrentProduct}
          setCurrentFlavour={setCurrentFlavour}
          quantity={quantity}
          setQuantity={setQuantity}
          setPage={setPage}
        />
      )}

      {page === 1 && (
        <FizzyCheckout
          products={products}
          userDataInfo={userDataInfo}
          otherInfo={otherInfo}
          setOpenModal={setOpenModal}
          showErrorMessage={showErrorMessage}
          openModal={openModal}
          updateOnLogin={updateOnLogin}
          currentFlavour={currentFlavour}
          quantity={quantity}
          currentProduct={currentProduct}
          setPage={setPage}
        />
      )}
    </>
  );
};

export async function getServerSideProps(ctx: any) {
  const { campaignId } = ctx.query;

  let products = [];
  let additionalData = {
    description: '',
    price_html: '',
    flavours: [],
  };

  try {
    const response = await axiosInstance.get(
      `/users/campaign/products/${campaignId}`
    );

    const productResponse = response.data.data;

    products = productResponse?.map((product: any, i: number) => ({
      images: product.meta.moreInfo.images.map((image: any) => image.src),
      id: product.id,
      name: product.meta.moreInfo.name,
      meta: {
        price: product.meta.price,
        weight: product.meta.weight,
        length: product.meta.length,
        width: product.meta.width,
        height: product.meta.height,
      },
      option: product.meta.productType,
      moreInfo: product.meta.moreInfo,
    }));

    additionalData.description = productResponse[0].meta.moreInfo.description;
    additionalData.price_html = productResponse[0].meta.moreInfo.price_html;
    additionalData.flavours =
      productResponse[0].meta.moreInfo.attributes[0].options.map(
        (option: string) => ({
          name: option,
          value: option,
        })
      );

    products.sort((a: any, b: any) => b.option.localeCompare(a.option));
  } catch (err) {
    console.log(err);
  }

  return { props: { products, additionalData } };
}

export default Fizzy;
