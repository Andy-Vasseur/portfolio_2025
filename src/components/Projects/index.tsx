function Projects() {

    const projects = [
        {
            title: "Amazon Clone",
            description: "Reproduction du site Amazon ",
            language: [
                {
                    name: "React",
                },
                {
                    name: "Typescript",
                },
                {
                    name: "MongoDB",
                }
            ],
            image: "/img/amazon.webp"
        },
        {
            title: "Ghibliothèque",
            description: "Site de recherche de films du studio Ghibli",
            language: [
                {
                    name: "React",
                },
                {
                    name: "ExpressJS",
                },
                {
                    name: "API",
                }
            ],
            image: "/img/ghibli.webp"
        },
        {
            title: "Le Bon Chasseur",
            description: "Site d'informations sur le jeux vidéo The Hunter Call of the Wild",
            language: [
                {
                    name: "React",
                },
                {
                    name: "Typescript",
                },
                {
                    name: "PostgreSQL",
                }
            ],
            image: "/img/lebonchasseur.webp"
        },
        {
            title: "Movie App",
            description: "Application de recherche de films",
            language: [
                {
                    name: "NextJS",
                },
                {
                    name: "SCSS",
                }
            ],
            image: "/img/movieapp.webp"
        },
        {
            title: "Netflix Clone",
            description: "Reproduction du site Netflix",
            language: [
                {
                    name: "React",
                },
                {
                    name: "SCSS",
                },
                {
                    name: "API",
                },
                {
                    name: "Firebase",
                }
            ],
            image: "/img/netflix.webp"
        },
        {
            title: "O-Stretch",
            description: "Site de conseils et d'exercices d'étirements",
            language: [
                {
                    name: "React",
                },
                {
                    name: "SCSS",
                },
                {
                    name: "API",
                },
                {
                    name: "PostgreSQL",
                }
            ],
            image: "/img/ostretch.webp"
        },
        {
            title: "PokeApp",
            description: "Application de recherche de pokémons",
            language: [
                {
                    name: "Typescript",
                },
                {
                    name: "SCSS",
                },
                {
                    name: "API",
                }
            ],
            image: "/img/pokeapp.webp"
        },
        {
            title: "Portfolio",
            description: "Portfolio personnel actuel",
            language: [
                {
                    name: "React",
                },
                {
                    name: "Typescript",
                },
                {
                    name: "TailwindCSS",
                },
            ],
            image: "/img/portfolio.webp"
        },
        {
            title: "Preview Card",
            description: "Exercice Frontend Mentor",
            language: [
                {
                    name: "React",
                },
                {
                    name: "SCSS",
                }
            ],
            image: "/img/previewcard.webp"
        },
        {
            title: "Border Radius Generator",
            description: "Générateur de bordures CSS",
            language: [
                {
                    name: "React",
                },
                {
                    name: "SCSS",
                }
            ],
            image: "/img/radiusgenerator.webp"
        },
        {
            title: "REST Countries API",
            description: "Application de recherche de pays",
            language: [
                {
                    name: "React",
                },
                {
                    name: "SCSS",
                },
                {
                    name: "API",
                }
            ],
            image: "/img/restcountries.webp"
        },
        {
            title: "Starbucks Clone",
            description: "Reproduction du site Starbucks",
            language: [
                {
                    name: "React",
                },
                {
                    name: "SCSS",
                }
            ],
            image: "/img/starbucks.webp"
        },
        {
            title: "Task Board",
            description: "Application de gestion de tâches à faire",
            language: [
                {
                    name: "React",
                },
                {
                    name: "Typescript",
                },
                {
                    name: "TailwindCSS",
                },
                {
                    name: "ExpressJS",
                }
            ],
            image: "/img/taskboard.webp"
        }
    ]

    return (
        <div className="mt-8 px-6 pb-8 text-white border-b-2" id="projects">
            <h1 className="text-4xl font-bold">
                Projets
            </h1>

            <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div key={index} className="grid place-items-center w-full h-full p-4 rounded-lg shadow-neon">
                        <img src={project.image} loading="lazy" alt={project.title}
                            className="rounded-lg" />
                        <h2 className="text-2xl font-bold mt-4">{project.title}</h2>
                        <p className="text-center mt-4">{project.description}</p>
                        <p className="text-center mt-4">
                            {project.language.map((language, index) => (
                                <span key={index} className={`px-2 py-1 m-1 rounded-lg border-2`}>{language.name}</span>
                            ))}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

// Exports
export default Projects;