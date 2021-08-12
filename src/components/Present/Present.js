import { Carousel } from "react-bootstrap"
import "./Present.css"

//Img for present
import perfil from "../../img/perfil.jpg"
import perfil2 from "../../img/perfil2.jpg"
import perfil3 from "../../img/perfil3.png"

const Present = () => {
    return (
        <div className="carrucel">
            <div className="CarrucelWidth">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded-3"
                            src={perfil}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded-3"
                            src={perfil2}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded-3"
                            src={perfil3}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="CarrucelText">
                <div>
                    Hi, I am <i className="text-primary">Andres Cuello</i>, I am programer Full Stack Junior Developer. 
                </div>
            </div>
        </div>
    );
}

export default Present;