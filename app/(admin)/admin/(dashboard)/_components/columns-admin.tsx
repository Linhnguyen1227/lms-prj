'use client';

import { ArrowUpDown, MoreHorizontal, Pencil, Trash } from 'lucide-react';

import { cn } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useModal } from '@/hooks/use-modal-store';

interface DataTablesProps {
    id: string;
    name: string;
    role: string;
    email: string;
}
[];

export const columnsAdminPage: ColumnDef<DataTablesProps>[] = [
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Full Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: 'email',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        accessorKey: 'role',
        header: ({ column }) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Role
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const isAdmin = row.getValue('role') === 'admin';
            return (
                <Badge className={cn('bg-slate-500', isAdmin && 'bg-sky-700')}>{isAdmin ? 'Admin' : 'Member'}</Badge>
            );
        },
    },
    {
        id: 'Action',
        cell: ({ row }) => {
            const id: string = row.original.id;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { onOpen } = useModal();

            return (
                <>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center">
                            <DropdownMenuItem
                            // onClick={() => onOpen('openUserProfile', {id})}
                            >
                                <Pencil className="h-4 w-4 mr-2" />
                                Edit
                            </DropdownMenuItem>

                            <DropdownMenuItem>
                                <Trash className="h-4 w-4 mr-2" />
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            );
        },
    },
];
