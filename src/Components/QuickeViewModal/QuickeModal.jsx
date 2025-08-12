import React from "react";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import QuickeViewModal from "../../Ui/QuickeViewModal";
const QuickeModal = ({ product }) => {
  return (
    
      <QuickeViewModal id="Quicke_view" title="" >
        <div className="w-full flex flex-col lg:flex-row product-summary items-center h-max gap-6">
          <ProductGallery product={product}/>
          <ProductInfo product={product} />
        </div>
      </QuickeViewModal>

  );
};

export default QuickeModal;
