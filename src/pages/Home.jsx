import Activite from "../components/Activite";
import Information from "../components/Information"
import Aside from "../components/Aside";
import "../assets/styles/home.css"

function Home() {
    return (
        <div>
            <Aside />
            <main>
                <div>
                    <h1>Bonjour</h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <section>
                    <Activite />
                    <Information /> 
                </section>            
            </main>
        </div>
    )
}

export default Home