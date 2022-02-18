/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-white shadow">
      <header className="container mx-auto flex justify-between py-5 ">
        <Link href="/">
          <a>
            <img width="130" src="/images/logo.jpg" alt="Logo" />
          </a>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li className="text-teal-700 font-semibold">
              <Link href="/events">All Events</Link>
            </li>
            <li className="text-teal-700 font-semibold">
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
