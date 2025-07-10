import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";

import CrossLine from "@/components/CrossLine/CrossLine";
import DateRange from "@/components/DateRange/DateRange";
import GroupedButtons from "@/components/GroupedButtons/GroupedButtons";
import HeaderText from "@/components/HeaderText/HeaderText";
import PageContent from "@/components/PageContent";
import SliderHistory from "@/components/SliderHistory/SliderHistory";
import { Topic } from "@/shared/api/history";
import { fetchTopics } from "@/shared/fetchers/fetchTopics";
import { getDateRangeFromStories } from "@/shared/helpers/getDateRangeFromStories";
import { CrossLineHandle } from "@/components/DotsOnCircle";

const ContentPage = () => {
  const [topics, setTopics] = useState<Topic[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const crossLineRef = useRef<CrossLineHandle>(null);

  const prevIndexRef = useRef(currentIndex);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleNext = useCallback(() => {
    if (!topics) return;
    setCurrentIndex((prev) => (prev < topics.length - 1 ? prev + 1 : prev));
  }, [topics]);

  useEffect(() => {
    if (prevIndexRef.current === currentIndex) return;

    if (currentIndex > prevIndexRef.current) {
      crossLineRef.current?.rotateDots("right");
    } else if (currentIndex < prevIndexRef.current) {
      crossLineRef.current?.rotateDots("left");
    }

    prevIndexRef.current = currentIndex;
  }, [currentIndex]);

  const topicsForDots = useMemo(() => {
    if (!topics) return [];
    return topics.map((topic) => ({
      id: topic.id,
      title: topic.title,
    }));
  }, [topics]);

  const currentTopic = useMemo(() => {
    if (!topics) return null;
    return topics[currentIndex];
  }, [topics, currentIndex]);

  const dateRange = useMemo(() => {
    if (!currentTopic) return { firstYear: 0, lastYear: 0 };
    return getDateRangeFromStories(currentTopic.stories);
  }, [currentTopic]);

  useEffect(() => {
    fetchTopics().then(setTopics);
  }, []);

  if (!topics || !currentTopic) return <div>Загрузка...</div>;

  return (
    <PageContent>
      <ContentWrapper>
        <CrossLine
          ref={crossLineRef}
          topicsWithoutStories={topicsForDots}
          activeTopicId={currentTopic.id}
          onDotClick={(topic) => {
            const clickedIndex = topics.findIndex((t) => t.id === topic.id);
            if (clickedIndex !== -1) setCurrentIndex(clickedIndex);
          }}
        />
        <HeaderText />
        <DateRangeWrapper>
          <DateRange
            firstYear={dateRange.firstYear}
            lastYear={dateRange.lastYear}
          />
        </DateRangeWrapper>
        <SliderWrapper>
          <GroupedButtons
            currentIndex={currentIndex}
            itemsLength={topics.length}
            onPrevClick={handlePrev}
            onNextClick={handleNext}
            prevDisabled={currentIndex === 0}
            nextDisabled={currentIndex === topics.length - 1}
          />
          <SliderHistory stories={currentTopic.stories} />
        </SliderWrapper>
      </ContentWrapper>
    </PageContent>
  );
};

export default ContentPage;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: ${({ theme }) => theme.space(10, 0)};
  gap: 100px;
  justify-content: space-between;
`;

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.space(0, 10)};
  gap: ${({ theme }) => theme.space(7)};
`;

const DateRangeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
