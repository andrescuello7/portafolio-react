//Import react
import { Carousel } from "react-bootstrap"
import "./Present.css"

//Img for present
import perfil from "../../img/perfil.jpg"
import perfil2 from "../../img/perfil2.jpg"
import perfil3 from "../../img/perfil3.png"
import perfil4 from "../../img/perfil4.jpeg"

const Present = () => {
    return (
        <div className="carrucel">
            <div className="CarrucelWidth">
                <img
                    className="d-block w-100 rounded-3"
                    src={perfil}
                />
            </div>
            <div className="CarrucelText">
                <div>
                    Hi, I am <i className="text-primary">Andres Cuello</i>, I am programer Full Stack Junior Developer.
                </div>
                <div className="social">
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
    );
}

export default Present;