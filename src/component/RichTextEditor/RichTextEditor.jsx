import React, { useEffect } from 'react';  
import ReactQuill from 'react-quill'; // 假设你已经安装并导入了react-quill  
  
const titleConfig = {
    '.ql-bold': '加粗',
    '.ql-color': '颜色',
    '.ql-font': '字体',
    '.ql-code': '插入代码',
    '.ql-italic': '斜体',
    '.ql-link': '添加链接',
    '.ql-background': '背景颜色',
    '.ql-size': '字号',
    '.ql-strike': '删除线',
    '.ql-script[value="super"]': '上标',
    '.ql-script[value="sub"]': '下标',
    '.ql-underline': '下划线',
    '.ql-blockquote': '引用',
    '.ql-header': '标题',
    '.ql-code-block': '代码块',
    '.ql-list[value="ordered"]': '有序列表',
    '.ql-list[value="bullet"]': '无序列表',
    '.ql-indent[value="+1"]': '增加缩进',
    '.ql-indent[value="-1"]': '减少缩进',
    '.ql-direction': '文本方向',
    '.ql-formula': '插入公式',
    '.ql-image': '插入图片',
    '.ql-video': '插入视频',
    '.ql-clean': '清除字体样式',
  };
  
const RichTextEditor = ({ ...props }) => {  
  // 给工具栏添加属性  
  const addTitle = () => {  
    // 获取工具栏的容器元素  
    const toolbar = document.querySelector('.ql-toolbar');  
    if (toolbar) {  
      // 遍历配置对象的键值对  
      for (let key in titleConfig) {  
        if (titleConfig.hasOwnProperty(key)) {  
          // 获取对应的按钮元素  
          const button = toolbar.querySelector(key);  
          // 判断是否存在  
          if (button) {  
            // 给按钮元素添加 title 属性，值为配置对象的值  
            button.title = titleConfig[key];  
          }  
        }  
      }  
    }  
  };  
  
  useEffect(() => {  
    setTimeout(() => addTitle(), 100);  
  }, []);  
  
  return <ReactQuill {...props} />;  
};  
  
export default RichTextEditor;