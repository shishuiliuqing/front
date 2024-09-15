import { useNavigate } from "react-router-dom";
import "./Header.css"
import {
    HomeOutlined,
} from '@ant-design/icons';
import { Avatar, Dropdown } from "antd";
import avatar from '@/assets/laffey.jpg'

const Header = () => {
    const navigate = useNavigate();

    const avatarItems = [
        {
            key: '1',
            label: (
                <a onClick={() => navigate('/backend')}>
                    后台
                </a>
            ),
        },
    ]

    return (
        <header className='header-box'>
            <div className='header-container'>
                <div className='logo-box'>
                    <h2>MiaoMiao</h2>
                </div>
                <div className="header-menu">
                    <a onClick={() => navigate('/')} className="header-menu-item">
                        <HomeOutlined />
                        首页
                    </a>
                </div>
                <div className='nav-right'>
                    <Dropdown
                        menu={{
                            style: {borderRadius: 'none'},
                            items: avatarItems,
                        }}
                    >
                        <div className="avatar-box">
                            <Avatar size={55} src={avatar} />
                        </div>
                    </Dropdown>

                </div>
            </div>
            <div className="header-mask"></div>
        </header>
    )
}

export default Header