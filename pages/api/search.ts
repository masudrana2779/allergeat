// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../utils/db";
// import db from "../../database";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //   {
  //     "id": 2,
  //     "name": "Erin Mckenna’S Bakery",
  //     "lat": "40.718143",
  //     "lng": "-73.9895988",
  //     "gf_items_count": "all items are gluten free",
  //     "if_gf_available": 0,
  //     "gf_option_count": "",
  //     "created_at": "2022-11-02T04:31:27.000Z",
  //     "updated_at": "2022-11-02T04:31:27.000Z"
  // },

  let restaurants: any = [];
  let menues: any = [];

  try {
    const s = req.query.s;

    const restaurantsRef = await db
      .collection("restaurants")
      .where("name", ">=", s)
      .where("name", "<=", s + "~")
      .limit(5)
      .get();

    restaurants = restaurantsRef.docs.map((doc: any) => doc.data());
  } catch (e) {
    res.status(400).end();
  }
  try {
    const s = req.query.s;

    const menuesRef = await db
      .collection("menues")
      .where("menu_item", ">=", s)
      .where("menu_item", "<=", s + "~")
      .limit(5)
      .get();

    menues = menuesRef.docs.map((doc: any) => doc.data());
  } catch (e) {
    res.status(400).end();
  }

  restaurants = restaurants.concat(menues);

  res.status(200).send(restaurants);

  // let restaurants = await db("restaurants")
  //   .where("name", "LIKE", "%" + req.query.s + "%")
  //   .limit(5);

  // const menues = await db("menues")
  //   .where("menues.menu_item", "LIKE", "%" + req.query.s + "%")
  //   .whereNot("menues.menu_item", "all items are gluten free")
  //   .join("restaurants as r", "r.name", "menues.restaurant_name")
  //   .select("r.*", "menues.menu_item")
  //   .limit(5);
}
