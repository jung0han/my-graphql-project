import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import NavbarTop from './NavbarTop';
import Sidebar from './Sidebar';
import DrbfmListPage from './DRBFM/DrbfmListPage';
import QRiskListPage from './QRisk/QRiskListPage';
import DrbfmIssueListPage from './DRBFM/DrbfmIssueListPage';
import DrbfmIssueDetailPage from './DRBFM/DrbfmIssueDetailPage';
import styled from 'styled-components';

const StyledLayout = styled(Layout)`
  min-height: 100vh;
  .site-layout-background {
    background: #fff;
  }
  .site-gray-block {
    padding: 24px;
    background: #fbfbfb;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    margin-bottom: 24px;
  }
`;

const PLM = () => {
  return (
    <StyledLayout>
      <NavbarTop user="test" />
      <Layout>
        <Sidebar />
        <Layout style={{ padding: '0 24px 0' }}>
          <Switch>
            <Route
              path="/plm/drbfm/EAB12345678/1"
              component={DrbfmIssueDetailPage}
            />
            <Route
              path="/plm/drbfm/EAB12345678"
              component={DrbfmIssueListPage}
            />
            <Route path="/plm/drbfm" component={DrbfmListPage} />
            <Route path="/plm/q-risk" component={QRiskListPage} />
          </Switch>
        </Layout>
      </Layout>
    </StyledLayout>
  );
};

export default PLM;
