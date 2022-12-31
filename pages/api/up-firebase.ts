// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import db from "../../database";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //   //Find the absolute path of the json directory
  //   const jsonDirectory = path.join(process.cwd(), "json");
  //   //Read the json data file data.json
  //   const fileContents = await fs.readFile(
  //     jsonDirectory + "/restaurants.json",
  //     "utf8"
  //   );
  //   const batch = db.batch();
  //   const dbInstance = db.collection("restaurants");
  //   // addDoc(dbInstance, {
  //   //   noteTitle: "noteTitle",
  //   //   noteDesc: "noteDesc",
  //   // });
  //   let datas: any = JSON.parse(fileContents);
  //   // datas = datas.map((item: any) => {
  //   //   return {
  //   //     restaurant_name: item.restaurant_name,
  //   //     location: item.location,
  //   //     menu_item: item.menu_item,
  //   //     notes: item.notes,
  //   //   };
  //   // });
  //   datas.forEach((data: any) => {
  //     dbInstance.add(data);
  //   });
  //   await batch.commit();
  //   res.status(200).json(datas);
}
