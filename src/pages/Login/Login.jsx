import React, { useState } from 'react'
import './Login.css'
import { WechatOutlined } from '@ant-design/icons'
import { Button, Form } from 'antd'
import { useNavigate } from 'react-router-dom'
import SendCaptchaBtn from '@/component/SendCaptchaBtn/SendCaptchaBtn'

const Login = () => {
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState('login')
    const [retrPassState, setRetrPassState] = useState('sendCaptcha')

    const onLoginFinish = (formValue) => {
        navigate('/')
    }

    const onRegisterFinish = (formValue) => {
        console.log(formValue);
    }

    const onCaptchaFinish = (formValue) => {
        setRetrPassState('resetPass')
    }

    const onResetPassFinish = (formValue) => {
        setCurrentPage('login')
    }

    const sendCaptcha = () => {
        console.log('sendCaptcha');
    }

    return (
        <div className="login-box">
            <div className="content" id='login-content'>
                <div className="introduce">
                    <div className="introduce-content">
                        <p className="tips animate__animated animate__slideInLeft">
                            欢迎回来，主人大人喵~
                        </p>
                    </div>
                </div>
                <div
                    className="form-wrapper animate__animated animate__slideInRight"
                    style={{ transform: currentPage == 'login' ? '' : 'translateX(100%)' }}
                >
                    <div className="login-form">
                        <h1>Login</h1>
                        <span className="login-tips">
                            主人请登录喵~
                        </span>
                        <div className="other-login">
                            <WechatOutlined style={{ marginRight: '10px' }} />
                            <span>使用微信登录</span>
                        </div>
                        <div className="divider">
                            <span className="line" />
                            <span className="divider-text">或使用邮箱登录</span>
                            <span className="line" />
                        </div>
                        <Form
                            className="form"
                            onFinish={onLoginFinish}
                            clearOnDestroy
                        >
                            <div className="input-wrapper">
                                <span className="input-tips">邮箱</span>
                                <Form.Item
                                    name='email'
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <input type="text" className="ipt" placeholder="请输入您的邮箱" />
                                </Form.Item>
                            </div>
                            <div className="input-wrapper">
                                <span className="input-tips">密码</span>
                                <Form.Item
                                    name='password'
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <input type="password" className="ipt" placeholder="请输入您的密码" />
                                </Form.Item>
                            </div>
                            <div className="other-setting">
                                <div className="rem-pwd">
                                    <input type="checkbox" style={{ marginRight: '5px', cursor: 'pointer' }} />
                                    <span>记住我</span>
                                </div>
                                <span
                                    className="forget-pwd"
                                    onClick={() => {
                                        setCurrentPage('retrievePassword')
                                        setRetrPassState('sendCaptcha')
                                    }}>
                                    忘记密码
                                </span>
                            </div>
                            <Form.Item>
                                <Button className="btn" htmlType='submit'>Login</Button>
                            </Form.Item>
                        </Form>
                        <a onClick={() => setCurrentPage('register')}>
                            <span className="register">还没有账号吗？去注册一个吧喵~</span>
                        </a>
                    </div>
                </div>
                <div
                    className="form-wrapper animate__animated animate__slideInRight"
                    style={{ transform: currentPage == 'register' ? '' : 'translateX(100%)' }}
                >
                    <div className="login-form">
                        <h1>Register</h1>
                        <span className="login-tips">
                            欢迎来到我的博客喵~
                        </span>
                        <Form
                            className="form"
                            onFinish={onRegisterFinish}
                            clearOnDestroy
                        >
                            <div className="input-wrapper">
                                <span className="input-tips">邮箱</span>
                                <Form.Item
                                    name='email'
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <input type="text" className="ipt" placeholder="请输入您的邮箱" />
                                </Form.Item>
                            </div>
                            <div className="input-wrapper">
                                <span className="input-tips">密码</span>
                                <Form.Item
                                    name='password'
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <input type="password" className="ipt" placeholder="请输入您的密码" />
                                </Form.Item>
                            </div>
                            <div className="input-wrapper">
                                <span className="input-tips">确认密码</span>
                                <Form.Item
                                    name='confirmPassword'
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <input type="password" className="ipt" placeholder="请再次输入您的密码" />
                                </Form.Item>
                            </div>
                            <div className="input-wrapper">
                                <span className="input-tips">验证码</span>
                                <Form.Item
                                    name='captcha'
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                    noStyle
                                >
                                    <input type="text" className="ipt" placeholder="请输入验证码" />

                                </Form.Item>
                                <SendCaptchaBtn />
                            </div>
                            <Form.Item>
                                <Button className="btn" htmlType='submit'>Register</Button>
                            </Form.Item>
                        </Form>
                        <a onClick={() => setCurrentPage('login')}>
                            <span className="register">原来已经有账号了嘛，去登录吧喵~</span>
                        </a>
                    </div>
                </div>
                <div
                    className="form-wrapper animate__animated animate__slideInRight"
                    style={{ transform: currentPage == 'retrievePassword' ? '' : 'translateX(100%)' }}
                >
                    <div className="login-form">
                        <h1>Retrieve Password</h1>
                        <span className="login-tips">
                            主人好粗心喵~通过邮箱找回密码吧
                        </span>
                        <div className="input-box">
                            <div
                                className="input-box-wrapper"
                                style={{ transform: retrPassState == 'resetPass' ? 'translateX(-50%)' : '' }}
                            >
                                <div className="send-captcha-box">
                                    <Form
                                        className="form"
                                        onFinish={onCaptchaFinish}
                                        clearOnDestroy
                                    >
                                        <div className="input-wrapper">
                                            <span className="input-tips">邮箱</span>
                                            <Form.Item
                                                name='email'
                                                rules={[
                                                    {
                                                        required: true,
                                                    },
                                                ]}
                                            >
                                                <input type="text" className="ipt" placeholder="请输入您的邮箱" />
                                            </Form.Item>
                                        </div>
                                        <div className="input-wrapper">
                                            <span className="input-tips">验证码</span>
                                            <Form.Item
                                                name='captcha'
                                                rules={[
                                                    {
                                                        required: true,
                                                    },
                                                ]}
                                                noStyle
                                            >
                                                <input type="text" className="ipt" placeholder="请输入验证码" />
                                            </Form.Item>
                                            <SendCaptchaBtn />
                                        </div>
                                        <Form.Item>
                                            <Button className="btn" htmlType='submit'>确认</Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                                <div className="reset-password-box">
                                    <Form
                                        className="form"
                                        onFinish={onResetPassFinish}
                                        clearOnDestroy
                                    >
                                        <div className="input-wrapper">
                                            <span className="input-tips">密码</span>
                                            <Form.Item
                                                name='password'
                                                rules={[
                                                    {
                                                        required: true,
                                                    },
                                                ]}
                                            >
                                                <input type="text" className="ipt" placeholder="请输入您的新密码" />
                                            </Form.Item>
                                        </div>
                                        <div className="input-wrapper">
                                            <span className="input-tips">确认密码</span>
                                            <Form.Item
                                                name='confirmPassword'
                                                rules={[
                                                    {
                                                        required: true,
                                                    },
                                                ]}
                                            >
                                                <input type="text" className="ipt" placeholder="请重新输入您的密码" />
                                            </Form.Item>
                                        </div>
                                        <Form.Item>
                                            <Button className="btn" htmlType='submit'>确认</Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>

                        </div>
                        <a onClick={() => setCurrentPage('login')}>
                            <span className="register">想起来密码了吗？去登录吧喵~</span>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login
