import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "2em",
            background: "gray",
            padding: "1em",
            color: "#fff",
          }}
        >
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/product">
              <a>Products</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
