// Imports
import { Link } from 'react-router-dom';

const Navigation = () => {
    const smoothScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className="fixed top-0 left-0 flex justify-between items-center w-full h-[50px] text-white border-b border-white bg-[#0C0C0C]">
            {/* <nav className="flex justify-between items-center w-full h-[50px] text-white border-b border-white bg-[#0C0C0C]"> */}
            <div className="flex justify-start items-center h-full">
                <ul className="flex justify-center items-center gap-4 h-full text-white uppercase text-xs font-medium">
                    <li className="flex justify-center items-center w-[50px] h-[50px] text-[#0C0C0C] font-black bg-white">
                        <Link to="/" className="hover:underline">
                            AV
                        </Link>
                    </li>
                    <li className="flex justify-center items-center h-full">
                        <a href="#about" onClick={() => smoothScrollTo('about')} className="hover:underline">
                            A propos
                        </a>
                    </li>
                    <li className="flex justify-center items-center h-full">
                        <a href="#skills" className="hover:underline">
                            Compétences
                        </a>
                    </li>
                    <li className="flex justify-center items-center h-full">
                        <a href="#projects" className="hover:underline">
                            Projets
                        </a>
                    </li>
                    <li className="flex justify-center items-center h-full">
                        <a href="#contact" className="hover:underline">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

// Exports
export default Navigation;