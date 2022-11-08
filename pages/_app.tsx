import "../styles/globals.css";
import "animate.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);
export default App;
