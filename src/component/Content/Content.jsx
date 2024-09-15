import React from 'react'
import './Content.css'
import CloudWave from '../CloudWave/CloudWave'
import PostList from '../PostList/PostList'
import SiderRight from '../SiderRight/SiderRight'


const Content = () => {

  return (
    <div>
      <div className="home-title">
        <h1>欢迎来到我的博客</h1>
      </div>
      <CloudWave></CloudWave>
      <div className="content-box">
        <div className="content-left">
          <PostList></PostList>
        </div>
        <SiderRight></SiderRight>
      </div>
    </div>
  )
}

export default Content
