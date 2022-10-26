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
          <Link href={"/restaurant/" + item.id}>
            <a>
              <Image
                src={"/assets/img/FriendlyChoicesItemImg.png"}
                placeholder="blur"
                blurDataURL={"/assets/img/FriendlyChoicesItemImg.png"}
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
            <Link href={"/restaurant/" + item.id}>
              <a title={item.name}>{item.name}</a>
            </Link>
          </h4>
          <h4>
            <Link href={"/restaurant/" + item.id}>
              <a title={item.location}>{item.location}</a>
            </Link>
          </h4>
        </div>
      </div>
    </FriendlyChoicesItemWrap>
  );
};

export default FriendlyChoicesItem;
