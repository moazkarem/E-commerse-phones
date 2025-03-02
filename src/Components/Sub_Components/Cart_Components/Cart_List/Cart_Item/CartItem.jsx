import { Link } from "react-router-dom";
import QuantityButton from "../../../Buttons/Quantity_Button/QuantityButton";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { memo } from "react";
import PropTypes from "prop-types";

function CartItem({
  itemId,
  itemImage,
  itemInfo,
  itemBrand,
  itemOriginalPrice,
  itemFinalPrice,
  itemTitle,
}) {
  return (
    <li className="w-full  flex gap-4  border-b-[1px] border-[#ffffff30] py-6  md:max-h-[200px]">
      <Link to={`/product-details/${itemId}`} className="w-2/5 md:w-1/5 ">
        <img src={itemImage} alt={itemBrand} />
      </Link>
      <div className="flex flex-col w-3/5 md:w-4/5 relative gap-2 justify-center">
        <Link
          to={`/product-details/${itemId}`}
          className="item-description text-main w-3/4 md:w-auto"
          href="#"
        >
          {itemTitle} <br />
          {itemInfo}
        </Link>
        <div className="prices">
          <h3 className="text-main">${itemFinalPrice.toLocaleString()}</h3>
          <del className="text-muted">
            ${itemOriginalPrice.toLocaleString()}
          </del>
        </div>
        <QuantityButton currentQuantity={10} quantitySetter={15} />

        <button
          className="remove-button"
          // onClick={() => removeCartItem(itemId)}
        >
          <MdOutlineRemoveShoppingCart />
        </button>
      </div>
    </li>
  );
}
CartItem.propTypes = {
  itemId: PropTypes.number,
  itemImage: PropTypes.string,
  itemInfo: PropTypes.string,
  itemBrand: PropTypes.string,
  itemOriginalPrice: PropTypes.number,
  itemFinalPrice: PropTypes.number,
  itemTitle: PropTypes.string,
};

export default memo(CartItem);
