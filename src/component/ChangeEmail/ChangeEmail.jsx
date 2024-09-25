import { Button, Card, Divider, Form, Input, Space } from 'antd'
import React, { useState } from 'react'
import './ChangeEmail.css'
import { RightOutlined } from '@ant-design/icons';
import SendCaptchaBtn from '../SendCaptchaBtn/SendCaptchaBtn';

const ChangeEmail = () => {
  const [state, setState] = useState(1)

  const [form] = Form.useForm()

  const onAuthenticationFinish = (value) => {
    console.log(value)
    form.resetFields()
    setState(2)
  }

  const onSetEmailFinish = (value) => {
    form.resetFields()
    setState(3)
  }

  const renderContent = () => {
    if (state === 1) {
      return (
        <Card
          className='email-authentication-container'
        >
          <Form
            form={form}
            className='email-authentication-form'
            onFinish={onAuthenticationFinish}
            clearOnDestroy
          >
            <Form.Item
              name='oldEmail'
              label='旧的邮箱'
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='password'
              label='密码'
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' className='authentication-form-btn'>确认</Button>
            </Form.Item>
          </Form>
        </Card>
      )
    } else if (state === 2) {
      return (
        <Card
          className='email-authentication-container'
        >
          <Form
            form={form}
            className='setEmail-form'
            onFinish={onSetEmailFinish}
            clearOnDestroy
          >
            <Form.Item
              name='email'
              label='邮箱'
            >
              <Input placeholder='请输入您新的邮箱' />
            </Form.Item>
            <Form.Item
              name='captcha'
              label='验证码'
            >
              <Input placeholder='请输入验证码' />
              <SendCaptchaBtn />
            </Form.Item>
            <Form.Item>
              <Button 
              type='primary' htmlType='submit' className='authentication-form-btn'>确认</Button>
            </Form.Item>
          </Form>
        </Card>
      )
    } else if (state === 3) {
      return (
        <Card
          className='email-authentication-container'
        >
          完成更改，请返回首页喵
        </Card>
      )
    }
  }

  return (
    <div>
      <div className="email-header-container">
        <div className="security-nav">
          <Space style={{ justifySelf: 'center' }}>
            <div className={`email-nav-item ${state === 1 ? 'active' : ''}`}>
              <div className="email-nav-inner">
                <span className='email-nav-text'>验证身份</span>
              </div>
            </div>
            <RightOutlined style={{ fontSize: '25px', color: '#d2d2d2' }} />
            <div className={`email-nav-item ${state === 2 ? 'active' : ''}`}>
              <div className="email-nav-inner">
                <span className='email-nav-text'>绑定邮箱</span>
              </div>
            </div>
            <RightOutlined style={{ fontSize: '25px', color: '#d2d2d2' }} />
            <div className={`email-nav-item ${state === 3 ? 'active' : ''}`}>
              <div className="email-nav-inner">
                <span className='email-nav-text'>绑定成功</span>
              </div>
            </div>
          </Space>
        </div>
      </div>
      <Divider />
      {renderContent()}
    </div>
  )
}

export default ChangeEmail
