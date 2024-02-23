'use client';

import { Compass, Layout } from 'lucide-react';

import { SidebarItemAdmin } from './sidebar-item-admin';

const AdminRoutes = [
    {
        icon: Layout,
        label: 'Home',
        href: '/admin',
    },
    {
        icon: Compass,
        label: 'Analytics',
        href: '/admin/analytics',
    },
];

export const SidebarRoutesAdmin = () => {
    return (
        <div className="flex flex-col w-full">
            {AdminRoutes.map((route) => (
                <SidebarItemAdmin key={route.href} icon={route.icon} label={route.label} href={route.href} />
            ))}
        </div>
    );
};
