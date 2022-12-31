import Image from "next/image";
import SearchComponent from "../common/Search/Search.component";
import { DivBlock, Span } from "../StyledComponent/globalStyle/globalStyle";
import { BannerWrap } from "./Banner.styled";

const BannerComponent = () => {
  return (
    <BannerWrap>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12 col-12 z-10">
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
              <DivBlock className="text-3xl lg:text-[3.5rem] !leading-10 lg:!leading-[4rem]">
                <Span className="text-[#1678f2] lg:text-5xl">One Map 🗺</Span>{" "}
                <br /> for all your dietary restrictions.
              </DivBlock>
              <DivBlock className="text-[#8a8585] text-xl lg:text-3xl lg:leading-10 pt-3 lg:pt-5">
                First Up!📍NYC :) Check Back Daily for New Places and Items
                Added!
              </DivBlock>
            </div>
            <div className="col-12">
              <SearchComponent />
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-12">
            <DivBlock className="absolute md:static top-0 opacity-5 md:opacity-100 grayscale md:grayscale-0">
              <Image
                src={"/assets/img/bannerImg.png"}
                placeholder="blur"
                blurDataURL="/assets/img/bannerImg.png"
                width={550}
                height={560}
                alt="banner img"
              />
            </DivBlock>
          </div>
        </div>
      </div>
    </BannerWrap>
  );
};
export default BannerComponent;
