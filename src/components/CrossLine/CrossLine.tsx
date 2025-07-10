import { forwardRef, useImperativeHandle, useRef } from "react";
import styled from "styled-components";

import Line from "../Line";
import Circle from "../Circle";
import DotsOnCircle, { CrossLineHandle } from "../DotsOnCircle";

interface CrossLineProps {
  topicsWithoutStories: {
    id: number;
    title: string;
  }[];
  activeTopicId?: number;
  onDotClick?: (topic: { id: number; title: string }) => void;
}

const CrossLine = forwardRef<CrossLineHandle, CrossLineProps>(
  ({ topicsWithoutStories, activeTopicId, onDotClick }, ref) => {
    const dotsRef = useRef<CrossLineHandle>(null);

    useImperativeHandle(ref, () => ({
      rotateDots(direction) {
        dotsRef.current?.rotateDots(direction);
      },
    }));

    return (
      <CrossWrapper>
        <VerticalLine orientation="vertical" />
        <HorizontalLine orientation="horizontal" />
        <Circle />
        <DotsOnCircle
          ref={dotsRef}
          topicsWithoutStories={topicsWithoutStories}
          activeTopicId={activeTopicId}
          onDotClick={onDotClick}
        />
      </CrossWrapper>
    );
  }
);

export default CrossLine;

const CrossWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const VerticalLine = styled(Line)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const HorizontalLine = styled(Line)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
