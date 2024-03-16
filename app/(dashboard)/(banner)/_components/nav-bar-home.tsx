'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '../../_components/logo';
import { useRouter } from 'next/navigation';

export const NavbarHome = () => {
  const router = useRouter();
  const routerIntroducing = [
    {
      id: 1,
      label: 'Home',
      href: '/home',
    },
    {
      id: 2,
      label: 'Courses',
      href: '/search',
    },
    {
      id: 3,
      label: 'Pricing',
      href: '/search',
    },
    {
      id: 4,
      label: 'FAQ',
      href: '/',
    },
    {
      id: 5,
      label: 'Contact',
      href: '/',
    },
    {
      id: 6,
      label: 'Templates',
      href: '/',
    },
  ];
  return (
    <div className="flex items-center justify-between px-14 h-[84px] bg-homecolor">
      <span className="text-[#ffc2c0] font-bold text-[44px] cursor-pointer select-none">
        Umy
        {/* <Logo /> */}
      </span>
      <div className="flex text-lg text-white font-semibold ">
        {routerIntroducing.map((item) => (
          <div key={item.id}>
            <Link href={item.href} className="p-4 rounded-full hover:bg-[#0e2d58] hover:text-[#ffc2c0]">
              {item.label}
            </Link>
          </div>
        ))}
      </div>
      <div>
        <Button
          onClick={() => {
            router.push('/sign-in');
          }}
          className="rounded-full text-lg font-semibold hover:bg-leadingcolor hover:text-[#ffc2c0] text-white"
          variant={'link'}
          size={'lg'}
        >
          Log in
        </Button>
      </div>
    </div>
  );
};
