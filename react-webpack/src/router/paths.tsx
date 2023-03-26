import { ComponentType, lazy, LazyExoticComponent } from "react";
const Paths: IPaths[] = [
  {
    path: '/',
    element: lazy(() => import('@/layout')),
    children: [
      {
        path: '/dashboard',
        element: lazy(() => import('@/pages/dashboard')),
      },
      {
        path: '/subMenu',
        element: lazy(() => import('@/pages/subMenu')),
      }
    ]
  }
]
export interface IPaths {
  path: string;
  element: LazyExoticComponent<ComponentType<any>>;
  children?: IPaths[];
};
export default Paths;
