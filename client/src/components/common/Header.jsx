const Header = () => {
  return (
    <>
      <header>
        <nav className="p-10">
          <div className="flex flex-wrap justify-between items-center mx-auto">
            <h1>Ami Coding Pari Na</h1>

            <ul className="flex mt-4 font-medium flex-row space-x-8">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Search</a>
              </li>
              <li>
                <a href="#">API Endpoint</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <div className="flex items-center">
              <a href="#">Log in</a>
              <a href="#">Get started</a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
