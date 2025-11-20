import { Prisma } from "@/generated/prisma/browser";

export type ProductWithRelations = Prisma.ProductGetPayload<{
  include: {
    sizes: true;
    extras: true;
  };
}>;
