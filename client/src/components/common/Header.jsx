import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className="p-10">
          <div className="flex flex-wrap justify-between items-center mx-auto">
            <a href="#">
              <h1 className="text-xl font-bold">Ami Coding Pari Na</h1>
            </a>

            <ul className="flex mt-4 font-medium flex-row space-x-8">
              <li>
                <Link
                  to="/"
                  className="font-bold text-lg hover:border-b-4 hover:border-purple-700 transition duration-300 py-2 px-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="font-bold text-lg hover:border-b-4 hover:border-purple-700 transition duration-300 py-2 px-1"
                >
                  Search
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold text-lg hover:border-b-4 hover:border-purple-700 transition duration-300 py-2 px-1"
                >
                  API Endpoint
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold text-lg hover:border-b-4 hover:border-purple-700 transition duration-300 py-2 px-1"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="flex items-center">
              <a
                href="#"
                className="font-bold text-xl mr-2 bg-purple-700 rounded-lg py-2 px-4"
              >
                Log in
              </a>
              <a
                href="#"
                className="font-bold text-xl bg-purple-700 rounded-lg py-2 px-4"
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
