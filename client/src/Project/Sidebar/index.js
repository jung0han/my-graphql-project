import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ borderRight: 0 }}
      >
        <Menu.Item key="1" icon={<UserOutlined />}>
          Development
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Development">
          <Menu.Item key="2"><Link to="/project/drbfm">DRBFM</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/project/q-risk">Q-Risk</Link></Menu.Item>
          <Menu.Item key="4"><Link to="/project/q-risk">인정시험</Link></Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
