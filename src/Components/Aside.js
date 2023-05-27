import aside from "../images/illustration-sign-up-desktop.svg";
import aside2 from "../images/illustration-sign-up-mobile.svg";

function Aside() {
    return(
        <>
            <div className="relative">
                <img src={aside} alt="desktop" className="w-full h-auto hidden md:block" />
                <img src={aside2} alt="mobile" className="w-full object-fill mb-4 h-auto block md:hidden" />
            </div>
        </>
    );
}

export default Aside;