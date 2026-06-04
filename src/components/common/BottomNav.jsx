import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import DeImage from "../../assets/de.png";
import AeImage from "../../assets/ae.png";
import FrImage from "../../assets/fr.png";
import AuImage from "../../assets/au.png";

export default function BottomNavbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [selectedLang, setSelectedLang] = useState("English, USD");
  const [selectedShipFlag, setSelectedShipFlag] = useState(DeImage);

  const leftLinks = [
    { name: "Hot offers", path: "#" },
    { name: "Gift boxes", path: "#" },
    { name: "Projects", path: "#" },
    { name: "Menu item", path: "/products" },
  ];

  const helpOptions = [
    "Contact Support",
    "Dispute Resolution",
    "User Agreement",
    "Report a Bug",
  ];
  const langOptions = [
    "English, USD",
    "Arabic, AED",
    "German, EUR",
    "Russian, RUB",
  ];

  const shipFlags = [DeImage, FrImage, AuImage];

  // Handler toggler
  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  return (
    <div className="w-full bg-white border-b border-gray-200 select-none">
      <Container className="h-14 hidden lg:flex items-center justify-between relative">
        {/* LEFT SIDE: Hamburger Menu + Links */}
        <div className="flex items-center gap-6">
          {/* All Category With Hamburger */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-brand-primary transition-colors">
            <Menu className="w-5 h-5 text-dark-main" />
            <span className="text-[16px] font-medium text-dark-main">
              All category
            </span>
          </div>

          {/* Dynamic Left Links */}
          <ul className="flex items-center gap-6 m-0 p-0 list-none">
            {leftLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="text-[16px] font-medium hover:text-brand-primary transition-colors no-underline"
                  style={{ color: "#1C1C1C" }}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* HELP DROPDOWN OPTION */}
            <li
              className="flex items-center gap-1 cursor-pointer hover:text-brand-primary transition-colors relative"
              onClick={() => toggleDropdown("help")}
            >
              <span
                className="text-[16px] font-medium"
                style={{ color: "#1C1C1C" }}
              >
                Help
              </span>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform ${activeDropdown === "help" ? "rotate-180" : ""}`}
              />

              {/* Help Dropdown Panel Layer */}
              {activeDropdown === "help" && (
                <div className="absolute top-8 left-0 w-45 bg-white border border-solid border-gray-200 rounded-lg shadow-lg py-1.5 z-50 animate-fadeIn">
                  {helpOptions.map((option, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 text-[14px] text-dark-main hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveDropdown(null);
                        // console.log(option + " clicked");
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE: Language & Shipping Dropdowns */}
        <div className="flex items-center gap-6">
          {/* LANGUAGE & CURRENCY DROPDOWN */}
          <div
            className="flex items-center gap-1 cursor-pointer hover:text-brand-primary transition-colors relative"
            onClick={() => toggleDropdown("lang")}
          >
            <span className="text-[16px] font-medium text-dark-main">
              {selectedLang}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-gray-500 transition-transform ${activeDropdown === "lang" ? "rotate-180" : ""}`}
            />

            {/* Language Dropdown Panel Layer */}
            {activeDropdown === "lang" && (
              <div className="absolute top-8 right-0 w-40 bg-white border border-solid border-gray-200 rounded-lg shadow-lg py-1.5 z-50 animate-fadeIn">
                {langOptions.map((option, idx) => (
                  <div
                    key={idx}
                    className={`px-4 py-2 text-[14px] cursor-pointer whitespace-nowrap ${selectedLang === option ? "bg-blue-50 text-[#0D6EFD] font-medium" : "text-dark-main hover:bg-gray-100"}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedLang(option);
                      setActiveDropdown(null);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/*SHIP TO DROPDOWN */}
          <div
            className="flex items-center gap-1.5 cursor-pointer hover:text-brand-primary transition-colors relative"
            onClick={() => toggleDropdown("ship")}
          >
            <span className="text-[16px] font-medium text-dark-main">
              Ship to
            </span>
            <img
              src={selectedShipFlag}
              alt="Active Flag"
              className="w-5 h-3.5 object-cover shrink-0 shadow-sm"
            />
            <ChevronDown
              className={`w-4 h-4 text-gray-500 transition-transform ${activeDropdown === "ship" ? "rotate-180" : ""}`}
            />

            {/* Ship Flags Dropdown Panel Layer */}
            {activeDropdown === "ship" && (
              <div className="absolute top-8 right-0 bg-white border border-solid border-gray-200 rounded-lg shadow-lg p-2.5 z-50 animate-fadeIn flex gap-3 items-center min-w-30 justify-center">
                {shipFlags.map((flag, idx) => (
                  <div
                    key={idx}
                    className={`p-1 rounded cursor-pointer transition-transform hover:scale-110 border border-solid ${selectedShipFlag === flag ? "border-[#0D6EFD] bg-blue-50" : "border-transparent hover:bg-gray-50"}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedShipFlag(flag);
                      setActiveDropdown(null);
                    }}
                  >
                    <img
                      src={flag}
                      alt={`Flag Option ${idx}`}
                      className="w-6 h-4 object-cover shrink-0 block shadow-xs"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Mobile Responsive Tabs View */}
      <div
        className="w-full bg-white py-3 px-4 overflow-x-auto flex items-center gap-2.5 lg:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {["All category", "Gadgets", "Clothes", "Accessories"].map(
          (tab, idx) => (
            <button
              key={idx}
              className="px-3 py-1.5 bg-[#EFF2F4] text-[15px] font-medium rounded-md whitespace-nowrap border-none outline-none active:bg-gray-200 transition-colors"
              style={{ color: "#0D6EFD" }}
            >
              {tab}
            </button>
          ),
        )}
      </div>
    </div>
  );
}
