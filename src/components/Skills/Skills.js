import { Card, ProgressBar } from "react-bootstrap"
import "./Skills.css"

const Skills = () => {
    return (
        <div className="about dateSkills">
            <div className="AboutTitle text-primary">
                <b className="border-bottom border-primary border-3">Skills</b>
            </div>
            <div className="Skills mt-5">
                <div className="SkillsDates">
                    <Card border="secundary p-2 m-2" className="SkillsCard">
                        <div className="d-flex mb-2">
                            <img className="SkillsImgs" src="data:image/png;base64,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" />
                            <b>HTML</b>
                        </div>
                    </Card>
                    <Card border="secundary p-2 m-2" className="SkillsCard">
                        <div className="d-flex mb-2">
                            <img className="SkillsImgsCuadrado" src="http://www.priteshgupta.com/wp-content/uploads/2011/10/CSS3-Logo.png" />
                            <b>CSS</b>
                        </div>
                    </Card>
                    <Card border="secundary p-2 m-2" className="SkillsCard">
                        <div className="d-flex mb-2">
                            <img className="SkillsImgs" src="data:image/png;base64,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" />
                            <b>Javascript</b>
                        </div>
                    </Card>
                    <Card border="secundary p-2 m-2" className="SkillsCard">
                        <div className="d-flex mb-2">
                            <img className="SkillsImgsCuadrado" src="data:image/png;base64,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" />
                            <b>Bootstrap</b>
                        </div>
                    </Card>
                </div>
                <div className="SkillsDates">
                    <Card border="secundary p-2 m-2" className="SkillsCard">
                        <div className="d-flex mb-2">
                            <img className="SkillsImgsCuadrado" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" />
                            <b className="ml-5">ReactJs</b>
                        </div>
                    </Card>
                    <Card border="secundary p-2 m-2" className="SkillsCard">
                        <div className="d-flex mb-2">
                            <img className="SkillsImgsCuadrado" src="https://media.istockphoto.com/vectors/nodejs-vector-logo-backend-programming-in-javascript-server-vector-id1195857274" />
                            <b>NodeJs</b>
                        </div>
                    </Card>
                    <Card border="secundary p-2 m-2" className="SkillsCard">
                        <div className="d-flex mb-2">
                            <img className="SkillsImgsCuadrado" src="http://lineadecodigo.com/wp-content/uploads/2014/04/mongodb.png" />
                            <b>MongoDb</b>
                        </div>
                    </Card>
                    <Card border="secundary p-2 m-2" className="SkillsCard">
                        <div className="d-flex mb-2">
                            <img className="SkillsImgsCuadrado" src="https://www.gstatic.com/devrel-devsite/prod/v6276805c2ff8bacc915973efaa269b575b44ae3dde218d0ec8425b822ec321de/firebase/images/touchicon-180.png" />
                            <b>FireBase</b>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Skills;