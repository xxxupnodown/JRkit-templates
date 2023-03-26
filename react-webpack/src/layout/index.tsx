/*
 * @Author: xxxupnodown 469004811@qq.com
 * @Date: 2023-03-26 17:48:38
 * @LastEditors: xxxupnodown 469004811@qq.com
 * @LastEditTime: 2023-03-26 18:01:44
 * @FilePath: \JRkit-templates\react-webpack\src\layout\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
    <Layout className="layout-container">
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
