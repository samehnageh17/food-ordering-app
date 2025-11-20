import { PrismaClient } from "@prisma/client";
import { Environments } from "@/constants/enums";

declare global {
  // Prevent multiple instances in dev mode
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const db =
  global.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === Environments.DEV
        ? ["query", "warn", "error"]
        : ["error"],
  });

if (process.env.NODE_ENV !== Environments.PROD) global.prisma = db;
