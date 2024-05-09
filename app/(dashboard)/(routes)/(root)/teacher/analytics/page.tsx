import { redirect } from 'next/navigation';

import { getAnalytics } from '@/actions/get-analytics';

import { DataCard } from './_components/data-card';
import { Chart } from './_components/chart';
import { currentProfile } from '@/lib/current-profile';
import { getCourses } from '@/actions/get-courses';

const AnalyticsPage = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect('/');
  }

  const { data, totalRevenue, totalSales } = await getAnalytics(profile?.id);
  const courses = await getCourses({
    profileId: profile?.id,
  });
  console.log(
    courses.map((item) => {
      return item.chapters;
    }),
  );

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <DataCard label="Tổng doanh thu" value={totalRevenue} shouldFormat />
        <DataCard label="Tổng các khóa học đã bán " value={totalSales} />
      </div>
      <Chart data={data} />
    </div>
  );
};
export default AnalyticsPage;
