import React from 'react';
import './App.less';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import QRisk from './Q-Risk';
import NavbarTop from './NavbarTop';
import Sidebar from './Sidebar';
import testList from './Development/testList';
import DrbfmListPage from '../pages/DRBFM/DrbfmListPage';

const Project = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <NavbarTop user="test" />
      <Layout>
        <Sidebar />
        <Layout style={{ padding: '0 24px 0' }}>
          <Switch>
            <Route path="/plm/testList" component={testList} />
            <Route path="/plm/DRBFM" component={DrbfmListPage} />
            <Route path="/plm/q-risk" component={QRisk} />
          </Switch>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Project;
