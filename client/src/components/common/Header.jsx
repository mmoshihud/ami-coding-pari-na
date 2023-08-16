const Header = () => {
  return (
    <>
      <header>
        <nav className="p-10">
          <div className="flex flex-wrap justify-between items-center mx-auto">
            <h1 className="text-xl font-bold">Ami Coding Pari Na</h1>

            <ul className="flex mt-4 font-medium flex-row space-x-8">
              <li>
                <a href="#" className="font-bold text-lg">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="font-bold text-lg">
                  Search
                </a>
              </li>
              <li>
                <a href="#" className="font-bold text-lg">
                  API Endpoint
                </a>
              </li>
              <li>
                <a href="#" className="font-bold text-lg">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="flex items-center">
              <a href="#" className="font-bold text-xl">
                Log in
              </a>
              <a href="#" className="font-bold text-xl">
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
