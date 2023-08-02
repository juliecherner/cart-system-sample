// import Link from "next/link";
// import dynamic from "next/dynamic";
// import {useState} from "react";
// import ItemComponent from "@/components/item";
// import { getCookiesByDescriber } from "../cookies-utils/index";
// import { Item, Subscription } from "@/types/item";
import {useState, useEffect} from "react";
import { Link, useMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import { ItemCard } from "../../components/itemCard/card";
import { getCookieByType, COOKIE_TYPE } from "../../cookies/index";
import { BasicOrCartItem } from "../../types/order";

export default function Cart() {
  //correct
  const [order, setOrder] = useState({list: []})
  //const order = getCookieByType(COOKIE_TYPE.CART)

  const match = useMatch("cart");
  const isInCart = Boolean(match?.pathname === "/cart") || false;

  console.log("orderState", order);

  useEffect(()=>{
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setOrder(getCookieByType(COOKIE_TYPE.CART))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]) // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <div>
      {JSON.stringify(isInCart)}
      {!order || !order?.list || !order?.list?.length ? (
        <div>Cart is empty</div>
      ) : (
        <div>
          {order.list.map((orderItem: BasicOrCartItem) => (
            <div key={orderItem._id}>
              <ItemCard item={orderItem} />
            </div>
          ))}
        </div>
      )}

      <div>
        <Link to="/">To all products</Link>
      </div>
    </div>
  );
}
