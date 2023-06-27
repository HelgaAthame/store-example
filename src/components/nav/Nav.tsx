import Link from "next/link";
import { Button } from "~/components/ui/button";

export const Nav = () => (
  <nav className="p-4 uppercase">
    <Button asChild variant="ghost" className="mx-2">
      <Link href="/">Main</Link>
    </Button>
    <Button asChild variant="ghost" className="mx-2">
      <Link href="/favs">Favorites</Link>
    </Button>
    <Button asChild variant="ghost" className="mx-2">
      <Link href="/shopping-cart">Cart</Link>
    </Button>
  </nav>
);
