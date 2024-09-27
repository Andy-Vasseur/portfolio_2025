// Components
import Wrapper from "../../components/Wrapper";
import Presentation from "../../components/Presentation";
import Skills from "../../components/Skills";

function Homepage() {
    return (
        <div className="flex flex-col">
            <Wrapper />
            <div>
                <Presentation />
                <Skills />
            </div>
        </div>
    );
}

// Exports
export default Homepage;