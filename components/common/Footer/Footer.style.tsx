import styled from "styled-components";

export const FooterWrap = styled.div`
  background: #ffffff;
  border-radius: 50px 50px 0 0;
  padding: 100px 0 0;
  @media (max-width: 767px) {
    padding: 50px 0;
    border-radius: 0;
  }
  .copyRightWrap {
    border-top: 1px solid #d9dbe9;
    padding: 30px 0;
    @media (max-width: 991px) {
      font-size: 12px;
    }
    @media (max-width: 767px) {
      text-align: center;
      padding-bottom: 0;
      .row {
        flex-direction: column-reverse;
      }
    }
    p {
      margin: 0;
    }
    .fTlonk {
      text-align: right;
      padding-bottom: 20px;
      @media (max-width: 767px) {
        text-align: center;
      }
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
    @media (max-width: 767px) {
      max-width: 50px;
      width: 100%;
    }
  }
  .flogo {
    margin-bottom: 5px;
    a {
      display: inline-block;
      @media (max-width: 767px) {
        max-width: 170px;
        width: 100%;
      }
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
    @media (max-width: 767px) {
      font-size: 16px;
      margin-bottom: 10px;
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
      margin-bottom: 10px;
      span {
        margin-right: 10px;
      }
      @media (max-width: 1024px) {
        font-size: 14px;
      }
      @media (max-width: 767px) {
        font-size: 12px;
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
        @media (max-width: 767px) {
          font-size: 12px;
        }
      }
      @media (max-width: 1024px) {
        margin: 10px 0;
      }
    }
  }
`;
