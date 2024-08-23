import React from 'react';
import { LuLayoutGrid } from "react-icons/lu";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoAddOutline } from "react-icons/io5";

export default function Dashboard({title}) {
  return (
    <div className='h-full w-full bg-zinc-200 px-7 py-7'>
        <div className='title flex justify-between items-center'>
            <h1 className='md:text-4xl text-lg font-semibold '>{title}</h1>
            <div className='flex items-center'>
                <div className="box p-2 bg-[#078680] text-white rounded-l-md">
                    <LuLayoutGrid className='text-2xl'/>
                </div>
                <div className="box p-2 bg-white rounded-r-md">
                    <CgMenuRightAlt className='text-2xl'/>
                </div>
            </div>
        </div>

        <div className='boxs flex mt-4 gap-4 flex-wrap'>
            <div className="box bg-white py-7 px-12 rounded-lg">
                <IoAddOutline className='mx-auto text-3xl'/>
                <h1>Add Account</h1>
            </div>
            <div className="box bg-white py-7 px-12 rounded-lg">
                <IoAddOutline className='mx-auto text-3xl'/>
                <h1>Add Account</h1>
            </div>
            <div className="box bg-white py-7 px-12 rounded-lg">
                <IoAddOutline className='mx-auto text-3xl'/>
                <h1>Add Account</h1>
            </div>
        </div>
    </div>
  )
}
