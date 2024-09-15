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
import { Outlet, useNavigate } from 'react-router-dom';
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
  getItem('欢迎', '/'),
  getItem('文章管理', '2', <FormOutlined />, [
    getItem('文章列表', '/articleList', <UnorderedListOutlined />),
    getItem('文章发布', '/articleEditor', <SendOutlined />)
  ]),
];

const Backend = () => {
  const navigate = useNavigate()
  const currentPage = useSelector((state) => state.backend.currentPage)
  const dispatch = useDispatch()

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const pageToOpenKeys = {  
    '/articleList': ['2'],  
    '/articleEditor': ['2'],
  };
  const storedOpenKeys = localStorage.getItem('openKeys');  
  const initialOpenKeys = storedOpenKeys ? JSON.parse(storedOpenKeys) : [];  
  
  const [openKeys, setOpenKeys] = useState(initialOpenKeys); 

  const onMenuClick = (router) => {
    dispatch(setcurrentPage(router.key))
    navigate(`/backend${router.key}`)
  }

  useEffect(() => {  
    const matchedOpenKeys = pageToOpenKeys[currentPage] || [];  
    setOpenKeys(matchedOpenKeys);  
    localStorage.setItem('openKeys', JSON.stringify(matchedOpenKeys));  
  }, [currentPage]);

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
          defaultSelectedKeys={[currentPage]}
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
