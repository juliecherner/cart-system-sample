import { Item, Subscription } from "./item";
import { PaymentInfo } from "./payment";

export interface CartItem extends Item {
  option: Subscription;
}

export type Order = {
  userId: string;
  userEmail: string;
  list: CartItem[];
  totalCost: number;
  paymentId: string | null;
  paymentInfo?: PaymentInfo
};

export type BasicOrCartItem = Item | CartItem;