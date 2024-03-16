/* eslint-disable @next/next/no-img-element */
import { NavbarHome } from './_components/nav-bar-home';
import { DesignPage } from './_components/design-pages';
import { FirstPage } from './_components/first-page';
import { FlexiblePage } from './_components/flexible-page';
import { FeedbackPage } from './_components/feedback-page';
import { ListCoursePage } from './_components/list-course';
import { Separator } from '@/components/ui/separator';
import { CompaniesPages } from './_components/companies-page';
import { FooterPage } from './_components/footer-page';

export default async function Dashboard() {
  return (
    <div className=" bg-homecolor">
      <div className="fixed top-0 right-0 left-0 z-50">
        <NavbarHome />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  items-center  gap-10 px-20 py-36">
        <FirstPage />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-10 px-20 py-36">
        <DesignPage />
      </div>
      <div className="grid grid-cols-1 bg-[#0e2d58] md:grid-cols-2 items-center gap-16 px-20 py-36">
        <FlexiblePage />
      </div>
      <div className=" items-center gap-16 px-20 py-36">
        <FeedbackPage />
      </div>
      <div className=" items-center text-center text-white gap-16 px-20 py-36">
        <ListCoursePage />
      </div>
      <div className="  text-white gap-16 px-20 py-36">
        <CompaniesPages />
      </div>

      <div className="  text-white  px-20 pt-20 pb-8 border-t border-borderline">
        <FooterPage />
      </div>
    </div>
  );
}
