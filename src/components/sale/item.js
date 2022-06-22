import React from "react";

import Avatar from "@mui/material/Avatar";

import priceImg from "../../assests/best_price.jpg";
import gopLaiSuatImg from "../../assests/buyer.jpg";
import warrantyImg from "../../assests/warranty.png";
import maintainanceImg from "../../assests/maintannance.png";

const getImage = (type) => {
  switch (type) {
    case "price":
      return priceImg;
      break;
    case "buyer":
      return gopLaiSuatImg;
      break;
    case "warranty":
      return warrantyImg;
      break;
    case "maintannance":
      return maintainanceImg;
    default:
    // code block
  }
};

const drawerWidth = {
  width: "100px",
  height: "100px",
  "@media (min-width: 780px)": {
    width: "150px",
    height: "150px",
  },
};

const Item = ({ message, type }) => (
  <div
    className="pt-3 md:pt-0"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Avatar alt="Remy Sharp" src={getImage(type)} sx={drawerWidth} />
    <p className="font-medium">{message}</p>
  </div>
);

export default Item;
