import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import paths from './paths';
import Loading from '@/pages/loading';

const MyRouter = () => {
  const subRoute = (routes: typeof paths) => (
    routes.map(path => (
      path.children ?
        <Route key={path.path} path={path.path} element={<path.element />}>
          {
            subRoute(path.children)
          }
        </Route>
        :
        <Route key={path.path} path={path.path} element={<path.element />}></Route>
    ))
  );

  return <HashRouter>
    <Suspense fallback={<Loading />}>
      <Routes>
        {
          subRoute(paths)
        }
      </Routes>
    </Suspense>
  </HashRouter>
}

export default MyRouter;
