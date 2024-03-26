'use client';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExamButtonProps {
  chapterId: string;
  courseId: string;
}

export const ExamButton = ({ chapterId, courseId }: ExamButtonProps) => {
  return (
    <Link href={`/courses/${courseId}/chapters/${chapterId}/question`}>
      <Button variant={'success'}>
        <span className=" flex items-center justify-center hover:scale-110 transition-all h-full">
          Exam <MoveRight className=" h-6 w-6 ml-2" />
        </span>
      </Button>
    </Link>
  );
};
