// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../database";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let restaurants = await db("restaurants")
    .where("name", "LIKE", "%" + req.query.s + "%")
    .limit(5);

  const menues = await db("menues")
    .where("menues.menu_item", "LIKE", "%" + req.query.s + "%")
    .whereNot("menues.menu_item", "all items are gluten free")
    .join("restaurants as r", "r.name", "menues.restaurant_name")
    .select("r.*", "menues.menu_item")
    .limit(5);

  restaurants = restaurants.concat(menues);

  res.status(200).send(restaurants);
}
