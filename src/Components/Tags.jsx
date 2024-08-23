import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Tags({ title, icon: Icon, subLinks }) {
    const [toggleLinks, setToggleLinks] = useState(false);

    const handleToggleLinks = ()=>{
        setToggleLinks(!toggleLinks);
    }


    return (
        <div className='group'>
            <div className="links px-4 py-1 group-hover:border-opacity-100 border-l-4 border-opacity-0 border-[#65B2B2]">
                <Link to={`/${title}`}  onClick={handleToggleLinks} className='p-2 w-full rounded-lg group-hover:bg-zinc-200 cursor-pointer flex items-center gap-4'>
                    <Icon />
                    <h1>{title}</h1>
                    {subLinks && <MdKeyboardArrowDown style={{rotate:`${toggleLinks?"180deg": "0deg"}`}}/> }
                </Link>
                    {subLinks && <div className='rounded-lg ml-8 overflow-hidden' style={{height:`${toggleLinks?"":"0px"}`}}>
                        {subLinks?.map((link) => (
                            <h1 key={link} className='hover:bg-zinc-200 cursor-pointer rounded-md mt-1'>{link}</h1>
                        ))}
                    </div>}
            </div>
        </div>
    )
}
