import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllItems } from "./store-toolkit/slices/items";
import { ItemCard } from "./components/itemCard/card";
import { Loader } from "./components/loader";
import { ErrorPopup } from "./components/errorPopup";
import { Item } from "./types/item";
import {Navbar} from "./components/navbar"
import "./App.css";

function App() {
  const { items, error, loading } = useSelector((state: any) => state.items);
  const dispatch = useDispatch();

  const loadPage = () => {
    dispatch(fetchAllItems());
  };

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <div className="App">
      <Navbar/>
      {!loading && !error && (
        <div>
          {items.map((item: Item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      )}
      {loading && <Loader />}
      {error && (
        <ErrorPopup
          title="Oops"
          text="Something went wrong"
          action={loadPage}
        />
      )}
    </div>
  );
}

export default App;
