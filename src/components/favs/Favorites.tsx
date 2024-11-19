import { useAppSelector } from "~/red/hooks";
import { Products } from "../products/Products";

export const Favorites = () => {
  const { favs } = useAppSelector((state) => state.global);
  return (
    <div className="flex w-full flex-wrap justify-evenly gap-4 px-4">
      {favs.length === 0 ? (
        <div className="flex h-[85vh] w-full items-center justify-center text-3xl">
          There are no products in favorites
        </div>
      ) : (
        //   <div className="flex w-full gap-4">
        //     <div
        //       className={` gap-4 ${
        //         selected
        //           ? "flex max-w-[20rem] flex-col"
        //           : "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-5 4xl:grid-cols-6"
        //       } w-full`}
        //     >
        //       {favs.map((item: IProduct, index: number) => (
        //         <div
        //           key={index}
        //           onClick={() => {
        //             if (selected?.id === item.id) {
        //               dispatch(setSelected(null));
        //             } else {
        //               dispatch(setSelected(item));
        //             }
        //           }}
        //         >
        //           <Product item={item} />
        //         </div>
        //       ))}
        //     </div>
        //     {selected && <Preview item={selected} />}
        //   </div>
        <Products products={favs} />
      )}
    </div>
  );
};
