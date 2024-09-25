import React from 'react'
import './PersonCenter.css'
import { Avatar, Button, Card, Flex, Layout, Menu, Modal, Space } from 'antd'
const { Header, Content, Footer, Sider } = Layout;
import { EditOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';
import avatar from '@/assets/laffey.jpg'

const items = [
  {
    key: '/personCenter',
    label: '我的信息',
    icon: <UserOutlined />,
  },
  {
    key: 'change',
    label: '修改资料',
    icon: <EditOutlined />,
    children: [
      {
        key: '/personCenter/changeEmail',
        label: '更改邮箱',
      },
      {
        key: '/personCenter/changeAvatar',
        label: '更换头像',
      },
    ]
  },
];

const PersonCenter = () => {
  const navigate = useNavigate()
  const selectedKey = location.pathname

  const onMenuClick = (value) => {
    navigate(value.key)
  }

  return (
    <div className='person-bg'>
      <Card className="person-header">
        <Flex
          align='center'
          justify='space-between'
        >
          <div className="person-header-left">
            <Flex align='center' justify='start'>
              <div className="person-avatar">
                <Avatar size={81} src={avatar} alt='' />
              </div>
              <div className="person-header-info">
                <div className="info-name">
                  <span>MiaoMiao</span>
                </div>
                <div className="info-signature">
                  <span>这个人很懒，什么也没有说喵</span>
                </div>
              </div>
            </Flex>
          </div>
          <div className="person-header-right">
            <Space>
              <Button>修改资料</Button>
              <Button>申请成为管理员</Button>
            </Space>
          </div>
        </Flex>
      </Card>
      <Flex
        className="person-body"
        justify='space-between'
      >
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            className='person-left'
            theme='light'
          >
            <Card className="person-sider-card">
              <span className='person-logo'>个人中心</span>
            </Card>
            <Menu
              theme="light"
              mode="inline"
              selectedKeys={selectedKey}
              defaultOpenKeys={['change']}
              items={items}
              onClick={onMenuClick}
            />
          </Sider>
          <Content
            className="person-right"
          >
            <Outlet />
          </Content>
        </Layout>
      </Flex>
    </div>
  )
}

export default PersonCenter
