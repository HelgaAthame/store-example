import imagePlaceholder from "../../../public/placeholder-image.webp";
import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { addToCart, addToFavs, removeFromFavs } from "~/red/globalSlice";
import { useAppDispatch, useAppSelector } from "~/red/hooks";
import ImageX from "../ImageX/ImageX";

export const Preview = ({ item }: { item: IProduct }) => {
  const dispatch = useAppDispatch();
  const { favs, cart } = useAppSelector((state) => state.global);
  const buttonClickHandler = (item: IProduct) => {
    const itemInCart = cart.find((el: IProduct) => el.id === item.id);
    if (itemInCart === undefined) {
      dispatch(addToCart(item));
    }
  };

  const heartClickHandler = (item: IProduct) => {
    const itemInFavs = favs.find((el: IProduct) => el.id === item.id);
    if (itemInFavs === undefined) {
      dispatch(addToFavs(item));
    } else {
      dispatch(removeFromFavs(item.id));
    }
  };

  const isItInFavs = (id: number): boolean => {
    return Boolean(favs.find((item: IProduct) => item.id === id));
  };
  const isItInCart = (id: number): boolean => {
    return Boolean(cart.find((item: IProduct) => item.id === id));
  };
  return (
    <Card className="sticky top-4 hidden max-h-[90vh] w-full max-w-full grow flex-col sm:flex">
      <CardHeader className="flex w-full grow flex-col">
        <CardTitle>{item.title}</CardTitle>
        <CardDescription className="flex flex-col justify-center">
          <div className="relative h-[40vh] w-full grow text-ellipsis">
            <ImageX
              src={item.images[0] ?? imagePlaceholder}
              alt="product image"
              fill
              objectFit="contain"
              placeholder={imagePlaceholder}
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
