import styled from "styled-components";

export const SearchWrap = styled.div`
  .IWantToEat {
    position: relative;
    .searcResult {
      position: absolute;
      top: 130px;
      background: #f9f7f7;
      box-shadow: 2px 6px 4px rgba(145, 139, 139, 0.4);
      width: 100%;
      border: 1px solid #8080807d;
      border-radius: 50px;
      padding: 20px 35px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      z-index: 999999999999;

      span {
        color: gray;
        font-size: 15px;
        font-weight: 900;
        font-family: arial;
      }
    }

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
        .eatItem {
          background: linear-gradient(
            96.14deg,
            #3a8ef6 -10.84%,
            #6f3afa 196.74%
          );
          border: transparent;
          border-radius: 50%;
          font-size: 0.8em;
          line-height: 15px;
          display: flex;
          align-items: center;
          text-align: center;
          color: #ffffff;
          width: 5em;
          height: 5em;
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
