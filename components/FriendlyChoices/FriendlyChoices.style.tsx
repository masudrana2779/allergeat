import styled from "styled-components";
export const FriendlyChoicesWrap = styled.div`
  padding: 120px 0;
  @media (max-width: 991px) {
    padding: 50px 0;
  }
  @media (max-width: 767px) {
    padding: 0px 0 50px;
  }
  .ItemsWrap {
    .FItem {
      display: flex;
      grid-gap: 30px;
      overflow-y: auto;
    }
  }
`;
