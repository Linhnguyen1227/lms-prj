'use client';

import { CheckCircle, Lock, PlayCircle } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

import { Chapter, LockChapter, UserProgress } from '@prisma/client';
import { cn } from '@/lib/utils';

type NextChapterWithLockChapter = Chapter & {
  LockChapter: LockChapter[];
};
type ChapterWithLockChapter = Chapter & {
  LockChapter: LockChapter[];
  userProgress: UserProgress[] | null;
};

interface CourseSidebarItemProps {
  label: string;
  id: string;
  isChapterNowCompleted: boolean;
  courseId: string;
  isLocked: boolean;
  position: number;
  lockChapter: LockChapter;
}

export const CourseSidebarItem = ({
  label,
  id,
  isChapterNowCompleted,
  courseId,
  isLocked,
  lockChapter,
  position,
}: CourseSidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname?.includes(id);
  const router = useRouter();
  const firstChapter = lockChapter?.isLocked && position !== 1;
  console.log('lockChapter', lockChapter);

  const onClick = () => {
    if (lockChapter?.isLocked === false) {
      console.log('lockChapterLocked === false');
      router.push(`/courses/${courseId}/chapters/${id}`);
    } else if (isChapterNowCompleted) {
      console.log('isChapterNowCompleted');
      router.push(`/courses/${courseId}/chapters/${id}`);
    } else {
      console.log('no-click');

      return false;
    }
  };

  const Icon = isLocked || firstChapter ? Lock : isChapterNowCompleted ? CheckCircle : PlayCircle;
  console.log('renderDone');

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        'flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20',
        firstChapter && 'cursor-default hover:bg-transparent hover:text-slate-500',
        lockChapter?.isLocked && 'cursor-default hover:bg-transparent hover:text-slate-500',
        isActive && 'text-slate-700 bg-slate-200/20 hover:bg-slate-200/20 hover:text-slate-700',
        isChapterNowCompleted && 'text-emerald-700 hover:text-emerald-700',
        isChapterNowCompleted && 'text-emerald-700 hover:text-emerald-700',
        isChapterNowCompleted && isActive && 'bg-emerald-200/20',
      )}
    >
      <div className="flex items-center  gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(
            'text-slate-500 min-w-[22px] min-h-[22px]',
            isActive && 'text-slate-700',
            isChapterNowCompleted && 'text-emerald-700',
          )}
        />
        <div className="text-left">{label}</div>
      </div>
      <div
        className={cn(
          'ml-auto opacity-0 border-2 border-slate-700 h-full transition-all',
          isActive && 'opacity-100',
          isChapterNowCompleted && 'border-emerald-700',
        )}
      />
    </button>
  );
};
