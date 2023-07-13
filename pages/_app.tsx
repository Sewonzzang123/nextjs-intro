import NavBar from "@/components/NavBar";
import { AppProps } from "next/dist/shared/lib/router/router";

export default function App({ Component, pageProps }: AppProps) {
  console.log("aaa");
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <h1>HelloHello</h1>
    </>
  );
}
