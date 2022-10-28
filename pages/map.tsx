import type { NextPage } from "next";
import Layout from "../components/Layouts";
import MapDetailsPage from "../components/MapDetails";

const Map: NextPage = () => {
  return (
    <Layout>
      <MapDetailsPage />
    </Layout>
  );
};
export default Map;
