import React from 'react'
import Link from 'next/link'
import HoverUnderline from './HoverUnderline'

type SideBarLinkProps = {
  name: string;
  link: string;
  target?: boolean;
}

const SideBar = () => {
  return (
    <div className="drawer md:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-side">
        <ul className="ml-5 bg-neutral-950 min-h-full w-72 p-4">
        <SideBarLink name="Home" link="/" />
        <SideBarLink name="Resume" link="./Nuno Goncalves CV.pdf" target={true} />
        <SideBarLink name="LinkedIn" link="https://www.linkedin.com/in/n-alex-goncalves/" target={true} />
        <SideBarLink name="GitHub" link="https://github.com/n-alex-goncalves" target={true} />
        </ul>
    </div>
    </div>
  )
}

const SideBarLink = ({ name, link, target = false }: SideBarLinkProps) => {
  return (
    <li className="pt-2">
      <HoverUnderline groupName={name} variant={"bg-slate-50"}>
        <Link href={link} {...(target ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {name}
        </Link>
      </HoverUnderline>
    </li>
  );
};

export default SideBar