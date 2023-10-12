import { Html, Head, Main, NextScript } from "next/document";
import { ToastContainer } from "react-toastify";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-secondary-color">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
