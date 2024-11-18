"use server";

import { baseUrl } from "~/consts/baseUrl";

export async function getProducts(curCategory: number): Promise<IProduct[]> {
  const res = await fetch(`${baseUrl}/products/?categoryId=${curCategory}`);
  const products: IProduct[] = await res.json();
  return products;
}
