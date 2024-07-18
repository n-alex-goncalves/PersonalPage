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
  <div className="flex flex-row bg-base-200">
    <aside className="h-screen sticky top-0">
        <SideBar /> 
    </aside>
    <div>
        <div className="flex-row h-screen w-3/4">
            <Hero />
        </div>
        <div className="flex-row p-5">
            <CardsTable cards={WORK_EXPERIENCE_DATA}/>
        </div>
        <div className="flex-row p-5">
            <CardsTable cards={PROJECT_DATA}/>
        </div>
    </div>
  </div>
          <Footer />
          </div>
  )
}

export default HomePage