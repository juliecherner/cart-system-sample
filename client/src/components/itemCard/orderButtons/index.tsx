// import { useRouter } from "next/navigation";
// import { Item } from "@/types/item";
// import {
//   setToCookiesByDescriber,
//   isItemInCookies,
//   deleteItemFromCookies,
// } from "../cookies-utils/index";

import { useMatch } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Item } from "../../../types/item";
import { BasicOrCartItem } from "../../../types/order";
import {
  addToOrder,
  deleteFromOrder,
} from "../../../store-toolkit/slices/order";
import { addItemToCookie, deleteItemFromCookie, updateItemOptionCookie } from "../../../cookies/cart";
import { getCookieByType, COOKIE_TYPE } from "../../../cookies";
import { Subscription } from "../../../types/item";

type Props = {
  item: BasicOrCartItem;
};

export function OrderButtons({ item }: Props) {
  const dispatch = useDispatch();
  //const { order } = useSelector((state: any) => state.order);

  const match = useMatch("cart");
  const isOnCartPage = Boolean(match?.pathname) || false;

  const [order, setOrder] = useState<any>({});
  //const order = getCookieByType(COOKIE_TYPE.CART);
  //   const router = useRouter();
  //   const isInCart = isItemInCookies(item._id);

  const isItemIsCart = () => {

    if (!order || !order.list) return false;

    return order.list.some(
      (itemInCart: BasicOrCartItem) => itemInCart._id === item._id
    );
  };

  const addToCart = () => {
    //dispatch(addToOrder(item));
    addItemToCookie(item);
  };

  const deleteFromCart = () => {
    deleteItemFromCookie(item._id);
    //dispatch(deleteFromOrder(item._id));
  };

  const changeOption = (id: string, subcription: Subscription) => {
    updateItemOptionCookie(id, subcription);
  };

  useEffect(() => {
    setOrder(getCookieByType(COOKIE_TYPE.CART));
  }, []);

  return (
    <div>
      <div>
        {item?.subscriptions?.length ? (
          item.subscriptions.map((subscription: Subscription) => (
            <div key={subscription.option}>
              <button
                disabled={!isOnCartPage}
                onClick={() => changeOption(item._id, subscription)}
              >
                <div>{subscription.option}</div>
                <div>{subscription.price}</div>
              </button>
            </div>
          ))
        ) : (
          <div>No subcription options</div>
        )}
      </div>

      {isOnCartPage ? (
        <button onClick={deleteFromCart}>Delete</button>
      ) : (
        <button onClick={addToCart} disabled={isItemIsCart()}>
          {isItemIsCart() ? "In cart" : "Add to cart"}
        </button>
      )}
    </div>
  );
}
