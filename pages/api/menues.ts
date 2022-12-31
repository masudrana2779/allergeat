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
  // const meneus = await db("menues")
  //   .where("restaurant_name", req.query.rest)
  //   .select("restaurant_name", "menu_item");

  // res.status(200).json(meneus);

  try {
    const restaurantsRef = await db
      .collection("menues")
      .where("restaurant_name", "==", req.query.rest)
      .get();

    const entriesData: any = restaurantsRef.docs.map((doc: any) => doc.data());
    //  1 let dbInstance = collection(db, "restaurants");

    // getDocs(dbInstance)
    //   .limit()
    //   .then((data) => {
    //     let restaurants: any = data.docs.map((item) => {
    //       return { ...item.data(), id: item.id };
    //     });

    //     res.status(200).json(restaurants);
    //   });

    res.status(200).json(entriesData);
  } catch (e) {
    res.status(400).end();
  }
}
