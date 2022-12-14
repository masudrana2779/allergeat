import styled from "styled-components";

export const FriendlyChoicesItemWrap = styled.div`
  margin-bottom: 10px;
  .itemInner {
    width: 105px;
    .ItemImg {
      margin-bottom: 5px;
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
        }
      }
    }
    .FitemInfo {
      h4 {
        font-size: 12px;
        line-height: 14px;
        margin-bottom: 5px;
        color: #8a8585;
        &.dishName {
          color: #000;
        }
      }
    }
  }
`;
