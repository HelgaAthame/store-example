import imagePlaceholder from "../../../public/placeholder-image.webp";
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
import { Heart, ShoppingCart } from "lucide-react";
import { useAppDispatch, useAppSelector } from "~/red/hooks";
import Link from "next/link";
import {
  addToCart,
  addToFavs,
  removeFromCart,
  removeFromFavs,
} from "~/red/globalSlice";
import { Fragment } from "react";
import ImageX from "../ImageX/ImageX";
import { usePathname } from "next/navigation";
interface Props {
  item: IProduct;
  withModal?: boolean;
}
export const Product = ({ item, withModal = true }: Props) => {
  const dispatch = useAppDispatch();
  const { cart, favs } = useAppSelector((state) => state.global);
  const pathname = usePathname();

  const buttonClickHandler = (item: IProduct) => {
    if (isItInCart(item.id)) {
      dispatch(removeFromCart(item.id));
    } else {
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

  const children = (
    <Fragment>
      <CardHeader className="flex w-full grow flex-col">
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.category.name}</CardDescription>
      </CardHeader>
      <CardContent className="flex grow flex-col items-center justify-between">
        <div className="relative h-64 w-full grow text-ellipsis">
          <ImageX
            src={item.images[0] ?? imagePlaceholder}
            alt="product image"
            fill
            objectFit="contain"
            placeholder={imagePlaceholder}
          />
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
          <DialogTrigger className="flex grow flex-col">
            {children}
          </DialogTrigger>
        ) : (
          children
        )}
        <CardFooter className="flex flex-col">
          <div className="flex w-full items-center justify-between">
            <div
              className="group relative flex items-center justify-center"
              onClick={() => heartClickHandler(item)}
            >
              <span
                className={`absolute inset-0 -translate-y-[2px] scale-0 rounded-full transition duration-300
                  ${isItInFavs(item.id) ? "bg-red-100/50" : "bg-gray-200/50"} 
                  group-hover:scale-150 group-active:scale-110`}
                aria-hidden="true"
              ></span>
              <Heart
                size={24}
                className={`transition-transform duration-300 
        ${
          isItInFavs(item.id)
            ? "fill-red-500 stroke-red-500"
            : "fill-none stroke-black dark:stroke-white"
        }
        group-hover:scale-110 group-active:scale-90`}
              />
            </div>
            <div className="my-4 text-xl font-semibold">${item.price}</div>
          </div>
          <div className="flex w-full items-center justify-between text-right">
            {isItInCart(item.id) && !pathname.includes("cart") ? (
              <Link href={"/shopping-cart"}>
                <div className="group relative flex items-center justify-center">
                  <span
                    className={`absolute inset-0 -translate-y-[2px] scale-0 rounded-full bg-gray-200/50 transition
                   duration-300 group-hover:scale-150 group-active:scale-110`}
                    aria-hidden="true"
                  ></span>
                  <ShoppingCart
                    size={24}
                    className={`fill-none stroke-black transition-transform
                   duration-300 group-hover:scale-110 group-active:scale-90 dark:stroke-white`}
                  />
                </div>
              </Link>
            ) : (
              <div></div>
            )}
            <Button
              onClick={() => {
                buttonClickHandler(item);
              }}
            >
              {isItInCart(item.id) ? "REMOVE FROM CART" : "ADD TO CART"}
            </Button>
          </div>
        </CardFooter>
      </Card>
      <DialogContent className="max-w-[90vw]">
        <DialogHeader>
          <DialogTitle>{item.title}</DialogTitle>
          <DialogDescription>{item.category.name}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col justify-center gap-8 md:flex-row">
          <div className="relative flex h-[80vw] max-h-[50rem] grow justify-center text-ellipsis md:h-[40vw]">
            <ImageX
              src={item.images[0] ?? imagePlaceholder}
              alt="product image"
              fill
              objectFit="contain"
              placeholder={imagePlaceholder}
            />
          </div>
          <div className="w-full text-justify md:w-1/2">{item.description}</div>
        </div>
        <DialogFooter className="flex flex-col">
          <div className="flex h-fit w-full items-center justify-between">
            <div
              className="group relative flex items-center justify-center"
              onClick={() => heartClickHandler(item)}
            >
              <span
                className={`absolute inset-0 -translate-y-[2px] scale-0 rounded-full transition duration-300
                  ${isItInFavs(item.id) ? "bg-red-100/50" : "bg-gray-200/50"} 
                  group-hover:scale-150 group-active:scale-110`}
                aria-hidden="true"
              ></span>
              <Heart
                size={24}
                className={`transition-transform duration-300 
        ${
          isItInFavs(item.id)
            ? "fill-red-500 stroke-red-500"
            : "fill-none stroke-black dark:stroke-white"
        }
        group-hover:scale-110 group-active:scale-90`}
              />
            </div>
            <div className="my-4 text-xl font-semibold">${item.price}</div>
          </div>
          <div className="flex w-full items-center justify-between text-right">
            {isItInCart(item.id) && !pathname.includes("cart") ? (
              <Link href={"/shopping-cart"}>
                <div className="group relative flex items-center justify-end">
                  <span
                    className={`absolute inset-0 -translate-y-[2px] scale-0 rounded-full bg-gray-200/50 transition
                   duration-300 group-hover:scale-150 group-active:scale-110`}
                    aria-hidden="true"
                  ></span>
                  <ShoppingCart
                    size={24}
                    className={`fill-none stroke-black transition-transform
                   duration-300 group-hover:scale-110 group-active:scale-90 dark:stroke-white`}
                  />
                </div>
              </Link>
            ) : (
              <div></div>
            )}
            <Button
              onClick={() => {
                buttonClickHandler(item);
              }}
            >
              {isItInCart(item.id) ? "REMOVE FROM CART" : "ADD TO CART"}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
