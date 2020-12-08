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
import QatListPage from './QAT/QatListPage';
import QatPlanPage from './QAT/QatPlanPage';
import QatDimPlanPage from './QAT/QatDimPlanPage';
import QatInputPage from './QAT/QatInputPage';
import QatInputItemPage from './QAT/QatInputItemPage';

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
            <Route
              path="/plm/qat/EAB12345678/input/1"
              component={QatInputItemPage}
            />
            <Route path="/plm/qat/EAB12345678/input" component={QatInputPage} />
            <Route path="/plm/qat/EAB12345678/dim" component={QatDimPlanPage} />
            <Route path="/plm/qat/EAB12345678" component={QatPlanPage} />
            <Route path="/plm/qat" component={QatListPage} />
          </Switch>
        </Layout>
      </Layout>
    </StyledLayout>
  );
};

export default PLM;
