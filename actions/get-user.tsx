import { db } from '@/lib/db';
import { Profile, Purchase } from '@prisma/client';
type User = {
  user: Profile[];
  userPurchase: Purchase[];
};

export const getUser = async (): Promise<User> => {
  try {
    const user = await db.profile.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    const userPurchase = await db.purchase.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return { user, userPurchase };
  } catch (error) {
    console.log('Error: ', error);
    return { user: [], userPurchase: [] };
  }
};
