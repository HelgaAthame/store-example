"use server";

import { baseUrl } from "~/consts/baseUrl";

export async function getProducts(
  curCategory?: string
): Promise<IProduct[] | null> {
  if (!baseUrl) return null;
  const category = curCategory ? `/category/${curCategory}` : "";

  try {
    const res = await fetch(`${baseUrl}/products${category}`);

    if (!res.ok) {
      console.error(`Failed to fetch products: ${res.statusText}`);
      return null;
    }

    const productsRes = (await res.json()) as unknown as {
      products: IProduct[];
    };
    const products = productsRes.products;

    if (!Array.isArray(products)) {
      console.error("Invalid products data received");
      return null;
    }

    const validProducts = products.filter((product): product is IProduct =>
      isValidProduct(product)
    );

    return validProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
}

function isValidProduct(product: unknown): product is IProduct {
  if (
    typeof product === "object" &&
    product !== null &&
    typeof (product as IProduct).id === "number" &&
    typeof (product as IProduct).title === "string" &&
    typeof (product as IProduct).price === "number" &&
    typeof (product as IProduct).description === "string" &&
    Array.isArray((product as IProduct).images) &&
    (product as IProduct).images.every((img) => typeof img === "string")
  ) {
    return true;
  }
  return false;
}
