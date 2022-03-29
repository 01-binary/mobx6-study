import { useObserver } from "mobx-react";
import useStore from "../store";
import BasketItem from "./BasketItem";

const BasketItemList = () => {
  const { market } = useStore();
  const onTake = (name: string) => {
    market.take(name);
  };
  
  return useObserver(() => {
    const itemList = market.selectedItems.map((item) => (
      <BasketItem
        name={item.name}
        price={item.price}
        count={item.count}
        key={item.name}
        onTake={onTake}
      />
    ));
    return (
      <div>
        {itemList}
        <hr />
        <p>
          <b>총합: </b> {market.total}원
        </p>
      </div>
    );
  });
};

export default BasketItemList;
