// Hooks
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductGallery from "./Summary_Components/ProductGallery";
import ProductInfo from "./Summary_Components/ProductInfo";
import { useEffect } from "react";
import { getSingleProd } from "../../../../store/actions";
import { getCartAction } from "./../../../../store/cart/actions";

export default function ProductSummary() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct, loading, error } = useSelector(
    (state) => state.productsRed
  );
  useEffect(() => {
    if (!singleProduct || singleProduct?.data?.data?._id !== id) {
      dispatch(getSingleProd(id));
      dispatch(getCartAction());
    }
  }, [id, dispatch, singleProduct]);
  const { getCart } = useSelector((state) => state.cartRed);
  const gallryData = singleProduct?.data?.data
  console.log(gallryData , 'gaaa')
  return (
    <div className="flex flex-col lg:flex-row product-summary items-center h-max gap-6">
      <ProductGallery singleProduct={gallryData} />
      <ProductInfo
        singleProduct={singleProduct}
        getCart={getCart}
        loading={loading}
        error={error}
      />
    </div>
  );
}
