import { auth } from '@clerk/nextjs';

import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

import { columnsAdminPage } from './_components/columns-admin';
import { TableUser } from './_components/table-user';
import { db } from '@/lib/db';
import { currentProfile } from '@/lib/current-profile';

const AdminPage = async () => {
    const profile = await currentProfile();

    if (!profile) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    const isAdmin = profile.role === 'admin';
    if (!isAdmin) {
        return redirect('/');
    }
    const listUsers = await db.profile.findMany({
        orderBy: {
            userId: 'desc',
        },
    });

    const users = listUsers.map((user: any) => {
        const attributes: any = user?.attributes;

        return {
            id: user.userId,
            name: attributes?.username,
            role: user?.role,
            email: attributes?.email_addresses[0].email_address,
        };
    }, []);

    return (
        <div className=" p-6">
            <TableUser data={users} columns={columnsAdminPage} />
        </div>
    );
};

export default AdminPage;
