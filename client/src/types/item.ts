type Option = "base" | "year";

export type Subscription = {
  option: Option;
  price: number;
};

export type Item = {
  _id: string;
  name: string;
  description: string;
  subscriptions: Subscription[];
  imageURL: string;
};

export interface OrderItem extends Item {
  option: Subscription;
}

