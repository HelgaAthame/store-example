import { useAppDispatch, useAppSelector } from "~/red/hooks";
import { GoodEl } from "../goods/Good";
import { setSelected } from "~/red/goodsSlice";
import { Preview } from "../preview";
import { Fragment } from "react";

export const Favorites = () => {
  const { favs, selected } = useAppSelector((state) => state.goods);
  const dispatch = useAppDispatch();
  return (
    <div className="flex w-full flex-wrap justify-evenly gap-4 px-4">
      {favs.length === 0 ? (
        <div className="flex h-[85vh] w-full items-center justify-center text-3xl">
          There are no products in favorites
        </div>
      ) : (
        <div className="flex w-full gap-4">
          <div
            className={` gap-4 ${
              selected
                ? "flex max-w-[20rem] flex-col"
                : "3xl:grid-cols-5 4xl:grid-cols-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
            } w-full`}
          >
            {favs.map((item: Good, index: number) => (
              <div
                key={index}
                onClick={() => {
                  if (selected?.id === item.id) {
                    dispatch(setSelected(null));
                  } else {
                    dispatch(setSelected(item));
                  }
                }}
              >
                <GoodEl item={item} />
              </div>
            ))}
          </div>
          {selected && <Preview item={selected} />}
        </div>
      )}
    </div>
  );
};
