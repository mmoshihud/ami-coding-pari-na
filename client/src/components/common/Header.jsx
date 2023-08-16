import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className="p-10">
          <div className="mx-auto flex flex-wrap items-center justify-between">
            <a href="#">
              <h1 className="text-xl font-bold">Ami Coding Pari Na</h1>
            </a>

            <ul className="mt-4 flex flex-row space-x-8 font-medium">
              <li>
                <Link
                  to="/"
                  className="px-1 py-2 text-lg font-bold transition duration-300 hover:border-b-4 hover:border-purple-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="px-1 py-2 text-lg font-bold transition duration-300 hover:border-b-4 hover:border-purple-700"
                >
                  Search
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="px-1 py-2 text-lg font-bold transition duration-300 hover:border-b-4 hover:border-purple-700"
                >
                  API Endpoint
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-1 py-2 text-lg font-bold transition duration-300 hover:border-b-4 hover:border-purple-700"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="flex items-center">
              <Link
                to="/login"
                className="mr-2 rounded-lg bg-purple-700 px-4 py-2 text-xl font-bold"
              >
                Log in
              </Link>
              <Link
                to="/sign-up"
                className="rounded-lg bg-purple-700 px-4 py-2 text-xl font-bold"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
