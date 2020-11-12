import { GetStaticProps } from 'next';
import Head from 'next/head'
import { RichText } from 'prismic-reactjs';
import { getPage } from '../api';
import Layout from '../components/layout/Layout'
import styles from '../styles/Home.module.css'

export default function Home({ pageData }) {
  const { title } = pageData;
  console.log(title, pageData);
  return (
    <Layout className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <RichText render={title} />

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const pageData = await getPage('home');
  return {
    props: {
      pageData: pageData.data,
    },
  };
};