import React from 'react'

type UnderlineProps = {
    groupName: string;
    children: React.ReactNode;
    variant?: string;
};

const HoverUnderline = ({ children, variant, groupName }: UnderlineProps) => {
    return (
        <div className={`group`}>
            {children}
            <div className={`mt-1 h-[2px] w-0 group-hover:w-full transition-all duration-500 ${variant}`}></div>
        </div>
    )
}

export default HoverUnderline