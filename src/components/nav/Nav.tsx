import Link from "next/link";
import { Button } from "~/components/ui/button";

export const Nav = () => (
  <nav>
    <Button asChild variant="ghost">
      <Link href="/">Main</Link>
    </Button>
    <Button asChild variant="ghost">
      <Link href="/favs">Favorites</Link>
    </Button>
    <Button asChild variant="ghost">
      <Link href="/shopping-cart">Cart</Link>
    </Button>
  </nav>
);
