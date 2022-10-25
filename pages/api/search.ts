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
    .where("name", "LIKE", "%" + req.query.s + "%")
    .limit(5);
  console.log(restaurants);

  res.status(200).send(restaurants);
}
