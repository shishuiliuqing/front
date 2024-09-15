import React, { useState } from 'react'
import './ArticleContent.css'
import cover from '../../assets/maomao.jpg'
import avatar from '@/assets/laffey.jpg'
import { Avatar, Button, Divider, Input, List } from 'antd'
import {
  LikeOutlined,
} from '@ant-design/icons'

const ArticleContent = () => {
  const data = {
    id: 3,
    pic: cover,
    title: "太刀教学：从入门到重弩",
    view: 7,
    like: 5,
    comment: 2,
    content: "<p>在浩瀚无垠的幻想世界中，有一类武器以其独特的魅力与无尽的技巧，成为了无数冒险者心中的挚爱——这便是《怪物猎人》系列中的太刀。太刀，作为日本传统武士刀的象征，在《怪物猎人》的舞台上被赋予了全新的生命与力量，成为了狩猎巨兽、保护家园的利器。它不仅承载着历史的厚重，更融合了现代游戏设计的精髓，让每一位玩家在刀光剑影中体验到前所未有的战斗快感。</p><p><br></p><h3><strong>太刀之美：艺术与力量的结合</strong></h3><p>太刀之美，首先在于其形态。流畅的曲线、锋利的刃口、精致的护手，每一处细节都透露出匠人的心血与对完美的追求。在游戏中，玩家可以亲眼目睹这些太刀随着狩猎的深入而逐渐解锁，从最初的朴实无华到后来的华丽非凡，每一把太刀都仿佛拥有自己的灵魂，讲述着不同的故事。</p><p><br></p><h3>技巧之舞：太刀流的精髓</h3><p>然而，太刀之所以深受玩家喜爱，更在于其独特的战斗风格。太刀流强调“见切”、“气刃斩”等高超技巧，要求玩家在极短的时间内做出精准的判断与操作，以达到攻防一体的境界。在面对凶猛的巨兽时，玩家需要灵活运用太刀的招式，通过精准的“见切”来规避攻击并反击，同时积攒“气刃”能量，最终释放出威力巨大的“气刃斩”，给予敌人致命一击。这种战斗方式不仅考验玩家的反应速度，更考验其对战斗节奏的把控与策略规划。</p><p><br></p><h3>心灵之旅：太刀与猎人的成长</h3><p>对于《怪物猎人》的玩家而言，使用太刀进行狩猎不仅仅是一场场战斗的胜利与失败，更是一次心灵的成长之旅。在无数次与巨兽的较量中，玩家学会了耐心、勇气与坚持。他们逐渐理解到，真正的强大不仅仅来源于武器的锋利和技巧的娴熟，更在于内心的坚定与不屈。每一次成功的狩猎都是对自我的超越，每一次失败都是通往成功的必经之路。</p><p><br></p><h3>结语</h3><p>太刀，作为《怪物猎人》系列中的经典武器之一，以其独特的魅力与无尽的挑战吸引着无数玩家投身其中。它不仅仅是一件武器，更是一种精神的象征，代表着勇气、智慧与不屈不挠的斗志。在未来的冒险旅程中，愿每一位太刀猎人都能继续挥舞着手中的利刃，斩断一切阻碍，守护心中的信念与梦想。</p>",
    pubDate: "2020-9-6",
    updDate: "2024-9-6",
    author: 'MiaoMiao',
    authorAvatar: avatar,
  }

  const commentList = [
    {
      user: 'miaomiao',
      userAvatar: avatar,
      content: '喵喵喵喵喵喵喵喵喵喵喵',
      pubDate: '2024-9-12',
      likes: 16,
    },
    {
      user: 'miaomiao',
      userAvatar: avatar,
      content: '哇，这个人真的是太勤快啦',
      pubDate: '2024-9-12',
      likes: 999,
    },
  ]

  const htmlContent = { __html: data.content };

  const [isCommentInputFocus, setIsCommentInputFocus] = useState(false)

  const onCommentInputFocus = () => {
    setIsCommentInputFocus(true)
  }

  const onCommentInputBlur = () => {
    setIsCommentInputFocus(false)
  }

  return (
    <div className='article-content-box'>
      <div className="cover-box">
        <img src={cover} alt="cover" />
        <div className="mask"></div>
        <div className="text-box">
          <div className="title">{data.title}</div>
          <div className="read-info">
            <div className="read-info-item">访问数：{data.view}</div>
            <div className="read-info-item">点赞数：{data.like}</div>
            <div className="read-info-item">评论数：{data.comment}</div>
          </div>
          <div>
            <div className="read-info-item">发布：{data.pubDate}</div>
            <div className="read-info-item">更新：{data.updDate}</div>
          </div>
        </div>
      </div>
      <Divider></Divider>
      <div className="article-content">
        <div dangerouslySetInnerHTML={htmlContent} />
      </div>
      <Divider></Divider>
      <div className="toolbox">
        <div className="author-box">
          <Avatar src={data.authorAvatar} size={52} className='author-avatar' />
          <h2>{data.author}</h2>
        </div>
      </div>
      <Divider></Divider>
      <div className="comment-container">
        <div className="comment-header">
          <ul className="nav-bar">
            <li className="nav-title">
              <span style={{ fontWeight: '500', verticalAlign: 'middle' }}>评论</span>
              <span className='total-reply'>{data.comment}</span>
            </li>
          </ul>
        </div>
        <div className="reply-wrap">
          <div className={`main-reply-box ${isCommentInputFocus ? 'active' : ''}`}>
            <div className="reply-box">
              <div className="box-normal">
                <div className="reply-box-avatar">
                  <Avatar src={avatar} size={48} />
                </div>
                <div className={`reply-box-wrap ${isCommentInputFocus ? 'focus' : ''}`}>
                  <div className="textarea-wrap">
                    <Input.TextArea
                      onFocus={onCommentInputFocus}
                      onBlur={onCommentInputBlur}
                      className='reply-box-textarea'
                      rows={4}
                      placeholder='把主人的评论写在里面吧喵~❤'
                    />
                  </div>
                </div>
              </div>
              <div className={`box-expand ${isCommentInputFocus ? '' : 'hide'}`}>
                <div className="box-left"></div>
                <div className="reply-box-send">
                  <Button type='primary' style={{ backgroundColor: '#00aeec' }}>发布</Button>
                </div>
              </div>
            </div>
          </div>
          <List
            itemLayout="vertical"
            dataSource={commentList}
            className="reply-list"
            renderItem={(item) => (
              <div className="reply-item">
                <div className="root-reply-container">
                  <div className="root-reply-avatar">
                    <Avatar src={item.userAvatar} size={48} />
                  </div>
                  <div className="content-wrap">
                    <div className="user-info">
                      <div className="user-name">{item.user}</div>
                    </div>
                    <div className="root-reply">
                      <span className="reply-content-container">
                        <span className="reply-content">{item.content}</span>
                      </span>
                      <div className="reply-info">
                        <span style={{marginRight: '19px'}}>{item.pubDate}</span>
                        <span><LikeOutlined style={{marginRight: '3px'}}/>{item.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default ArticleContent
