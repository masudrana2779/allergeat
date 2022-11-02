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
  const meneus = await db("menues")
    .where("restaurant_name", req.query.rest)
    .select("restaurant_name", "menu_item");

  res.status(200).json(meneus);
}
