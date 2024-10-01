// Assets
import ReactIcon from "/img/frontend/react.webp";
import TypescriptIcon from "/img/frontend/typescript.webp";
import SassIcon from "/img/frontend/sass.webp";
import ElectronIcon from "/img/frontend/electron.webp";
import TailwindIcon from "/img/frontend/tailwindcss.webp";
import ExpressIcon from "/img/backend/express.webp";
import NodeIcon from "/img/backend/node.webp";
import MongoIcon from "/img/backend/mongo.webp";
import PostgreSQLIcon from "/img/backend/postgre.webp";
import PhotoshopIcon from "/img/softwares/photoshop.webp";
import AndroidIcon from "/img/softwares/androidstudio.webp";
import PostmanIcon from "/img/softwares/postman.webp";
import FigmaIcon from "/img/softwares/figma.webp";

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
                                <span className="p-3  flex justify-center items-center w-20 h-20 bg-black rounded-lg shadow-neon">
                                    <img src={skill.icon} alt={skill.name} loading="lazy" className="p-3 w-full" />
                                </span>
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
                                <span className="p-3  flex justify-center items-center w-20 h-20 bg-black rounded-lg shadow-neon">
                                    <img src={skill.icon} alt={skill.name} loading="lazy" className="p-3 " />
                                </span>
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
                                <span className="p-3  flex justify-center items-center w-20 h-20 bg-black rounded-lg shadow-neon">
                                    <img src={software.icon} alt={software.name} loading="lazy" className="p-3 h-full" />
                                </span>
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