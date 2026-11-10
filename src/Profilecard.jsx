import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMagnifyingGlass,
  faChevronDown,
  faSliders,
  faArrowDownWideShort,
  faCartShopping,
  faStar,
  faBagShopping
} from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return (
    <div>
      <h1>
        <FontAwesomeIcon  icon={faBagShopping} />
        Our Products
      </h1>

      <input type="text" placeholder="Search products..." />

      <button>
        <FontAwesomeIcon icon={faSliders} />
        Filter
      </button>

      <button>
        <FontAwesomeIcon icon={faArrowDownWideShort} />
        Sort
      </button>

      <button>
        <FontAwesomeIcon icon={faCartShopping} />
        Add to Cart
      </button>

      <FontAwesomeIcon icon={faStar} />

      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  );
}

export default Profile;