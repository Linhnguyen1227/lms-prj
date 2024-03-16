/* eslint-disable @next/next/no-img-element */
import { Check } from 'lucide-react';

export const DesignPage = () => {
  const data = [
    {
      id: 1,
      title: 'Actionable exercises',
      des: 'Duis semper ultrices aliquam nisl vulputate. Pellentesque convallis urna leo egestas iaculis pulvinar.',
    },
    {
      id: 2,
      title: 'Step by step teaching',
      des: 'Duis semper ultrices aliquam nisl vulputate. Pellentesque convallis urna leo egestas iaculis pulvinar.',
    },
    {
      id: 3,
      title: 'Community and instructor support',
      des: 'Duis semper ultrices aliquam nisl vulputate. Pellentesque convallis urna leo egestas iaculis pulvinar.',
    },
    {
      id: 4,
      title: 'Trusted by the best',
      des: 'Duis semper ultrices aliquam nisl vulputate. Pellentesque convallis urna leo egestas iaculis pulvinar.',
    },
  ];
  return (
    <>
      <div className="relative">
        <div
          className="absolute left-0 bottom-0 w-[240px] h-[240px] rounded-full bg-[#e66bba] translate-x-[-64px] translate-y-[64px]"
          style={{
            backgroundImage: 'linear-gradient(225deg, hsla(0, 0%, 100%, 0.4), hsla(0, 0%, 100%, 0.2))',
          }}
        />
        <img
          className="relative rounded-xl w-full align-middle max-w-full z-1 "
          src="https://assets.website-files.com/6279827ac63c5f7775cc5b91/6279827ac63c5f5a25cc5c38_growkit-placeholder-5-p-1080.webp"
          alt="Course kit LMS"
        />
      </div>
      <div className="space-y-8">
        <div className="text-white text-[44px] font-bold leading-tight pt-10 md:pt-6 ">
          Courses designed to get you from point A to&nbsp;point&nbsp;B
        </div>
        <div className="flex flex-col space-y-8">
          {data.map((item) => (
            <div key={item.id} className="flex space-x-8">
              <div className="bg-[#7291f9] h-8 rounded-full items-center justify-center flex">
                <Check className="text-white h-6 w-8" />
              </div>
              <div className="text-white space-y-2">
                <h2 className="font-bold text-2xl line-clamp-1">{item.title}</h2>
                <p className="text-base line-clamp-4 leading-[150%]">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
