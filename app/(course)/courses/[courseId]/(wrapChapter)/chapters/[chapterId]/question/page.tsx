import { redirect } from 'next/navigation';

import { currentProfile } from '@/lib/current-profile';

import { Separator } from '@/components/ui/separator';
import ListQuestionPage from './_components/list_question';
import { getChapter } from '@/actions/get-chapters';

const QuestionPage = async ({ params }: { params: { courseId: string; chapterId: string } }) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect('/');
  }

  const { chapter, course, nextChapter, userProgress, questions } = await getChapter({
    profileId: profile.id,
    chapterId: params.chapterId,
    courseId: params.courseId,
  });
  if (!chapter || !course) {
    return redirect('/');
  }

  const isQuestions = !!questions;

  return (
    <div className="p-4">
      {/* {userProgress?.isCompleted && <Banner variant="success" label="You already completed this chapter." />} */}
      <div className="flex flex-col max-w-4xl space-y-4 ">
        <h2 className="text-2xl font-semibold mb-2">{chapter.title}</h2>
        <div className="text-base font-semibold">Câu hỏi trắc nghiệm </div>
        <Separator />
      </div>
      <div>
        <div className="flex flex-col space-y-4 py-4 px-6">
          <ListQuestionPage
            profileId={profile.id}
            questions={questions}
            chapterId={params.chapterId}
            courseId={params.courseId}
            nextChapterId={nextChapter?.id}
            isCompleted={!!userProgress?.isCompleted}
            isQuestions={isQuestions}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
