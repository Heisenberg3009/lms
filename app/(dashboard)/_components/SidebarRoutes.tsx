"use client"
import React from 'react'
import { Compass, Layout } from 'lucide-react'
import SidebarItem from './SidebarItems'

const guestRoutes = [{
    icon: Layout,
    label: "Dashboard",
    href: "/",
},
{
    icon: Compass,
    label: "Browse",
    href: "/search",
}]


const SidebarRoutes = () => {

    const routes = guestRoutes;

  return (
    <div className="flex flex-col w-full">
        {routes.map((route) => (
            <SidebarItem 
                key = {route.href}
                icon = {route.icon}
                label = {route.label}
                href = {route.href}
            />
        ))}
    </div>
  )
}

export default SidebarRoutes