import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layouts";
import MapPage from "../../components/Map";

const Map: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    axios
      .get("/api/restaurant?id=" + id)
      .then((res: any) => setRestaurant(res.data));
  }, [id]);

  console.log(restaurant);

  return (
    <Layout>
      <MapPage restaurant={restaurant} />
    </Layout>
  );
};
export default Map;
