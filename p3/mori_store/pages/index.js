import Link from "next/link";
import { useState } from "react";

// DATA PRODUK
const products = [
  {
    id: 1,
    name: "Alana",
    price: 250000,
    image: "/images/alana.jpg",
    sold: 110,
  },
  {
    id: 2,
    name: "Amara",
    price: 115000,
    image: "/images/amara.jpg",
    sold: 153,
  },
  {
    id: 3,
    name: "Anaya",
    price: 215000,
    image: "/images/anaya.jpg",
    sold: 119,
  },
  {
    id: 4,
    name: "Polo Anak",
    price: 95000,
    image: "/images/poloAnak.jpg",
    sold: 85,
  },
];

export default function HomePage() {
    const [search, setSearch] = useState("");

    const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mt-4">

            {/* BANNER */}
            <div className="banner rounded shadow-sm mb-4"></div>

            {/* GRID PRODUK */}
            <div className="row">
                {filtered.map((p) => (
                    <div key={p.id} className="col-6 col-md-3 mb-4">
                        <div className="product-card shadow-sm">
                            
                            <img src={p.image} className="product-img" alt={p.name}/>

                            <div className="p-2">
                                <h6 className="product-title">{p.name}</h6>

                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <span className="product-price">Rp {p.price.toLocaleString()}</span>
                                    <span className="text-muted small">{p.sold} terjual</span>
                                </div>

                                <link href={`/product/${p.id}`} className="btn btn-orange w-100 mt-2">
                                Lihat Detail
                                </link>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}