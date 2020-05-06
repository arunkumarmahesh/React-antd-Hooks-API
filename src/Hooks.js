import React from "react";
import { Layout, Menu } from "antd";
import Hooks from "./Fetchapi/api";
import "antd/dist/antd.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  TableOutlined,
  BarChartOutlined,
  DotChartOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark">
            <Menu.Item key="1" icon={<TableOutlined />}>
              <Link to="/">TABLE </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<BarChartOutlined />}>
              <Link to="/barchart">BarChart </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<DotChartOutlined />}>
              <Link to="/linechart">Linechart </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<ApartmentOutlined />}>
              <Link to="/Hooks">Hooks </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 500,
            }}
          >
            <Hooks />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
