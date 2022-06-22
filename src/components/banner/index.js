import React from "react";

import bannerImg from "../../assests/banner.jpeg";

const Banner = () => (
  <div style={{ position: "relative" }}>
    <img
      style={{
        width: "100%",
        height: "auto",
        maxHeight: 500,
      }}
      src={bannerImg}
    />

    <div
      className=""
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 100,
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <p className="md:text-2xl text-xs text-blue-700">
        Đại lý chuyên phân phối các dòng máy lọc nước AQUA
      </p>
      <p className="md:text-2xl font-bold pt-2 text-blue-700">
        TP.HCM, ĐỒNG NAI, BÌNH DƯƠNG
      </p>
    </div>
  </div>
);

export default Banner;
