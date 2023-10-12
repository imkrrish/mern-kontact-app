import { BsPersonFillAdd, BsSearch } from "react-icons/bs";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

const Layout = ({ children, handleSearch, addContactFormToggle }: any) => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto p-5">
          <nav className="flex items-center justify-between">
            {/* branding */}
            <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
              <a className="flex title-font font-medium items-center text-gray-100 md:order-1">
                <img className="h-10 w-10 bg-white rounded-lg shadow-md" src="./logo.svg" alt="logo" />
                <span className="ml-3 text-xl text-txt-primary-color">Kontact</span>
              </a>

              <div className="order-3 w-full md:w-auto md:order-2 flex items-center gap-2 justify-center flex-col sm:flex-row md:mt-0 mt-2">
                <div className="flex font-semibold justify-between">
                  {/* Search filter*/}
                  <div className="relative flex items-center w-auto h-9 rounded-lg focus-within:shadow-lg bg-white overflow-hidden shadow-md">
                    <div className="grid place-items-center h-full w-12 text-gray-500">
                      <BsSearch />
                    </div>

                    <input className="peer h-full w-44 outline-none text-sm text-gray-700 pr-2" type="text" id="search" placeholder="Search by name...." onChange={handleSearch} />
                  </div>
                </div>

                {/* Add Contact */}
                <button
                  onClick={() => addContactFormToggle(true)}
                  className="inline-flex gap-2 items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-lg font-semibold mt-0 shadow-md"
                >
                  <BsPersonFillAdd className="text-xl" />
                  Add Contact
                </button>
              </div>

              {/* Toggle Theme  */}
              <div className="order-2 md:order-3">
                <ThemeToggle />
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main>{children}</main>
      <footer className="w-full text-center py-4 bg-primary-color text-lg tracking-wider text-txt-primary-color">
        <h1>
          Made with ❤️ by{" "}
          <Link href={"https://www.linkedin.com/in/imkrrish/"} target="_blank" className="hover:text-blue-600 underline">
            Krishan Kumar
          </Link>
        </h1>
      </footer>
    </div>
  );
};

export default Layout;
