import { connect } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connect();

    const [rows] = await db.execute(`
      SELECT 
        kode_baju AS id,
        nama_baju AS nama,
        harga,
        filename AS gambar,
        kategori AS deskripsi
      FROM toko_baju
    `);

    console.log("ROWS:", rows);

    return NextResponse.json(rows);
  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json({ error: "Gagal ambil data" }, { status: 500 });
  }
}
