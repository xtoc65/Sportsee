import Calorie from "../assets/calorie.png"
import Proteines from "../assets/protein.png"
import Glucide from "../assets/glucides.png"
import Lipides from "../assets/lipides.png"
import "../assets/styles/information.css"

function Information() {
    return (
        <div className="info">
            <img src={Calorie} alt="Logo Calorie" />
            <img src={Proteines} alt="Logo Proteines" />
            <img src={Glucide} alt="Logo Glucide" />
            <img src={Lipides} alt="Logo Lipides" />
        </div>
    )
}

export default Information