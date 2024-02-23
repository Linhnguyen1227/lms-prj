import { auth } from '@clerk/nextjs';

import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

import { columnsAdminPage } from './_components/columns-admin';
import { TableUser } from './_components/table-user';
import { db } from '@/lib/db';

interface UserProps {
    attributes: any;
    userId: string;
    role: 'admin' | 'member';
}

const AdminPage = async () => {
    const { userId } = auth();

    const listUsers = await db.profile.findMany({
        orderBy: {
            userId: 'desc',
        },
    });

    const users = listUsers.map((user: UserProps) => {
        const attributes: any = user?.attributes;
        //
        return {
            id: user.userId,
            name: attributes?.username,
            role: user?.role,
            email: attributes?.email_addresses[0].email_address,
        };
    }, []);

    const isAdmin = listUsers.some((user: UserProps) => user.role === 'admin');

    if (!userId) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!isAdmin) {
        return redirect('/');
    }

    return (
        <div className=" p-6">
            <TableUser data={users} columns={columnsAdminPage} />
        </div>
    );
};

export default AdminPage;
