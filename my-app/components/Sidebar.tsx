import React from 'react'
import Link from 'next/link'

const SideBar = () => {
  return (
    <div className="drawer md:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/Nuno Goncalves CV.pdf">Resume</Link></li>
        <li><Link href="https://www.linkedin.com/in/n-alex-goncalves/" target="_blank">LinkedIn</Link></li>
        <li><Link href="https://github.com/n-alex-goncalves" target="_blank">GitHub</Link></li>
        </ul>
    </div>
    </div>
  )
}

export default SideBar