import { ConfigProvider } from "antd";
import "antd/dist/antd.css";
import zhCN from "antd/es/locale/zh_CN";

import { Provider } from "react-redux";
import { AboutPage } from "./page/AboutPage";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <AboutPage />
      </ConfigProvider>
    </Provider>
  );
};

export default App;
