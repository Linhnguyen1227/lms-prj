'use client';

import qs from 'query-string';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/use-debounce';

export const SearchTeacherInput = () => {
  const [value, setValue] = useState('');

  const debouncedValue = useDebounce(value);

  const searchParams = useSearchParams();
  const username = searchParams?.get('username');

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (searchParams) {
      setValue(searchParams?.get('username')!);
      return;
    }

    const url = qs.stringifyUrl(
      {
        url: pathname as string,
        query: {
          username: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true },
    );
    router.push(url);
  }, [debouncedValue, router, pathname, searchParams]);

  return (
    <div className="relative">
      <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600" />
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="w-full md:w-[300px] pl-9 rounded-full bg-slate-100 focus-visible:ring-slate-200"
        placeholder="Tìm kiếm giáo viên"
      />
    </div>
  );
};
