import styled from "styled-components";
export const FriendlyChoicesWrap = styled.div`
  padding: 120px 0;
  @media (max-width: 991px) {
    padding: 50px 0;
  }
  .ItemsWrap {
    .FItem {
      display: flex;
      grid-gap: 30px;
      overflow-y: auto;
    }
  }
`;
