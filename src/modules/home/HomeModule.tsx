"use client";

import { Fragment, useEffect, useState } from "react";
import { Carousel } from "~/components/Carousel";
import { Products } from "~/components/products/Products";
import { getProducts } from "../../actions/getPropducts";

interface Props {
  categories: ICategory[];
  products: IProduct[];
}

export const HomeModule = ({ categories, products }: Props) => {
  const [curCategory, setCurCategory] = useState<number | null>(null);
  const [curProducts, setCurPropducts] = useState<IProduct[]>(products);

  useEffect(() => {
    if (curCategory)
      void getProducts(curCategory).then((res) => {
        if (res) setCurPropducts(res);
      });
  }, [curCategory]);

  return (
    <Fragment>
      <div className=" flex h-max w-full gap-4 overflow-visible bg-slate-100 dark:bg-slate-900">
        <Carousel
          items={categories.map((category) => (
            <div
              key={category.id}
              onClick={() => {
                setCurCategory(category.id);
              }}
              className="flex origin-center transform items-center justify-center overflow-visible 
                 truncate break-all rounded-lg bg-gradient-to-r from-indigo-400 via-purple-400 
                 to-pink-400 py-4 text-lg font-semibold text-white shadow-lg transition-all 
                 duration-300 ease-in-out hover:rotate-2 hover:scale-105 hover:opacity-95 
                 hover:shadow-xl dark:bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 
                 dark:to-pink-500 dark:hover:rotate-2 dark:hover:scale-105 dark:hover:opacity-95"
            >
              {category.name}
            </div>
          ))}
        />
      </div>

      <Products products={curProducts} />
    </Fragment>
  );
};
