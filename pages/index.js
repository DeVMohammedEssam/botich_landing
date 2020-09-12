import Head from "next/head";
import Layout from "components/Layout";

const Home = () => (
  <Layout>
    <div className="home">
      <Head>
        <title>Botich</title>
      </Head>
      <header>
        <div className="avoid-navbar container">header</div>
      </header>
    </div>

    <style jsx>{``}</style>
  </Layout>
);

export default Home;
