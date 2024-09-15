import React from 'react'
import './PICard.css'
import avatar from '../../assets/laffey.jpg'

const PICard = () => {
  return (
    // <div className='PI-card'>
    //   <div class="profile-card_header">
    //   <div className="profile-card_header-border" />
    //     <div class="profile-card_header-container">
    //       <div class="profile-card_header-imgbox">
    //         <img src={avatar} alt="Avarter" />
    //       </div>
    //       <h1>MiaoMiao <span>喵~喵喵喵~喵！</span></h1>
    //     </div>
    //   </div>
    //   <div className="info"></div>
    // </div>

    <div className="PI-card">
      <div className="card-header">
        <div className="card-cover"></div>
        <img className="card-avatar" src={avatar} alt="avatar" />
        <h1 className="card-fullname">Miao Miao</h1>
        <h2 className="card-jobtitle">前端工程师</h2>
      </div>
      <div class="card-main">
        <div class="card-section" id="about">
          <div class="card-content">
            <div class="card-subtitle">ABOUT</div>
            <p class="card-desc">Whatever tattooed stumptown art party sriracha gentrify hashtag intelligentsia readymade schlitz brooklyn disrupt.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PICard
