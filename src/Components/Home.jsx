import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

export default function Home() {
  return (
        <Router>
    <div className="main flex h-screen w-full">
      <div className="w-[15%] overflow-y-scroll">
        <Sidebar />
      </div>
      <div className="w-[85%] overflow-y-scroll relative">
        <Navbar/>
            <Routes>
                <Route path="/Dashboard" element={<Dashboard title="Dashboard"/>}/>
                <Route path="/Products" element={<Dashboard title="Products"/>}/>
                <Route path="/Order List" element={<Dashboard title="Order List"/>}/>
                <Route path="/analytics" element={<Dashboard title="Analytics"/>}/>
                <Route path="/account settings" element={<Dashboard title="Account Settings"/>}/>
                <Route path="/help & support" element={<Dashboard title="Help and Support"/>}/>
            </Routes>
      </div>
    </div>
        </Router>
  )
}
