import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { currentProfile } from "@/lib/current-profile";

export async function PUT(
  req: Request,
  { params }: { params: { courseId: string; nextChapterId: string } }
) {
  try {

    const profile = await currentProfile()
    const {nextChapterId} = await req.json()

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const nextChapter = await db.chapter.update({
        where: {
            id:nextChapterId,
            courseId: params.courseId,
        },
        data: {
            isLock: false,
        }
    })
 

    return NextResponse.json(nextChapter);
  } catch (error) {
    console.log("[CHAPTER_LOCKED]", error);
    return new NextResponse("Internal Error", { status: 500 }); 
  }
}