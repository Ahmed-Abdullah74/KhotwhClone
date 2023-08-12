import CopyRight from './FooterCopyRightAndApps'
import FooterLinks from './FooterLinks'
import "../css/Footer.css"

function Footer() {
    return (
        <>
            <div className="footer pt-5 pb-5 position-sticky z-n1 text-white text-start">
                <div className="container">
                    <FooterLinks />
                    <CopyRight />
                </div>
            </div>
        </>
    )
}

export default Footer