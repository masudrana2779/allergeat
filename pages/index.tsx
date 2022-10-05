import type { NextPage } from "next";
import BannerComponent from "../components/Banner/Banner.component";
import Layout from "../components/Layouts";

const Home: NextPage = () => {
  return (
    <Layout>
      <BannerComponent />
    </Layout>
  );
};

export default Home;
