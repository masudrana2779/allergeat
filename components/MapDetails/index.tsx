import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import SearchComponent from "../common/Search/Search.component";
import { MapWrap } from "../Map/mapPage.styled";
import { DivBlock } from "../StyledComponent/globalStyle/globalStyle";

const MapDetailsPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDtzuSp55Hz7PU3ArFaBTDtEFWX15Uwlk0",
  });

  const containerStyle = {
    width: "100%",
    height: "30rem",
  };

  const [map, setMap] = useState(null);

  const onLoad = (marker: any) => {
    console.log("marker: ", marker);
  };

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const router = useRouter();

  const position = {
    lat: 37.772,
    lng: -122.214,
  };
  const position2 = {
    lat: 37.672,
    lng: -122.114,
  };

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
                    {isLoaded ? (
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={position}
                        zoom={11}
                        onUnmount={onUnmount}
                      >
                        <MarkerF
                          onClick={() => console.log("OK")}
                          onLoad={onLoad}
                          position={position}
                          label={"restaurant"}
                          title={"Hello"}
                        />
                        <MarkerF onLoad={onLoad} position={position2} />
                      </GoogleMap>
                    ) : (
                      <></>
                    )}

                    {/* <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443.1513545231848!2d-73.95719298337109!3d40.78369795980402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258a2565854d9%3A0x33ab11798fd57183!2s1260%20Madison%20Ave%2C%20New%20York%2C%20NY%2010128%2C%20USA!5e1!3m2!1sen!2sbd!4v1665683661283!5m2!1sen!2sbd"
                      loading="lazy"
                    ></iframe> */}
                  </div>
                </div>
              </DivBlock>
            </DivBlock>
          </div>

          <div className="col-xl-7 col-md-12 col-sm-12 col-12">
            <DivBlock className="RestaurantNameWrap">
              <div className="RestaurantNameWrapInner">
                <div className="RestaurantNameDetailsWrap">
                  <div className="RestaurantDetailsTop">
                    <div className="gotoBack">
                      <div className="backIcon" onClick={() => router.back()}>
                        <BsArrowLeft />
                      </div>
                    </div>
                    <div className="itemNunber">
                      <div className="infoBoxItem">
                        <div className="infoBox">
                          <div className="number">41</div>
                        </div>
                      </div>
                    </div>
                    <div className="detailsInfo">
                      <div className="detailsCategory">Gluten Free Items</div>
                      <div className="rName">Restaurant Name</div>
                    </div>
                  </div>
                  <div className="RestaurantDetailsMenu">
                    <ul>
                      {[1, 1, 1, 1, 1].map((item: any, i: number) => (
                        <li key={i}>
                          <p>Menu Item {i + 1}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
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
