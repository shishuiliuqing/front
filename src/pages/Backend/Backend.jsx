import React, { useEffect, useState } from 'react'
import './Backend.css'
import {
  FormOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
  FileOutlined,
  UnorderedListOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setcurrentPage } from '@/store/modules/backend';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('欢迎', '/backend'),
  getItem('文章管理', '2', <FormOutlined />, [
    getItem('文章列表', '/backend/articleList', <UnorderedListOutlined />),
    getItem('文章发布', '/backend/articleEditor', <SendOutlined />)
  ]),
];

const Backend = () => {
  const navigate = useNavigate()

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  

  const pageToOpenKeys = {
    '/backend/articleList': ['2'],
    '/backend/articleEditor': ['2'],
  }
  const location = useLocation()
  const selectedKey = location.pathname
  const matchedOpenKeys = pageToOpenKeys[selectedKey] || []  
  const [openKeys, setOpenKeys] = useState(matchedOpenKeys)
  
  useEffect(() => {
    const matchedOpenKeys = pageToOpenKeys[selectedKey] || []
    setOpenKeys(matchedOpenKeys);
  }, [selectedKey])

  const onMenuClick = (router) => {
    navigate(router.key)
  }

  return (
    <Layout style={{ height: "100%" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selectedKey}
          defaultOpenKeys={openKeys}
          items={items}
          onClick={onMenuClick}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '24px 120px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              position: "relative",
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Backend
