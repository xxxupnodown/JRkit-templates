/**
 * menu 列表 项
 */
import React from 'react';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import {
  DashboardOutlined,
  MenuOutlined
} from '@ant-design/icons';
const menu: ItemType[] = [
  {
    label: 'dashboard',
    title: 'dashboard',
    key: '/dashboard',
    icon: <DashboardOutlined />,
  },
  {
    label: 'subMenu',
    title: 'subMenu',
    key: '/subMenu',
    icon: <MenuOutlined />,
  },
];
export default menu;
