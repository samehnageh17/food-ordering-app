import { db } from "@/lib/prisma";
import { cache } from "@/lib/cache";

export const getBsetSellers = cache(
  (limit: number | undefined) => {
    const bestSellers = db.product.findMany({
      where: {
        orders: {
          some: {},
        },
      },
      orderBy: {
        orders: { _count: "desc" },
      },
      take: limit ?? 8,
      include: {
        sizes: true,
        extras: true,
      },
    });
    return bestSellers;
  },
  ["best-sellers"],
  { revalidate: 60 }
);
