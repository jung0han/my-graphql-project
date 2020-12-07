import React from 'react';
import { Layout, PageHeader, Breadcrumb } from 'antd';

const StyledPageHeader = styled(PageHeader)`
  padding-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
`;

const pageHeader = () => {
  return (
    <Layout style={{ padding: '0 24px 0' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Model Status</Breadcrumb.Item>
      </Breadcrumb>
      <Layout.Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <StyledPageHeader
          className="site-page-header"
          title={headerVar}
          subTitle="Model Status"
        />
      </Layout.Content>
    </Layout>
  );
};

export default pageHeader;
