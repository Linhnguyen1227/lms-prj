import { db } from '@/lib/db';

export const getTotalPurchase = async (id: string) => {
  try {
    const totalPurchase = await db.purchase.count({
      where: {
        courseId: id,
      },
    });
    const detailPurchaserList = await db.purchase.findMany({
      where: {
        courseId: id,
      },
      select: {
        profile: true,
      },
    });
    const totalPurchaseAll = await db.purchase.count({});

    return {
      totalPurchase,
      totalPurchaseAll,
      detailPurchaserList,
    };
  } catch (error) {
    console.log('[GET_PURCHASE_COURSE]', error);
    return {};
  }
};
