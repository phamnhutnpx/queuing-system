import React from 'react';
import Sidebar from '../../components/Sidebar';
import MainHeader from '../../components/Header/MainHeader';
import { Layout } from 'antd';
import styled from 'styled-components';

const ContainLayout = styled(Layout)`
  display: flex;
  background: #f7f7f7;
`;

const DefaultLayout = ({ children }: any) => {
  return (
    <>
      <Sidebar />
      <MainHeader />
      <ContainLayout className="layout-content">{children}</ContainLayout>
    </>
  );
};

export default DefaultLayout;
