import React, { useMemo } from 'react'
import './ArticleEditor.css'
import './Quill.css'
import { Button, Divider, Form, Input } from 'antd'
import ReactQuill from 'react-quill'
import 'quill/dist/quill.snow.css';
import RichTextEditor from '@/component/RichTextEditor/RichTextEditor'

const ArticleEditor = () => {
    const toolbarConfig = [
        [{ header: [1, 2, false] }],
        [
            'bold',
            'italic',
            'underline',
            'strike',
            'blockquote',
        ],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { color: [] },
            { background: [] },
            { align: [] },
        ],
        [
            'link',
            'image',
        ],
    ]

    const onFinish = (formValue) => {
        console.log(formValue);
    }


    return (
        <>
            <div className="fixed-header">
                <div class="tab-container">
                    <a href="" class="tab active">
                        文章编辑
                    </a>
                    <a href="" class="tab">
                        草稿箱
                    </a>
                </div>
            </div>
            <Form
                onFinish={onFinish}
            >
                <div className="edit-article-wrap">
                    <div className="web-editor__wrap">
                        <div className="read-editor">
                            <div className="bre-title-input">
                                <Form.Item
                                    name="title"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input
                                        placeholder="请输入标题"
                                        style={{ border: "none", boxShadow: 'none', fontSize: '20px' }}
                                    />
                                </Form.Item>
                                <Form.Item
                                    name='content'
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <RichTextEditor
                                        theme="snow"
                                        placeholder='请输入正文'
                                        modules={{
                                            toolbar: toolbarConfig,
                                        }}
                                    />
                                </Form.Item>
                                <Divider />
                                <Form.Item>
                                    <Button
                                        htmlType='submit'
                                        style={{
                                            borderRadius: "50px",
                                            height: "42px",
                                            lineHeight: "42px",
                                            minWidth: " 130px",
                                        }}
                                    >提交文章</Button>
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                </div>
            </Form >
        </>
    )
}

export default ArticleEditor
