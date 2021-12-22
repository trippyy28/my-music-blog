import "../styles/globals.css";
import Header from "../components/Header";
import { UserContext } from "../lib/context";

function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider>
      <Header />
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
