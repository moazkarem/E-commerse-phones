import React from "react";
import img1 from "../../../../public/images/brands/img5.png";

// Data arrays for each column
const topRatedData = [
  {
    id: 1,
    image: img1,
    description: "High-quality headphones with noise cancellation.",
    price: "$120",
  },
  {
    id: 2,
    image: img1,
    description: "Ergonomic wireless mouse with long battery life.",
    price: "$40",
  },
  {
    id: 3,
    image: img1,
    description: "Mechanical keyboard with RGB lighting.",
    price: "$75",
  },
];

const latestArrivedData = [
  {
    id: 1,
    image: img1,
    description: "New gaming headset just released.",
    price: "$95",
  },
  {
    id: 2,
    image: img1,
    description: "Stylish smartwatch with heart-rate monitor.",
    price: "$150",
  },
  {
    id: 3,
    image: img1,
    description: "Latest wireless earbuds in the market.",
    price: "$60",
  },
];

const mostSellingData = [
  {
    id: 1,
    image: img1,
    description: "Most sold noise-cancelling headphones.",
    price: "$110",
  },
  {
    id: 2,
    image: img1,
    description: "Top selling mechanical keyboard.",
    price: "$70",
  },
  {
    id: 3,
    image: img1,
    description: "Popular ergonomic chair.",
    price: "$200",
  },
];

const columns = [
  { title: "Top Rated", data: topRatedData },
  { title: "Latest Arrived", data: latestArrivedData },
  { title: "Most Selling", data: mostSellingData },
];

const TopRated = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10">
      {columns.map((column, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          <h3 className="text-[#ed1d24] text-[18px] ">{column.title}</h3>

          {column.data.map((item) => (
            <div
              key={item.id}
              className="bg-[#161819] border border-[#6c757d] rounded-[10px] p-3 flex gap-3"
            >
              {/* Image */}
              <div className="w-[80px] h-[80px] flex-shrink-0">
                <img
                  src={item.image}
                  alt="product"
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-between">
                <p className="text-white text-[16px] leading-snug">
                  {item.description}
                </p>
                <span className="text-[#ed1d24] text-[16px] font-medium">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TopRated;
