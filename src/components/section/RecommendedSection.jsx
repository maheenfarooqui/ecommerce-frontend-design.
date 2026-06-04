import Container from "../common/Container";
import RecommendedCard from "../common/RecommendedCard";
import { recommendedData } from "../../utils/data";

export default function RecommendedSection() {
  return (
    <div className="w-full bg-bg-gray pb-10 select-none">
      <Container>
        {/* Section Heading Title */}
        <h2 className="text-[24px] font-bold text-dark-main m-0 mb-6">
          Recommended items
        </h2>

        {/* Responsive 5 Columns Grid Architecture */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {recommendedData?.map((item) => (
            <RecommendedCard
              key={item.id}
              id={item.id}
              price={item.price}
              title={item.title}
              img={item.img}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
