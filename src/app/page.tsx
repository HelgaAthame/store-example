import { Oxygen } from "next/font/google";
import { baseUrl } from "~/consts/baseUrl";
import { HomeModule } from "~/modules/home/HomeModule";

const font = Oxygen({
  weight: "400",
  subsets: ["latin", "latin-ext"],
});
// async function getCategories(): Promise<ICategory[]> {
//   const res = await fetch(`${baseUrl}/categories`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch categories");
//   }
//   return res.json();
// }

export default async function Home() {
  let res = await fetch(`${baseUrl}/categories`);
  const categories: ICategory[] = await res.json();
  res = await fetch(`${baseUrl}/products`);
  const products: IProduct[] = await res.json();
  return (
    <div className={font.className}>
      <HomeModule categories={categories} products={products} />
    </div>
  );
}
