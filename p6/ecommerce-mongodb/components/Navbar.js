import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <div className="container">
        <Link href="/" className="navbar-brand">
          MyShop
        </Link>

        <Link href="/cart" className="btn btn-light">
          Cart
        </Link>
      </div>
    </nav>
  );
}
