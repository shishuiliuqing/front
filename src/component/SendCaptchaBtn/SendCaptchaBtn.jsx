import React, { useState } from 'react'
import './SendCaptchaBtn.css'

const SendCaptchaBtn = () => {
    const [count, setCount] = useState(30)

    //开始倒计时
    const startCountDown = () => {
        let newCount = count
        const intervalId = setInterval(() => {
            if (newCount > 0) {
                setCount((prevCount) => prevCount - 1)
                newCount--
            } else {
                setCount(30)
                clearInterval(intervalId)
            }
        }, 1000)
    }

    //发送验证码
    const sendCaptcha = () => {
        startCountDown()
        // const value = document.getElementById('email').value
        // const data = { email: value }
        // sendCaptchaAPI(data).then((res) => {
        //     if (res.code == 0) {
        //         startCountDown()
        //     } else {
        //         console.log(res.message)
        //     }
        // }).catch(function (err) {
        //     console.log(err);
        // })
    }

    return (
        count === 30 ? (
            <a
                onClick={sendCaptcha}
                className="send-captcha-btn active"
            >
                发送验证码
            </a>
        ) : (
            <a
                className="send-captcha-btn"
                style={{ cursor: 'default' }}
            >
                {count + "s后重新发送"}
            </a>
        )
    )
}

export default SendCaptchaBtn
