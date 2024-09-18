import Yoga from '../assets/yoga.png'
import Natation from '../assets/natation.png'
import Velo from '../assets/velo.png'
import Muscu from '../assets/muscu.png'
import '../assets/styles/aside.css'

function Aside() {
    return (
      <aside>
        <div>
            <img src={Yoga} alt="Logo Yoga" />
            <img src={Natation} alt="Logo Natation" />
            <img src={Velo} alt="Logo Velo" />
            <img src={Muscu} alt="Logo Musculation" />
        </div>
        <p>Copiryght, SportSee 2020</p>
      </aside>
    )
  }
  
  export default Aside