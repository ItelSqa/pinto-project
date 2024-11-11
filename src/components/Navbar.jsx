import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Icons from "../components/Icons.js";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/authActions";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false); // State for back to top icon
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // State for profile dropdown

  const location = useLocation(); // Get the current location
  const token = cookies.get("jwtToken");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const isActive = (path) => location.pathname === path;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  // Handle Logout
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    setIsProfileMenuOpen(false); // Close the profile menu after logging out
  };

  return (
    <nav className="navbars">
      <span className="cursor-pointer nav-brands" onClick={handleSubmit}>
        <img src={Icons.BrandLogo} alt="logo" />
      </span>
      <button className="nav-navigations" onClick={() => setIsOpen(!isOpen)}>
        <img
          src={token ? Icons.userIcon : Icons.HumbergerMenu}
          alt={token ? "Profile" : "Menu"}
          className="h-8"
        />
      </button>
      <div className={`navbars-menus-block ${isOpen ? "open" : ""}`}>
        <ul className="menu">
          {location.pathname !== "/dashboard" && (
            <>
              <li
                className={`menu-item ${isActive("/courses") ? "active" : ""}`}
              >
                <Link to="/courses" className="menu-link">
                  COURSES
                </Link>
              </li>
              <li
                className={`menu-item ${isActive("/support") ? "active" : ""}`}
              >
                <Link to="/support" className="menu-link">
                  SUPPORT
                </Link>
              </li>
            </>
          )}

          {/* Profile Dropdown Menu */}
          {token ? (
            <li className="relative menu-item">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="menu-link"
              >
                MY PROFILE
              </button>
              {isProfileMenuOpen && (
                <div className="absolute right-0 z-10 w-32 py-2 mt-2 bg-white rounded-lg shadow-lg">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    onClick={() => setIsProfileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-100"
                  >
                    LOGOUT
                  </button>
                </div>
              )}
            </li>
          ) : (
            <li
                className={`menu-item ${isActive("/courses") ? "active" : ""}`}
              >
              <Link to="/courses-info" className="menu-link">
                SIGN UP
              </Link>
            </li>
          )}
        </ul>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed p-2 text-white transition bg-gray-800 rounded-full shadow-lg bottom-5 right-5 hover:bg-gray-600"
        >
          <img src={Icons.BackToTop} alt="Back to top" />
        </button>
      )}
    </nav>
  );
}

export default Navbar;
