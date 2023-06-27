import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export const Logo = () => (
  <Link href="/" className="p-4 uppercase flex text-4xl gap-4 items-center font-semibold">
    <ShoppingCart size={48}/>
    <div>best store</div>
  </Link>
);
