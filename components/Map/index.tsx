import axios from "axios";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import SearchComponent from "../common/Search/Search.component";
import { DivBlock } from "../StyledComponent/globalStyle/globalStyle";
import { MapWrap } from "./mapPage.styled";
import TopDishesItem from "./TopDishes/TopDishesItem";

const MapPage = (props: any) => {
  const { restaurant } = props;
  const [menues, setMenues] = useState([]);

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  useEffect(() => {
    axios
      .get("/api/menues?rest=" + restaurant?.name)
      .then((res: any) => setMenues(res?.data));
  });

  return (
    <MapWrap>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-md-12 col-sm-12 col-12">
            <DivBlock>
              <DivBlock marginBottom="30px">
                <SearchComponent />
              </DivBlock>
              <DivBlock>
                <div className="mapContent">
                  <div className="mapInner">
                    <iframe
                      id="gmap_canvas"
                      src={
                        "https://maps.google.com/maps?q=" +
                        restaurant?.location?.split(" ").join("+") +
                        "&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      }
                      scrolling="no"
                    ></iframe>
                    {/* <iframe
                      src={
                        "https://www.google.com/maps/embed/v1/place?key=AIzaSyDtzuSp55Hz7PU3ArFaBTDtEFWX15Uwlk0&q=" +
                        restaurant?.location?.split(" ").join("+")
                      }
                    ></iframe> */}
                  </div>
                </div>
              </DivBlock>
            </DivBlock>
          </div>

          <div className="col-xl-7 col-md-12 col-sm-12 col-12">
            <DivBlock className="RestaurantNameWrap">
              <div className="RestaurantNameWrapInner">
                <h3 className="restaruntName">{restaurant?.name}</h3>
                <DivBlock className="restaurantInfo">
                  <div className="infoLeft">
                    <div className="infoTitle">
                      <h5>{restaurant?.location}</h5>
                    </div>
                    <div className="infoBoxWrap">
                      <div className="infoBoxItem">
                        <Link href={"/map-details"}>
                          <a className="infoBox">
                            <div className="number">
                              {restaurant?.gf_items_count ===
                              "all items are gluten free"
                                ? "All"
                                : restaurant?.gf_items_count}
                            </div>
                          </a>
                        </Link>
                        <div className="infoBoxTitle">Gluten Free</div>
                      </div>
                      <div className="infoBoxItem">
                        <div className="infoBox comingSoonBox">
                          <div className="comingSoon"> Coming Soon</div>
                        </div>
                        <div className="infoBoxTitle">Dairy Free</div>
                      </div>
                      <div className="infoBoxItem">
                        <div className="infoBox meatBox">
                          <div className="comingSoon"> Meat Egg Nuts Vegan</div>
                        </div>
                        <div className="infoBoxTitle"> Coming Soon</div>
                      </div>
                    </div>
                  </div>
                  <div className="infoRight">
                    <div className="infoListWrap">
                      <div className="infoList">Call</div>
                      <div className="infoList">Menu</div>
                      <div className="infoList">Website</div>
                      <div className="infoList">Reserve </div>
                    </div>
                  </div>
                </DivBlock>
                <DivBlock className="ItemsWrap">
                  <h3>Top Dishes Offered</h3>
                  <DivBlock className="FItem" {...events} ref={ref}>
                    {menues.map((item: any, i: number) => (
                      <>
                        <TopDishesItem key={i} item={item} />
                      </>
                    ))}
                  </DivBlock>
                </DivBlock>
              </div>
            </DivBlock>
          </div>
        </div>
      </div>
    </MapWrap>
  );
};

export default MapPage;
