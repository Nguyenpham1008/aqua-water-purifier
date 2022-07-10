import React from "react";

import logoImg from "../../assests/logo.jpg";

const Footer = () => (
  <footer class="footer-distributed">
    <div class="footer-left">
      <h3>AQUA</h3>

      <p class="footer-company-name"> © 2022</p>
    </div>

    <div class="footer-center">
      <div>
        <i class="fa fa-map-marker"></i>
        <p>{`1/4/1C Đường B, Tổ 40, Kp6, P.Hiệp Bình Chánh,TP. Thủ Đức`}</p>
      </div>

      <div>
        <i class="fa fa-phone"></i>
        <p>Hotline: 035 332 1421 </p>
      </div>

      <div>
        <i class="fa fa-envelope"></i>
        <p>
          <a href="mailto:aquamaylocnuoc@gmail.com">aquamaylocnuoc@gmail.com</a>
        </p>
      </div>
    </div>

    <div class="footer-right">
      <div class="footer-icons">
        <a href="#">
          <i class="fa fa-facebook"></i>
        </a>
        <a href="#">
          <i class="fa fa-linkedin"></i>
        </a>
        <a href="#">
          <i class="fa fa-github"></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
