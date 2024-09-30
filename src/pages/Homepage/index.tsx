// Components
import Wrapper from "../../components/Wrapper";
import Presentation from "../../components/Presentation";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";

function Homepage() {
    return (
        <div className="flex flex-col">
            <Wrapper />
            <div>
                <Presentation />
                <Projects />
                <Skills />
            </div>
        </div>
    );
}

// Exports
export default Homepage;