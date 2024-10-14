import GraphiqueEx from "../assets/graphiqueEx.png"

function Activite() {
    return (
        <div>
            <h2>Activité quotidienne</h2>
            <p>Graphiqe en bar</p>
            <h2>Durée moyenne des sessions</h2>
            <p>Graphiqe en ligne</p>
            <h2>Intensité</h2>
            <img src={GraphiqueEx} alt="Logo Graphique" />
            <h2>Score</h2>
            <p>Graphiqe en cercle</p>
        </div>
    )
}

export default Activite