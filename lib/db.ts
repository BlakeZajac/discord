import { PrismaClient } from "@prisma/client";

// This code is used to prevent initializing multiple instances of PrismaClient when using browser sync in Next 13.
declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
