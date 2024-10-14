import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "../services";
import { getUrl } from "../utils";
import Barre from "../components/Barre";
import Courbe from "../components/Courbe";
import RadarChart from "../components/RadarChart";
import Cercle from "../components/Cercle";
import Information from "../components/Information";
import Aside from "../components/Aside";

import "../assets/styles/home.css";

function Home() {
  const { id } = useParams();

  const userActivityData = useFetch({
    url: `user/${id}/activity`,
    resource: "activities",
  });

  const [userAverageData, modifierUserAverage] = useState([]);
  const [userPerformanceData, modifierUserPerformance] = useState({});

  const userData = useFetch({
    url: `user/${id}`,
    resource: "users",
  });

  useEffect(() => {
    fetch(getUrl(`user/${id}/average-sessions`))
      .then((response) => response.json())
      .then((average) => {
        modifierUserAverage(average.data.sessions);
      });
  }, [id]);

  useEffect(() => {
    fetch(getUrl(`user/${id}/performance`))
      .then((response) => response.json())
      .then((performance) => {
        modifierUserPerformance(performance.data);
      });
  }, [id]);

  return (
    <div>
      <Aside />
      <main>
        <div>
          <h1>Bonjour {userData?.userInfos.firstName}</h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <section>
          <article>
            <div className="chart full-width">
              <Barre activities={userActivityData} />
            </div>
            <div className="charts-row">
              <div className="chart">
                <Courbe average={userAverageData} />
              </div>
              <div className="chart">
                {userPerformanceData.data && (
                  <RadarChart performance={userPerformanceData} />
                )}
              </div>
              <div className="chart">
                <Cercle score={userData?.score || userData?.todayScore} />
              </div>
            </div>
          </article>
          {userData && (
            <Information
              className="information"
              information={userData?.keyData}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default Home;
