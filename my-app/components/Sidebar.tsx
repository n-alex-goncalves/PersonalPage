import React from 'react'
import Hero from './Hero'
import Footer from './Footer'
import Card from './Card'
import CardsTable from './CardsTable'

const SideBar = () => {
  return (
<div className="snap-y snap-mandatory">
    <div className="snap-start snap-always h-screen w-screen">
        <Hero />
    </div>
    <div className="snap-start snap-always h-screen w-screen">
        <CardsTable />
    </div>
    <div className="snap-start snap-always h-screen w-screen">
        <CardsTable />
    </div>
</div>
  )
}

export default SideBar