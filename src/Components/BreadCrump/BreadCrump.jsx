import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const BreadCrumb = ({ base, page }) => {
  return (
    <div>
      <div className=" my-40">
        <div className=" inset-0 flex flex-col justify-center items-center">
          <h4
          style={{
            letterSpacing:'4px'
          }}
          className="text-white font-semibold text-[21px]  mb-4 md:mb-6">
            {page}
          </h4>
          <div className="text-white font-inter text-sm md:text-lg">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link
                  to="/"
                  className="text-white hover:text-white flex items-start gap-2"
                >
                  <div className="flex gap-2 items-center">
                    <span>
                      <IoHomeOutline />
                    </span>
                    <span>{base}</span>
                  </div>
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-[#ed1d24]">{page}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
