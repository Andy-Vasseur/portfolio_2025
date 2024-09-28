// Assets
import ReactIcon from "/svg/frontend/react.svg";
import TypescriptIcon from "/svg/frontend/typescript.svg";
import SassIcon from "/svg/frontend/sass.svg";
import ElectronIcon from "/svg/frontend/electron.svg";
import TailwindIcon from "/svg/frontend/tailwindcss.svg";
import ExpressIcon from "/svg/backend/express.svg";
import NodeIcon from "/svg/backend/node.svg";
import MongoIcon from "/svg/backend/mongo.svg";
import PostgreSQLIcon from "/svg/backend/postgre.svg";
import PhotoshopIcon from "/svg/softwares/photoshop.svg";
import AndroidIcon from "/svg/softwares/androidstudio.svg";
import PostmanIcon from "/svg/softwares/postman.svg";
import FigmaIcon from "/svg/softwares/figma.svg";

function Skills() {
    const frontendSkills = [
        {
            name: "React",
            icon: ReactIcon,
        },
        {
            name: "Typescript",
            icon: TypescriptIcon,
        },
        {
            name: "TailwindCSS",
            icon: TailwindIcon,
        },
        {
            name: "Sass",
            icon: SassIcon,
        },
        {
            name: "Electron",
            icon: ElectronIcon,
        }
    ];

    const backendSkills = [
        {
            name: "Express",
            icon: ExpressIcon,
        },
        {
            name: "Typescript",
            icon: TypescriptIcon,
        },
        {
            name: "Node",
            icon: NodeIcon,
        },
        {
            name: "MongoDB",
            icon: MongoIcon,
        },
        {
            name: "PostgreSQL",
            icon: PostgreSQLIcon,
        }
    ];

    const softwares = [
        {
            name: "Postman",
            icon: PostmanIcon,
        },
        {
            name: "PGAdmin",
            icon: PostgreSQLIcon,
        },
        {
            name: "Android Studio",
            icon: AndroidIcon,
        },
        {
            name: "Photoshop",
            icon: PhotoshopIcon,
        },
        {
            name: "Figma",
            icon: FigmaIcon,
        }
    ]

    return (
        <div className="mt-8 px-6 pb-8 text-white border-b-2" id="skills">
            <h1 className="text-4xl font-bold">
                Compétences
            </h1>

            <div className="grid grid-cols-1 gap-8 mt-8">
                <div className="grid grid-cols-1 gap-8">
                    <h3 className="text-2xl font-medium">Frontend</h3>
                    <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
                        {frontendSkills.map((skill, index) => (
                            <div key={index} className="grid place-items-center">
                                <img src={skill.icon} alt={skill.name} className="rounded-lg w-16 h-16 bg-black p-4 shadow-neon" />
                                <p className="mt-3 md:mt-4 text-md text-center md:text-lg">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    <h3 className="text-2xl font-medium">Backend</h3>
                    <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
                        {backendSkills.map((skill, index) => (
                            <div key={index} className="grid place-items-center">
                                <img src={skill.icon} alt={skill.name} className="rounded-lg w-16 h-16 bg-black p-4 shadow-neon" />
                                <p className="mt-3 md:mt-4 text-md text-center md:text-lg">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    <h3 className="text-2xl font-medium">Logiciels</h3>
                    <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
                        {softwares.map((software, index) => (
                            <div key={index} className="grid place-items-center">
                                <img src={software.icon} alt={software.name} className="rounded-lg w-16 h-16 bg-black p-4 shadow-neon" />
                                <p className="mt-3 md:mt-4 text-md text-center md:text-lg">{software.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Exports
export default Skills;