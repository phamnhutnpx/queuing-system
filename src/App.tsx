import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import { Layout } from 'antd';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {publicRoutes?.map((route: any, index) => {
            let Layout: any = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route key={index} path={route.path} element={<Layout>{route.component}</Layout>} />
            );
          })}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
