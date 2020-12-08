import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
  PageHeader,
  Select,
  Badge,
  Layout,
  Breadcrumb,
  Form,
  Input,
  Space,
  Button,
  Timeline,
  Comment,
  Tooltip,
} from 'antd';
import {
  ExclamationCircleOutlined,
  IssuesCloseOutlined,
} from '@ant-design/icons';
import { pageHeaderVar } from '../../localStorage';

const { Option } = Select;
const { Content } = Layout;

const StyledComment = styled(Comment)`
  .ant-comment-inner {
    padding: 0;
  }
  .ant-comment-content-author-name {
    font-weight: 700;
  }
`;

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
    category: 'AP/Modem 칩 구성',
    comment: '모델 SW(Power) 팀 주관, 자사 모사항 없는지 테스트 결과 공유 필요',
    owner: '모델팀',
    dueDate: '12/24',
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

const DrbfmIssueDetailPage = ({ history }) => {
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
        <Breadcrumb.Item>
          <Link to="/plm/drbfm/EAB12345678">EAB12345678</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>모터 구동부</Breadcrumb.Item>
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
          title="모터 구동부"
          onBack={() => history.goBack()}
        />
        <Timeline>
          <Timeline.Item dot={<ExclamationCircleOutlined />} color="red">
            <StyledComment
              author={<a>leo.han</a>}
              content={
                <p>
                  모터 기어 "위상 동기 설계" 부분에 대한 Risk 여부 창원
                  전문가에게 문의하여 확인 할 것
                </p>
              }
              datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                  <span>{moment().fromNow()}</span>
                </Tooltip>
              }
            />
          </Timeline.Item>
          <Timeline.Item color="green">
            <StyledComment
              author={<a>dongwoo.jeong</a>}
              content={
                <p>
                  연구소에서 창원 전문가에게 기어강도 마진 설계 방법, 치수 계산
                  테이블,치수 산포에 따른 웅력분석 자료 입수
                </p>
              }
              datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                  <span>{moment().fromNow()}</span>
                </Tooltip>
              }
            />
          </Timeline.Item>
          <Timeline.Item dot={<IssuesCloseOutlined />} color="red">
            <p>
              <b>dongwoo.jeong</b> closed this{' '}
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            </p>
          </Timeline.Item>
          <Timeline.Item color="green">
            <StyledComment
              author={<a>leo.han</a>}
              content={<p>위상동기 설계 추가 검토 필요</p>}
              datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                  <span>{moment().fromNow()}</span>
                </Tooltip>
              }
            />
          </Timeline.Item>
          <Timeline.Item color="#1890FF">
            <p>
              <b>leo.han</b> reopened this{' '}
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            </p>
          </Timeline.Item>
          <Timeline.Item color="green">
            <StyledComment
              author={<a>dongwoo.jeong</a>}
              content={
                <p>
                  위상동기 설계는 A모터와 B모터 피니언기어 위상 동기화 설계함
                  <br />
                  (0.5mm Shift하여 위상 맞춤, 동일 위상 확인 결과 평균 0.4kgf
                  추력 상승 확인 함)
                </p>
              }
              datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                  <span>{moment().fromNow()}</span>
                </Tooltip>
              }
            />
          </Timeline.Item>
          <Timeline.Item dot={<IssuesCloseOutlined />} color="red">
            <p>
              <b>dongwoo.jeong</b> closed this{' '}
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            </p>
          </Timeline.Item>
        </Timeline>
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

export default DrbfmIssueDetailPage;
