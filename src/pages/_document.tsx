import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-bs-theme="dark">
      <Head />
      <body className="app">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
