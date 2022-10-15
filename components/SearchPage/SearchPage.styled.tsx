import styled from "styled-components";

export const SearchPageWrap = styled.div`
  padding: 100px 0;
  @media (max-width: 767px) {
    padding: 50px 0;
  }
  .searchTitle {
    background: linear-gradient(96.14deg, #3a8ef6 -10.84%, #6f3afa 196.74%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    font-size: 36px;
    line-height: 48px;
    margin-bottom: 30px;
    @media (max-width: 767px) {
      font-size: 20px;
      line-height: 30px;
    }
  }
  .itemInner {
    width: 100%;
    .ItemImg {
      .tagList {
        .eatItem {
          @media (max-width: 767px) {
            width: 50px;
            height: 50px;
            padding: 0;
            font-size: 8px;
            line-height: 10px;
            margin: 10px 5px;
          }
        }
      }
    }
  }
`;
