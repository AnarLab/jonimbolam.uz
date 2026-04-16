import { renderToString } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router";
import { routes } from "./app/routes";

const handler = createStaticHandler(routes);

export async function render(url: string) {
  // React Router's SSR pipeline expects a WHATWG Request.
  const request = new Request(url);
  const context = await handler.query(request);

  // If a Route is configured to return a Response (redirect / error),
  // we pass that back to the Node server to handle properly.
  if (context instanceof Response) {
    return { response: context, html: "" };
  }

  const router = createStaticRouter(routes, context);
  const html = renderToString(<StaticRouterProvider router={router} context={context} />);

  return { response: null as null | Response, html };
}

