import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { File } from 'lucide-react';

import { getChapter } from '@/actions/get-chapters';
import { Banner } from '@/components/banner';
import { Preview } from '@/components/preview';

import { VideoPlayer } from './_components/video-player';
import { CourseEnrollButton } from './_components/course-enroll-button';
import { CourseProgressButton } from './_components/course-progress-button';
import { currentProfile } from '@/lib/current-profile';

const ChapterIdPage = async ({ params }: { params: { courseId: string; chapterId: string } }) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect('/');
  }

  const { chapter, course, attachments, nextChapter, userProgress, purchase } = await getChapter({
    profileId: profile.id,
    chapterId: params.chapterId,
    courseId: params.courseId,
  });

  if (!chapter || !course) {
    return redirect('/');
  }

  const isLocked = !chapter.isFree && !purchase;
  const completeOnEnd = !!purchase && !userProgress?.isCompleted;

  return (
    <div>
      {userProgress?.isCompleted && <Banner variant="success" label="You already completed this chapter." />}
      {isLocked && <Banner variant="warning" label="You need to purchase this course to watch this chapter." />}
      <div className="flex flex-col max-w-4xl mx-auto pb-20">
        <div className="p-4">
          <VideoPlayer
            chapterId={params.chapterId}
            videoUrl={chapter.videoUrl!}
            title={chapter.title}
            courseId={params.courseId}
            nextChapterId={nextChapter?.id}
            isLocked={isLocked}
            completeOnEnd={completeOnEnd}
          />
        </div>
        <div>
          <div className="p-4 text-center md:flex justify-between items-center">
            <h2 className="text-2xl font-semibold mb-2">{chapter.title}</h2>
            {purchase ? (
              <CourseProgressButton
                chapterId={params.chapterId}
                courseId={params.courseId}
                nextChapterId={nextChapter?.id}
                isCompleted={!!userProgress?.isCompleted}
              />
            ) : (
              // price! chuyển đổi gía trị price từ null hoặc undefined sang chuỗi rỗng
              <CourseEnrollButton courseId={params.courseId} price={course.price!} />
            )}
          </div>
          <Separator />
          <div>
            <Preview value={chapter.description!} />
          </div>
          {!!attachments.length && (
            <>
              <Separator />
              <div className="p-4">
                {attachments.map((attachment) => (
                  <a
                    href={attachment.url}
                    target="_blank"
                    key={attachment.id}
                    className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline"
                  >
                    <File />
                    <p className="line-clamp-1">{attachment.name}</p>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterIdPage;
