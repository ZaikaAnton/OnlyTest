import { mockTopics, Topic } from "../api/history";

export const fetchTopics = (): Promise<Topic[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTopics);
    }, 0);
  });
};
