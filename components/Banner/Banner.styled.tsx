import styled from "styled-components";

export const BannerWrap = styled.div`
  padding-bottom: 50px;
  .BannerContent {
    margin-bottom: 50px;
    .alMetter {
      border: 1px solid #b4b4b4;
      border-radius: 40px;
      display: inline-block;
      padding: 10px 10px 10px 30px;
      font-weight: 400;
      font-size: 30px;
      line-height: 40px;
      color: #525252;
      margin-bottom: 20px;
      @media (max-width: 767px) {
        font-size: 16px;
        line-height: 24px;
        .img {
          max-width: 50px;
          width: 100%;
          margin-left: 20px;
        }
      }
    }
    .oneMap {
      font-size: 70px;
      color: #000;
      line-height: 90px;
      margin-bottom: 30px;
      @media (max-width: 1024px) {
        font-size: 44px;
        line-height: 54px;
      }
      @media (max-width: 767px) {
        font-size: 28px;
        line-height: 36px;
      }
      span {
        color: #1678f2;
      }
    }
    .bannerPara {
      font-size: 28px;
      line-height: 43px;
      color: #8a8585;
      @media (max-width: 767px) {
        font-size: 18px;
        line-height: 22px;
      }
    }
  }
  .IWantToEat {
    .IWantToEatContent {
      background: #f9f7f7;
      box-shadow: 2px 6px 4px rgba(145, 139, 139, 0.4);
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 15px 0 35px;
      max-width: 987px;
      width: 100%;
      @media (max-width: 767px) {
        height: 50px;
        margin-top: 30px;
      }

      .eatText {
        font-size: 24px;
        line-height: 38px;
        color: rgba(82, 82, 82, 0.8);
        input[type="text"] {
          background-color: transparent;
          border: none;
          outline: none;
          box-shadow: none;
        }
        @media (max-width: 767px) {
          font-size: 14px;
          line-height: 16px;
        }
      }
      .eatItemWrap {
        @media (max-width: 767px) {
          display: none;
        }
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .eatItem {
          background: linear-gradient(
            96.14deg,
            #3a8ef6 -10.84%,
            #6f3afa 196.74%
          );
          border-radius: 50%;
          font-size: 12px;
          line-height: 15px;
          display: flex;
          align-items: center;
          text-align: center;
          color: #ffffff;
          width: 78px;
          height: 78px;
          padding: 15px;
          margin: 20px 10px;
          &.inActive {
            color: #adadad;
            background: linear-gradient(
              96.14deg,
              #4a6382 -10.84%,
              #6f3afa 196.74%
            );
            pointer-events: none;
          }
        }
      }
    }
  }
`;
