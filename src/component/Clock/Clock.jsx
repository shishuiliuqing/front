import React, { useEffect, useState } from 'react'
import './Clock.css'
import { ClockCircleOutlined } from '@ant-design/icons'

const Clock = () => {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        const update = () => {
            const cd = new Date();
            const formattedTime = `${zeroPadding(cd.getHours(), 2)}:${zeroPadding(cd.getMinutes(), 2)}:${zeroPadding(cd.getSeconds(), 2)}`;
            const formattedDate = `${zeroPadding(cd.getFullYear(), 4)}-${zeroPadding(cd.getMonth() + 1, 2)}-${zeroPadding(cd.getDate(), 2)} ${week[cd.getDay()]}`;

            setTime(formattedTime);
            setDate(formattedDate);
        };

        const timerID = setInterval(update, 1000);

        return () => clearInterval(timerID); // 清理函数，组件卸载时清除定时器  
    }, []); // 空依赖数组表示这个effect只在组件挂载和卸载时运行  

    function zeroPadding(num, digit) {
        let zero = '';
        for (let i = 0; i < digit; i++) {
            zero += '0';
        }
        return (zero + num).slice(-digit);
    }

    return (
        <div className="clock-box">
            <p className="text"><ClockCircleOutlined />电子时钟</p>
            <div id="clock">
                <p className="date">{date}</p>
                <p className="time">{time}</p>
                {/* <p className="text">DIGITAL CLOCK with React</p> */}
            </div>
        </div>
    )
}

export default Clock
