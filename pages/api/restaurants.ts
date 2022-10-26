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
  const restaurants = await db("restaurants")
    .join("menues", "restaurants.name", "menues.restaurant_name")
    .select("restaurants.*", "menues.location")
    .distinct("menues.restaurant_name")
    .limit(req.query.limit ?? 5);

  res.status(200).json(restaurants);
}
