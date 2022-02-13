import type { NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'components/NextLink';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Quik Influence!TEST</a>
        </h1>

        <p className={styles.description}>Get started by logging in </p>

        <div className={styles.grid}>
          <NextLink href="/dashboard" className={styles.card}>
            <h2>Get Started &rarr;</h2>
          </NextLink>
        </div>
      </main>
    </div>
  );
};

export default Home;
