import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export const Logo = () => (
  <Link
    href="/"
    className="flex items-center gap-1 px-2 font-semibold uppercase sm:gap-4 sm:text-xl md:text-4xl"
  >
    <div className="hidden sm:flex">
      <ShoppingCart size={48} />
    </div>
    <div className="flex sm:hidden">
      <ShoppingCart size={24} />
    </div>
    <div>best store</div>
  </Link>
);
