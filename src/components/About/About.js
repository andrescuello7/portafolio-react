import "./About.css"

const About = () => {
    return (
        <div className="about">
            <div className="AboutTitle text-primary">
                <b className="border-bottom border-primary border-3">About</b>
            </div>
            <div className="AboutDate">
                <div className="m-2">
                    <img
                        className="AboutImg"
                        src="https://a-static.besthdwallpaper.com/computador-de-casa-papel-pintado-2560x1440-16849_51.jpg"
                    />
                </div>
                <div className="AboutText m-2">
                    <div>
                        <h2>I'm Andres Cuello</h2>
                        <div>Hello, I am programer Frontend Junior and Backend Developer, i am programing from april of 2020, i have mys studies of Rolling Code School, they taught me of Html5, Css, Bootstrap, Git, JavaScript, ReactJs, NodeJs, MongoDb and work in team, in this moment i am working of freelance.</div>
                    </div>
                    <div className="mt-5 social">
                        <a href="https://www.facebook.com/andres.cuello.14/">
                            <span className="fab fa-facebook-f icon-favicon"></span>
                        </a>
                        <a href="https://www.instagram.com/4ndres_cuello/?hl=es">
                            <span className="fab fa-instagram icon-favicon"></span>
                        </a>
                        <a href="https://github.com/andrescuello7">
                            <span className="fab fa-github icon-favicon"></span>
                        </a>
                        <a href="https://www.linkedin.com/in/silvio-andres-cuello-a9a1b11bb/">
                            <span className="fab fa-linkedin icon-favicon"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;