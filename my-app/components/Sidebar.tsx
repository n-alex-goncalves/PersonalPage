import React from 'react'
import Link from 'next/link'

const SideBar = () => {
  return (
    <div className="drawer md:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-side">
        <ul className="menu bg-neutral-950 min-h-full w-72 p-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/Nuno Goncalves CV.pdf" target="_blank">Resume</Link></li>
        <li><Link href="https://www.linkedin.com/in/n-alex-goncalves/" target="_blank">LinkedIn</Link></li>
        <li><Link href="https://github.com/n-alex-goncalves" target="_blank">GitHub</Link></li>
        </ul>
    </div>
    </div>
  )
}

export default SideBar