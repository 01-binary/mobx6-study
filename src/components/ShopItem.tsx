import './ShopItem.css';

interface Props {
    name: any;
    price: any;
}
const ShopItem = ({ name, price }: Props) => {
  return (
    <div className="ShopItem">
      <h4>{name}</h4>
      <div>{price}원</div>
    </div>
  );
};

export default ShopItem;