import { auth, clerkClient } from '@clerk/nextjs';
import { useEffect } from 'react';
import { Clerk, getAuth } from '@clerk/nextjs/server';

import { redirect } from 'next/navigation';
import { CheckCircle, Clock } from 'lucide-react';

import { getDashboardCourses } from '@/actions/get-dashboard-courses';
import { CoursesList } from '@/components/courses-list';
import { InfoCard } from './_components/infor-card';

export default async function Dashboard() {
    const { userId } = auth();

    if (!userId) {
        return redirect('/');
    }
    const user = await clerkClient.users.getUser(userId);

    if (!user?.publicMetadata) {
        clerkClient.users.updateUser(userId as string, {
            publicMetadata: {
                role: 'member',
            },
        });
    }

    const { completedCourses, coursesInProgress } = await getDashboardCourses(userId);

    return (
        <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoCard icon={Clock} label="In Progress" numberOfItems={coursesInProgress.length} />
                <InfoCard
                    icon={CheckCircle}
                    label="Completed"
                    numberOfItems={completedCourses.length}
                    variant="success"
                />
            </div>
            <CoursesList items={[...coursesInProgress, ...completedCourses]} />
        </div>
    );
}
