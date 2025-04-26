import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"; // ✅ أضف useState
import { getSingleProd } from "../../../../../store/actions";
import Loading from "../../../../Loading/Loading";
import Error from "../../../../Error/Error";
import { LiaStarSolid } from "react-icons/lia";
import Correct from "../../../../../assets/Correct.svg";

export default function ProductInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState("");

  const { singleProduct, loading, error } = useSelector(
    (state) => state.productsRed
  );

  useEffect(() => {
    if (!singleProduct || singleProduct?.data?.data?._id !== id) {
      dispatch(getSingleProd(id));
    }
  }, [id, dispatch, singleProduct]);

  if (loading)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loading />
      </div>
    );

  if (error)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Error msg={error} />
      </div>
    );

  if (!singleProduct) return null;

  const product = singleProduct?.data?.data;

  const renderColors = product?.availableColors
    .join(",")
    .split(" ")
    ?.map((color, idx) => {
      return (
        color.length > 2 && (
          <span
            key={idx}
            onClick={() => setSelectedColor(color)}
            className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
              selectedColor === color ? "border-black" : "border-transparent"
            }`}
            style={{ backgroundColor: color }}
          />
        )
      );
    });

  return (
    <section className="flex flex-col w-full lg:w-2/5">
      <div className="flex flex-col border-b-[1px] border-[#ffffff30] py-6">
        <h5 className="text-main">{product?.title}</h5>
        <p className="text-large text-main mb-4 font-normal">
          {product?.description}
        </p>
        <div className="flex items-center">
          <div className="flex justify-start">
            {Array.from({ length: product?.ratingsQuantity })?.map((_, idx) => (
              <LiaStarSolid key={idx} color="red" />
            ))}
          </div>
          <p className="text-large text-muted pl-2">
            {Math.ceil(product?.ratingsQuantity)} Ratings
          </p>
        </div>
        <div className="mt-3 flex items-center gap-1 w-full">
          <span className="text-[#008000] text-[14px] capitalize ">
            Average Rate : {product?.ratingsAverage || 0}
          </span>
          <span>
            {" "}
            <LiaStarSolid color="#008000" size={14} />
          </span>
        </div>
      </div>

      <div className="flex flex-col border-b-[1px] border-[#ffffff30] py-6 gap-6">
        <section className="flex items-center">
          <div className="prices mr-auto">
            <h3 className="text-main">{product?.price}</h3>
            <del className="text-muted">{Math.floor(product?.price * 1.5)}</del>
          </div>
          <div
            className={`in-stock ${
              product?.quantity > 0 ? "!bg-[#008000]" : "!bg-[#ed1d24]"
            }`}
          >
            <span>
              <img src={Correct} alt="" />
            </span>
            <span>{product?.quantity > 0 ? "In Stock" : "Out Stock"}</span>
          </div>
        </section>
        <section className="flex items-center">
          <p className="text-large text-green mr-auto">
            You save {product?.price + 20}
          </p>
          <p className="text-small text-muted">(Inclusive of all taxes)</p>
        </section>
      </div>

      <div className="flex justify-start items-center gap-3 mt-2 py-3">
        {renderColors}
      </div>

      <div className="py-6">
        <button className={`single-button`}>Add To Cart</button>
      </div>
    </section>
  );
}
