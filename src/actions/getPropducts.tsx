"use server";

import { baseUrl } from "~/consts/baseUrl";

export async function getProducts(
  curCategory?: number
): Promise<IProduct[] | null> {
  if (!baseUrl) return null;
  const category = curCategory ? `/?categoryId=${curCategory}` : "";

  try {
    const res = await fetch(`${baseUrl}/products${category}`);

    if (!res.ok) {
      console.error(`Failed to fetch products: ${res.statusText}`);
      return null;
    }

    const products: unknown = await res.json();

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
    (product as IProduct).images.every((img) => typeof img === "string") &&
    typeof (product as IProduct).creationAt === "string" &&
    typeof (product as IProduct).updatedAt === "string" &&
    isValidCategory((product as IProduct).category)
  ) {
    return true;
  }
  return false;
}

function isValidCategory(category: unknown): category is ICategory {
  return (
    typeof category === "object" &&
    category !== null &&
    typeof (category as ICategory).id === "number" &&
    typeof (category as ICategory).name === "string" &&
    typeof (category as ICategory).image === "string" &&
    typeof (category as ICategory).creationAt === "string" &&
    typeof (category as ICategory).updatedAt === "string"
  );
}
