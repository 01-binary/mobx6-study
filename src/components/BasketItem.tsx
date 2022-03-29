import "./BasketItem.css";
import { useObserver } from "mobx-react";

interface Item {
  name: string;
  price: number;
  count: number;
}
interface Props {
  item: Item;
  onTake: (name: string) => void;
}
const BasketItem = ({ item, onTake }: Props) => {
  return useObserver(() => (
    <div className="BasketItem">
      <div className="name">{item.name}</div>
      <div className="price">{item.price}원</div>
      <div className="count">{item.count}</div>
      <div className="return" onClick={() => onTake(item.name)}>
        갖다놓기
      </div>
    </div>
  ));
};

export default BasketItem;
