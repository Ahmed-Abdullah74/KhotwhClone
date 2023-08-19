import "../css/Footer.css";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function CopyRight() {
  return (
    <>
      <div className="cpoy-rights pt-4 pb-4">
        <div className="rights ">
          <img
            src="https://khotwh.com/cdn/shop/files/Asset-3-81_128x.png?v=1664798959"
            alt=".."
          />
          <p className="ms-3">
            Copyright © 2023, Khotwh. Developed by Digital Sellers Club
          </p>
        </div>
        <div className="social-links text-center">
          <FontAwesomeIcon icon={faFacebookF} className="me-3" />
          <FontAwesomeIcon icon={faInstagram} className="me-3" />
          <FontAwesomeIcon icon={faPinterestP} />
        </div>
        <div className="apps d-flex align-items-center justify-content-center">
          <img src="https://i.postimg.cc/NGxHGb6R/WTA.png" alt="" />
          <img src="https://i.postimg.cc/Qx4K1tnt/WTG.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default CopyRight;
