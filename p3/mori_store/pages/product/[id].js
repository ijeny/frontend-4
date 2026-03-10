import { useRouter } from "next/router";
import { useCart } from "@/contexts/CartContext";

const db = {
  1: {
    id: 1,
    name: "Alana",
    price: 250000,
    desc: "tunik biru",
    image: "/images/alana.jpg",
  },
  2: {
    id: 2,
    name: "Amara",
    price: 115000,
    desc: "dress hitam",
    image: "/images/amara.jpg",
  },
  3: {
    id: 3,
    name: "Anaya",
    price: 215000,
    desc: "kemeja putih",
    image: "/images/anaya.jpg",
  },
  4: {
    id: 4,
    name: "Polo Anak",
    price: 95000,
    desc: "kemeja biru motif",
    image: "/images/poloAnak.jpg",
  },
};

export default function Detail() {
    const { addToCart } = useCart();
    const { id } = useRouter().query;

    const p = db[id];
    if (!p) return <h1>Loading...</h1>;

    return (
        <div className="container mt-4">
            <div className="row">

                <div className="col-md-6">
                    <img src={p.image} className="img-fluid rounded shadow"/>
                </div>

                <div className="col-md-6">
                    <h2 className="fw-bold">{p.name}</h2>
                    <h3 className="text-orange fw-bold">Rp {p.proce.toLocaleString()}</h3>

                    <p className="mt-3">{p.desc}</p>

                    <button className="btn btn-orange w-50 mt-3" onClick={() => addToCart(p)}>
                        + Tambah ke keranjang
                    </button>
                </div>

            </div>
        </div>
    );
}