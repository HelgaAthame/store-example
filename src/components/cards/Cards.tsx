import { useGetGoodsQuery } from '~/red/api';
import { Loading } from '~/components/loading';
import { type Card } from '~/types/Card';

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
          {data.map((item: Card) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <div>{item.description}</div>
              <img src={item.image}/>
              <div>{item.price}</div>
              <div>{item.category}</div>
              <div>{item.rating.rate}</div>
              <div>{item.rating.count}</div>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};
