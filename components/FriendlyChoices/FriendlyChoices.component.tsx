import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import {
  DivBlock,
  SubTitle,
  Title,
} from "../StyledComponent/globalStyle/globalStyle";
import { FriendlyChoicesWrap } from "./FriendlyChoices.style";
import FriendlyChoicesItem from "./FriendlyChoicesItem/FriendlyChoicesItem";

const FriendlyChoicesComponent = () => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <FriendlyChoicesWrap>
      <DivBlock className="container">
        <DivBlock className="row">
          <div className="col-12">
            <SubTitle>Just Added to Our Site:</SubTitle>
            <Title>Access to Allergy Friendly Choices.</Title>
            <DivBlock className="ItemsWrap">
              <DivBlock className="FItem" {...events} ref={ref}>
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item: any, i: number) => (
                  <>
                    <FriendlyChoicesItem key={i} />
                  </>
                ))}
              </DivBlock>
            </DivBlock>
          </div>
        </DivBlock>
      </DivBlock>
    </FriendlyChoicesWrap>
  );
};
export default FriendlyChoicesComponent;
