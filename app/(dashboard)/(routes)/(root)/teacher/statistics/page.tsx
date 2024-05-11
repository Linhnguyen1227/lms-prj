import { currentProfile } from '@/lib/current-profile';
import { AnalyticsCourses } from '../analytics/_components/analytics-course';
import { redirect } from 'next/navigation';
import { getCourses } from '@/actions/get-courses';

const courseStatisticsPage = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect('/');
  }
  const courses = await getCourses({
    profileId: profile?.id,
  });

  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl pb-6">Thống kê khóa học:</h1>
      <AnalyticsCourses courses={courses} />
    </div>
  );
};
export default courseStatisticsPage;
