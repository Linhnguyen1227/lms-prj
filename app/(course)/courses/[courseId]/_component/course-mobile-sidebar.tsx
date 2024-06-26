import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { CourseSidebar } from './course-sidebar';
import { CourseWithChapter } from '@/type';
export const maxDuration = 30;

export const CourseMobileSidebar = ({ course, progressCount }: CourseWithChapter) => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white w-72">
        <CourseSidebar course={course} progressCount={progressCount} />
      </SheetContent>
    </Sheet>
  );
};
