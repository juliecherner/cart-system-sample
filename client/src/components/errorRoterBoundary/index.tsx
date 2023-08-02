import { useRouteError, Link } from "react-router-dom";

type ErrorResponse = {
  status: number;
  statusText: string;
  data: string;
  internal: boolean;
  error: Record<string, string>;
};

export function ErrorRouterBoundary() {
  let error = useRouteError();
  return (
    <div>
		<div>Oops! Error {(error as ErrorResponse).status}</div>
     	<div>{(error as ErrorResponse).data}</div>
		<div>Return to <Link to="/">the main page</Link> </div>
    </div>
  );
}
