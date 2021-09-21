import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>NextJS Task List</title>
      </Head>
      <section>
        <div></div>
      </section>
    </Layout>
  );
};

export default Home;
