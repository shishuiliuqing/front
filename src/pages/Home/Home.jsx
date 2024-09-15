import React from 'react'
import './Home.css'
import Header from '../../component/Header/Header'
import Content from '../../component/Content/Content'
import jingluo from '../../assets/jingluo.jpg'
import yileina from '../../assets/yileina.mp4'


const Home = () => {
  return (
    <>
      <div className="home-bg" >
        <div className="mask"></div>
        {/* <img src={jingluo} alt='' /> */}
        <video src={yileina} autoPlay muted width="100%" loop></video>
      </div>
      <Content></Content>
    </>
  )
}

export default Home
