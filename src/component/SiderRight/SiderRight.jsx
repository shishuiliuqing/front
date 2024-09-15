import React from 'react'
import './SiderRight.css'
import PICard from '../PICard/PICard'
import Clock from '../Clock/Clock'

const SiderRight = () => {
    return (
        <div className="sider-right">
            <PICard></PICard>
            <Clock></Clock>
        </div>
    )
}

export default SiderRight
