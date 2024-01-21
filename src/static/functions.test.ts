import { getPathId, getTest } from "./functions";
import { PrismaClient as PrismaClientBMS } from "../../prisma/src/generated/clientBMS";

import { describe, beforeAll, afterAll, it, expect } from '@jest/globals';

describe("getPathId", () => {
  let prisma: PrismaClientBMS;

  beforeAll(() => {
    // Initialize the Prisma client
    prisma = new PrismaClientBMS();
  });

  afterAll(async () => {
    // Close the database connection after all tests are done
    await prisma.$disconnect();
  });

  it("should return null if the path does not exist", async () => {
    const res = await getTest();

    expect(res).not.toBeNull();
  });

  it("should return the correct path ID", async () => {

    const pathId = await getPathId("ST1", "OFd2", "LPd104984738054");
    
    // const pathId = await getTest();
    expect(pathId).toBe(65188);
  });
});
