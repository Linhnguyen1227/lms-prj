'use client';

import toast from 'react-hot-toast';
import { useState } from 'react';

import { Categories } from './categories';
import { Category, Course } from '@prisma/client';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

type CourseProps = Course & {
  category: Category;
};

type CourseTeacherProps = {
  items: CourseProps[];
  ListCategory: Category[];
};

export const CourseTeacher: React.FC<CourseTeacherProps> = ({ items, ListCategory }) => {
  const [loading, setIsLoading] = useState(false);
  const router = useRouter();
  const onClick = () => {
    try {
    } catch (error) {
      toast.error('Có lỗi xảy ra');
    }
  };
  return (
    <div className="">
      <span className="text-sm font-bold">Các khóa học</span>
      <div className="flex space-x-2 mt-2">
        {items.map((course: CourseProps) => {
          return (
            <div key={course.id} className="pb-2">
              <div>
                <Button
                  onClick={onClick}
                  className="py-2 px-3 text-sm border border-slate-200 rounded-full flex items-center gap-x-1 hover:border-sky-700 transition"
                >
                  {course.title}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <span className="text-sm font-bold">Danh mục</span>
      <div className="mt-2">
        {ListCategory.map((item) => {
          return (
            <div key={item.id} className="flex items-center">
              <Categories items={[item]} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
