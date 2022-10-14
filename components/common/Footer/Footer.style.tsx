import styled from "styled-components";

export const FooterWrap = styled.div`
  background: #ffffff;
  border-radius: 50px 50px 0 0;
  padding: 100px 0 0;
  .copyRightWrap {
    border-top: 1px solid #d9dbe9;
    padding: 30px 0;
    p {
      margin: 0;
    }
    .fTlonk {
      text-align: right;
      a {
        margin: 0 20px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;
export const FooterSingleItem = styled.div`
  margin-bottom: 50px;
  .fmap {
    display: flex;
    margin-bottom: 20px;
  }
  .flogo {
    margin-bottom: 5px;
    a {
      display: inline-block;
    }
  }
  .fAbout {
    font-size: 16px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 20px;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
    span {
      color: #1678f2;
    }
  }
  .foSocial {
    a {
      color: #1678f2;
      margin-right: 20px;
      display: inline-block;
      font-size: 18px;
    }
  }
  h4 {
    font-size: 20px;
    line-height: 28px;
    color: #1678f2;
    margin-bottom: 30px;
    @media (max-width: 1024px) {
      font-size: 18px;
    }
  }
  .fAddress {
    p {
      display: inline-block;
      font-size: 16px;
      line-height: 20px;
      color: #4f555a;
      transition: all 0.3s;
      position: relative;
      display: flex;
      span {
        margin-right: 10px;
      }
      @media (max-width: 1024px) {
        font-size: 14px;
      }
    }
  }
`;
export const FooterMenu = styled.div`
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      margin: 20px 0;
      a {
        display: inline-block;
        font-size: 16px;
        line-height: 20px;
        color: #4f555a;
        transition: all 0.3s;
        position: relative;
        &::before {
          position: absolute;
          content: "";
          left: 0;
          top: 8px;
          height: 2px;
          width: 0;
          background-color: #4f555a;
          transition: all 0.3s;
        }
        &:hover {
          padding-left: 15px;
          &::before {
            width: 10px;
          }
        }
        @media (max-width: 1024px) {
          font-size: 14px;
        }
      }
      @media (max-width: 1024px) {
        margin: 10px 0;
      }
    }
  }
`;
