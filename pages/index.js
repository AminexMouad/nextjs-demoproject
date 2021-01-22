import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import Link from 'next/link';
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am Mouad Amine, 23 years old, from Casablanca. I am passionate about
          modern technologies, especially web and mobile development, I spend my
          free time reading. I hold an engineering degree in computer methods
          applied to business management at the Moroccan School of Engineering
          Sciences, I am currently working as a full-stack developer at Umanis
          since February, my mission was to develop a mobile application for a
          Moroccan client with the framework React Native for the front end and
          Java 7 with implementation Jersey and specification Jax RS for the
          backend. This experience allowed me to acquire reflexes of debugging
          and finding solutions for the problems faced during development. I
          also worked with some REST-APIs provided by the client to accelerate
          the development, as a version of control we used GitLab using the tool
          Git, and we used Agile as a development methodology because the client
          did not have a clear vision of the application, which is why we
          adopted this methodology .. so the project was split in sprints to
          avoid feedback and discuss with the customer the next features to be
          developed. ]
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>

        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a> {title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
