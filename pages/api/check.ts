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
  let datas = await db("restaurants")
    .join("menues", "restaurants.name", "menues.restaurant_name")
    .select("restaurants.*", "menues.location")
    .distinct("menues.restaurant_name");
  // .limit(req.query.limit ?? 5);

  datas = datas.map((item: any) => {
    return {
      id: item.id,
      name: item.name,
      lat: item.lat,
      lng: item.lng,
      gf_items_count: item.gf_items_count,
      if_gf_available: item.if_gf_available,
      gf_option_count: item.gf_option_count,
      //   created_at: item.created_at,
      //   updated_at: item.updated_at,
      location: item.location,
      restaurant_name: item.restaurant_name,
    };
  });

  res.status(200).json(datas);

  //   const dbInstance = collection(db, "menues");
  //   //Find the absolute path of the json directory
  //   const jsonDirectory = path.join(process.cwd(), "json");
  //   //Read the json data file data.json
  //   const fileContents = await fs.readFile(
  //     jsonDirectory + "/menues.json",
  //     "utf8"
  //   );
  //   const batch = db.batch();
  //   addDoc(dbInstance, {
  //     noteTitle: "noteTitle",
  //     noteDesc: "noteDesc",
  //   });
  //   let datas: any = JSON.parse(fileContents);
  //   datas = datas.map((item: any) => {
  //     return {
  //       restaurant_name: item.restaurant_name,
  //       location: item.location,
  //       menu_item: item.menu_item,
  //       notes: item.notes,
  //     };
  //   });
  //   datas.forEach((data: any) => {
  //     addDoc(dbInstance, data);
  //   });
  //   res.status(200).json(datas);
}
