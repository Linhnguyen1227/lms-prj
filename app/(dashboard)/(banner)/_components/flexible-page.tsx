import { Button } from '@/components/ui/button';

/* eslint-disable @next/next/no-img-element */
export const FlexiblePage = () => {
  return (
    <>
      <div className="space-y-8 text-white">
        <div className="text-white text-[44px] font-bold leading-tight">Learn in-depth topics at your own speed.</div>
        <div className="">
          Umy is a flexible learning management system (LMS) template with everything you need to sell video content.
          Create an entire catalog or just a single course and sell subscriptions with ease!
        </div>
        <div className="pt-8">
          <Button
            size={'lg'}
            className="rounded-full text-white bg-transparent border-[2px] border-white font-bold text-center leading-6 hover:bg-leadingcolor hover:text-homecolor h-12 text-xl"
          >
            Enroll Now
          </Button>
        </div>
      </div>
      <div className="relative">
        <div
          className="absolute left-0 bottom-0 w-[240px] h-[240px] rounded-full bg-[#e66bba] translate-x-[-64px] translate-y-[64px]"
          style={{
            backgroundImage: 'linear-gradient(225deg, hsla(0, 0%, 100%, 0.4), hsla(0, 0%, 100%, 0.2))',
          }}
        />
        <img
          className="relative rounded-xl w-full align-middle max-w-full z-1 "
          src="https://assets.website-files.com/6279827ac63c5f7775cc5b91/6279827ac63c5f2af7cc5c37_growkit-placeholder-2-p-1080.webp"
          alt="Course kit LMS"
        />
      </div>
    </>
  );
};
