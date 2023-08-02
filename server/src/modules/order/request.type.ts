export interface RequestWithCookie extends Request {
	cookie: (arg0: string, arg1: string) => void;
  }