import { currentProfile } from "@/lib/current-profile";
import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();

const handleAuth = async () => {

  const profile = await  currentProfile()

  if (!profile) {
    throw new Error("Unauthorized");
  }
  return { profileId:profile?.id  };
};

export const ourFileRouter = {
  courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete((data) => {console.log('Upload complete',data);
    }),
  courseAttachment: f(["text", "image", "video", "audio", "pdf",'blob'])
    .middleware(() => handleAuth())
    .onUploadComplete(() => {console.log('Upload complete');}),
    
  chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "512GB" } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {console.log('Upload complete');})

} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;