import { db } from '@/lib/db';
import { Attachment, Chapter } from '@prisma/client';

interface GetChapterProps {
  profileId: string;
  courseId: string;
  chapterId: string;
}

export const getChapter = async ({ profileId, courseId, chapterId }: GetChapterProps) => {
  try {
    const purchase = await db.purchase.findUnique({
      where: {
        profileId_courseId: {
          profileId,
          courseId,
        },
      },
    });

    const course = await db.course.findUnique({
      where: {
        isPublished: true,
        id: courseId,
      },
      select: {
        price: true,
      },
    });

    const chapter = await db.chapter.findUnique({
      where: {
        id: chapterId,
        isPublished: true,
      },
    });

    if (!chapter || !course) {
      throw new Error('Chapter or course not found');
    }

    let attachments: Attachment[] = [];
    let nextChapter: Chapter | null = null;

    if (purchase) {
      attachments = await db.attachment.findMany({
        where: {
          courseId: courseId,
        },
      });
    }
    if (chapter.isFree || purchase) {
      nextChapter = await db.chapter.findFirst({
        where: {
          courseId: courseId,
          isPublished: true,
          position: {
            gt: chapter?.position,
          },
        },
        orderBy: {
          position: 'asc',
        },
      });
    }

    const userProgress = await db.userProgress.findUnique({
      where: {
        profileId_chapterId: {
          profileId,
          chapterId,
        },
      },
    });

    const questions = await db.question.findMany({
      where: {
        chapterId: chapterId,
        courseId: courseId,
      },
    });

    return {
      questions,
      chapter,
      course,
      attachments,
      nextChapter,
      userProgress,
      purchase,
    };
  } catch (error) {
    console.log('[GET_CHAPTER]', error);
    return {
      questions: null,
      chapter: null,
      course: null,
      attachments: [],
      nextChapter: null,
      userProgress: null,
      purchase: null,
    };
  }
};
