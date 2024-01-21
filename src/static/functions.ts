import { PrismaClient as PrismaClientBMS } from "../../prisma/src/generated/clientBMS";
// import { SERVER_TABLE_POINT } from "../env.ts";

export const getPathId = async (station: string, division:string, device:string) => {

  try {
    const clientBMS = new PrismaClientBMS();

    const result: { path_id: number }[] = await clientBMS.$queryRaw`SELECT path_id FROM point_master WHERE point_path = ${`/${station}/${division}/${device}`}`;

    return (result.length > 0 ) ? Number(result[0]["path_id"]) : 0;
  }
  catch (error) {
    console.error("Database query error:", error);
    return 0;
  }
}


export const getTest = async () => {
  const clientBMS = new PrismaClientBMS();
  const result = await clientBMS.$queryRaw`SELECT * FROM point_master LIMIT 1`;
  return result;
}