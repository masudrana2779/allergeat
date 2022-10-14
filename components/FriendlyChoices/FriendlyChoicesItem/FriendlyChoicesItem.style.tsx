import styled from "styled-components";

export const FriendlyChoicesItemWrap = styled.div`
  margin-bottom: 50px;
  @media (max-width: 991px) {
    margin-bottom: 30px;
  }
  .itemInner {
    width: 310px;
    @media (max-width: 991px) {
      width: 240px;
    }
    .ItemImg {
      margin-bottom: 20px;
      position: relative;
      .tagList {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
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
          @media (max-width: 991px) {
            width: 65px;
            height: 65px;
            font-size: 10px;
          }
        }
      }
    }
    .FitemInfo {
      h4 {
        font-size: 26px;
        line-height: 30px;
        color: #8a8585;
        &.dishName {
          color: #000;
        }
        @media (max-width: 991px) {
          font-size: 20px;
          line-height: 24px;
        }
        @media (max-width: 767px) {
          font-size: 14px;
          line-height: 16px;
        }
      }
    }
  }
`;
