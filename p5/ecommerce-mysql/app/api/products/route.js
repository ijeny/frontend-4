import { query } from "../../lib/db";

export async function GET() {
  try {
    const rows = await query("SELECT * FROM products");
    return Response.json(rows);
  } catch (error) {
    console.log("ERROR API:", error);

    return Response.json(
      {
        message: error?.message,
        code: error?.code,
        errno: error?.errno,
        sqlMessage: error?.sqlMessage,
        full: String(error),
      },
      { status: 500 },
    );
  }
}
