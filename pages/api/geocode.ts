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
  const l = "33 Cortlandt Alley, New York City, 10013";
  let a = "";

  const restaurants = await db("restaurants").select(
    "restaurants.lat",
    "restaurants.lng"
  );

  let rests: any = [];

  await restaurants.forEach(async (rest: any) => {
    // console.log(rest.location);
    // const geo = await axios.get(
    //   "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    //     rest.location.split(" ").join("+") +
    //     "&key=AIzaSyDtzuSp55Hz7PU3ArFaBTDtEFWX15Uwlk0"
    // );
    // // await rests.push({
    // //   name: rest.name,
    // //   lat: geo.data.results[0].geometry.location.lat,
    // //   lng: geo.data.results[0].geometry.location.lng,
    // // });
    // await db("restaurants").where({ id: rest.id }).update(
    //   {
    //     lat: geo.data.results[0].geometry.location.lat,
    //     lng: geo.data.results[0].geometry.location.lng,
    //   },
    //   ["id", "lat", "lng"]
    // );
    // console.log(geo.data.results[0].geometry.location.lng);
  });

  //   axios
  //     .get(
  //       "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDtzuSp55Hz7PU3ArFaBTDtEFWX15Uwlk0"
  //     )
  //     .then((res: any) => console.log(res.data.results[0].geometry.location));

  res.status(200).json(restaurants);
}
