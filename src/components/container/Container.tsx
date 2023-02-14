import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import { SelectEventHandler, SelectInfo } from 'rc-menu/lib/interface';

import JotaiTodoContainer from './JotaiTodoContainer';
import ZustandTodoContainer from './ZustandTodoContainer';

import { ANTD_MENU_ITEMS, STATE_MANAGEMENT_LIB } from '../../shared/constants';

const { Header, Content, Footer } = Layout;

export default function Container() {
  const [activeMenu, setActiveMenu] = useState<STATE_MANAGEMENT_LIB>(STATE_MANAGEMENT_LIB.JOTAI);

  const onSelect: SelectEventHandler = (e: SelectInfo) => {
    setActiveMenu(e.key as STATE_MANAGEMENT_LIB);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          onSelect={onSelect}
          defaultSelectedKeys={[activeMenu]}
          items={ANTD_MENU_ITEMS}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div
          style={{
            marginTop: '66.5px',
            padding: '0.75rem 2rem',
            height: 'calc(100vh - 197px)',
            background: colorBgContainer,
          }}
        >
          {activeMenu === STATE_MANAGEMENT_LIB.JOTAI ? (
            <JotaiTodoContainer />
          ) : (
            <ZustandTodoContainer />
          )}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>https://github.com/k012497</Footer>
    </Layout>
  );
}
