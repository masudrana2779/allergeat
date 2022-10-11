import Image from "next/image";
import Link from "next/link";
import { DivBlock } from "../../StyledComponent/globalStyle/globalStyle";
import { FriendlyChoicesItemWrap } from "./TopDishes.style";

const TopDishesItem = () => {
  return (
    <FriendlyChoicesItemWrap>
      <div className="itemInner">
        <div className="ItemImg">
          <Link href={"/"}>
            <a>
              <Image
                src={"/assets/img/FriendlyChoicesItemImg.png"}
                width={309}
                height={370}
                alt={"FriendlyChoicesItemImg"}
              />
            </a>
          </Link>
        </div>
        <div className="FitemInfo">
          <h4 className="dishName">
            <Link href={"/"}>
              <a>Dish Name</a>
            </Link>
          </h4>
          <h4>
            <Link href={"/"}>
              <a>Restauant Name</a>
            </Link>
          </h4>
        </div>
      </div>
    </FriendlyChoicesItemWrap>
  );
};

export default TopDishesItem;
