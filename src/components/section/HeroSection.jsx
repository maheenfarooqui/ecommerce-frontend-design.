import Container from "../common/Container";
import Banner from "../../assets/Banner.png";
import avatarImg from "../../assets/avatar.png";

export default function HeroSection() {
  const categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ];

  return (
    <div className="w-full bg-bg-gray py-5">
      <Container>
        {/* Main 3-Column Grid Context */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 bg-white p-4 rounded-sm border border-gray-200">
          {/* 1. LEFT SIDE: Categories Menu (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-1">
            <ul className="flex flex-col m-0 p-0 list-none gap-1">
              {categories.map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="block px-3 py-2 text-[16px] rounded-lg transition-colors no-underline font-normal hover:bg-[#E5F1FF]"
                    style={{
                      color: item === "Automobiles" ? "#1C1C1C" : "#505050",
                      backgroundColor:
                        item === "Automobiles" ? "#E5F1FF" : "transparent",
                      fontWeight: item === "Automobiles" ? "500" : "400",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. CENTER: Main Banner*/}
          <div
            className="col-span-1 lg:col-span-2 rounded-lg p-8 flex flex-col justify-center relative min-h-75 lg:min-h-full bg-cover bg-center"
            style={{
              backgroundColor: "#D1ECE5",
              backgroundImage: `url(${Banner})`,
            }}
          >
            <div className="max-w-70 z-10">
              <span className="text-[28px] text-dark-main block mb-1">
                Latest trending
              </span>
              <h1 className="text-[28px] lg:text-[32px] font-bold text-dark-main leading-tight mb-5">
                Electronic items
              </h1>
              <button className="bg-white hover:bg-gray-50 text-dark-main font-medium text-[16px] px-4 py-2.5 rounded-lg border-none cursor-pointer transition-colors shadow-sm">
                Learn more
              </button>
            </div>
          </div>

          {/* 3. RIGHT SIDE: Profile & Promo Cards (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col gap-3">
            {/* Top Widget: User Greeting */}
            <div className="bg-[#E3F0FF] p-4 rounded-lg flex flex-col gap-2.5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 bg-[#C7E1FF] border border-gray-200">
                  <img
                    src={avatarImg}
                    alt="User Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[16px] text-dark-main m-0 leading-snug">
                  Hi, user <br /> let's get started
                </p>
              </div>
              <button className="w-full bg-[#0D6EFD] hover:bg-blue-700 text-white font-medium text-[14px] py-2 rounded-lg border-none cursor-pointer transition-colors">
                Join now
              </button>
              <button className="w-full bg-white hover:bg-gray-50 text-[#0D6EFD] font-medium text-[14px] py-2 rounded-lg border border-gray-200 cursor-pointer transition-colors">
                Log in
              </button>
            </div>

            {/* Middle Widget: Orange Promo */}
            <div className="bg-[#F38332] p-4 rounded-lg text-white flex flex-col justify-center min-h-23.75">
              <p className="text-[15px] m-0 leading-snug font-normal max-w-37.5">
                Get US $10 off with a new supplier
              </p>
            </div>

            {/* Bottom Widget: Cyan Promo */}
            <div className="bg-[#55BDB3] p-4 rounded-lg text-white flex flex-col justify-center min-h-23.75">
              <p className="text-[15px] m-0 leading-snug font-normal max-w-37.5">
                Send quotes with supplier preferences
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
