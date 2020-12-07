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
    title: 'Category',
    dataIndex: 'category',
    render: (text) => {
      return <Link to={`/plm/drbfm/EAB12345678/1`}>{text}</Link>;
    },
  },
  {
    title: 'Comment',
    dataIndex: 'comment',
  },
  {
    title: 'Owner',
    dataIndex: 'owner',
    width: 90,
  },

  {
    title: 'Due Date',
    dataIndex: 'dueDate',
    width: 90,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: 90,
    render: (text) => <Badge status={text[0]} text={text[1]} />,
  },
];

const data = [
  {
    key: '1',
    category: '모터 구동부',
    comment:
      '모터 기어 "위상 동기 설계" 부분에 대한 Risk 여부 창원 전문가에게 문의하여 확인 할 것',
    owner: 'dongwoo.jeong',
    dueDate: '12/4',
    status: ['success', '완료'],
  },
  {
    key: '2',
    category: '신뢰성',
    comment:
      '모터 신뢰성 및 성능에 영향 미치는 항목을 도출하여 승인원에 포함 하도록 할 것(ex. 주요 치수, 발열 허용 온도 등.)',
    owner: 'dongwoo.jeong',
    dueDate: '12/4',
    status: ['success', '완료'],
  },
  {
    key: '3',
    category: '신뢰성',
    comment:
      '모터 단품 신뢰성 시험은 가속 시험을 할 수 있는 조건으로 시험 시간 개선 할 수 있도록 할 것(ex. Set 동작 기준이 아닌 단품 Spec. 내 최대 가속할 수 있는 조건 등)',
    owner: 'dongwoo.jeong',
    dueDate: '12/4',
    status: ['success', '완료'],
  },
  {
    key: '4',
    category: '신뢰성',
    comment:
      '연구소에서 검토 중인 AI를 통한 검증방안은 Wing에 선적용하여 해당 방안에 대한 신뢰성을 선 검토 하고, 소음 / 이음 검사는 선별이 아닌 전수 검사가 진행 되도록 할 것',
    owner: 'dongwoo.jeong',
    dueDate: '12/24',
    status: ['processing', '진행 중'],
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

const DrbfmIssueListPage = ({ history }) => {
  console.log(history);
  const title = 'DRBFM';
  pageHeaderVar(title);

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
          <Link to="/plm">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/plm/drbfm">DRBFM</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>EAB12345678</Breadcrumb.Item>
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
          title="EAB12345678"
          onBack={() => history.goBack()}
        />
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

export default DrbfmIssueListPage;
