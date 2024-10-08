// Components
import Wrapper from "../../components/Wrapper";
import Presentation from "../../components/Presentation";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

function Homepage() {
    return (
        <div className="flex flex-col">
            <Wrapper />
            <div>
                <Presentation />
                <Projects />
                <Skills />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

// Exports
export default Homepage;