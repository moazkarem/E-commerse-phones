// Icons
import { LiaStarSolid } from "react-icons/lia";
import Correct from "../../../../../assets/Correct.svg";
import AddButton from "../../../Buttons/Add_Button/AddButton";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getSingleProd } from "../../../../../store/actions";
import Loading from "../../../../Loading/Loading";
import Error from "../../../../Error/Error";

export default function ProductInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { singleProduct, loading, error } = useSelector(
    (state) => state.productsRed
  );

  useEffect(() => {
    if (!singleProduct || singleProduct?.data?.data?._id !== id) {
      dispatch(getSingleProd(id));
    }
  }, [id, dispatch, singleProduct]);

  //============================HANDEL LOADING ===========
  if (loading)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  //============================HANDEL ERROR ===========
  if (error)
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Error msg={error} />
      </div>
    );
  if (!singleProduct) return null;

  const product = singleProduct?.data?.data;

  return (
    <section className="flex flex-col w-full lg:w-2/5">
      <div className="flex flex-col border-b-[1px] border-[#ffffff30] py-6">
        <h5 className="text-main">{product?.title}</h5>
        <p className="text-large text-main mb-4 font-normal">
          {product?.description}
        </p>
        <div className="flex items-center">
          <div className="flex justify-start">
            <LiaStarSolid color="red" />
          </div>
          <p className="text-large text-muted pl-2">6 Ratings</p>
        </div>
      </div>

      <div className="flex flex-col border-b-[1px] border-[#ffffff30] py-6 gap-6">
        <section className="flex items-center">
          <div className="prices mr-auto">
            <h3 className="text-main">{product?.price}</h3>
            <del className="text-muted">
              {Math.floor(product?.price * 1.5)}
            </del>
          </div>
          <div className="in-stock">
            <span>
              <img src={Correct} alt="" />
            </span>
            <span> In Stock</span>
          </div>
        </section>
        <section className="flex items-center">
          <p className="text-large text-green mr-auto">You save 120</p>
          <p className="text-small text-muted">(Inclusive of all taxes)</p>
        </section>
      </div>

      <div className="flex flex-col border-b-[1px] border-[#ffffff30] py-6 gap-6 ">
        <p className="text-large text-main font-normal">Offers and Discounts</p>
        <section className="flex flex-wrap gap-3">
          <div className="offer-badge">
            <p className=" text-small text-main">No Cost EMI on Credit Card</p>
          </div>
          <div className="offer-badge">
            <p className="text-small text-main">Pay Later & Avail Cashback</p>
          </div>
        </section>
      </div>

      <div className="py-6">
        <AddButton
          isInCart={true}
          isFullButton={false}
          productId={product?._id}
          productTitle={product?.title}
        />
      </div>
    </section>
  );
}
