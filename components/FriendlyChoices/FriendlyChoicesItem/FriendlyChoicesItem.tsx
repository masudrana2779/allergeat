import Image from "next/image";
import Link from "next/link";
import { DivBlock } from "../../StyledComponent/globalStyle/globalStyle";
import { FriendlyChoicesItemWrap } from "./FriendlyChoicesItem.style";

const FriendlyChoicesItem = () => {
  return (
    <FriendlyChoicesItemWrap>
      <div className="itemInner">
        <div className="ItemImg">
          <DivBlock className="tagList">
            <Link href={"/"}>
              <a className="eatItem">Gluten Free</a>
            </Link>
            <Link href={"/"}>
              <a className="eatItem">Gluten Free</a>
            </Link>
          </DivBlock>
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
          <h4>
            <Link href={"/"}>
              <a>City, State</a>
            </Link>
          </h4>
        </div>
      </div>
    </FriendlyChoicesItemWrap>
  );
};

export default FriendlyChoicesItem;
