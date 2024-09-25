import React, { useState } from 'react'
import './UserInfo.css'
import { Button, Divider, Form, Input, Space, Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import avatar from '@/assets/laffey.jpg'
import { useNavigate } from 'react-router-dom';

const data = {
  nickname: 'MiaoMiao',
  email: '0d000721@qq.com',
  signature: 'miaomiaoQAQ~',
}

const UserInfo = () => {
  const navigate = useNavigate()

  const [changeNickname, setChangeNickname] = useState(false)

  const [form] = Form.useForm()
  form.setFieldsValue({
    nickname: data.nickname,
    email: data.email,
    signature: data.signature,
  })

  const onFinish = (formValue) => {
    console.log(formValue);
    setChangeNickname(false)
  }

  return (
    <div>
      <div className="person-right-title">
        <div className="person-right-title-icon"></div>
        <span className="person-right-title-text">我的信息</span>
      </div>
      <div className="face-tool">
        <div className="tool-container">
          <a class="tool-change-face">
            <span data-v-527be47a="">更换头像</span>
          </a>
          <div className="tool-face-box">
            <img src={avatar} alt="" className="tool-user-face" />
          </div>
        </div>
      </div>
      <Divider />
      <div className="user-setting-wrap">
        <Form
          form={form}
          name='userForm'
          style={{ maxWidth: '840px' }}
          className='user-info-form'
          onFinish={onFinish}
        >
          <Form.Item
            name='nickname'
            label='昵称'
          >
            {
              changeNickname ? (
                <Input style={{ width: '300px', fontSize: '16px', color: '#717171' }} />
              ) : (
                <Space>
                  <span>{data.nickname}</span>
                  <a className='form-item-btn' onClick={() => { setChangeNickname(true) }}>修改</a>
                </Space>
              )
            }
          </Form.Item>
          <Form.Item
            name='email'
            label='邮箱'
          >
            <Space>
              <span>{data.email}</span>
              <a className='form-item-btn' onClick={() => { navigate('changeEmail') }}>修改</a>
            </Space>
          </Form.Item>
          <Form.Item
            name='signature'
            label='签名'
          >
            <Input.TextArea
              placeholder='写下您的签名吧喵(｡>ㅿ<｡)'
              rows={5}
              style={{ fontSize: '16px', color: '#717171' }}
            ></Input.TextArea>
          </Form.Item>
          <Divider />
          <div className="user-btn-box">
            <Form.Item>
              <Button className='user-save-btn' htmlType='submit'>保存</Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default UserInfo
