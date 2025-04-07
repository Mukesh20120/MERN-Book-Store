import React from 'react'
import Banner from './Banner'
import TopSeller from './TopSeller'
import Recommended from './Recommended'
import News from './News'

function Home() {
  return (
    <div className="container mx-auto">
      <Banner/>
      <TopSeller/>
      <Recommended/>
      <News/>
    </div>
  )
}

export default Home
