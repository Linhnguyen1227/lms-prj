'use client';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import { ArrowUpDown, BookOpen, MoreHorizontal, Pencil, Trash } from 'lucide-react';

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
import Link from 'next/link';

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
      return <Badge className={cn('bg-slate-500', isAdmin && 'bg-sky-700')}>{isAdmin ? 'Admin' : 'Member'}</Badge>;
    },
  },
  {
    id: 'Action',
    cell: ({ row }) => {
      const data = row.original;
      const userId: string = data?.id;
      const isAdmin = data?.role === 'admin';
      const isManager = data?.id === 'user_2d4To7URJrKYZ8pdlJOgPt9vkY1' && isAdmin;

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter();
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { onOpen } = useModal();
      const handleDelete = async () => {
        try {
          await axios.delete(`api/user/${userId}`);
          toast.success('User deleted');
          router.refresh();
        } catch (error) {
          console.log('Error: ', error);
          toast.error('Delete failed');
        }
      };

      return (
        <>
          {isManager ? (
            <></>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="center">
                <DropdownMenuItem
                  onClick={() => {
                    onOpen('openUserProfile', data);
                  }}
                >
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDelete}>
                  <Trash className="h-4 w-4 mr-2" />
                  Delete
                </DropdownMenuItem>
                <Link href={`admin/user/${userId}/courses`}>
                  <DropdownMenuItem>
                    <BookOpen className="h-4 w-4 mr-2" />
                    Courses
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </>
      );
    },
  },
];
