// app/products/page.js

async function getProducts() {
  const res = await fetch("http://192.168.1.4:3000/api/products", {
    cache: "no-store",
  });

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "35px",
          fontSize: "42px",
        }}
      >
        Daftar Produk
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "18px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
            }}
          >
            {/* FOTO PRODUK */}
            <img
              src={`/foto/dress_gambar${item.id}.jpg`}
              alt={item.name}
              style={{
                width: "100%",
                height: "230px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "15px",
              }}
            />

            {/* NAMA */}
            <h2
              style={{
                fontSize: "24px",
                marginBottom: "10px",
              }}
            >
              {item.name}
            </h2>

            {/* HARGA */}
            <p
              style={{
                color: "crimson",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              Rp {item.price.toLocaleString("id-ID")}
            </p>

            {/* TOMBOL */}
            <button
              style={{
                marginTop: "15px",
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "#111",
                color: "white",
                cursor: "pointer",
              }}
            >
              Lihat Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
