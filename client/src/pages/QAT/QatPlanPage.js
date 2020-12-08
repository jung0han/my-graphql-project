import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Table,
  PageHeader,
  Select,
  Badge,
  Layout,
  Breadcrumb,
  Tooltip,
  Transfer,
  Tag,
  Button,
} from 'antd';

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

const inspectItem = [
  {
    key: 1,
    name: 'Line & Load Regulation',
    specification:
      '정격 Line(AC 120V/230V)으로 고정 후 출력 Load를 승인원에 명시된 Max 조건까지 가변 후 출력값 확인',
    type: 'continuous',
    ctq: true,
  },
  {
    key: 2,
    name: 'Over Current Protection',
    specification: '부하를 증가시켜 OCP 동작 구간 확인',
    type: 'continuous',
  },
  {
    key: 3,
    name: 'Ripple & Noise',
    specification:
      '정격 전압(120V / 230V) 입력 후 100% 부하 상태에서 출력단 양단을 측정함',
    type: 'continuous',
  },
  {
    key: 4,
    name: 'Efficiency',
    specification:
      '지역별(115V / 230V) 입력 조건에서 25% / 50%/ 75%/ 100% Load시 출력전압 및 소비 전력을 측정하여 평균 효율 산출 판정함',
    type: 'continuous',
  },
  {
    key: 5,
    name: 'Short 시험',
    specification:
      '지역별 전압, Full Load 상태 Plug 단자 間 Short 검사시 이상 없을것(1분)',
    type: 'discrete',
  },
];

const renderItem = (item) => {
  const customLabel = (
    <span className="custom-item">
      <Tooltip placement="topLeft" title={item.specification}>
        <Tag>{item.type}</Tag> {item.ctq ? <Tag color="red">CTQ</Tag> : ''}{' '}
        {item.name}
      </Tooltip>
    </span>
  );
  return {
    label: customLabel, // for displayed item
    value: item.title, // for title and filter matching
  };
};

const originTargetKeys = ''; //미리 선택된 항목 설정

const StyledPageHeader = styled(PageHeader)`
  padding-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
`;

const QatPlanPage = ({ history }) => {
  console.log(history);

  const [targetKeys, setTargetKeys] = useState(originTargetKeys);

  const onChange = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };

  const handleSearch = (dir, value) => {
    console.log('search:', dir, value);
  };

  const filterOption = (inputValue, option) =>
    option.name.toLowerCase().indexOf(inputValue) > -1;

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
          <Link to="/plm">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/plm/drbfm">Assurance Test</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Inspecion plan</Breadcrumb.Item>
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
          title="Inspecion plan"
          onBack={() => history.goBack()}
          extra={[
            <Button key="1" type="primary">
              <Link to="/plm/qat/EAB12345678/dim">Next</Link>
            </Button>,
          ]}
        />
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          size="small"
        />
        <Transfer
          dataSource={inspectItem}
          listStyle={{
            width: '70%',
            height: 500,
          }}
          titles={['List', 'Plan']}
          showSearch
          oneWay
          render={renderItem}
          targetKeys={targetKeys}
          onChange={onChange}
          onSearch={handleSearch}
          filterOption={filterOption}
        />
      </Content>
    </>
  );
};

export default QatPlanPage;
