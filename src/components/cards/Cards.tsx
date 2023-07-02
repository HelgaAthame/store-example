import { useGetGoodsQuery } from '~/red/api';
import { Loading } from '~/components/loading';
import { type Good } from '~/types/Good';
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
import { Button } from '~/components/ui/button';
import { Heart } from 'lucide-react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/red/hooks';
import { addAllGoods, addToCart, addToFavs, removeFromFavs } from '~/red/goodsSlice';
import CustomError from '../Error/Error';
import Image, { ImageLoader, ImageLoaderProps } from 'next/image';

export const Cards = () => {
  const query = useGetGoodsQuery('');
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
  }
  const isItInCart = (id: number): boolean => {
    return Boolean(cart.find((item: Good) => item.id === id));
  }

  return (
    <div className="cards px-4 w-full flex flex-wrap justify-evenly gap-4">
      {error ? (
        <CustomError/>
      ) : isLoading ? (
        <Loading/>
      ) : data && goods ? (
        <>
          {goods.map((item: Good, index: number) => {console.log(item.image);return(
            <Dialog key={index}>


                <Card key={index} className="w-80 flex flex-col grow">
                <DialogTrigger>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.category}</CardDescription>
            </CardHeader>
            <CardContent className="grow flex flex-col items-center justify-between">
              <div className='h-32 text-ellipsis grow'>
                <Image
                  src={item.image}
                  className='h-full'
                  alt="product image"
                  width={200}
                  height={200}
                />
              </div>
              <div className='overflow-y-auto h-28 mt-4'>{item.description}</div>
            </CardContent>
            </DialogTrigger>
            <CardFooter className="flex flex-col grow">
              <div className="flex justify-between items-center w-full">
                <Heart size={24} color={isItInFavs(item.id) ? "red" : "black"} fill={isItInFavs(item.id) ? "red" : "transparent"} onClick={() => {heartClickHandler(item)}} className="hover:cursor-pointer"/>
                <div className="font-semibold text-xl my-4">${item.price}</div>
              </div>
              <div className="w-full flex justify-end text-right">
                <Button onClick={() => {buttonClickHandler(item)}} disabled={isItInCart(item.id)}>
                  ADD TO CART
                </Button>
              </div>
            </CardFooter>
          </Card>


                <DialogContent className="max-w-[90vw]">
                  <DialogHeader>
                    <DialogTitle>{item.title}</DialogTitle>
                    <DialogDescription className="flex flex-col justify-center">
                      <div className='text-ellipsis grow flex justify-center h-[40vh]'>
                        <Image
                          src={item.image}
                          className='h-full'
                          alt="product image"
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className='overflow-y-auto h-28 mt-4'>{item.description}</div>
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="flex flex-col">
                    <div className="flex justify-between items-center w-full">
                      <Heart size={24} color={isItInFavs(item.id) ? "red" : "black"} fill={isItInFavs(item.id) ? "red" : "transparent"} onClick={() => {heartClickHandler(item)}}/>
                      <div className="font-semibold text-xl my-4">${item.price}</div>
                    </div>
                    <div className="w-full flex justify-end items-center text-right">
                      <Button onClick={() => {buttonClickHandler(item)}} disabled={isItInCart(item.id)}>
                        ADD TO CART
                      </Button>
                    </div>
                  </DialogFooter>
                </DialogContent>
            </Dialog>


          )})}
        </>
      ) : null}
    </div>
  );
};
