import { Oxygen } from "next/font/google";
import { getCategories } from "~/actions/getCategories";
import { getProducts } from "~/actions/getPropducts";
import { HomeModule } from "~/modules/home/HomeModule";

const font = Oxygen({
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

export default async function Home() {
  const categories = (await getCategories()) ?? [];
  const products = (await getProducts()) ?? [];
  return (
    <div className={font.className}>
      <HomeModule categories={categories} products={products} />
    </div>
  );
}
