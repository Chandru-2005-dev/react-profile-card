import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronDown,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

import Product from "./product";

import laptop from "./assets/laptop.png";
import earbuds from "./assets/earbuds.png";
import bag from "./assets/bag.png";
import neckband from "./assets/neckband.png";
import smart from "./assets/smart.png";
import sport from "./assets/sport.png";
import wirelesss from "./assets/wirelesss.png";
import sunglass from "./assets/sunglass.png";

function Dynamic() {

  const data = [
  {
    image: laptop,
    heading: "Laptop Pro 14",
    price: "₹48,999",
    oldPrice: "₹64,999",
    details: [
      "Brand: Dell",
      "Processor: Intel Core i5",
      "RAM: 16GB",
      "Storage: 512GB SSD",
      "Display: 14 Inches",
      "Graphics: Intel Iris Xe",
      "Operating System: Windows 11",
      "Warranty: 1 Year",
    ],
  },
  {
    image: earbuds,
    heading: "Wireless Earbuds",
    price: "₹1,499",
    oldPrice: "₹2,499",
    details: [
      "Brand: boAt",
      "Battery: 40 Hours",
      "Bluetooth: 5.3",
      "Type: Wireless",
      "Noise Cancellation: Yes",
      "Charging: USB Type-C",
      "Water Resistance: IPX5",
      "Warranty: 1 Year",
    ],
  },
  {
    image: bag,
    heading: "Travel Backpack",
    price: "₹1,999",
    oldPrice: "₹2,999",
    details: [
      "Brand: American Tourister",
      "Material: Polyester",
      "Capacity: 30 Litres",
      "Compartments: 3",
      "Laptop Sleeve: Yes",
      "Water Resistant: Yes",
      "Color: Black",
      "Warranty: 1 Year",
    ],
  },
  {
    image: neckband,
    heading: "Bluetooth Neckband",
    price: "₹999",
    oldPrice: "₹1,499",
    details: [
      "Brand: boAt",
      "Battery: 30 Hours",
      "Bluetooth: 5.2",
      "Type: Wireless",
      "Charging: USB Type-C",
      "Microphone: Yes",
      "Fast Charging: Yes",
      "Warranty: 1 Year",
    ],
  },
  {
    image: smart,
    heading: "Smart Watch",
    price: "₹2,499",
    oldPrice: "₹3,999",
    details: [
      "Brand: Noise",
      "Display: AMOLED",
      "Bluetooth Calling: Yes",
      "Heart Rate Monitor: Yes",
      "Sleep Tracking: Yes",
      "Water Resistance: IP68",
      "Battery: 7 Days",
      "Warranty: 1 Year",
    ],
  },
  {
    image: sport,
    heading: "Sports Shoes",
    price: "₹1,799",
    oldPrice: "₹2,499",
    details: [
      "Brand: Puma",
      "Material: Mesh",
      "Sole: Rubber",
      "Type: Running Shoes",
      "Closure: Lace-Up",
      "Color: Black",
      "Gender: Men",
      "Warranty: 3 Months",
    ],
  },
  {
    image: wirelesss,
    heading: "Wireless Headphones",
    price: "₹2,999",
    oldPrice: "₹4,499",
    details: [
      "Brand: Sony",
      "Bluetooth: 5.3",
      "Battery: 50 Hours",
      "Noise Cancellation: Yes",
      "Microphone: Yes",
      "Charging: USB Type-C",
      "Type: Over-Ear",
      "Warranty: 1 Year",
    ],
  },
  {
    image: sunglass,
    heading: "Sunglasses",
    price: "₹799",
    oldPrice: "₹1,299",
    details: [
      "Brand: Fastrack",
      "Frame: Plastic",
      "Lens: UV Protection",
      "Frame Shape: Aviator",
      "Gender: Unisex",
      "Lens Color: Black",
      "Weight: Lightweight",
      "Warranty: 6 Months",
    ],
  },
];

  const dataList = data.map((datas, index) => (
  <Product
    key={index}
    image={datas.image}
    heading={datas.heading}
    price={datas.price}
    oldPrice={datas.oldPrice}
    details={datas.details}
  />
));

  return (
    <div>

      {/* Main Heading */}

      <div className="card-heading">

        <FontAwesomeIcon
          className="icon"
          icon={faBagShopping}
        />

        <div>
          <h1>
            Our <span>Products</span>
          </h1>

          <p className="main-paragraph">
            Find the best products at great prices!
          </p>
        </div>

      </div>


      {/* Search and Filter */}

      <div className="cards">

        <input
          className="text-box"
          placeholder="Search products..."
        />

        <div className="select-container">

          <select className="select-box">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Accessories</option>
            <option>Travel</option>
          </select>

          <FontAwesomeIcon
            icon={faChevronDown}
            className="select-icon"
          />

        </div>


        {/* Sorting */}

        <div className="select-container">

          <select className="select-list">
            <option>Sort by: Low to High</option>
            <option>Sort by: High to Low</option>
          </select>

          <FontAwesomeIcon
            icon={faChevronDown}
            className="select-icon"
          />

        </div>

      </div>


      {/* Product Cards */}

      <div className="product-list">

        {dataList}

      </div>

    </div>
  );
}

export default Dynamic;
