"use client";

import { Fragment, useEffect, useState } from "react";
import { Carousel } from "~/components/Carousel";
import { Products } from "~/components/products/Products";
import { getProducts } from "../../actions/getPropducts";

interface Props {
  categories: string[];
  products: IProduct[];
}

export const HomeModule = ({ categories, products }: Props) => {
  const [curCategory, setCurCategory] = useState<string | null>(null);
  const [curProducts, setCurPropducts] = useState<IProduct[]>(products);

  useEffect(() => {
    void getProducts(curCategory ?? undefined).then((res) => {
      if (res) setCurPropducts(res);
    });
  }, [curCategory]);

  const element = (
    categoryId: string | null,
    isSelected: boolean,
    categoryName: string
  ) => (
    <div
      key={categoryId}
      onClick={() => {
        setCurCategory(categoryId);
      }}
      className={`flex origin-center transform items-center justify-center overflow-visible 
    truncate break-all rounded-lg py-4 text-lg font-semibold capitalize shadow-lg 
    transition-all duration-300 ease-in-out
    ${
      isSelected
        ? "bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 text-slate-200 shadow-xl"
        : "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white hover:rotate-2 hover:scale-105 hover:opacity-95"
    }
    dark:${
      isSelected
        ? "bg-gradient-to-r dark:from-indigo-200 dark:via-purple-200 dark:to-pink-200 dark:text-slate-800 dark:shadow-xl"
        : "bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 dark:text-black dark:hover:rotate-2 dark:hover:scale-105 dark:hover:opacity-95"
    }`}
    >
      {categoryName}
    </div>
  );

  return (
    <Fragment>
      <div className=" flex h-max w-full gap-4 overflow-visible bg-slate-100 dark:bg-slate-900">
        <Carousel
          items={[
            element(null, curCategory === null, "All categories"),
            ...categories.map((category) => {
              const isSelected = curCategory === category;
              return element(category, isSelected, category);
            }),
          ]}
        />
      </div>

      <Products products={curProducts} />
    </Fragment>
  );
};
