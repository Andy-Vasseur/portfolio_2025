// Components
import Wrapper from "../../components/Wrapper";
import Presentation from "../../components/Presentation";

function Homepage() {
    return (
        <div className="flex flex-col">
            <Wrapper />
            <div>
                <Presentation />
            </div>
        </div>
    );
}

// Exports
export default Homepage;