import styled from "styled-components";

export const HeaderWrap = styled.header`
  padding: 80px 0;
  .navbar {
    padding: 0;
    .navbar-brand {
      .logo {
      }
    }
    .mainMenuWrap {
      .mainMenu {
        align-items: center;
        a {
          font-family: "black_han_sansregular";
          font-size: 25px;
          font-weight: 400;
          line-height: 32px;
          letter-spacing: 0em;
          text-align: left;
          color: #404040;
          padding: 0;
          margin: 0;
          margin-right: 50px;
          &:last-child {
            margin-right: 0;
          }

          &.mapBtn {
            display: flex;
            background: linear-gradient(
              96.14deg,
              #3a8ef6 -10.84%,
              #6f3afa 196.74%
            );
            border-radius: 18px;
            padding: 22px 26px;
          }
        }
      }
    }
  }
`;
