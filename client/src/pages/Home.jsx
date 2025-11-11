import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import bg from '../assets/bg_img.png'

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className='flex flex-col items-center justify-center min-h-screen bg-cover bg-center'
    >
        <Navbar/>
        <Header/>
    </div>
  )
}

export default Home