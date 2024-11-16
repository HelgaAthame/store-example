import { useGetGoodsQuery } from "~/red/api";
import { Loading } from "~/components/loading";
import { type Good } from "~/types/Good";
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
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "~/red/hooks";
import {
  addAllGoods,
  addToCart,
  addToFavs,
  removeFromFavs,
} from "~/red/goodsSlice";
import CustomError from "../Error/Error";
import Image from "next/image";

export const Cards = () => {
  const query = useGetGoodsQuery("");
  const data: Good[] | undefined = query.data;
  const error = query.error;
  const isLoading: boolean = query.isLoading;
  const goods = useAppSelector((state) => state.goods.goods);
  const cart = useAppSelector((state) => state.goods.cart);
  const favs = useAppSelector((state) => state.goods.favs);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch(addAllGoods(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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
    <div className="cards flex w-full flex-wrap justify-evenly gap-4 px-4">
      {error ? (
        <CustomError />
      ) : isLoading ? (
        <Loading />
      ) : data && goods ? (
        <>
          {goods.map((item: Good, index: number) => {
            console.log(item.image);
            return (
              <Dialog key={index}>
                <Card key={index} className="flex w-80 grow flex-col">
                  <DialogTrigger>
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.category}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex grow flex-col items-center justify-between">
                      <div className="h-32 grow text-ellipsis">
                        <Image
                          src={item.image}
                          className="h-full"
                          alt="product image"
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="mt-4 h-28 overflow-y-auto">
                        {item.description}
                      </div>
                    </CardContent>
                  </DialogTrigger>
                  <CardFooter className="flex grow flex-col">
                    <div className="flex w-full items-center justify-between">
                      <Heart
                        size={24}
                        color={isItInFavs(item.id) ? "red" : "black"}
                        fill={isItInFavs(item.id) ? "red" : "transparent"}
                        onClick={() => {
                          heartClickHandler(item);
                        }}
                        className="hover:cursor-pointer"
                      />
                      <div className="my-4 text-xl font-semibold">
                        ${item.price}
                      </div>
                    </div>
                    <div className="flex w-full justify-end text-right">
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

                <DialogContent className="max-w-[90vw]">
                  <DialogHeader>
                    <DialogTitle>{item.title}</DialogTitle>
                    <DialogDescription className="flex flex-col justify-center">
                      <div className="flex h-[40vh] grow justify-center text-ellipsis">
                        <Image
                          src={item.image}
                          className="h-full"
                          alt="product image"
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="mt-4 h-28 overflow-y-auto">
                        {item.description}
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="flex flex-col">
                    <div className="flex w-full items-center justify-between">
                      <Heart
                        size={24}
                        color={isItInFavs(item.id) ? "red" : "black"}
                        fill={isItInFavs(item.id) ? "red" : "transparent"}
                        onClick={() => {
                          heartClickHandler(item);
                        }}
                      />
                      <div className="my-4 text-xl font-semibold">
                        ${item.price}
                      </div>
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
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            );
          })}
        </>
      ) : null}
    </div>
  );
};
