import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import Image from "next/image";
import { addToCart, addToFavs, removeFromFavs } from "~/red/goodsSlice";
import { useAppDispatch, useAppSelector } from "~/red/hooks";

export const Preview = ({ item }: { item: Good }) => {
  const dispatch = useAppDispatch();
  const { favs, cart } = useAppSelector((state) => state.goods);
  const buttonClickHandler = (item: Good) => {
    const itemInCart = cart.find((el: Good) => el.id === item.id);
    if (itemInCart === undefined) {
      dispatch(addToCart(item));
    }
  };

  const heartClickHandler = (item: Good) => {
    const itemInFavs = favs.find((el: Good) => el.id === item.id);
    if (itemInFavs === undefined) {
      dispatch(addToFavs(item));
    } else {
      dispatch(removeFromFavs(item.id));
    }
  };

  const isItInFavs = (id: number): boolean => {
    return Boolean(favs.find((item: Good) => item.id === id));
  };
  const isItInCart = (id: number): boolean => {
    return Boolean(cart.find((item: Good) => item.id === id));
  };
  return (
    <Card className="sticky top-4 hidden max-h-[90vh] w-full max-w-full grow flex-col sm:flex">
      <CardHeader className="flex w-full grow flex-col">
        <CardTitle>{item.title}</CardTitle>
        <CardDescription className="flex flex-col justify-center">
          <div className="relative h-[40vh] w-full grow text-ellipsis">
            <Image
              src={item.image}
              alt="product image"
              fill
              objectFit="contain"
            />
          </div>
          <div className="mt-4 h-28 overflow-y-auto">{item.description}</div>
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col">
        <div className="flex w-full items-center justify-between">
          <Heart
            size={24}
            color={isItInFavs(item.id) ? "red" : "black"}
            fill={isItInFavs(item.id) ? "red" : "transparent"}
            onClick={() => {
              heartClickHandler(item);
            }}
          />
          <div className="my-4 text-xl font-semibold">${item.price}</div>
        </div>
        <div className="flex w-full items-center justify-end text-right">
          <Button
            onClick={() => {
              buttonClickHandler(item);
            }}
            disabled={isItInCart(item.id)}
          >
            ADD TO CART
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
