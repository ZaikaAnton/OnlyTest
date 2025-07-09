import "react-router-dom";

export const ROUTES = {
  MAIN: "/",
  HISTORY: "/history",
  HISTORYID: "/history/:id",
  NOT_FOUND: "*",
} as const;

export type PathParams = {
  [ROUTES.HISTORYID]: { historyId: string };
};

declare module "react-router-dom" {
  interface Register {
    params: PathParams;
  }
}
