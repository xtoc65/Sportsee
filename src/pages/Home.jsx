import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Barre from "../components/Barre";
import Courbe from "../components/Courbe"
import RadarChart from "../components/RadarChart";
import Cercle from "../components/Cercle";
import Information from "../components/Information"
import Aside from "../components/Aside";

import "../assets/styles/home.css"

function Home() {
    const { id } = useParams();
    if(id === undefined){
        // return <PageNotFound />
    }
    const [userActivityData, modifierUserActivity] = useState([]) 
    const [userAverageData, modifierUserAverage] = useState([]) 
    const [userPerformanceData, modifierUserPerformance] = useState({}) 
    const [userScoreData, modifierUserScore] = useState(null) 
    const [userInformationData, modifierUserInformation] = useState({}) 
    const [userInfos, modifierUserInfos] = useState({})

    useEffect(() => {
    fetch(`http://localhost:3000/user/${id}/activity`)
        .then(response => response.json())
        .then((activity) => {
            modifierUserActivity(activity.data.sessions)
        })
    },[])

    useEffect(() => {
    fetch(`http://localhost:3000/user/${id}/average-sessions`)
        .then(response => response.json())
        .then((average) => {
            modifierUserAverage(average.data.sessions)
        })
    },[])

    useEffect(() => {
    fetch(`http://localhost:3000/user/${id}/performance`)
        .then(response => response.json())
        .then((performance) => {
            modifierUserPerformance(performance.data)
        })
    },[])

    useEffect(() => {
    fetch(`http://localhost:3000/user/${id}`)
        .then(response => response.json())
        .then((reponse) => {
            modifierUserScore(reponse.data.score || reponse.data.todayScore)
            modifierUserInformation(reponse.data.keyData)
            modifierUserInfos(reponse.data.userInfos)
        })
    },[])

    return (
        <div>
            <Aside />
            <main>
                <div>
                    <h1>Bonjour {userInfos.firstName}</h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <section>
                    <article>
                        <div className="chart full-width">
                        <Barre activities={userActivityData}/>
                        </div>
                        <div className="charts-row">
                            <div className="chart">
                                <Courbe average={userAverageData}/>
                            </div>
                            <div className="chart">
                                {userPerformanceData.data && <RadarChart performance={userPerformanceData}/>}
                            </div>
                            <div className="chart">
                                <Cercle score={userScoreData}/>
                            </div>
                        </div>
                    </article>
                    <Information className="information" information={userInformationData}/>
                </section>   
            </main>
        </div>
    )
}

export default Home