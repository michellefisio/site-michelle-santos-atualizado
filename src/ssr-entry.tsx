import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import App from "./App";

export function renderRoute(pathname: string): string {
  return renderToStaticMarkup(<App initialPath={pathname} />);
}
