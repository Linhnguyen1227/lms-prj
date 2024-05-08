import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { db } from '@/lib/db';
import { currentProfile } from '@/lib/current-profile';
import { UserAvatar } from '@/components/user-avatar';
import { Categories } from '@/components/categories';
import { ButtonChapter } from './_component/button-chapter';

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const profile = await currentProfile();
  if (!profile) {
    return redirect('/');
  }
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        orderBy: {
          position: 'asc',
        },
      },
      category: true,
    },
  });
  if (!course) {
    return redirect('/');
  }

  const courseAuthor = await db.profile.findUnique({
    where: {
      id: course.profileId,
    },
  });
  /* 
  return redirect(`/courses/${course.id}/chapters/${course.chapters[0].id}`); */
  return (
    <div className="space-y-2 px-8">
      <h1 className="text-2xl font-bold pb-4">{course.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-4 space-y-4 gap-x-2">
        <div className="aspect-video">
          <Image
            src={course.imageUrl!}
            alt="course_image"
            width={800}
            height={800}
            className="rounded aspect-video object-cover"
            loading="lazy"
          />
        </div>
        <div className=" flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Tác giả: {courseAuthor?.username}</h2>
            <UserAvatar src={courseAuthor?.imageUrl} />
            <p className="font-bold">Mô tả khóa học:</p>
            <p>{course.description}</p>
          </div>
          <div>
            <Categories items={[course.category!]} />
          </div>
          <div className="w-full">
            <ButtonChapter courseId={course.id} chapterId={course.chapters[0].id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseIdPage;
