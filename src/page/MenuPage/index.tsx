import { Outlet } from "react-router-dom";

import { Breadcrumb, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

export const MenuPage = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={[
          "General",
          "Proxies",
          "Profiles",
          "Logs",
          "Connections",
          "Settings",
          "Feedback",
        ].map((label, key) => {
          return {
            key,
            label,
          };
        })}
      />
    </Header>
    <Content
      style={{
        padding: "0 50px",
      }}
    >
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <Outlet />
      </div>
    </Content>
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);
