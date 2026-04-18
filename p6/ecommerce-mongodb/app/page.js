import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCart";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <div className="row">
          {products.map((p) => (
            <div className="col-md-4" key={p._id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
