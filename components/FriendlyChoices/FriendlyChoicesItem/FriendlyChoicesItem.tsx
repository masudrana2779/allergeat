import Image from "next/image";
import Link from "next/link";
import { DivBlock } from "../../StyledComponent/globalStyle/globalStyle";
import { FriendlyChoicesItemWrap } from "./FriendlyChoicesItem.style";

type FriendlyChoicesItemProps = {
  item: any;
};

const FriendlyChoicesItem = ({ item }: FriendlyChoicesItemProps) => {
  return (
    <FriendlyChoicesItemWrap>
      <div className="itemInner">
        <div className="ItemImg">
          <DivBlock className="tagList">
            {item.tags &&
              item.tags.map((tag: any, i: number) => (
                <div key={i}>
                  <a className="eatItem">{tag}</a>
                </div>
              ))}
          </DivBlock>
          <Link href={"/map"}>
            <a>
              <Image
                src={item.RestaurantImg}
                placeholder="blur"
                blurDataURL={item.RestaurantImg}
                width={309}
                height={370}
                alt={"FriendlyChoicesItemImg"}
                layout="responsive"
              />
            </a>
          </Link>
        </div>
        <div className="FitemInfo">
          <h4 className="dishName">
            <Link href={"/map"}>
              <a title={item.DishName}>{item.DishName}</a>
            </Link>
          </h4>
          <h4>
            <Link href={"/map"}>
              <a title={item.RestaurantName}>{item.RestaurantName}</a>
            </Link>
          </h4>
          <h4>
            <Link href={"/map"}>
              <a title={item.Location}>{item.Location}</a>
            </Link>
          </h4>
        </div>
      </div>
    </FriendlyChoicesItemWrap>
  );
};

export default FriendlyChoicesItem;
