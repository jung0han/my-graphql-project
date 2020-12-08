import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PageHeader, Button, Select, Layout, Breadcrumb, Transfer } from 'antd';

const { Option } = Select;
const { Content } = Layout;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const dimensionItem = [];
for (let i = 0; i < 50; i++) {
  dimensionItem.push({
    key: i.toString(),
    name: `치수 #${i + 1}`,
  });
}

const originTargetKeys = ''; //미리 선택된 항목 설정

const StyledPageHeader = styled(PageHeader)`
  padding-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
`;

const QatDimPlanPage = ({ history }) => {
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
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Assurance Test</Breadcrumb.Item>
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
          onBack={() => history.goBack()}
          title="Inspecion plan"
          subTitle="This is a subtitle"
          extra={[
            <Button key="1" type="primary">
              <Link to="/plm/qat/EAB12345678/input">Done</Link>
            </Button>,
          ]}
        />
        <Transfer
          dataSource={dimensionItem}
          listStyle={{
            width: '70%',
            height: 460,
          }}
          titles={['List', 'Plan']}
          showSearch
          oneWay
          pagination
          render={(item) => item.name}
          targetKeys={targetKeys}
          onChange={onChange}
          onSearch={handleSearch}
          filterOption={filterOption}
        />
      </Content>
    </>
  );
};

export default QatDimPlanPage;
