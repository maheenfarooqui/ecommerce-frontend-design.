import Container from "../common/Container";
import CategoryCard from "../common/CategoryCard";

export default function ProductGridSection({ title, bannerImg, products }) {
  return (
    <div className="w-full bg-bg-gray pb-5 select-none">
      <Container>
        <div className="w-full bg-white rounded-sm border border-gray-200 flex flex-col lg:flex-row overflow-hidden">
          {/* 1. LEFT SIDE: Big Promo Banner (Desktop Only) */}
          <div
            className="hidden lg:flex flex-col justify-between p-6 w-75 h-64.25 shrink-0 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${bannerImg})` }}
          >
            {/* Banner Content Layer */}
            <div className="z-10 max-w-40">
              <h2 className="text-[20px] font-bold text-dark-main leading-snug m-0">
                {title}
              </h2>
              <button className="mt-4 bg-white hover:bg-gray-50 text-dark-main font-semibold text-[14px] px-4 py-2 rounded-lg border-none cursor-pointer transition-colors shadow-sm">
                Source now
              </button>
            </div>
          </div>

          {/* Mobile Title (Only visible on screens where big banner is hidden) */}
          <div className="p-4 block lg:hidden border-b border-gray-200">
            <h2 className="text-[18px] font-bold text-dark-main m-0">
              {title}
            </h2>
          </div>

          {/* 2. RIGHT SIDE: 4x2 Responsive Grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 border-t lg:border-t-0 border-gray-200">
            {products?.map((product) => (
              <CategoryCard
                key={product.id}
                id={product.id} // 👈 ⚡ Id pass kar di taake exact product update track ho
                title={product.title}
                price={product.price}
                img={product.img}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
