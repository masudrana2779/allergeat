import type { NextPage } from "next";
import BannerComponent from "../components/Banner/Banner.component";
import FriendlyChoicesComponent from "../components/FriendlyChoices/FriendlyChoices.component";
import Layout from "../components/Layouts";

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <BannerComponent />
        <FriendlyChoicesComponent />
      </>
    </Layout>
  );
};

export default Home;
