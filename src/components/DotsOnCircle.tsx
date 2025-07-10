import {
  forwardRef,
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
} from "react";
import styled, { css } from "styled-components";
import { gsap } from "gsap";

interface TopicInfo {
  id: number;
  title: string;
}

interface DotsOnCircleProps {
  topicsWithoutStories: TopicInfo[];
  activeTopicId?: number;
  className?: string;
  onDotClick?: (topic: TopicInfo) => void;
}

export interface CrossLineHandle {
  rotateDots: (direction: "left" | "right") => void;
}

const DotsOnCircle = forwardRef<CrossLineHandle, DotsOnCircleProps>(
  ({ topicsWithoutStories, activeTopicId, className, onDotClick }, ref) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [radius, setRadius] = useState(0);
    const [rotation, setRotation] = useState(0);

    useImperativeHandle(ref, () => ({
      rotateDots(direction) {
        const angleStep = 360 / topicsWithoutStories.length;
        const delta = direction === "right" ? -angleStep : angleStep;
        const newRotation = rotation + delta;

        gsap.to(wrapperRef.current, {
          rotation: newRotation,
          duration: 0.6,
          ease: "power2.inOut",
          transformOrigin: "50% 50%",
        });

        setRotation(newRotation);
      },
    }));

    useEffect(() => {
      function updateRadius() {
        if (wrapperRef.current) {
          const rect = wrapperRef.current.getBoundingClientRect();
          setRadius(rect.width / 2);
        }
      }

      updateRadius();
      window.addEventListener("resize", updateRadius);
      return () => window.removeEventListener("resize", updateRadius);
    }, []);

    return (
      <Wrapper ref={wrapperRef} className={className}>
        {topicsWithoutStories.map((topic, index) => {
          const angle = (360 / topicsWithoutStories.length) * index;
          const isActive = topic.id === activeTopicId;

          return (
            <DotWrapper
              key={topic.id}
              $isActive={isActive}
              style={{
                transform: `rotate(${angle}deg) translateY(-${radius}px)`,
              }}
              onClick={() => onDotClick?.(topic)}
            >
              <Dot>
                <DotId style={{ transform: `rotate(-${angle + rotation}deg)` }}>
                  {topic.id}
                </DotId>
              </Dot>
            </DotWrapper>
          );
        })}
      </Wrapper>
    );
  }
);

export default DotsOnCircle;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  aspect-ratio: 1;
  max-width: 530px;
  max-height: 530px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

const DotWrapper = styled.div<{ $isActive?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  margin-left: -5px;
  margin-top: -5px;
  transform-origin: center center;
  cursor: pointer;
  z-index: 1;

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      & > div {
        width: 56px;
        height: 56px;
        margin-left: -28px;
        margin-top: -28px;
        background-color: ${theme.palette.bgLight};
        border: 1px solid ${theme.palette.textDark};

        span {
          opacity: 1;
        }
      }
    `}

  &:hover > div {
    width: 56px;
    height: 56px;
    margin-left: -28px;
    margin-top: -28px;
    background-color: ${({ theme }) => theme.palette.bgLight};
    border: 1px solid ${({ theme }) => theme.palette.textDark};

    span {
      opacity: 1;
    }
  }
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ theme }) => theme.palette.textDark};
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const DotId = styled.span`
  opacity: 0;
  transition: opacity 0.2s ease;
  color: ${({ theme }) => theme.palette.textDark};
  font-size: 20px;
  font-weight: bold;
  transform-origin: center center;
`;
