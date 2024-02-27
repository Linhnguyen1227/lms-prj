import { currentProfile } from "@/lib/current-profile";
import { auth } from "@clerk/nextjs";
import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();

const handleAuth = async () => {
  // const { userId } = auth();
  const profile = await  currentProfile()

  if (!profile) {
    throw new Error("Unauthorized");
  }
  return { profileId:profile?.id  };
};

export const ourFileRouter = {
  courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {console.log('Upload complete');
    }),
  courseAttachment: f(["text", "image", "video", "audio", "pdf"])
    .middleware(() => handleAuth())
    .onUploadComplete(() => {console.log('Upload complete');}),
  chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "512GB" } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {console.log('Upload complete');})

} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;