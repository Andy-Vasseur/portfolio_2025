// Assets
import { Link } from "react-router-dom";
import NotFoundSVG from "/svg/notfound.svg";

function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center mb-8 py-8 px-2 w-full border-y-2">
            <img src={NotFoundSVG} alt="Page not found" className="w-5/6" />
            <Link to="/" className="mt-8 py-2 px-4 bg-white text-[#0C0C0C] border-2 border-transparent rounded-lg transition-colors duration-300 ease-in-out hover:border-white hover:bg-transparent hover:text-white">
                Retour à l'accueil
            </Link>
        </div>
    );
}

// Exports
export default NotFound;