import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around">
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/search">
            Search
          </Link>
        </li>
        <li>
          <Link href="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;