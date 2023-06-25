import Link from "next/link";

export const Nav = () => (
  <nav>
    <Link href="/">Main</Link>
    <Link href="/favs">Favorites</Link>
    <Link href="/shopping-cart">Cart</Link>
  </nav>
);
