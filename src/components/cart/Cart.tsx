import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Button } from '~/components/ui/button';
import { useAppDispatch, useAppSelector } from '~/red/hooks';
import { removeFromCart } from "~/red/goodsSlice";
import Image from 'next/image';

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
    <div className="cards px-4 w-full h- flex flex-col justify-evenly gap-4">
      {cart.length === 0 ? (
        <div className="flex items-center justify-center w-full h-[85vh] text-3xl">There are no products in cart</div>
      ) : (
        <>
          {cart.map((item: Good, index: number) => (
            <Card key={index} className="w-full flex flex-row flex-wrap grow p-4 gap-4">
            <CardContent className="flex flex-row items-center justify-between gap-8">
              <div className="text-2xl font-semibold">{index + 1}</div>
              <div className='h-32 text-ellipsis grow w-32 flex justify-center items-center'><Image src={item.image} className='max-h-32' alt="product image"/></div>
            </CardContent>

            <CardHeader className="grow w-[50vw]">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.category}</CardDescription>
            </CardHeader>

            <CardFooter className="flex flex-col">
              <div className="w-full font-semibold text-xl my-4 text-right">${item.price}</div>
              <div className="w-full flex justify-between">
                <Button onClick={() => {removeFromCartHandler(item.id)}}>
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
