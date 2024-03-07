import { db } from '@/lib/db';
import { Profile, Purchase } from '@prisma/client';

type User = {
  users: Profile[];
  userPurchase: Purchase[];
};

export const getUser = async (): Promise<User> => {
  try {
    const users = await db.profile.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    const userPurchase = await db.purchase.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return { users, userPurchase };
  } catch (error) {
    console.log('Error: ', error);
    return { users: [], userPurchase: [] };
  }
};
