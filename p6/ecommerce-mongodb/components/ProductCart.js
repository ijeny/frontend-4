import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="card p-2">
      <img src={product.image} height="250" />

      <h5>{product.nama}</h5>

      <p>Rp {product.price}</p>

      <Link href="/" className="btn btn-primary">
        Detail
      </Link>
    </div>
  );
}
