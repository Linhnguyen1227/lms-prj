import { v4 as uuidv4 } from "uuid";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
  ) {
    try {
        const { name,email ,role ,password } =await req.json()
        const profile = await currentProfile();
        if(!profile) {
            return new NextResponse('Unauthorized',{status:401})
        }

        const user = await clerkClient.users.createUser({
            username:name,
            password:password,
            emailAddress:[email],
        })
        //  await db.profile.update({
        //     where: { id:user?.id },
        //     data: {
        //       role: role,
        //     },
        //   });
        return NextResponse.json(user);
    } catch (error) {
        console.log("Error: ", error);
        // throw new Error("error");
        return new NextResponse("Internal Error", { status: 500 });
    }
}