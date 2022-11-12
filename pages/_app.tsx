import "../styles/globals.css";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import Layout from "./components/Layout";
import { FC } from "react";

type ComponentProps = AppProps;

const App: FC<ComponentProps> = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);
export default App;
