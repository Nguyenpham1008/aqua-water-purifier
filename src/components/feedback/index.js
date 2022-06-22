import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import guest1Img from "../../assests/khach1.jpg";
import guest2Img from "../../assests/khach2.jpg";
import guest3Img from "../../assests/khach3.jpg";
import guest4Img from "../../assests/khach4.jpg";
import guest5Img from "../../assests/khach5.jpg";
import guest6Img from "../../assests/khach6.jpg";
import guest7Img from "../../assests/khach7.jpg";
import guest8Img from "../../assests/khach8.jpg";

export default function TitlebarBelowMasonryImageList() {
  return (
    <div className="text-center bg-sky-50">
      <p className="md:text-3xl text-2xl font-medium py-4 "> Khách hàng </p>
      <Box sx={{ width: "100%", height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar position="below" title={item.author} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}

const itemData = [
  {
    img: guest1Img,
  },
  {
    img: guest2Img,
  },
  {
    img: guest3Img,
  },
  {
    img: guest4Img,
  },
  {
    img: guest5Img,
  },
  {
    img: guest6Img,
  },
  {
    img: guest7Img,
  },
  {
    img: guest8Img,
  },
];
