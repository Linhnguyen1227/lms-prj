import { db } from '@/lib/db';

export const getTotalPurchase = async (id: string) => {
    try {
        const totalPurchase = await db.purchase.count({
            where: {
                courseId: id,
            },
        });

        return {
            totalPurchase,
        };
    } catch (error) {
        console.log('[GET_PURCHASE_COURSE]', error);
        return {
            totalPurchase: 0,
        };
    }
};
