import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Discord, Twitter } from '@/public/assets/image/page';

export default function CommunityPage() {
  return (
    <div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 h-[500px] gap-6">
        <Link
          href={'https://discord.gg/GsCEswv8'}
          className="flex items-center justify-center rounded-lg border-[2px] border-slate-200 hover:bg-slate-100 group"
        >
          <Discord />
        </Link>
        <Link
          href={'https://twitter.com/?lang=vi'}
          className="flex items-center justify-center rounded-lg border-[2px] border-slate-200 hover:bg-slate-100 group"
        >
          <Twitter />
        </Link>
      </div>
      <Separator />
    </div>
  );
}
