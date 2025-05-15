import React from 'react'
import Navbar from './COMPONENTS/Navbar/Navbar'
import Hero from './COMPONENTS/Hero/Hero'
import About from './COMPONENTS/About/About'
import Title from './COMPONENTS/Title/Title'
import Member from './COMPONENTS/Member/Member'
import Contact from './COMPONENTS/contact/Contact'
import Footer from './COMPONENTS/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <About/>
      <Title subTitle='ENACTUS' title='our members'/>
      <Member/>
      <Title subTitle='ENACTUS' title='contact us'/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
