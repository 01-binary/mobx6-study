import './ShopItem.css';

interface Props {
    name: any;
    price: any;
    onPut: (name: string, price: number) => void;
}
const ShopItem = ({ name, price, onPut }: Props) => {
  return (
    <div className="ShopItem" onClick={() => onPut(name, price)}>
      <h4>{name}</h4>
      <div>{price}원</div>
    </div>
  );
};

export default ShopItem;