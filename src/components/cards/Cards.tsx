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
} from "~/components/ui/card"
import { Button } from '../ui/button';


export const Cards = () => {
  const { data, error, isLoading } = useGetGoodsQuery('');
  return (
    <div className="cards">
      {error ? (
        <>Here we are to put error component</>
      ) : isLoading ? (
        <Loading/>
      ) : data ? (
        <>
          {data.map((item: Good) => (
            <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={item.image}/>
              <p>{item.description}</p>
              <div>
                <div>{item.rating.rate}</div>
                <div>{item.rating.count}</div>
              </div>
            </CardContent>
            <CardFooter>
              <p>{item.price}</p>
              <Button>
                ADD TO CART
              </Button>
            </CardFooter>
          </Card>
          ))}
        </>
      ) : null}
    </div>
  );
};
