import Image from "next/image";
import SearchComponent from "../common/Search/Search.component";
import { DivBlock, Span } from "../StyledComponent/globalStyle/globalStyle";
import { BannerWrap } from "./Banner.styled";

const BannerComponent = () => {
  return (
    <BannerWrap>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12 col-12">
            <div className="BannerContent">
              <DivBlock className="alMetter">
                <DivBlock display="flex" alignItems="center">
                  Allergies Matter
                  <DivBlock className="img" display="flex" marginLeft="10px">
                    <Image
                      src={"/assets/img/hlogo.svg"}
                      placeholder="blur"
                      blurDataURL="/assets/img/hlogo.svg"
                      width={87}
                      height={46}
                      alt="hlogo"
                    />
                  </DivBlock>
                </DivBlock>
              </DivBlock>
              <DivBlock className="oneMap">
                <Span>One Map 🗺</Span> <br /> for all your dietary restrictions.
              </DivBlock>
              <DivBlock className="bannerPara">
                First Up!📍NYC :) Check Back Daily for New Places and Items
                Added!
              </DivBlock>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-12">
            <DivBlock className="text-right">
              <DivBlock display="flex">
                <Image
                  src={"/assets/img/bannerImg.png"}
                  placeholder="blur"
                  blurDataURL="/assets/img/bannerImg.png"
                  width={550}
                  height={560}
                  alt="banner img"
                />
              </DivBlock>
            </DivBlock>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <SearchComponent />
          </div>
        </div>
      </div>
    </BannerWrap>
  );
};
export default BannerComponent;
