import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Table, PageHeader, Select, Badge, Layout, Breadcrumb } from 'antd';
import { pageHeaderVar } from '../../localStorage';

const { Option } = Select;
const { Content } = Layout;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const columns = [
  {
    title: 'Model',
    dataIndex: 'model',
  },
  {
    title: 'Part No',
    dataIndex: 'partNo',
    render: (text) => {
      return <Link to={`/plm/drbfm/${text}`}>{text}</Link>;
    },
  },
  {
    title: 'Part Name',
    dataIndex: 'partName',
  },
  {
    title: 'Owner',
    dataIndex: 'owner',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (text) => <Badge status={text[0]} text={text[1]} />,
  },
];

const data = [
  {
    key: '1',
    model: 'LMF100N',
    partNo: 'EAB12345678',
    partName: 'Moddtor',
    owner: '이종엽',
    date: '12/24',
    status: ['success', '완료'],
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

const StyledPageHeader = styled(PageHeader)`
  padding-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
`;

const QRiskListPage = ({ history }) => {
  console.log(history);
  const title = 'DRBFM';
  pageHeaderVar(title);

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>DRBFM List</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <StyledPageHeader className="site-page-header" title="DRBFM List" />
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          size="small"
        />
      </Content>
    </>
  );
};

export default QRiskListPage;
