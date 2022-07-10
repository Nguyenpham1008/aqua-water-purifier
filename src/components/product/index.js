import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";

import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

import product1Img from "../../assests/product1.jpg";
import product2Img from "../../assests/product2.jpg";
import product3Img from "../../assests/product3.jpg";

export default function TitlebarImageList() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(() => theme.breakpoints.down("xs"));
  return (
    <ImageList sx={{ width: "100%", height: "auto" }}>
      <ImageListItem
        key="Subheader"
        cols={isSmallScreen ? 2 : 4}
      ></ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            className="max-w-xs"
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={
              <>
                <p style={{ textDecoration: "line-through", color: "red" }}>
                  {item.oldPrice}
                </p>
                <p>{item.newPrice} </p>
              </>
            }
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              ></IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: product1Img,
    title: "Máy 2 vòi tinh khiết và khoáng",
    oldPrice: "6.890.000 vnđ",
    newPrice: "5.690.000 vnđ",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: product2Img,
    title: "Máy 2 vòi nóng và nguội",
    oldPrice: "8.990.000 vnđ",
    newPrice: "7.890.000 vnđ",
  },
  {
    img: product3Img,
    title: "Máy 2 vòi 3 chức năng nóng nguội lạnh",
    oldPrice: "11.000.000 vnđ",
    newPrice: "9.990.000 vnđ",
  },
];
