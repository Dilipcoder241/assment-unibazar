import React from 'react';
import Tags from './Tags';
import { IoMdTimer } from "react-icons/io";
import { RiLayoutGridLine } from "react-icons/ri";
import { BsListCheck } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { MdOutlineTableRows } from "react-icons/md";

export default function Sidebar() {
    const tagsData = [
        {
            title: "Dashboard",
            icon: IoMdTimer,
            subLinks:["Overview" , "Total sales" , "Active Listings" , "Orders"]
        },
        {
            title: "Products",
            icon: RiLayoutGridLine,
        },
        {
            title: "Order List",
            icon: BsListCheck,
        },
        {
            title: "Analytics",
            icon: FaRegHeart,
        },
        {
            title: "Account Settings",
            icon: TiMessages,
        },
        {
            title: "Help & Support",
            icon: MdOutlineTableRows,
        },
    ]
    const AdditionaltagsData = [
        {
            title: "Platform Selection",
            icon: RiLayoutGridLine,
        },
        {
            title: "Edit Inventor",
            icon: BsListCheck,
        },
        {
            title: "Additional settings",
            icon: MdOutlineTableRows,
        },
    ]
    return (
        <div className='h-screen'>
            <div className='logo px-3 py-4'>
                <h1 className='text-bold text-3xl text-[#529696] font-bold'>unibazar</h1>
            </div>

            <div className="links mt-5">
                {tagsData.map((tag)=>(
                    <Tags key={tag.title} title={tag.title} icon={tag.icon} subLinks={tag.subLinks} />
                ))}
            </div>

            <div className='w-full h-[2px] bg-zinc-200 mt-7'></div>
            <h1 className='mx-7 mt-4 text-bold text-zinc-500'>Additional</h1>

            <div className="links mt-5">
                {AdditionaltagsData.map((tag)=>(
                    <Tags key={tag.title} title={tag.title} icon={tag.icon} />
                ))}
            </div>
        </div>
    )
}
