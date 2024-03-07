import { getAllCourses } from '@/actions/get-all-courses';

import { getUser } from '@/actions/get-user';

import { InfoCard } from '@/components/infor-card';
import { currentProfile } from '@/lib/current-profile';
import { BookOpen, BookOpenCheck, User, UserRoundCheck } from 'lucide-react';
import { redirect } from 'next/navigation';
import { DataCard } from './_components/data-card';
import { Chart } from './_components/chart';
import { getAnalyticsAll } from '@/actions/get-analytics-all';

const AnalyticsAdminPage = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect('/');
  }

  const { allCourses, coursePublished } = await getAllCourses();
  const { users, userPurchase } = await getUser();
  const { data, totalRevenue, totalSales, dataUsers, totalCourses, totalUsers } = await getAnalyticsAll();

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoCard icon={BookOpen} label="All Courses" numberOfItems={coursePublished.length} sublabel="Course" />
        <InfoCard icon={UserRoundCheck} label="Users Purchase" numberOfItems={userPurchase.length} sublabel="User" />
        <InfoCard
          icon={BookOpenCheck}
          label="Courses Published"
          numberOfItems={allCourses.length}
          variant="success"
          sublabel="Course"
        />
        <InfoCard icon={User} label="All Users" numberOfItems={users.length} sublabel="User" />
      </div>
      <div>
        <h1 className="text-xl font-bold mb-4"> Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <DataCard label="Total Revenue" value={totalRevenue} shouldFormat />
          <DataCard label="Total Sales" value={totalSales} />
        </div>
        <Chart data={data} isPrice />
      </div>
      <div>
        <h1 className="text-xl font-bold mb-4"> Users chart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <DataCard label="Total User" value={totalUsers} />
          <DataCard label="Total Courses" value={totalCourses} />
        </div>
        <Chart data={dataUsers} />
      </div>
    </div>
  );
};

export default AnalyticsAdminPage;
