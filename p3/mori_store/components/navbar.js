import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

export default function navbar() {
  const { cart } = useCart();
  const [search, setSearch] = useState("");

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-orange text-white py-1 text-center small">
        Gratis Ongkir - COD - Promo 6.6
      </div>

      {/* MAIN NAV */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-orange px-4 py-3 shadow-sm">
        <Link href="/" className="navbar-brand fw-bold fs-3">
          Mori<span className="text-warning">Store</span>
        </Link>

        <form className="d-flex mx-auto w-50">
          <input
            type="text"
            className="form-control search-box"
            placeholder="Cari pakaian trendi"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <link
          href="/cart"
          className="nav-link text-white fs-5 position-relative"
        >
          🛒
          <span className="badge bg-warning text-dark position-absolute top-0 start-100 translate-middle rounded-pill">
            {cart.length}
          </span>
        </link>
      </nav>

      {/* CATEGORY BAR */}
      <div className="category-bar py-2 px-4 d-flex gap-3 overflow-auto bg-white shadow-sm">
        <span className="cat-item">Kemeja</span>
        <span className="cat-item">Dress</span>
        <span className="cat-item">Tunik</span>
        <span className="cat-item">Pakaian Muslim</span>
        <span className="cat-item">Baju Anak</span>
        <span className="cat-item">Outer</span>
      </div>
    </>
  );
}
