function Footer() {
    const links = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/andy-vasseur/',
            icon: '/img/footer/linkedin.webp'
        },
        {
            name: 'Github',
            url: 'https://github.com/Andy-Vasseur',
            icon: '/img/footer/github.webp'
        },
        {
            name: 'CV',
            url: '/cvandyvasseur.pdf',
            icon: '/img/footer/cv.webp'
        }
    ]

    // Get the atual year
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-8 px-6 pb-8 text-white">
            <div className="flex justify-center items-center">
                {
                    links.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" rel="noreferrer" className="flex justify-center items-center mx-3 p-[14.5px] w-14 h-14 rounded-full shadow-neon bg-black transition duration-300 ease-in-out hover:shadow-none" title={link.name}>
                            <img src={link.icon} alt={link.name} className="flex justify-center items-center w-full object-cover" />
                        </a>
                    ))
                }
            </div>
            <p className="text-center mt-6">Andy Vasseur - © {currentYear}</p>
        </footer >
    )
}

export default Footer;