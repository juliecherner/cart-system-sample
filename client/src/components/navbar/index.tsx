import {useState} from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [order, setOrder] = useState<any>({});



  return (
    <div>
      <div>Cart system</div>
      <div>
        <Link to="/cart">Cart</Link>
        <div>{order?.list?.length || 0}</div>
      </div>
      <div>Login / logout</div>
    </div>
  );
}
