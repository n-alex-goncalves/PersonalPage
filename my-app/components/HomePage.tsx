import React from 'react'
import Hero from './Hero'
import Footer from './Footer'
import Card from './Card'
import CardsTable from './CardsTable'
import { WORK_EXPERIENCE_DATA, PROJECT_DATA } from "@/app/constants"
import SideBar from './SideBar'

const HomePage = () => {
  return (
    <div>
  <div className="flex flex-row bg-base-300">
    <aside className="h-screen sticky top-0">
        <SideBar /> 
    </aside>
    <div>
        <div className="flex-row h-screen w-full md:w-4/5">
            <Hero />
        </div>
        <div className="flex-row p-5">
            <CardsTable title={WORK_EXPERIENCE_DATA.title} cards={WORK_EXPERIENCE_DATA.cards}/>
        </div>
        <div className="flex-row p-5">
            <CardsTable title={PROJECT_DATA.title} cards={PROJECT_DATA.cards}/>
        </div>
    </div>
  </div>
  <Footer />
  </div>
  )
}

export default HomePage