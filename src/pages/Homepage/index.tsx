// Components
import Wrapper from "../../components/Wrapper";
import Presentation from "../../components/Presentation";

function Homepage() {
    return (
        <div className="flex flex-col mt-[50px]">
            <Wrapper />
            <div className="px-6">
                <Presentation />
            </div>
        </div>
    );
}

// Exports
export default Homepage;