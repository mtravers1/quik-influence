import Head from 'next/head';
import { InferGetStaticPropsType, GetStaticProps } from 'next';
import { axiosInstance } from 'utils/helpers';
import styles from '../../styles/Home.module.css';
import {
  APP_NAME,
  HOME_PAGE_SERVICES_INFLUENCER_ACCESS,
  HOME_PAGE_NAME,
} from 'utils/constants/pageDataConstants';
import { CONTENT_URL } from 'utils/constants';
import NavBar from 'components/NavBar';
import Banner from 'components/HomePage/Banner';
import Footer from 'components/HomePage/Footer';
import ImgSec from 'components/HomePage/ImgSec';

type IpageContent = {
  banner: any;
  footer: any;
  info: any;
};

const Home = ({
  pageContent,
  nav,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Quick Influence</title>
        <meta
          name="description"
          content="Access to thousands of real leads through our multi-platform
                funnel and management system."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBar links={nav[0].content.navLinks} />
        <Banner banner={pageContent.banner} height="60vh" minHeight="unset" />
        <ImgSec info={pageContent.info} />
        <Footer footer={pageContent.footer} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content = await axiosInstance.get(
    `${CONTENT_URL}?resource=${APP_NAME}&page=${HOME_PAGE_SERVICES_INFLUENCER_ACCESS}`
  );

  const footer = await axiosInstance.get(
    `${CONTENT_URL}?resource=${APP_NAME}&page=${HOME_PAGE_NAME}&type=footer`
  );

  const pageContent: IpageContent = content.data.data.reduce(
    (acc: any, cur: any) => ({ ...acc, [cur.type]: cur }),
    {}
  );

  return {
    props: {
      pageContent: { ...pageContent, footer: footer.data.data[0] },
    },
    revalidate: 10,
  };
};

export default Home;
