"use server";

import { baseUrl } from "~/consts/baseUrl";

export async function getCategories(): Promise<string[] | null> {
  if (!baseUrl) return null;

  try {
    const res = await fetch(`${baseUrl}/products/category-list`);

    // Ensure the response is valid JSON and matches the expected type
    if (!res.ok) {
      console.error(`Failed to fetch categories: ${res.statusText}`);
      return null;
    }

    const categories: unknown = await res.json();

    // Type guard to ensure `categories` is of type `ICategory[]`
    if (Array.isArray(categories)) {
      return categories as string[];
    } else {
      console.error("Invalid category data received");
      return null;
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
}
