import { useState } from "react";
import { useCart } from "../../context/CartContext";
import {
  User,
  MessageSquare,
  Heart,
  ShoppingCart,
  ChevronDown,
  Menu,
  X,
  Search,
  Home,
  List,
  Globe,
  Headphones,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import Container from "../common/Container";
import BottomNavbar from "../common/BottomNav";

export default function Navbar() {
  const { cartItems } = useCart();
  const totalItemsInCart = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );
  const [isOpen, setIsOpen] = useState(false);

  // CUSTOM STATE: Dropdown open/close
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All category");

  // USER INPUT CATEGORIES DATA MATRIX
  const categoriesList = [
    "All category",
    "Clothes and wear",
    "Automobiles",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
  ];

  // Icon and label for main menu items
  const menuItems = [
    { label: "Home", icon: Home, href: "/" },
    { label: "Categories", icon: List, href: "#" },
    { label: "Favorites", icon: Heart, href: "#" },
    { label: "My orders", icon: ShoppingCart, href: "#" },
    { label: "English | USD", icon: Globe, href: "#" },
    { label: "Contact us", icon: Headphones, href: "#" },
    { label: "About", icon: Info, href: "#" },
  ];

  // Sub menu items with plain text links
  const subLinks = [
    { label: "User agreement", href: "#" },
    { label: "Partnership", href: "#" },
    { label: "Privacy policy", href: "#" },
  ];

  // CLICK HANDLER: Category Dropdown
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsCategoryDropdownOpen(false); // Menu band ho jaye selecting ke baad
  };

  return (
    <header className="w-full bg-white border-b border-[#DEE2E7] sticky top-0 z-50 select-none">
      {/* 1. MAIN DESKTOP & MOBILE BAR */}
      <Container className="h-20 flex items-center justify-between gap-4">
        {/* LEFT: Menu Button (Mobile Only) + Logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="lg:hidden text-dark-main p-1 cursor-pointer bg-transparent border-none"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
          <Link to="/" className="flex items-center no-underline">
            <Logo />
          </Link>
        </div>

        {/* CENTER: Search Bar (Desktop Only) */}
        <div
          className="hidden lg:flex border-2 border-[#0D6EFD] rounded-lg bg-white relative"
          style={{ height: "44px", width: "100%", maxWidth: "665px" }}
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 text-[16px] text-dark-main placeholder-gray-400 focus:outline-none border-none bg-transparent"
          />

          {/* INTERACTIVE CUSTOM DROPDOWN BUTTON MODULE CONTAINER */}
          <div
            onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
            className="flex items-center gap-2 px-4 border-0 border-l border-solid border-gray-200 bg-white cursor-pointer select-none shrink-0 hover:bg-gray-50 text-left relative min-w-32.5 justify-between"
          >
            <span className="text-[16px] text-dark-main truncate max-w-30">
              {selectedCategory}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isCategoryDropdownOpen ? "rotate-180" : ""}`}
            />

            {/* ABSOLUTE PORTAL DROPDOWN LAYER VIEW (Render overlay flags list conditionally) */}
            {isCategoryDropdownOpen && (
              <div className="absolute top-11 right-0 w-55 bg-white border border-solid border-gray-200 rounded-lg shadow-lg py-1.5 z-50 max-h-70 overflow-y-auto animate-fadeIn box-border">
                {categoriesList.map((category, idx) => (
                  <div
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategorySelect(category);
                    }}
                    className={`px-4 py-2 text-[15px] cursor-pointer transition-colors whitespace-nowrap truncate ${
                      selectedCategory === category
                        ? "bg-blue-50 text-[#0D6EFD] font-medium"
                        : "text-dark-main hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="bg-[#0D6EFD] hover:bg-blue-700 text-white font-medium text-[16px] px-6 h-full transition-colors shrink-0 border-none cursor-pointer">
            Search
          </button>
        </div>

        {/* RIGHT: Actions (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-7 shrink-0">
          <div className="flex flex-col items-center gap-1 cursor-pointer group">
            <User className="w-5 h-5 text-gray-400 group-hover:text-[#0D6EFD] transition-colors" />
            <span className="text-[12px] text-gray-400 group-hover:text-dark-main transition-colors">
              Profile
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 cursor-pointer group">
            <MessageSquare className="w-5 h-5 text-gray-400 group-hover:text-[#0D6EFD] transition-colors" />
            <span className="text-[12px] text-gray-400 group-hover:text-dark-main transition-colors">
              Message
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 cursor-pointer group">
            <Heart className="w-5 h-5 text-gray-400 group-hover:text-[#0D6EFD] transition-colors" />
            <span className="text-[12px] text-gray-400 group-hover:text-dark-main transition-colors">
              Orders
            </span>
          </div>

          {/* 🛒 DESKTOP CART ICON WITH LIVE RED BADGE ELEMENT INDICATOR */}
          <Link
            to="/cart"
            className="flex flex-col items-center gap-1 cursor-pointer group no-underline relative"
          >
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-gray-400 group-hover:text-[#0D6EFD] transition-colors" />
              {/* Counter Badge: Agar cart me items hon tabhi dikhega */}
              {totalItemsInCart > 0 && (
                <span className="absolute -top-2.5 -right-2.5 bg-red-500 text-white text-[10px] font-bold min-w-4 h-4 rounded-full flex items-center justify-center px-1 border border-white box-border animate-scaleIn">
                  {totalItemsInCart}
                </span>
              )}
            </div>
            <span className="text-[12px] text-gray-400 group-hover:text-dark-main transition-colors">
              My cart
            </span>
          </Link>
        </div>

        {/* MOBILE QUICK ACTION ICONS */}
        <div className="flex items-center gap-4 lg:hidden">
          {/* 🛒 MOBILE CART ICON WITH LIVE BADGE CONTROL */}
          <Link to="/cart" className="text-dark-main p-1 relative block">
            <ShoppingCart className="w-6 h-6" />
            {totalItemsInCart > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[9px] font-bold min-w-3.75 h-3.5 rounded-full flex items-center justify-center px-1 border border-white box-border">
                {totalItemsInCart}
              </span>
            )}
          </Link>
          <button className="text-dark-main p-1 bg-transparent border-none">
            <User className="w-6 h-6" />
          </button>
        </div>
      </Container>

      {/* MOBILE LOWER SEARCH BAR */}
      <div className="block lg:hidden px-4 pb-3 bg-white">
        <div
          className="w-full flex items-center bg-bg-gray border border-gray-200 rounded-lg overflow-hidden px-3"
          style={{ height: "40px" }}
        >
          <Search className="w-5 h-5 text-gray-400 shrink-0 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-[14px] text-dark-main placeholder-gray-400 focus:outline-none"
          />
        </div>
      </div>

      {/* 2. FIXED MOBILE OVERLAY DRAWER */}
      <aside
        className={`fixed inset-0 z-50 flex h-screen flex-col overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none -translate-x-full opacity-0"
        }`}
        aria-label="Mobile navigation"
      >
        {/* Drawer Header */}
        <div className="bg-bg-gray p-5 border-b border-gray-200 relative">
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-dark-main cursor-pointer bg-transparent border-none"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col gap-2 mt-2">
            <div className="w-11 h-11 bg-[#DEE2E7] rounded-full flex items-center justify-center text-gray-600">
              <User className="w-6 h-6" />
            </div>
            <div className="text-[16px] text-dark-main font-medium">
              <span className="cursor-pointer hover:text-[#0D6EFD]">
                Sign in
              </span>
              <span className="text-gray-400 mx-1.5">|</span>
              <span className="cursor-pointer hover:text-[#0D6EFD]">
                Register
              </span>
            </div>
          </div>
        </div>

        {/* Drawer Main Links Scroll Area */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          <nav className="flex flex-col" aria-label="Mobile primary navigation">
            {menuItems.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  className={`flex items-center gap-4 py-3.5 text-[16px] text-dark-main no-underline hover:bg-gray-50 active:bg-gray-100 transition-colors ${
                    item.label === "English | USD"
                      ? "border-t border-slate-100 mt-2 pt-5"
                      : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <IconComponent
                    className="w-5 h-5 shrink-0"
                    style={{ color: "#8B96A5" }}
                  />
                  <span className="font-normal">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Bottom Plain Sub-links */}
          <div className="border-t border-slate-100 mt-4 pt-4 flex flex-col gap-4">
            {subLinks.map((sub, idx) => (
              <a
                key={idx}
                href={sub.href}
                className="text-[16px] font-normal no-underline text-dark-main hover:text-[#0D6EFD] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {sub.label}
              </a>
            ))}
          </div>
        </div>
      </aside>

      <Container>
        <BottomNavbar />
      </Container>
    </header>
  );
}
