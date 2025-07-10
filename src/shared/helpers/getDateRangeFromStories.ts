import { Story } from "../api/history";

export function getDateRangeFromStories(stories: Story[]) {
  const years = stories.map((story) => story.year);
  const firstYear = Math.min(...years);
  const lastYear = Math.max(...years);

  return { firstYear, lastYear };
}
