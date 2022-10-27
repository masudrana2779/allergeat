import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { DivBlock } from "../../StyledComponent/globalStyle/globalStyle";
import { SearchWrap } from "./Search.styled";

const SearchComponent = () => {
  const [restaurants, setRestaurants] = useState([]);
  const searchRestaurants = async (e: any) => {
    const s = e.target.value;

    await fetch("/api/search?s=" + s)
      .then((response) => response.json())
      .then((data) => setRestaurants(data));

    e.target.value == "" && setRestaurants([]);
  };

  const _handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      Router.push("/search?s=" + e.target.value);
    }
  };

  const goSearch = () => {
    const s = (document.getElementById("search") as HTMLInputElement).value;
    if (s) {
      Router.push("/search?s=" + s);
    }
  };

  return (
    <SearchWrap>
      <div className="IWantToEat">
        <DivBlock className="IWantToEatContent">
          <DivBlock className="eatText">
            <input
              id="search"
              type={"text"}
              onChange={searchRestaurants}
              onFocus={searchRestaurants}
              onKeyDown={_handleKeyDown}
              //   onBlur={() => setRestaurants([])}
              placeholder="I want to eat..."
            />
          </DivBlock>
          <DivBlock className="eatItemWrap">
            <button onClick={() => goSearch()} className="eatItem">
              Gluten Friendly
            </button>
            <button onClick={() => goSearch()} className="eatItem">
              Dairy Friendly
            </button>
            {/* <Link href={"/"}>
              <a className="eatItem inActive">Meat Free</a>
            </Link> */}
          </DivBlock>
        </DivBlock>
        {restaurants.length > 0 && (
          <DivBlock className="searcResult">
            {restaurants.map((restaurant: any, i: number) => (
              <Link
                href={"/restaurant/" + restaurant.id}
                key={i}
                className="searchItem"
              >
                <a>
                  {restaurant.menu_item ?? restaurant.name}{" "}
                  <span>({restaurant.menu_item ? "menu" : "rest"})</span>
                </a>
              </Link>
            ))}
          </DivBlock>
        )}
      </div>
    </SearchWrap>
  );
};

export default SearchComponent;
