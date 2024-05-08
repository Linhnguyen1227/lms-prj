'use client';

import { CheckCircle, Lock, PlayCircle } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

import { Chapter } from '@prisma/client';
import { cn } from '@/lib/utils';
import { useStore } from '@/hooks/use-store';

interface CourseSidebarItemProps {
  label: string;
  id: string;
  isCompleted: boolean;
  courseId: string;
  isLocked: boolean;
  profileId: string;
  nextChapter: Chapter;
  position: number;
  chapter: Chapter;
}

export const CourseSidebarItem = ({
  label,
  id,
  isCompleted,
  courseId,
  isLocked,
  profileId,
  nextChapter,
  chapter,
  position,
}: CourseSidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const { progressVideo } = useStore();

  let disabled = true;
  if (chapter?.isLock) {
    disabled = true;
  } else {
    disabled = false;
  }

  if (position === 1) {
    disabled = false;
  }
  /*   if (progressVideo >= 80 ) {
    disabled = false;
  } */

  const Icon = isLocked || disabled ? Lock : isCompleted ? CheckCircle : PlayCircle;
  const isActive = pathname?.includes(id);

  const onClick = () => {
    if (!disabled) {
      router.push(`/courses/${courseId}/chapters/${id}`);
    } else if (disabled && isCompleted) {
      router.push(`/courses/${courseId}/chapters/${id}`);
    }
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        'flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20',
        disabled && 'cursor-default hover:bg-transparent hover:text-slate-500',
        isActive && 'text-slate-700 bg-slate-200/20 hover:bg-slate-200/20 hover:text-slate-700',
        isCompleted && 'text-emerald-700 hover:text-emerald-700',
        isCompleted && disabled && 'text-emerald-700 hover:text-emerald-700',
        isCompleted && isActive && 'bg-emerald-200/20',
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn('text-slate-500', isActive && 'text-slate-700', isCompleted && 'text-emerald-700')}
        />
        {label}
      </div>
      <div
        className={cn(
          'ml-auto opacity-0 border-2 border-slate-700 h-full transition-all',
          isActive && 'opacity-100',
          isCompleted && 'border-emerald-700',
        )}
      />
    </button>
  );
};
