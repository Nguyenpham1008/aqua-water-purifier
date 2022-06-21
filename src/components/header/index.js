import React from "react";
import logoImg from "../../assests/logo.jpg";

const Header = () => (
  <div style={{ padding: 5, display: "flex", gap: 15, alignItems: "center" }}>
    <img src={logoImg} style={{ width: "20%", height: "auto" }} />
    <a>Home</a>
    <a>Ưu đãi</a>
    <a>Sản phẩm</a>
    <a>Cảm nhận</a>
    <a>Đặt mua</a>
  </div>
);

export default Header;
