import React, { useState } from "react";
import { Layout, Menu } from "antd";
import menu from "./menu";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import logo from "@public/image/logo.PNG";
import minLogo from "@public/image/slogo.PNG";
import { useNavigate, Outlet } from "react-router-dom";
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import './index.less';

const { Header, Sider, Content } = Layout;

const Layouts = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const menuChange = (item: ItemType) => {
    navigate(item!.key as string);
  }

  return <>
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} theme='light'>
        <div className="logo">
          {
            collapsed ? 
              <img src={minLogo} alt="logo"/>
              :
              <img src={logo} alt="logo"/>
          }
        </div>
        <Menu
          items={menu}
          onSelect={menuChange}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background site-layout-header" >
          {
            collapsed ?
              <MenuUnfoldOutlined onClick={() => setCollapsed(!collapsed)} />
              :
              <MenuFoldOutlined onClick={() => setCollapsed(!collapsed)} />
          }
        </Header>
        <Content className="site-layout-background site-layout-content" >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  </>
}

export default Layouts;
