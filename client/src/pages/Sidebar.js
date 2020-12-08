import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { PartitionOutlined, RocketOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu mode="inline" style={{ borderRight: 0 }}>
        <Menu.Item key="1" disabled icon={<RocketOutlined />}>
          양산 품질
        </Menu.Item>
        <SubMenu key="sub1" icon={<PartitionOutlined />} title="개발 품질">
          <Menu.Item key="2">
            <Link to="/plm/drbfm">DRBFM</Link>
          </Menu.Item>
          <Menu.Item key="3" disabled>
            <Link to="/plm/q-risk">Q-Risk</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/plm/qat">인정시험</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
