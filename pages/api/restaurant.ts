// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../utils/db";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const restaurantsRef = await db
      .collection("restaurants")
      .where("id", "==", parseInt(req.query.id))
      .get();

    const entriesData: any = restaurantsRef.docs.map((doc: any) => doc.data());

    res.status(200).json(entriesData[0]);
  } catch (e) {
    res.status(400).end();
  }
}
