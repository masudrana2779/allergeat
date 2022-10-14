import styled from "styled-components";

export const MapWrap = styled.div`
  padding-bottom: 120px;
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

      .eatText {
        font-size: 16px;
        line-height: 38px;
        color: rgba(82, 82, 82, 0.8);
        input[type="text"] {
          background-color: transparent;
          border: none;
          outline: none;
          box-shadow: none;
          @media (max-width: 767px) {
            height: 50px;
            font-size: 14px;
          }
        }
      }
      .eatItemWrap {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        @media (max-width: 767px) {
          display: none;
        }
        .eatItem {
          background: linear-gradient(
            96.14deg,
            #3a8ef6 -10.84%,
            #6f3afa 196.74%
          );
          border-radius: 50%;
          font-size: 10px;
          line-height: 12px;
          display: flex;
          align-items: center;
          text-align: center;
          color: #ffffff;
          width: 60px;
          height: 60px;
          padding: 5px;
          margin: 10px 5px;
        }
      }
    }
  }
  .mapContent {
    @media (max-width: 1024px) {
      margin-bottom: 30px;
    }
    .mapInner {
      display: flex;
      iframe {
        height: 700px;
        width: 100%;
        border: 3px dashed #8a8585;
        filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.15));
        border-radius: 35.3125px;
        border: none;
        margin: 0;
        background-color: #8a8585;
        @media (max-width: 991px) {
          height: 450px;
        }
      }
    }
  }
  .RestaurantNameWrap {
    background: linear-gradient(
      136.23deg,
      #efefef 14.84%,
      rgba(187, 187, 187, 0) 100.63%
    );
    border: 3px solid #3a8ef6;
    filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.15));
    border-radius: 35.3125px;
    box-shadow: 0px 5px 15px rgb(145 139 139 / 60%);
    height: 100%;
    padding: 40px;
    @media (max-width: 767px) {
      padding: 20px 15px;
    }
    .RestaurantNameWrapInner {
      .restaruntName {
        font-size: 44px;
        line-height: 44px;
        margin-bottom: 25px;
        color: #000000;
        @media (max-width: 767px) {
          font-size: 24px;
          line-height: 30px;
          margin-bottom: 15px;
        }
      }
      .restaurantInfo {
        display: flex;
        margin-bottom: 50px;
        @media (max-width: 767px) {
          display: block;
        }
        .infoLeft {
          .infoTitle {
            h5 {
              font-size: 22px;
              line-height: 30px;
              margin-bottom: 40px;
              color: #8a8585;
              @media (max-width: 767px) {
                font-size: 16px;
                line-height: 22px;
              }
            }
          }
          .infoBoxWrap {
            display: flex;
            grid-gap: 20px;
            @media (max-width: 767px) {
              grid-gap: 10px;
            }
            .infoBoxItem {
              width: 100%;
              @media (max-width: 767px) {
                max-width: 110px;
              }
              .infoBox {
                width: 100%;
                height: 160px;
                padding: 15px;
                background: #ffb100;
                border-radius: 38px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                margin-bottom: 15px;
                @media (max-width: 767px) {
                  border-radius: 15px;
                  height: 120px;
                }
                .number {
                  font-size: 60px;
                  @media (max-width: 767px) {
                    font-size: 40px;
                  }
                }
                .comingSoon {
                  font-size: 20px;
                  @media (max-width: 767px) {
                    font-size: 14px;
                  }
                }
              }
              .infoBoxTitle {
                font-size: 22px;
                line-height: 30px;
                padding: 0 15px;
                text-align: center;
                @media (max-width: 767px) {
                  font-size: 16px;
                  line-height: 20px;
                }
              }
            }
          }
        }
        .infoRight {
          margin-left: 30px;
          @media (max-width: 767px) {
            margin: 30px 0 0;
          }
          .infoListWrap {
            @media (max-width: 767px) {
              display: grid;
              grid-template-columns: auto auto;
              grid-column-gap: 30px;
              grid-gap: 10px 30px;
            }
            .infoList {
              background: linear-gradient(
                96.14deg,
                #3a8ef6 -10.84%,
                #6f3afa 196.74%
              );
              border-radius: 17.0492px;
              font-size: 18px;
              line-height: 30px;
              text-align: center;
              color: #ffffff;
              min-width: 160px;
              width: 100%;
              padding: 15px;
              margin-bottom: 20px;
              cursor: pointer;
              @media (max-width: 767px) {
                min-width: initial;
              }
              &:hover {
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
  }
  .ItemsWrap {
    .FItem {
      display: flex;
      grid-gap: 10px;
      overflow-y: auto;
    }
  }
`;
