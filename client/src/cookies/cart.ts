import Cookies from "js-cookie";
import { getCookieByType, COOKIE_TYPE } from "./index";
import { Subscription } from "../types/item";
import { BasicOrCartItem } from "../types/order";

const currentCookieType = COOKIE_TYPE.CART;
const initialCartObject = { userEmail: "", list: [], totalCost: 0 };

export const addItemToCookie = (item: any) => {
  if (!isCartBaseCookieSet()) {
    Cookies.set(currentCookieType, stringify(initialCartObject), {
      expires: 7,
    });
  }
  const existingCookies = getCookieByType(currentCookieType);
  console.log("existingCookies", existingCookies);
  const updatedCookies = {
    ...existingCookies,
    list: [...existingCookies.list, item],
  };
  Cookies.set(currentCookieType, stringify(updatedCookies));
};

export const deleteItemFromCookie = (id: string) => {
  const existingCookies = getCookieByType(currentCookieType);

  const updatedCookies = {
    ...existingCookies,
    list: existingCookies.list.filter((listItem: any) => listItem._id !== id),
  };
  Cookies.set(currentCookieType, stringify(updatedCookies));
};

export const updateItemOptionCookie = (
  id: string,
  newSubcription: Subscription
) => {
  const existingCookies = getCookieByType(currentCookieType);

  const updatedItem = existingCookies.list.find(
    (item: BasicOrCartItem) => item._id === id
  );
  const index = existingCookies.list.findIndex(
    (item: BasicOrCartItem) => item._id === id
  );

  existingCookies.list[index] = { ...updatedItem, option: newSubcription };

  console.log("1 monemt before cokkies", existingCookies)
  Cookies.set(currentCookieType, stringify(existingCookies));
};

const isCartBaseCookieSet = () => {
  const cookies = getCookieByType(currentCookieType);
  return (
    cookies &&
    cookies.hasOwnProperty("userEmail") &&
    cookies.hasOwnProperty("totalCost")
  );
};

function stringify(object: Record<string, any>): string {
  return JSON.stringify(object);
}
