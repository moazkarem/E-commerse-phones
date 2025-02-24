import img1 from "../../../public/images/sonyXb910n-2.png";
const Brands = () => {
  return (
    <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 py-28">
      {Array.from({ length: 12 }, (_, idx) => (
        <div
          key={idx}
          className="brand-logo flex-col justify-center items-center gap-3 mb-12"
        >
          <img src={img1} alt="brand" className="w-full h-auto max-h-[500px] object-cover"/>
          <h5 className=" text-center text-[#a9afc3]  pt-4">Brand Name</h5>
        </div>
      ))}
    </div>
  );
};

export default Brands;
