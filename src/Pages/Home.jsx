import React from 'react'
import Navabar from '../Components/Navabar'
import Hero from '../Components/Hero'
import Jobs from '../Components/Jobs'
import Post from '../Components/Post'
import Faq from '../Components/Faq'
import Footer from '../Components/Footer'
import Aboutus from '../Components/Aboutus'

function Home() {
  return (
    <div>
         <Navabar/>
    <Hero/>
    <Jobs/>
    <Post/>
    <Aboutus/>
    <Faq/>
    <Footer/>
    </div>
  )
}

export default Home