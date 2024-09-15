import React from 'react'
import './PostList.css'
import Slide from '../Slide/Slide'
import { Divider, Image, List } from 'antd'
import { FireOutlined, ContainerOutlined, EyeOutlined, HeartOutlined, MessageOutlined } from '@ant-design/icons'
import pic1 from '../../assets/miku.jpg'
import pic2 from '../../assets/maomao.jpg'
import pic3 from '../../assets/OIP-C.jpg'
import { useNavigate } from 'react-router-dom'

const PostList = () => {
    const navigate = useNavigate()

    const data = [
        {
            id: 1,
            pic: pic1,
            title: "java多态",
            view: 5,
            like: 1,
            comment: 3,
            content: "Java中的多态（Polymorphism）是面向对象编程（OOP）的一个核心概念，它允许一个引用变量在运行时指向多种实际类型对象，并且程序能够使用相同的引用类型来调用不同类中的方法。多态性增加了程序的灵活性和可扩展性。Java中的多态性主要体现在两个方面：编译时多态（静态多态）和运行时多态（动态多态）。",
            pubDate: "2024-9-6",
            updDate: "2024-9-6",
        },
        {
            id: 2,
            pic: pic2,
            title: "对象与继承",
            view: 8,
            like: 2,
            comment: 3,
            content: "继承和多态是面向对象编程（OOP）中的两个核心概念，它们共同促进了代码的复用、扩展和维护性。",
            pubDate: "2020-9-6",
            updDate: "2024-9-6",
        },
        {
            id: 3,
            pic: pic3,
            title: "太刀教学：从入门到重弩",
            view: 7,
            like: 5,
            comment: 1,
            content: "怪猎（即《怪物猎人》系列游戏）中的太刀是一种深受玩家喜爱的武器类型，以其独特的战斗风格和强大的输出能力而闻名。",
            pubDate: "2020-9-6",
            updDate: "2024-9-6",
        },
    ]

    const LinkToArticle = (id) => {
        navigate(`/article/${id}`);
    }

    return (
        <div className="post-box">
            <Divider orientation="left">
                <FireOutlined />
                推荐
            </Divider>
            <Slide></Slide>
            <Divider orientation='left'>
                <ContainerOutlined />
                文章
            </Divider>
            <List
                itemLayout="vertical"
                dataSource={data}
                renderItem={(item, index) => (
                    <a className='post-list-item' onClick={() => LinkToArticle(item.id)}>
                        {index % 2 === 0 ? (
                            <>
                                <div className="item-left img-box">
                                    <Image src={item.pic} preview={false}></Image>
                                </div>
                                <div className="item-right text-box">
                                    <h2>{item.title}</h2>
                                    <div className="info-card">
                                        <li className="info-view"><EyeOutlined />{item.view}</li>
                                        <li className="info-like"><HeartOutlined />{item.like}</li>
                                        <li className="info-comment"><MessageOutlined />{item.comment}</li>
                                    </div>
                                    <div className="post-content-box">
                                        {item.content}
                                    </div>
                                    <div className="date-box">
                                        <span className="mr35">发布日期： {item.pubDate}</span>
                                        <span>更新日期： {item.updDate}</span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="item-right text-box">
                                    <h2>{item.title}</h2>
                                    <div className="info-card">
                                        <li className="info-view"><EyeOutlined />{item.view}</li>
                                        <li className="info-like"><HeartOutlined />{item.like}</li>
                                        <li className="info-comment"><MessageOutlined />{item.comment}</li>
                                    </div>
                                    <div className="post-content-box">
                                        {item.content}
                                    </div>
                                    <div className="date-box">
                                        <span className="mr35">发布日期： {item.pubDate}</span>
                                        <span>更新日期： {item.updDate}</span>
                                    </div>
                                </div>
                                <div className="item-left img-box">
                                    <Image src={item.pic} preview={false} />
                                </div>
                            </>
                        )}
                    </a>
                )}
            />
            <Divider className='color-black'>~~已经到顶啦~~</Divider>
        </div>
    )
}

export default PostList
