import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import axios from "axios";

import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import SearchComponent from "../common/Search/Search.component";
import { MapWrap } from "../Map/mapPage.styled";
import { DivBlock } from "../StyledComponent/globalStyle/globalStyle";

const MapDetailsPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDtzuSp55Hz7PU3ArFaBTDtEFWX15Uwlk0",
  });

  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [restaurant, setRestaurant] = useState<any>([]);
  const [menues, setMenues] = useState<any[]>([]);

  const containerStyle = {
    width: "100%",
    height: "30rem",
  };

  useEffect(() => {
    axios
      .get("/api/restaurants?limit=200")
      .then((res: any) => setRestaurants(res.data));
  }, []);

  const getRestaurant = async (restID: number) => {
    axios.get("/api/restaurant?id=" + restID).then((res: any) => {
      setRestaurant(res.data);
      axios
        .get("/api/menues?rest=" + res.data?.name)
        .then((res: any) => setMenues(res.data));
    });
  };

  const [map, setMap] = useState(null);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  console.log();

  const router = useRouter();

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
                    {isLoaded && restaurants.length > 0 ? (
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={{
                          lat: parseFloat(restaurants[0].lat),
                          lng: parseFloat(restaurants[0].lng),
                        }}
                        zoom={16}
                        onUnmount={onUnmount}
                      >
                        {restaurants?.map((rest: any, i: number) => (
                          <MarkerF
                            key={i}
                            onClick={() => getRestaurant(rest.id)}
                            position={{
                              lat: parseFloat(rest.lat),
                              lng: parseFloat(rest.lng),
                            }}
                            label={rest.name}
                            title={"Hello"}
                          />
                        ))}
                      </GoogleMap>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </DivBlock>
            </DivBlock>
          </div>

          <div className="col-xl-7 col-md-12 col-sm-12 col-12">
            <DivBlock className="RestaurantNameWrap">
              <div className="RestaurantNameWrapInner">
                <div className="RestaurantNameDetailsWrap">
                  {restaurant.length == 0 ? (
                    <div className="rName">
                      Select a restaurant from the map
                    </div>
                  ) : (
                    <>
                      <div className="RestaurantDetailsTop">
                        <div className="gotoBack">
                          <div
                            className="backIcon"
                            onClick={() => router.back()}
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
                          <div className="detailsCategory">
                            Gluten Free Items
                          </div>
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
                    </>
                  )}
                </div>
              </div>
            </DivBlock>
          </div>
        </div>
      </div>
    </MapWrap>
  );
};

export default MapDetailsPage;
