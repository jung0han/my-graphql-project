import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Table,
  PageHeader,
  Button,
  Select,
  Input,
  Layout,
  Breadcrumb,
  Tooltip,
} from 'antd';

const { Option } = Select;
const { Content } = Layout;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const StyledPageHeader = styled(PageHeader)`
  padding-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
`;

const columns = [
  {
    title: 'No',
    dataIndex: 'number',
    width: 50,
  },
  {
    title: 'Value',
    width: 150,
    render: (text, record) => <Input type="text" />,
  },
];

const data = [];
for (let i = 1; i < 101; i++) {
  data.push({
    key: i,
    number: `#${i}`,
  });
}

const QatInputItemPage = ({ history }) => {
  console.log(history);
  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Assurance Test</Breadcrumb.Item>
        <Breadcrumb.Item>Inspection Item</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <StyledPageHeader
          className="site-page-header"
          onBack={() => history.goBack()}
          title="Inspection Item"
          extra={[
            <Button key="1" type="primary">
              New
            </Button>,
          ]}
        />
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 50 }}
          scroll={{ y: 240 }}
          size="small"
        />
      </Content>
    </>
  );
};

export default QatInputItemPage;
