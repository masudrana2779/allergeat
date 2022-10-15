import type { NextPage } from "next";
import Layout from "../components/Layouts";
import SearchPageComponent from "../components/SearchPage";

const SearchPage: NextPage = () => {
  return (
    <Layout>
      <SearchPageComponent />
    </Layout>
  );
};
export default SearchPage;
