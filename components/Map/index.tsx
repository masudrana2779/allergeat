import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useDraggable } from "react-use-draggable-scroll";
import SearchComponent from "../common/Search/Search.component";
import { DivBlock } from "../StyledComponent/globalStyle/globalStyle";
import { MapWrap } from "./mapPage.styled";
import TopDishesItem from "./TopDishes/TopDishesItem";

const MapPage = (props: any) => {
  const { restaurant } = props;
  const [menues, setMenues] = useState([]);

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    axios
      .get("/api/menues?rest=" + restaurant?.name)
      .then((res: any) => setMenues(res?.data));
  });

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

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
                <div className="">
                  <iframe
                    className="w-full h-96"
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
              </DivBlock>
            </DivBlock>
          </div>
          {showMenu ? (
            <div className="col-xl-7 col-md-12 col-sm-12 col-12">
              <DivBlock className="RestaurantNameWrap">
                <div className="RestaurantNameWrapInner">
                  <div className="RestaurantNameDetailsWrap">
                    <div className="RestaurantDetailsTop">
                      <div className="gotoBack">
                        <div
                          className="backIcon"
                          onClick={() => setShowMenu(false)}
                        >
                          <BsArrowLeft />
                        </div>
                      </div>
                      <div className="itemNunber">
                        <div className="infoBoxItem">
                          <div className="infoBox">
                            <div className="number">
                              {restaurant?.gf_items_count ===
                              "all items are gluten free"
                                ? "All"
                                : restaurant?.gf_items_count}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="detailsInfo">
                        <div className="detailsCategory">Gluten Free Items</div>
                        <div className="rName">{restaurant?.name}</div>
                      </div>
                    </div>
                    <div className="RestaurantDetailsMenu">
                      <ul>
                        {menues?.map((item: any, i: number) => (
                          <li key={i}>
                            <p>{item.menu_item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <DivBlock className="FItem" {...events} ref={ref}></DivBlock>
              </DivBlock>
            </div>
          ) : (
            <div className="col-xl-7 col-md-12 col-sm-12 col-12">
              <DivBlock className="RestaurantNameWrap">
                <div className="RestaurantNameWrapInner">
                  <h3 className="restaruntName mb-2">{restaurant?.name}</h3>
                  <DivBlock className="restaurantInfo mb-3">
                    <div className="infoLeft">
                      <div className="infoTitle">
                        <h5 className="mb-3">{restaurant?.location}</h5>
                      </div>
                      <div className="flex gap-5 text-xl">
                        <div className="text-center">
                          <button
                            onClick={() => setShowMenu(true)}
                            className="infoBox"
                          >
                            <div className="bg-[#ffb100] w-44 h-32 text-[3.7rem] rounded-[30px] flex items-center justify-center">
                              {restaurant?.gf_items_count ===
                              "all items are gluten free"
                                ? "All"
                                : restaurant?.gf_items_count}
                            </div>
                          </button>
                          <div className="mt-2">Gluten Friendly</div>
                        </div>
                        <div className="text-center">
                          <div className="bg-[#ed1e79] w-44 h-32 text-2xl rounded-[30px] flex items-center justify-center">
                            <div className="comingSoon">
                              {" "}
                              Coming <br /> Soon
                            </div>
                          </div>
                          <div className="mt-2">Dairy Friendly</div>
                        </div>
                        <div className="text-center">
                          <div className="bg-[#8ec641] w-44 h-32 text-2xl rounded-[30px] flex items-center justify-center">
                            <div className="comingSoon">
                              Coming <br /> Soon
                            </div>
                          </div>
                          <div className="mt-2">Not Friendly</div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="infoRight">
                      <div className="infoListWrap">
                        <div className="infoList">Call</div>
                      <div className="infoList">Menu</div>
                      <div className="infoList">Website</div>
                      <div className="infoList">Reserve </div>
                      </div>
                    </div> */}
                  </DivBlock>
                  <DivBlock className="">
                    <h3 className="mb-2 text-2xl">Top Dishes Offered</h3>
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
          )}
        </div>
      </div>
    </MapWrap>
  );
};

export default MapPage;
