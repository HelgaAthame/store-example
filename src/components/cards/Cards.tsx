import { useGetGoodsQuery } from "~/red/api";
import { Loading } from "~/components/loading";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "~/red/hooks";
import { addAllGoods } from "~/red/goodsSlice";
import CustomError from "../Error/Error";
import { Product } from "../products/Product";

export const Cards = () => {
  const query = useGetGoodsQuery("");
  const data: Good[] | undefined = query.data;
  const error = query.error;
  const isLoading: boolean = query.isLoading;
  const goods = useAppSelector((state) => state.goods.goods);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(addAllGoods(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="cards flex w-full flex-wrap justify-evenly gap-4 px-4">
      {error ? (
        <CustomError />
      ) : isLoading ? (
        <Loading />
      ) : data && goods ? (
        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-5 4xl:grid-cols-6">
          {/* {goods.map((item: Good, index: number) => {
            return <Product item={item} key={index} withModal />;
          })} */}
        </div>
      ) : null}
    </div>
  );
};
