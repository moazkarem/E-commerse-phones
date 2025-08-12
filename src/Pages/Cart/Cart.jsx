import CartList from "../../Components/Sub_Components/Cart_Components/Cart_List/CartList";
import CartSummary from "../../Components/Sub_Components/Cart_Components/Cart_Summary/CartSummary";
import { BsCartX } from "react-icons/bs";
import { Link } from "react-router-dom";
import Seo from "../../Components/Seo/Seo";
import BreadCrump from "../../Components/BreadCrump/BreadCrump";
import { useDispatch, useSelector } from "react-redux";
import { getCartAction } from "../../store/cart/actions";
import { useEffect } from "react";
import Loading from "../../Components/Loading/Loading";
export default function Cart() {
  const dispatch = useDispatch();

  const { getCart, loading } = useSelector((state) => state.cartRed);
  useEffect(() => {
    dispatch(getCartAction());
  }, [dispatch]);
  const productsCart = getCart?.data?.products;
  // if (loading)
  //   return (
  //     <div className="w-full h-[100vh] flex justify-center items-center">
  //       <Loading />
  //     </div>
  //   );
  return (
    <>
      <div>
        <BreadCrump base={"Home"} page={"Cart"} />
      </div>
      <div className=" flex flex-col lg:flex-row gap-8 pb-40 max-lg:pb-20">
        <Seo currentPage={"Cart"} />
        {productsCart ? (
          <>
            <CartList />
            <CartSummary productsCart={getCart} />
          </>
        ) : (
          <div className="w-full flex flex-col items-center gap-8">
            <BsCartX className="large-icon text-[red]" />
            <h2 className="text-main m-0">Your Cart is Empty</h2>
            <Link to="/products" className="single-button">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
