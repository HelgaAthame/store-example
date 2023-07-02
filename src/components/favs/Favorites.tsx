import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { useAppSelector } from '~/red/hooks';
import { type Good } from "~/types/Good";
import Image from 'next/image';

export const Favorites = () => {
  const favs = useAppSelector((state) => state.goods.favs);
  return (
    <div className="px-4 w-full flex flex-wrap justify-evenly gap-4">
      {favs.length === 0 ? (
        <div className="flex items-center justify-center w-full h-[85vh] text-3xl">There are no products in favorites</div>
      ) : (
        <>
          {favs.map((item: Good, index: number) => (
            <Card key={index} className={`w-80 flex flex-col`}>
            <CardContent className="flex flex-row items-center justify-between gap-8">
              <div className='h-80 text-ellipsis grow flex justify-center items-center pt-8'><Image src={item.image} className='h-full' alt="product image"/></div>
            </CardContent>

            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.category}</CardDescription>
            </CardHeader>
          </Card>
          ))}
        </>
      )}
    </div>
  );
};
