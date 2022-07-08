import { AboutPage } from "../page/AboutPage";
import { DashboardPage } from "../page/DashboardPage";

export enum RoutePageType {
  DashboardPage = "DashboardPage",
  AboutPage = "AboutPage",
}

export const routePages = {
  [RoutePageType.DashboardPage]: {
    title: "主页",
    path: "/",
    page: DashboardPage,
  },
  [RoutePageType.AboutPage]: {
    title: "关于",
    path: "/about",
    page: AboutPage,
  },
} as const;
