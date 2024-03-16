/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Discord, Twitter } from '@/public/assets/image/page';

export default function CommunityPage() {
  const socialList = [
    {
      id: 1,
      imageUrl: 'https://assets.website-files.com/6279827ac63c5f7775cc5b91/62e6e9682cf39708fb5d159c_FacebookLogo.webp',
    },
    {
      id: 2,
      imageUrl: 'https://assets.website-files.com/6279827ac63c5f7775cc5b91/62e6e968438313555340ad35_InstagramLogo.webp',
    },
    {
      id: 3,
      imageUrl: 'https://assets.website-files.com/6279827ac63c5f7775cc5b91/62e6e9682fdfe1c2f179d169_YoutubeLogo.webp',
    },
    {
      id: 4,
      imageUrl: 'https://assets.website-files.com/6279827ac63c5f7775cc5b91/62e6e9681cbbc74dcf378000_TwitterLogo.webp',
    },
    {
      id: 5,
      imageUrl: 'https://assets.website-files.com/6279827ac63c5f7775cc5b91/62e6e9680f9b3a53337f3fc2_EnvelopeSimple.png',
    },
    {
      id: 6,
      imageUrl: 'https://assets.website-files.com/6279827ac63c5f7775cc5b91/62e6e9682f9d22e369075707_TiktokLogo.webp',
    },
  ];
  const router = [
    {
      id: 1,
      title: 'Home',
    },
    {
      id: 2,
      title: 'Pages',
    },
    {
      id: 3,
      title: 'Sections',
    },
    {
      id: 4,
      title: 'Themes',
    },
    {
      id: 5,
      title: 'Style Guide',
    },
    {
      id: 6,
      title: 'Buy Now',
    },
  ];
  return (
    <div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 h-[350px] gap-6">
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
      <div className="bg-[#070a3f] text-white px-6">
        <div className="flex justify-end h-16 items-center space-x-8">
          <p className="font-semibold cursor-pointer select-none">Follow us </p>
          <div className="flex space-x-6 cursor-pointer">
            <img src="https://about.udemy.com/wp-content/themes/wp-about-v4/assets/images/in_icon.svg" alt="#" />
            <img src="https://about.udemy.com/wp-content/themes/wp-about-v4/assets/images/fb_icon.svg" alt="#" />
            <img src="https://about.udemy.com/wp-content/themes/wp-about-v4/assets/images/twitter_icon.svg" alt="#" />
            <img src="https://about.udemy.com/wp-content/themes/wp-about-v4/assets/images/insta_icon.svg" alt="#" />
          </div>
        </div>
        <Separator />
        <div className="grid grid-cols-2 py-4">
          <div className="grid grid-cols-3 font-normal text-[14px]  ">
            <div className="space-y-2 ">
              <p className="hover:underline cursor-pointer">Udemy Business</p>
              <p className="hover:underline cursor-pointer">Teach on Udemy</p>
              <p className="hover:underline cursor-pointer">Get the app</p>
              <p className="hover:underline cursor-pointer">About us</p>
              <p className="hover:underline cursor-pointer">Cookie settings</p>
            </div>
            <div className="space-y-2">
              <p className="hover:underline cursor-pointer">Blog</p>
              <p className="hover:underline cursor-pointer">Help</p>
              <p className="hover:underline cursor-pointer">Affiliate</p>
              <p className="hover:underline cursor-pointer">Accessibility statement</p>
              <p className="hover:underline cursor-pointer">Investors</p>
            </div>
            <div className="space-y-2">
              <p className="hover:underline cursor-pointer">Terms</p>
              <p className="hover:underline cursor-pointer">Teach on Udemy</p>
              <p className="hover:underline cursor-pointer">Contact us</p>
              <p className="hover:underline cursor-pointer">Sitemap</p>
              <p className="hover:underline cursor-pointer">Featured topics</p>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <div>
              <span className=" mr-8 border border-[white] py-2 px-3 cursor-pointer">English</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pb-10">
          <span className="text-[#ffc2c0] font-bold text-[44px] cursor-pointer select-none">Umy</span>
          <p className="text-[13px]">© 2024 Udemy, Inc.</p>
        </div>
      </div>
    </div>
  );
}
