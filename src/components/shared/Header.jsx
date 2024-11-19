import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../../components/Icons";

const navItems = [
  { id: 1, title: "ABOUT", path: "/about" },
  { id: 2, title: "COURSES", path: "/courses-info" },
  { id: 3, title: "RESOURCES", path: "/site-resources" },

  { id: 5, title: "BOOK", path: "/books" },
  {
    id: 4,
    com: (
      <Link to="/home">
        <img src={Icons.BrandLogo} alt="Logo" className="w-32 mx-4" />
      </Link>
    ),
  },
  {
    id: 6,
    title: "WORK WITH ME",
    path: "/work-with-me",
    submenu: [
      { id: 6.1, title: "Speaking", path: "/work-with-me/speaking" },
      { id: 6.2, title: "Coaching", path: "/work-with-me/coaching" },
    ],
  },
  { id: 7, title: "CONTACT", path: "/contact" },
  { id: 8, title: "LOGIN", path: "/login" },
  { id: 9, title: "SIGN UP", path: "/courses-info", isButton: true },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenuId, setOpenSubmenuId] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenSubmenuId(null); // Close submenus when the main menu toggles
  };

  const toggleSubmenu = (id) => {
    setOpenSubmenuId(openSubmenuId === id ? null : id);
  };

  return (
    <header className="flex items-center justify-between p-2 container text-[#274C69] font-bold">
      {/* Desktop Navigation */}
      <nav className="items-center hidden w-full space-x-4 md:flex md:justify-between">
        {navItems.map((item) => (
          <Fragment key={item.id}>
            {item.id === 4 ? (
              item.com
            ) : item.submenu ? (
              <div className="relative">
                <button
                  onClick={() => toggleSubmenu(item.id)}
                  className="text-gray-600 hover:text-gray-900 font-raleway"
                >
                  {item.title}
                </button>
                {openSubmenuId === item.id && (
                  <div className="absolute left-0 z-10 mt-2 bg-white shadow-md top-full">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.id}
                        to={subItem.path}
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={item.path}
                className={`${
                  item.title === "LOGIN"
                    ? "border-2 rounded-md border-[#376489] px-4 py-2 text-[15px]"  // Custom style for LOGIN button
                    : item.isButton
                    ? "bg-blue-500 text-white px-4 py-2 rounded-md bg-[#376489]" // Existing style for SIGN UP button
                    : "text-gray-600 hover:text-gray-900"
                } font-raleway`}
              >
                {item.title}
              </Link>

            )}
          </Fragment>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="flex items-center justify-between w-full md:hidden">
        <Link to="/home">
          <img
            src={Icons.BrandLogo}
            alt="Logo"
            className="!ml-22 md:ml-4 mx-4 w-32"
          />
        </Link>
        <button
          onClick={toggleMenu}
          className="mr-4 text-3xl text-gray-600 hover:text-gray-900"
        >
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 right-0 z-10 bg-white shadow-md top-20 md:hidden">
          {navItems.map((item) => (
            <Fragment key={item.id}>
              {item.title && (
                <div>
                  {item.submenu ? (
                    <button
                      onClick={() => toggleSubmenu(item.id)}
                      className="block w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-100 font-raleway"
                    >
                      {item.title}
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`${
                        item.isButton
                          ? "bg-blue-500 text-white px-4 py-2 rounded-md"
                          : "text-gray-600 hover:bg-gray-100"
                      } block w-full px-4 py-2 text-left font-raleway`}
                      onClick={toggleMenu}
                    >
                      {item.title}
                    </Link>
                  )}
                  {item.submenu && openSubmenuId === item.id && (
                    <div className="ml-4">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.id}
                          to={subItem.path}
                          className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                          onClick={toggleMenu}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </Fragment>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
