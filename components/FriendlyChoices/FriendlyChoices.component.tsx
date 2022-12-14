import { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import {
  DivBlock,
  SubTitle,
  Title,
} from "../StyledComponent/globalStyle/globalStyle";
import { FriendlyChoicesWrap } from "./FriendlyChoices.style";
import FriendlyChoicesItem from "./FriendlyChoicesItem/FriendlyChoicesItem";

import axios from "axios";

// const RestaurantList = [
//   {
//     id: 1,
//     RestaurantName: "Noglu",
//     RestaurantImg: "/assets/img/FriendlyChoicesItemImg.png",
//     DishName: "Dish Name",
//     Location: "1260 Madison Ave, New York, NY 10128",
//     MenuItem: "All are gluten free",
//     tags: ["Gluten Free"],
//   },
//   {
//     id: 2,
//     RestaurantName: "NAMI NORI WEST VILLAGE",
//     RestaurantImg: "/assets/img/FriendlyChoicesItemImg.png",
//     DishName: "Dish Name",
//     Location: "33 Carmine St, New York, NY 10014",
//     MenuItem: "All are gluten free",
//     tags: ["Gluten Free"],
//   },
//   {
//     id: 2,
//     RestaurantName: "By the Way Bakery",
//     RestaurantImg: "/assets/img/FriendlyChoicesItemImg.png",
//     DishName: "Dish Name",
//     Location: "33 Carmine St, New York, NY 10014",
//     MenuItem: "All are gluten free",
//     tags: ["Gluten Free"],
//   },
//   {
//     id: 2,
//     RestaurantName: "By the Way Bakery",
//     RestaurantImg: "/assets/img/FriendlyChoicesItemImg.png",
//     DishName: "Dish Name",
//     Location: "1236 Lexington Ave, New York, NY 10028",
//     MenuItem: "All are gluten free",
//     tags: ["Gluten Free"],
//   },
//   {
//     id: 2,
//     RestaurantName: "Risotteria Melotti",
//     RestaurantImg: "/assets/img/FriendlyChoicesItemImg.png",
//     DishName: "Dish Name",
//     Location: "309 E 5th St, New York, NY 10003",
//     MenuItem: "All are gluten free",
//     tags: ["Gluten Free"],
//   },
//   {
//     id: 2,
//     RestaurantName: "Posh Pop Bakeshop",
//     RestaurantImg: "/assets/img/FriendlyChoicesItemImg.png",
//     DishName: "Dish Name",
//     Location: "192 Bleecker St, New York, NY 10012",
//     MenuItem: "All are gluten free",
//     tags: ["Gluten Free"],
//   },
//   {
//     id: 2,
//     RestaurantName: "TAP NYC",
//     RestaurantImg: "/assets/img/FriendlyChoicesItemImg.png",
//     DishName: "Dish Name",
//     Location: "685 3rd Ave, New York, NY 10017",
//     MenuItem: "All are gluten free",
//     tags: ["Gluten Free"],
//   },
//   {
//     id: 2,
//     RestaurantName: "Senza Gluten by Jemiko",
//     RestaurantImg: "/assets/img/FriendlyChoicesItemImg.png",
//     DishName: "Dish Name",
//     Location: "171 Sullivan St, New York, NY 10012",
//     MenuItem: "All are gluten free",
//     tags: ["Gluten Free"],
//   },
//   {
//     id: 2,
//     RestaurantName: "Senza Gluten",
//     RestaurantImg: "/assets/img/FriendlyChoicesItemImg.png",
//     DishName: "Dish Name",
//     Location: "206 Sullivan St, New York, NY 10012",
//     MenuItem: "All are gluten free",
//     tags: ["Gluten Free"],
//   },
//   {
//     id: 2,
//     RestaurantName: "Wild",
//     RestaurantImg: "/assets/img/FriendlyChoicesItemImg.png",
//     DishName: "Dish Name",
//     Location: "535 Hudson St, New York, NY 10014",
//     MenuItem: "All are gluten free",
//     tags: ["Gluten Free"],
//   },
//   {
//     id: 2,
//     RestaurantName: "Kimbap Lab",
//     RestaurantImg: "/assets/img/FriendlyChoicesItemImg.png",
//     DishName: "Dish Name",
//     Location: "75 9th Ave, New York, NY 10011",
//     MenuItem: "All are gluten free",
//     tags: ["Gluten Free"],
//   },
//   {
//     id: 2,
//     RestaurantName: "twentyonegrains",
//     RestaurantImg: "/assets/img/FriendlyChoicesItemImg.png",
//     DishName: "Dish Name",
//     Location: "152 W 52nd St, New York, NY 10019",
//     MenuItem: "All are gluten free",
//     tags: ["Gluten Free"],
//   },
//   {
//     id: 2,
//     RestaurantName: "Nadas",
//     RestaurantImg: "/assets/img/FriendlyChoicesItemImg.png",
//     DishName: "Dish Name",
//     Location: "48 Greenwich Ave, New York, NY 10011",
//     MenuItem: "All are gluten free",
//     tags: ["Gluten Free"],
//   },
//   {
//     id: 2,
//     RestaurantName: "Cosme",
//     RestaurantImg: "/assets/img/FriendlyChoicesItemImg.png",
//     DishName: "Dish Name",
//     Location: "35 E 21st St, New York, NY 10010",
//     MenuItem: "All are gluten free",
//     tags: ["Gluten Free"],
//   },
//   {
//     id: 2,
//     RestaurantName: "Bistango",
//     RestaurantImg: "/assets/img/FriendlyChoicesItemImg.png",
//     DishName: "Dish Name",
//     Location: "145 E 50th St, New York, NY 10022",
//     MenuItem: "All are gluten free",
//     tags: ["Gluten Free"],
//   },
// ];

const FriendlyChoicesComponent = () => {
  const [restaurants, setRestaurants] = useState([]);

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  useEffect(() => {
    axios
      .get("/api/restaurants?limit=10")
      .then((res: any) => setRestaurants(res.data));
  }, []);
  console.log(restaurants);

  return (
    <FriendlyChoicesWrap>
      <DivBlock className="container">
        <DivBlock className="row">
          <div className="col-12">
            <SubTitle>Just Added to Our Site:</SubTitle>
            <Title>Access to Allergy Friendly Choices.</Title>
            <DivBlock className="ItemsWrap">
              <DivBlock className="FItem" {...events} ref={ref}>
                {restaurants.map((item: any, i: number) => (
                  <FriendlyChoicesItem key={i} item={item} />
                ))}
              </DivBlock>
            </DivBlock>
          </div>
        </DivBlock>
      </DivBlock>
    </FriendlyChoicesWrap>
  );
};
export default FriendlyChoicesComponent;
