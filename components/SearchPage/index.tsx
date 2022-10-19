import { RestaurantList } from "../../RestaurantList.json";
import FriendlyChoicesItem from "../FriendlyChoices/FriendlyChoicesItem/FriendlyChoicesItem";
import { SearchPageWrap } from "./SearchPage.styled";

const SearchPageComponent = () => {
  return (
    <SearchPageWrap>
      <div className="container">
        <div className="searchTitle">Search Results For: _____________</div>
        <div className="row">
          {RestaurantList &&
            RestaurantList.map((item: any, i: number) => (
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
