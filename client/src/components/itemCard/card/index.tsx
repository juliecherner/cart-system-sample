import { Link } from "react-router-dom";
import { OrderButtons } from "../../itemCard/orderButtons";
import { Item, Subscription } from "../../../types/item";
import { BasicOrCartItem } from "../../../types/order";

type Props = {
  item: BasicOrCartItem;
};

export function ItemCard({
  item
}: Props) {
  return (
    <div>
      {item ? (
        <div>
          <Link to={"/item/" + item._id}>
            <div>SKU: {item._id}</div>
            <div>Name: {item.name}</div>
            <div>Description: {item.description}</div>
            <img src={item.imageURL} width={400} height={400} alt={item.name} />
          </Link>

         

          <OrderButtons key={item._id} item={item}/>
        </div>
      ) : (
        <div>Item is not found</div>
      )}
    </div>
  );
}
