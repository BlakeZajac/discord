import { PrismaClient } from "@prisma/client";

// In order for browser sync in Next 13 to not initialise too many Prisma clients.
// Works by appending a new PrismaClient to globalThis, which is not affected by browser sync.

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
