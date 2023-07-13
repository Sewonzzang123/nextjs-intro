import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/" className={router.pathname === "/" ? "active" : ""}>
        Home
      </Link>{" "}
      <Link
        href="/about-us"
        className={router.pathname === "/about-us" ? "active" : ""}
      >
        about-us
      </Link>
      <style jsx global>
        {`
          nav {
            background-color: tomato;
          }
          a {
            text-decoration: none;
          }
          .active {
            color: blue;
          }
        `}
      </style>
    </nav>
  );
}
