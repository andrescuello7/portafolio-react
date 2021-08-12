import { Card, Button } from "react-bootstrap"
import "./Jobs.css"

//Imagenes
import Urban from "../../img/Urban.png"
import Radio from "../../img/Radio.png"
import Movie from "../../img/Movies.png"
import Immedit from "../../img/Immedit.png"

const Jobs = () => {
    return (
        <div className="about">
            <div className="AboutTitle text-primary">
                <b className="border-bottom border-primary border-3">Jobs</b>
            </div>
            <div className="Jobs mt-5">
                <div>
                    <Card className="cardJob mt-2">
                        <a href="https://radio-web-1.herokuapp.com">
                            <Card.Img variant="top" src={Radio} />
                        </a>
                        <Card.Body>
                            <Card.Title>Radio Web</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <Card className="cardJob mt-2">
                    <a href="https://client-andromeda.herokuapp.com">
                        <Card.Img variant="top" src={Urban} />
                    </a>
                    <Card.Body>
                        <Card.Title>Urban City</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="cardJob mt-2">
                    <a>
                        <Card.Img variant="top" src={Movie} />
                    </a>
                    <Card.Body>
                        <Card.Title>Movies Api</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="cardJob mt-2">
                    <a>
                        <Card.Img variant="top" src={Immedit} />
                    </a>
                    <Card.Body>
                        <Card.Title>Immedit</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Jobs;