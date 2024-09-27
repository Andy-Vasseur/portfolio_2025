// Assets
import AboutPicture from "/svg/face.svg";

function Presentation() {
    return (
        <div className="mt-8 px-6 pb-8 text-white border-b-2" id="about">
            <h1 className="text-4xl font-bold">
                Qui suis-je ?
            </h1>
            <div className="grid grid-cols-2 mt-8">
                <div>
                    <p className="text-lg leading-8">
                        Jeune développeur de 23 ans vivant à Pontoise, j&apos;ai toujours été passionné par la
                        création d&apos;applications utiles et pratiques en tout genre.
                    </p>
                    <p className="text-lg mt-8 leading-8">
                        Du site d&apos;e-commerce, à un portfolio, ou un site vitrine, je suis
                        toujours prêt à relever les challenges qui se tiennent devant moi.
                    </p>
                    <p className="text-lg mt-8 mb-10 leading-8">
                        Actuellement en recherche d'alternance pour une durée de 15 mois en tant que développeur fullstack, je suis particulièrement intéressé par les environnements innovants où je pourrai mettre à profit mes compétences techniques tout en apprenant de nouvelles technologies.
                    </p>
                    <a href="/cvandyvasseur.pdf" download className="bg-white text-[#0C0C0C] py-2 px-4 border-2 border-transparent rounded-lg transition-colors duration-300 ease-in-out hover:border-white hover:bg-transparent hover:text-white">
                        Voir mon CV
                    </a>
                </div>
                <div className="grid place-items-center -mt-8">
                    <img src={AboutPicture} alt="About" className="rounded-lg mt-4 w-3/4" />
                </div>
            </div>
        </div>
    )
}

// Exports
export default Presentation