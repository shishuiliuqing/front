import React, { useState } from 'react'
import './ArticleList.css'
import { Button, Card, Form, Image, Input, Select, Space, Table, Tag } from 'antd';
import pic1 from '../../assets/miku.jpg'
import pic2 from '../../assets/maomao.jpg'
import pic3 from '../../assets/OIP-C.jpg'
import { useNavigate } from 'react-router-dom'
import { SearchOutlined, ReloadOutlined, SwapOutlined, CloseOutlined } from '@ant-design/icons'

const ArticleList = () => {
    const navigate = useNavigate()

    const columns = [
        {
            title: '编号',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: '封面',
            dataIndex: 'cover',
            width: 120,
            key: 'cover',
            render: (cover) => (
                <Image src={cover} width={80} height={60} alt=""></Image>
            )
        },
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: '访问量',
            dataIndex: 'view',
            key: 'view',
        },
        {
            title: '发表日期',
            dataIndex: 'pubDate',
            key: 'pubDate',
        },
        {
            title: '标签',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() =>{ navigate(`/article/${record.key}`)}}>链接</a>
                    <a>编辑</a>
                    <a>删除</a>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: 1,
            cover: pic1,
            title: "java多态",
            view: 5,
            pubDate: "2024-9-6",
            tags: ['nice', 'developer'],
        },
        {
            key: 2,
            cover: pic2,
            title: "对象与继承",
            view: 8,
            pubDate: "2020-9-6",
            tags: ['loser'],
        },
        {
            key: 3,
            cover: pic3,
            title: "太刀教学：从入门到重弩",
            view: 7,
            pubDate: "2020-9-6",
            tags: ['nice', 'developer'],
        },
    ];

    const [form] = Form.useForm()
    const [rankShow, setRankShow] = useState(false)
    const [currentRank, setCurrentRank] = useState('default')
    const [selectable, setSelectable] = useState(false)
    const [selectedRowKeys, setSelectedRowKeys] = useState([])

    const handleReset = () => {
        form.resetFields()
    }

    const handleSelect = () => {
        setSelectable(true)
    }

    const cancelSelect = () => {
        setSelectable(false)
    }

    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    }

    const onDeleteClick = () => {
        console.log(selectedRowKeys);
    }

    const onRankClick = () => {
        if (rankShow) {
            setRankShow(false)
        } else {
            setRankShow(true)
        }
    }

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    }

    return (
        <>
            <Card>
                <Form
                    name='search'
                >
                    <Space size={30}>
                        <Form.Item
                            name='title'
                            label='标题'
                        >
                            <Input placeholder='输入文章标题' />
                        </Form.Item>
                        <Form.Item
                            name='tags'
                            label='标签'
                        >
                            <Select
                                showSearch
                                placeholder="选择标签"
                                optionFilterProp="label"
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                    {
                                        value: 'tom',
                                        label: 'Tom',
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit'>
                                <SearchOutlined />
                                搜索
                            </Button>
                            <Button style={{ marginLeft: '15px' }} onClick={handleReset}>
                                <ReloadOutlined />
                                重置
                            </Button>
                        </Form.Item>
                    </Space>
                </Form>
                <Space>
                    <Button
                        type='primary'
                        onClick={onRankClick}
                    >
                        <SwapOutlined className='rank-icon' />
                        排序
                    </Button>
                    {selectable ? (
                        <Button onClick={cancelSelect}><CloseOutlined />取消</Button>
                    ) : (
                        <Button onClick={handleSelect}>批量操作</Button>
                    )}
                </Space>
                <div className={`batch-operation-box ${selectable ? 'show' : 'hide'}`}>
                    <Space>
                        <Button id='pin-btn'>置顶</Button>
                        <Button id='delete-btn' onClick={onRankClick}>删除</Button>
                    </Space>
                </div>
                <div className={`rank-box ${rankShow ? 'show' : 'hide'}`}>
                    <Space>
                        <Button
                            id='rank-btn'
                            className={currentRank == 'default' ? 'active' : ''}
                            onClick={() => setCurrentRank('default')}
                        >
                            默认排序
                        </Button>
                        <Button
                            id='rank-btn'
                            className={currentRank == 'view' ? 'active' : ''}
                            onClick={() => setCurrentRank('view')}
                        >
                            访问最多
                        </Button>
                    </Space>
                </div>
            </Card>
            <Table
                className='article-table'
                columns={columns}
                dataSource={data}
                rowSelection={selectable ? rowSelection : undefined}
            />
        </>
    )
}

export default ArticleList
