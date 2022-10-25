import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/Layouts";
import SearchPageComponent from "../components/SearchPage";

const SearchPage: NextPage = () => {
  const router = useRouter();

  const s = router.query.s;

  useEffect(() => {}, []);
  return (
    <Layout>
      <SearchPageComponent searchQuery={s} />
    </Layout>
  );
};
export default SearchPage;
