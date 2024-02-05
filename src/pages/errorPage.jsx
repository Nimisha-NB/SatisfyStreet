import { useRouteError } from "react-router-dom";
import { stylize } from "../utils/stylize";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  stylize(
    `
      body {
        padding: 40px;
        margin: auto;
      }
      h1 {
        font-size: 128px;
        line-height: 1px;
      }
      b{
        color: pink;
      }
      p{
        font-size: 32px;
        color: white;
      }
    `
  );

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred. Error:  <b>{error.statusText || error.message}</b></p>
    </div>
  );

}

