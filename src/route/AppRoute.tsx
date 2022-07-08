import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage } from "../page/AboutPage";
import { DashboardPage } from "../page/DashboardPage";
import { MenuPage } from "../page/MenuPage";
import { PlainContainer } from "./PlainContainer";
import { routePages, RoutePageType } from "./route";

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPage />}>
          <Route
            index
            element={
              <PlainContainer
                title={routePages[RoutePageType.DashboardPage].title as string}
              >
                <DashboardPage />
              </PlainContainer>
            }
          />

          <Route
            path={routePages[RoutePageType.AboutPage].path as string}
            element={
              <PlainContainer
                title={routePages[RoutePageType.AboutPage].title as string}
              >
                <AboutPage></AboutPage>
              </PlainContainer>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
