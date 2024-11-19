import { useAppSelector } from "~/red/hooks";
import { Products } from "../products/Products";

export const Cart = () => {
  const { cart } = useAppSelector((state) => state.global);
  return (
    <div className="cards h- flex w-full flex-col justify-evenly gap-4 px-4">
      {cart.length === 0 ? (
        <div className="flex h-[85vh] w-full items-center justify-center text-3xl">
          There are no products in cart
        </div>
      ) : (
        <Products products={cart} />
      )}
    </div>
  );
};
