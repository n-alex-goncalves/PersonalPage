import React from 'react'
import Hero from './Hero'
import Footer from './Footer'
import Card from './Card'
import CardsTable from './CardsTable'
import { WORK_EXPERIENCE_DATA, PROJECT_DATA } from "@/app/constants"
import SideBar from './SideBar'

const HomePage = () => {
  return (
    <div className="flex">
        <aside className="h-screen sticky top-0 z-10">
            <SideBar /> 
        </aside>
        <main className="w-full">
            <div className="flex-row h-screen">
                <Hero />
            </div>
            <CardsTable title={WORK_EXPERIENCE_DATA.title} cards={WORK_EXPERIENCE_DATA.cards}/>
            <CardsTable title={PROJECT_DATA.title} cards={PROJECT_DATA.cards}/>
            <footer>
            <Footer />
        </footer>
        </main>
  </div>
  )
}

export default HomePage