import React from 'react'
import { GitHubIcon, MailIcon, LinkedInIcon } from './Icon'

const Footer = () => {
  return (
    <footer className="footer bg-neutral-900 text-neutral-content p-10">
      <aside>
        <p>
          Made with ❤️ in 2024 by Nuno Alexandre Goncalves
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4 items-center">
            {/* LINKEDIN ICON */}
            <LinkedInIcon height={32} width={32} link={"https://www.linkedin.com/in/n-alex-goncalves/"} />
            {/* GITHUB ICON */}
            <GitHubIcon height={32} width={32} link={"https://github.com/n-alex-goncalves"}/>
            {/* MAIL ICON */}
            <MailIcon height={32} width={32} link={"/"}/>
        </div>
      </nav>
    </footer>
  )
}

export default Footer