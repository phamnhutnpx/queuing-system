import React from 'react';
import { Layout } from 'antd';
import MainBreadcrumb from '../Breadcrumb';
import Profile from '../Profile';
import styled from 'styled-components';

const { Header } = Layout;
const HeaderStyle = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f7f7f7;
  padding: 0 20px;
  line-height: unset;
`;

const MainHeader = () => {
  return (
    <HeaderStyle>
      <MainBreadcrumb />
      <Profile />
    </HeaderStyle>
  );
};

export default MainHeader;
