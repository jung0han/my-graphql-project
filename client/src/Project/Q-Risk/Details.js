import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Table,
  PageHeader,
  Select,
  Badge,
  Layout,
  Breadcrumb,
  Button,
  Input,
  Form,
  Space,
} from 'antd';
import { IssuesCloseOutlined } from '@ant-design/icons';

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
    title: 'Part Name',
    dataIndex: 'partName',
    width: 90,
  },
  {
    title: 'Comment',
    dataIndex: 'comment',
  },
  {
    title: 'Owner',
    dataIndex: 'owner',
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
    model: 'LMF100N',
    partName: 'Motor',
    comment: '모터 기어 위상',
    owner: '이종엽',
    dueDate: '12/24',
    status: ['success', '완료'],
    action:
      '연구소에서 창원 전문가에게 기어강도 마진 설계 방법, 치수 계산 테이블,치수 산포에 따른 웅력분석 자료 입수<br /> 위상동기 설계는 A모터와 B모터 피니언기어 위상 동기화 설계함<br />(0.5mm Shift하여 위상 맞춤, 동일 위상 확인 결과 평균 0.4kgf 추력 상승 확인 함)',
  },
  {
    key: '2',
    model: 'LMF100N',
    partName: 'Motor',
    comment:
      '모터 구동 시 신뢰성 / 소음 / 이음 등 발생원(ex. 기어부 조립 시 Tilt, 기어별 치수 공차 등) 및 그에 대한 업체 관리 현황 확인 할 것',
    owner: '이종엽',
    dueDate: '12/24',
    status: ['processing', '진행 중'],
    action:
      '1) 기어내부 Tilt 관리 : Output Shaft 최대 Tilt 각도 0.48도 이하로 관리<br />&nbsp;&nbsp;&nbsp;&nbsp;관리 방법 : 모듈 조립 후 CT 촬영 샘플링검사 (10ea/Lot)<br />2) 평행도 관리 : Geared Motor 및 모듈의 축 틀어짐 0.5도 이내로 관리<br />&nbsp;&nbsp;&nbsp;&nbsp;관리 방법 : 지그 안착 후 현미경과 모니터 이용 동심도 및 평행축 비전 검사 (전수)',
  },
  {
    key: '3',
    model: 'LMF100N',
    partName: 'Display',
    comment: '온도에 따른 UTF 필름 Crack에 영향을 주는지 재점검 할 것',
    owner: '윤석주',
    dueDate: '12/9',
    status: ['processing', '진행 중'],
    action: '부품개발 / 기구개발팀 UTF 동작 보증 온도 조건 확인 중(~12/9)',
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

const QRisk = ({ history }) => {
  console.log(history);

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Model Status</Breadcrumb.Item>
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
          title="DRBFM Minutes"
          subTitle="Model Status"
        />
        <Form.Item>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button icon={<IssuesCloseOutlined style={{ color: 'red' }} />}>
              Close issue
            </Button>
            <Button type="primary">Comment</Button>
          </Space>
        </Form.Item>
      </Content>
    </>
  );
};

export default QRisk;
