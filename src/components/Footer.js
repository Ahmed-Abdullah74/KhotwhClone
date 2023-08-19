import CopyRight from "./FooterCopyRightAndApps";
import FooterLinks from "./FooterLinks";
import "../css/Footer.css";
import FooterLinksMobile from "./FooterLinksMobile";

function Footer() {
  return (
    <>
      <div className="footer pt-5 pb-5  text-white text-start">
        <div className="container">
          <FooterLinksMobile />
          <FooterLinks />
          <CopyRight />
        </div>
      </div>
    </>
  );
}

export default Footer;
