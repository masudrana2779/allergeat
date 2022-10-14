import styled from "styled-components";

type DivBlogProps = {
  fontColor?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  margin?: string;
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  textAlign?: string;
  width?: string;
  maxWidth?: string;
  height?: string;
  appearance?: string;
  borderTop?: string;
  borderBottom?: string;
  borderRight?: string;
  borderLeft?: string;
  borderRadius?: string;
  border?: string;
  boxShow?: string;
  outLine?: string;
  overflow?: string;
  overflowX?: string;
  overflowY?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  gridTemplateColumns?: string;
  backgroundColor?: string;
  position?: string;
  right?: string;
  left?: string;
  top?: string;
  bottom?: string;
  zIndex?: string;
  cursor?: string;
  pointerEvents?: string;
  backgroundImage?: string;
  backgroundRepeat?: string;
  backgroundAttachment?: string;
  backgroundPposition?: string;
  backgroundSize?: string;
  minWidth?: string;
  gridTemplateRows?: string;
  gridGap?: string;
  columnGap?: string;
  rowGap?: string;
  gap?: string;
};

export const DivBlock = styled.div<DivBlogProps>`
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  padding: ${(props) => props.padding};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  text-align: ${(props) => props.textAlign};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  appearance: ${(props) => props.appearance};
  border: ${(props) => props.border};
  border-top: ${(props) => props.borderTop};
  border-bottom: ${(props) => props.borderBottom};
  border-right: ${(props) => props.borderRight};
  border-left: ${(props) => props.borderLeft};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.boxShow};
  outline: ${(props) => props.outLine || "none"};
  overflow: ${(props) => props.overflow};
  overflow-x: ${(props) => props.overflowX};
  overflow-y: ${(props) => props.overflowY};
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  grid-template-columns: ${(props) => props.gridTemplateColumns};
  grid-template-rows: ${(props) => props.gridTemplateRows};
  grid-gap: ${(props) => props.gridGap};
  column-gap: ${(props) => props.columnGap};
  row-gap: ${(props) => props.rowGap};
  gap: ${(props) => props.gap};
  background-color: ${(props) => props.backgroundColor};
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: ${(props) => props.backgroundRepeat};
  background-attachment: ${(props) => props.backgroundAttachment};
  background-position: ${(props) => props.backgroundPposition};
  background-size: ${(props) => props.backgroundSize};
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  z-index: ${(props) => props.zIndex};
  cursor: ${(props) => props.cursor};
  pointer-events: ${(props) => props.pointerEvents};

  /* Cusctom scroll bar for mozila firefox */
  scrollbar-color: #aaa #3330;
  scrollbar-width: thin;

  /* Custom Scroll bar for google chrome */
  &::-webkit-scrollbar {
    /* display: none; */
  }
  &::-webkit-scrollbar {
    width: 5px;
    height: 3px;
    background-color: #aaa0;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 10px;
  }
`;

type SpanProps = {
  fontColor?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  display?: string;
  cursor?: string;
  alignItems?: string;
  justifyContent?: string;
};
export const Span = styled.span<SpanProps>`
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  font-weight: ${(props) => props.fontWeight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  display: ${(props) => props.display || "inline-block"};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  cursor: ${(props) => props.cursor};
`;

export const SubTitle = styled.div`
  background: linear-gradient(96.14deg, #3a8ef6 -10.84%, #6f3afa 196.74%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  font-family: arial;
  font-size: 34px;
  line-height: 43px;
  letter-spacing: 0.23em;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    font-size: 24px;
  }
  @media (max-width: 1024px) {
    font-size: 28px;
  }
`;

export const Title = styled.div`
  font-size: 60px;
  line-height: 90px;
  color: #000000;
  margin-bottom: 40px;
  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 44px;
  }
  @media (max-width: 1024px) {
    font-size: 40px;
    line-height: 54px;
  }
`;
