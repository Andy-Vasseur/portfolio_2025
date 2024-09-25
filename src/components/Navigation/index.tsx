// Imports
import { Link } from 'react-router-dom';

// Props
const Navigation = () => {
    return (
        <nav className="fixed top-0 left-0 flex justify-between items-center w-full h-[50px] bg-[#0C0C0C] text-white">
            <div className="flex justify-start items-center h-full">
                <ul className="flex justify-center items-center gap-4 h-full text-white uppercase text-xs font-medium">
                    <li className="flex justify-center items-center w-[50px] h-[50px] text-[#0C0C0C] font-black bg-white">
                        <Link to="/" className="hover:underline">
                            AV
                        </Link>
                    </li>
                    <li className="flex justify-center items-center h-full">
                        <Link to="/about" className="hover:underline">
                            A propos
                        </Link>
                    </li>
                    <li className="flex justify-center items-center h-full">
                        <Link to="/skills" className="hover:underline">
                            Compétences
                        </Link>
                    </li>
                    <li className="flex justify-center items-center h-full">
                        <Link to="/projects" className="hover:underline">
                            Projets
                        </Link>
                    </li>
                    <li className="flex justify-center items-center h-full">
                        <Link to="/contact" className="hover:underline">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

// Exports
export default Navigation;