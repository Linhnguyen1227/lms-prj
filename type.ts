import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";

import { Chapter, Course, LockChapter, Profile, UserProgress } from "@prisma/client";

export type ChaptersWithProfiles = Chapter & {
  profile: Profile[];
};

export type NextApiResponseServerIo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer;
    };
  };
};

export type CourseWithChapter = {
  course: Course & {
    chapters: (Chapter & {
      LockChapter: LockChapter[];
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}
