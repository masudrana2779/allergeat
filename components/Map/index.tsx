import Link from "next/link";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { DivBlock } from "../StyledComponent/globalStyle/globalStyle";
import { MapWrap } from "./mapPage.styled";
import TopDishesItem from "./TopDishes/TopDishesItem";

const MapPage = () => {
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
                <div className="IWantToEat">
                  <DivBlock className="IWantToEatContent">
                    <DivBlock className="eatText">
                      <input type={"text"} placeholder="I want to eat..." />
                    </DivBlock>
                    <DivBlock className="eatItemWrap">
                      <Link href={"/"}>
                        <a className="eatItem">Gluten Free</a>
                      </Link>
                      <Link href={"/"}>
                        <a className="eatItem">Dairy Free</a>
                      </Link>
                    </DivBlock>
                  </DivBlock>
                </div>
              </DivBlock>
              <DivBlock>
                <div className="mapContent">
                  <div className="mapInner">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443.1513545231848!2d-73.95719298337109!3d40.78369795980402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258a2565854d9%3A0x33ab11798fd57183!2s1260%20Madison%20Ave%2C%20New%20York%2C%20NY%2010128%2C%20USA!5e1!3m2!1sen!2sbd!4v1665683661283!5m2!1sen!2sbd"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </DivBlock>
            </DivBlock>
          </div>

          <div className="col-xl-7 col-md-12 col-sm-12 col-12">
            <DivBlock className="RestaurantNameWrap">
              <div className="RestaurantNameWrapInner">
                <h3 className="restaruntName">Restaurant Name</h3>
                <DivBlock className="restaurantInfo">
                  <div className="infoLeft">
                    <div className="infoTitle">
                      <h5>
                        Type of Restauant One Sentence Explaining The location
                        etc...
                      </h5>
                    </div>
                    <div className="infoBoxWrap">
                      <div className="infoBoxItem">
                        <Link href={"/"}>
                          <a className="infoBox">
                            <div className="number">41</div>
                          </a>
                        </Link>
                        <div className="infoBoxTitle">Gluten Free</div>
                      </div>
                      <div className="infoBoxItem">
                        <div className="infoBox">
                          <div className="comingSoon"> Coming Soon</div>
                        </div>
                        <div className="infoBoxTitle">Dairy Free</div>
                      </div>
                      <div className="infoBoxItem">
                        <div className="infoBox">
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
                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
                      (item: any, i: number) => (
                        <>
                          <TopDishesItem key={i} />
                        </>
                      )
                    )}
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
