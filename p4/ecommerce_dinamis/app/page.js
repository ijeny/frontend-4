async function getProducts() {
const res = await fetch("http://localhost:3000/api/products", {
  cache: "no-store",
});

  const text = await res.text();

  if (!text) {
    console.log("Response kosong");
    return [];
  }

  return JSON.parse(text);
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <h1>STIKOM Ecommerce</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {Array.isArray(products) ? (
          products.map((prod) => (
            <div
              key={prod.id}
              style={{ border: "1px solid #ccc", padding: 20 }}
            >
              <img src={`/images/${prod.gambar}`} width={150} />
              <h3>{prod.nama}</h3>
              <p>Rp {prod.harga}</p>
              <p>{prod.deskripsi}</p>
            </div>
          ))
        ) : (
          <p>Data tidak tersedia</p>
        )}
      </div>
    </main>
  );
}
