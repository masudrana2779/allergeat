import axios from "axios";
import { useEffect, useState } from "react";
import FriendlyChoicesItem from "../FriendlyChoices/FriendlyChoicesItem/FriendlyChoicesItem";
import { SearchPageWrap } from "./SearchPage.styled";

const SearchPageComponent = (props: any) => {
  const { searchQuery } = props;

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("/api/search?s=" + searchQuery)
      .then((res: any) => setRestaurants(res.data));
  }, [searchQuery]);

  console.log(restaurants);

  return (
    <SearchPageWrap>
      <div className="container">
        <div className="searchTitle">
          Search Results For: {searchQuery ?? "_____________"}
        </div>
        <div className="row">
          {restaurants.length > 0 &&
            restaurants?.map((item: any, i: number) => (
              <div className="col-xl-3 col-md-4 col-sm-6 col-6" key={i}>
                <FriendlyChoicesItem item={item} />
              </div>
            ))}
        </div>
      </div>
    </SearchPageWrap>
  );
};

export default SearchPageComponent;
