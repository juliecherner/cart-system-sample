// import Link from "next/link";
// import Image from "next/image";
// import { OrderButtons } from "../../components/itemCard/orderButtons";
// import { Item, Subscription } from "@/types/item";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Loader } from "../../components/loader";
import { ErrorPopup } from "../../components/errorPopup";
import { ItemCard } from "../../components/itemCard/card";
import { fetchAllItems } from "../../store-toolkit/slices/items";
import { Item, Subscription } from "../../types/item";

export default function ItemPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state: any) => state.items);
  const choosenItem = items.find((item: Item) => item._id == id);

  const comeBack = () => {
    navigate("/");
  };
  
  useEffect(() => {
    if (!items.length) {
      dispatch(fetchAllItems());
    }
  });

  return (
    <div>
      {loading && <Loader />}
      {!choosenItem && !loading && (
        <ErrorPopup
          title="Attention"
          text="Item does not exist"
          action={comeBack}
          actionButtonText="Return"
        />
      )}
      {choosenItem && <ItemCard item={choosenItem} />}
    </div>
  );
}
