// Assets
import LogoWhite from "/svg/logo_white.svg";

function Wrapper() {
    return (
        <div className="flex justify-center items-center py-8 px-2 w-full border-y-2">
            <img src={LogoWhite} alt="Andy Vasseur's Title" className="w-5/6" />
        </div>
    );
}

// Exports
export default Wrapper;