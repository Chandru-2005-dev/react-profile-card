import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCartShopping,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function Product({ image, heading, price, oldPrice, details }) {

  return (
    <div className="card-container">

      {/* Product Image */}

      <img
        src={image}
        alt={heading}
        className="image"
      />

      {/* Product Heading */}

      <h1 className="class-heading">
        {heading}
      </h1>

      {/* Product Price */}

      <h1 className="card-heading1">
        {price} <span>{oldPrice}</span>
      </h1>

      {/* Product Rating */}

      <p className="card-paragraph">
        <FontAwesomeIcon
          icon={faStar}
          className="star-icon"
        />

        4.6 <span>(1.2K reviews)</span>
      </p>

      {/* Add To Cart */}

      <button className="add-to-cart1">
        <FontAwesomeIcon icon={faCartShopping} />
        Add to Cart
      </button>

      {/* Show Details */}

      <select className="add-to-cart2">

        <option value="">
          Show Details
        </option>

        {details.map((detail, index) => (
          <option key={index} value={detail}>
            {detail}
          </option>
        ))}

      </select>

    </div>
  );
}

export default Product;