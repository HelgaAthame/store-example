import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { useAppDispatch, useAppSelector } from "~/red/hooks";
import { removeFromCart } from "~/red/globalSlice";
import Image from "next/image";

export const Cart = () => {
  const cart = useAppSelector((state) => state.goods.cart);
  const dispatch = useAppDispatch();
  const removeFromCartHandler = (id: number) => {
    const itemInCart = cart.find((el: Good) => el.id === id);
    if (itemInCart) {
      dispatch(removeFromCart(itemInCart.id));
    }
  };
  return (
    <div className="cards h- flex w-full flex-col justify-evenly gap-4 px-4">
      {cart.length === 0 ? (
        <div className="flex h-[85vh] w-full items-center justify-center text-3xl">
          There are no products in cart
        </div>
      ) : (
        <>
          {cart.map((item: Good, index: number) => (
            <Card
              key={index}
              className="flex w-full grow flex-row flex-wrap gap-4 p-4"
            >
              <CardContent className="flex flex-row items-center justify-between gap-8">
                <div className="text-2xl font-semibold">{index + 1}</div>
                <div className="flex h-32 w-32 grow items-center justify-center text-ellipsis">
                  <Image
                    src={item.image}
                    className="max-h-32"
                    alt="product image"
                  />
                </div>
              </CardContent>

              <CardHeader className="w-[50vw] grow">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.category}</CardDescription>
              </CardHeader>

              <CardFooter className="flex flex-col">
                <div className="my-4 w-full text-right text-xl font-semibold">
                  ${item.price}
                </div>
                <div className="flex w-full justify-between">
                  <Button
                    onClick={() => {
                      removeFromCartHandler(item.id);
                    }}
                  >
                    REMOVE&nbsp;FROM&nbsp;CART
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </>
      )}
    </div>
  );
};
