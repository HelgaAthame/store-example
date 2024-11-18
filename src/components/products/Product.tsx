import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { Heart } from "lucide-react";
import { useAppDispatch, useAppSelector } from "~/red/hooks";
import { addToCart, addToFavs, removeFromFavs } from "~/red/goodsSlice";
import { Fragment } from "react";
interface Props {
  item: IProduct;
  withModal?: boolean;
}
export const Product = ({ item, withModal = false }: Props) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.goods.cart);
  const favs = useAppSelector((state) => state.goods.favs);

  // const buttonClickHandler = (item: IProduct) => {
  //   const itemInCart = cart.find((el: IProduct) => el.id === item.id);
  //   if (itemInCart === undefined) {
  //     dispatch(addToCart(item));
  //   }
  // };

  // const heartClickHandler = (item: IProduct) => {
  //   const itemInFavs = favs.find((el: IProduct) => el.id === item.id);
  //   if (itemInFavs === undefined) {
  //     dispatch(addToFavs(item));
  //   } else {
  //     dispatch(removeFromFavs(item.id));
  //   }
  // };

  // const isItInFavs = (id: number): boolean => {
  //   return Boolean(favs.find((item: IProduct) => item.id === id));
  // };
  // const isItInCart = (id: number): boolean => {
  //   return Boolean(cart.find((item: IProduct) => item.id === id));
  // };

  const children = (
    <Fragment>
      <CardHeader className="flex w-full grow flex-col">
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.category.name}</CardDescription>
      </CardHeader>
      <CardContent className="flex grow flex-col items-center justify-between">
        <div className="relative h-32 w-full grow text-ellipsis">
          {/* <Image
            src={item.images[0] as string}
            alt="product image"
            fill
            objectFit="contain"
          /> */}
        </div>
        <div className="mt-4 line-clamp-3 break-words text-justify">
          {item.description}
        </div>
      </CardContent>
    </Fragment>
  );

  return (
    <Dialog>
      <Card className="flex w-full grow flex-col">
        {withModal ? (
          <DialogTrigger className="hidden grow flex-col sm:flex">
            {children}
          </DialogTrigger>
        ) : (
          children
        )}
        <CardFooter className="flex flex-col">
          <div className="flex w-full items-center justify-between">
            <Heart
              size={24}
              color={/*isItInFavs(item.id) ? "red" : */ "black"}
              fill={/*isItInFavs(item.id) ? "red" : */ "transparent"}
              // onClick={() => {
              //   heartClickHandler(item);
              // }}
              className="hover:cursor-pointer"
            />
            <div className="my-4 text-xl font-semibold">${item.price}</div>
          </div>
          <div className="flex w-full justify-end text-right">
            <Button
            // onClick={() => {
            //   buttonClickHandler(item);
            // }}
            // disabled={isItInCart(item.id)}
            >
              ADD TO CART
            </Button>
          </div>
        </CardFooter>
      </Card>

      <DialogContent className="max-w-[90vw]">
        <DialogHeader>
          <DialogTitle>{item.title}</DialogTitle>
          <DialogDescription className="flex flex-col justify-center">
            <div className="flex h-[40vh] grow justify-center text-ellipsis">
              {/* <Image
                src={item.images[0] as string}
                className="h-full"
                alt="product image"
                width={200}
                height={200}
              /> */}
            </div>
            <div className="mt-4 h-28 overflow-y-auto">{item.description}</div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col">
          <div className="flex w-full items-center justify-between">
            <Heart
              size={24}
              color={/*isItInFavs(item.id) ? "red" : */ "black"}
              fill={/*isItInFavs(item.id) ? "red" : */ "transparent"}
              // onClick={() => {
              //   heartClickHandler(item);
              // }}
            />
            <div className="my-4 text-xl font-semibold">${item.price}</div>
          </div>
          <div className="flex w-full items-center justify-end text-right">
            <Button
            // onClick={() => {
            //   buttonClickHandler(item);
            // }}
            // disabled={isItInCart(item.id)}
            >
              ADD TO CART
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
