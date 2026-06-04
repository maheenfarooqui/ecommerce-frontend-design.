import { useState } from "react";

export default function ProductGallery({ images }) {
  // Hamesha pehli image active state par default set hogi
  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <div className="w-full lg:w-105 flex flex-col gap-4">
      {/* Main Feature Display Image Box */}
      <div className="w-full h-95 flex items-center justify-center p-6 mix-blend-multiply">
        <img
          src={activeImg}
          alt="Main Product view"
          className="max-w-full max-h-full object-contain transition-all duration-200"
        />
      </div>

      {/* Clickable Thumbnails Row List */}
      <div
        className="flex gap-2.5 overflow-x-auto pb-1"
        style={{ scrollbarWidth: "none" }}
      >
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImg(img)}
            className={`w-full h-full border p-1.5 flex items-center justify-center cursor-pointer transition-all ${
              activeImg === img
                ? "border-[#0D6EFD] ring-1 ring-[#0D6EFD]"
                : "border-gray-200 hover:border-gray-400"
            }`}
          >
            <img src={img} alt={`thumbnail-${idx}`} className="w-full h-full" />
          </button>
        ))}
      </div>
    </div>
  );
}
