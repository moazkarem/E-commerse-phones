import React from "react";
import Rate from "rc-rate";
import StarRedFull from '../../../../public/svgs/start-full.svg'
import "swiper/css/pagination";
import "swiper/css";
import { Link } from "react-router-dom";
import BagIcon from "../../../../public/svgs/bag.svg";
import HeartIcon from "../../../../public/svgs/heart.svg";
const ProductCard = ({ item }) => {
  return (
    <div className="main-card">
      <div className="image-div">
        <Link href={`products/${item.id}`}>
        
            <img src={item.image} alt={item.title} />
        
        </Link>
      </div>

      <div className="content">
        <div className="top">
          <div className="rate rc-rate">
            <Rate
              value={item?.rate}
              disabled
            //   character={<StarRedFull />}
              allowHalf
            />
          </div>
          <div className="new-price-div">
            <h3 className="new-price">199.99 ر.س</h3>
          </div>
        </div>
        <div className="middle">
          <Link href={`products/`}>
           
              <h3 className="title">{item?.title?.en}</h3>
            
          </Link>
          <div className="old-price-div">
            <h3 className="old-price">299.99 ر.س</h3>
          </div>
        </div>
        <div className="bottom">
          <button className="add-to-cart">
            {/* <BagIcon fill="#003087" /> */}
            {/* <BagIcon src={HeartIcon}/> */}
            Add To Cart
          </button>
          <button className="add-to-wishlist">
            {/* <HeartIcon fill="#003087" /> */}
            {/* <img src={HeartIcon}/> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
