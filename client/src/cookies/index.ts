import Cookies from "js-cookie";

export enum COOKIE_TYPE  {
	CART = "cart-system",
	TOKEN = "token"
}

export const getCookieByType = (cookieType: COOKIE_TYPE): any => {
	const cookies = Cookies.get(cookieType);
	console.log(cookies);
	if (cookies) return JSON.parse(cookies);
	return null;
  };