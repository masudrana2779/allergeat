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
  const restaurant = await db("restaurants")
    .where("restaurants.id", req.query.id)
    .join("menues", "restaurants.name", "menues.restaurant_name")
    .select("restaurants.*", "menues.location")
    .distinct("menues.restaurant_name")
    .first();

  res.status(200).json(restaurant);
}
