/*
 * @Author: xxxupnodown 469004811@qq.com
 * @Date: 2023-03-26 17:48:38
 * @LastEditors: xxxupnodown 469004811@qq.com
 * @LastEditTime: 2023-03-26 17:55:50
 * @FilePath: \JRkit-templates\react-webpack\src\layout\menu.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
