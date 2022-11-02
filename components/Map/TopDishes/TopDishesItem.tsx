import Image from "next/image";
import Link from "next/link";
import { FriendlyChoicesItemWrap } from "./TopDishes.style";

const TopDishesItem = (props: any) => {
  const { item } = props;
  return (
    <FriendlyChoicesItemWrap>
      <div className="itemInner">
        <div className="ItemImg">
          <Link href={"#"}>
            <a>
              <Image
                src={"/assets/img/FriendlyChoicesItemImg.png"}
                placeholder="blur"
                blurDataURL="/assets/img/FriendlyChoicesItemImg.png"
                width={309}
                height={370}
                alt={"FriendlyChoicesItemImg"}
              />
            </a>
          </Link>
        </div>
        <div className="FitemInfo">
          <h4 className="dishName">
            <Link href={"#"}>
              <a>{item.menu_item}</a>
            </Link>
          </h4>
          <h4>
            <Link href={"#"}>
              <a>{item.restaurant_name}</a>
            </Link>
          </h4>
        </div>
      </div>
    </FriendlyChoicesItemWrap>
  );
};

export default TopDishesItem;
