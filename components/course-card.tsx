import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Users } from 'lucide-react';

import { IconBadge } from '@/components/icon-badge';
import { formatPrice } from '@/lib/format';
import { CourseProgress } from './course-progress';

import { getTotalPurchase } from '@/actions/get-total-purchase';
import { Category, Course } from '@prisma/client';

/* interface CourseCardProps {
  id: string;
  item.title: string;
  item.imageUrl: string;
  chaptersLength: number;
  price: number;
  item.progress: number | null;
  category: string;
} */

type CourseWithProgressWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
  progress: number | null;
};

interface CoursesListProps {
  items: CourseWithProgressWithCategory[];
}

export const CourseCard = async ({ items }: CoursesListProps) => {
  /* const { totalPurchase } = await getTotalPurchase({ id }); */

  return (
    <>
      {items.map((item) => {
        return (
          <Link href={`/courses/${item.id}`} key={item.id}>
            <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
              <div className="relative w-full aspect-video rounded-md overflow-hidden">
                <Image fill className="object-cover" alt={item.title} src={item.imageUrl!} loading="lazy" />
              </div>
              <div className="flex flex-col pt-2">
                <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
                  {item.title}
                </div>
                <p className="text-xs text-muted-foreground">{item.category?.name}</p>
                <div className="my-3 flex items-center justify-between gap-x-2 text-sm md:text-xs">
                  <div className="flex items-center  gap-x-1 text-slate-500">
                    <IconBadge size="sm" icon={BookOpen} />
                    <span>{item.chapters.length} Bài học</span>
                  </div>
                  <div className="flex items-center  gap-x-1 text-slate-500">
                    <IconBadge size="sm" icon={Users} />
                    {/* <span>{totalPurchase}</span> */}
                  </div>
                </div>
                {item.progress !== null ? (
                  <CourseProgress
                    value={item.progress}
                    variant={item.progress == 100 ? 'success' : 'default'}
                    size="sm"
                  />
                ) : (
                  <p className="text-md md:text-sm font-medium text-slate-700">{formatPrice(item.price!)}</p>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};
