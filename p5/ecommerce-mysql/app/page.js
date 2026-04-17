import Link from "next/link";

export default function Home() {
  return (
    <div className="container mt-5">
      <h1>STIKOM STORE</h1>
      <Link href="/products" className="btn btn-primary mt-3">Lihat Produk</Link>
    </div>
  );
}