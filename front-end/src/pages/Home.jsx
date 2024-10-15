import { useParams } from "react-router-dom";

import { useFetch } from "../services";
import Barre from "../components/Barre";
import Courbe from "../components/Courbe";
import RadarChart from "../components/RadarChart";
import Cercle from "../components/Cercle";
import Information from "../components/Information";
import Aside from "../components/Aside";

import "../assets/styles/home.css";
import Error from "../components/Error";

function Home() {
  const { id } = useParams();

  const userActivityData = useFetch({
    url: `user/${id}/activity`,
    resource: "activities",
  });
  const activitiesHasError =
    userActivityData?.hasError && userActivityData?.resource === "activities";

  const userAverageData = useFetch({
    url: `user/${id}/average-sessions`,
    resource: "averages",
  });
  const averagesHasError =
    userAverageData?.hasError && userAverageData?.resource === "averages";

  const userPerformanceData = useFetch({
    url: `user/${id}/performance`,
    resource: "performances",
  });
  const userPerformanceHasError =
    userPerformanceData?.hasError &&
    userPerformanceData?.resource === "performances";

  const userData = useFetch({
    url: `user/${id}`,
    resource: "users",
  });
  const userDataHasError = userData?.hasError && userData?.resource === "users";

  return (
    <div>
      <Aside />
      <main>
        <div>
          <h1>
            Bonjour{" "}
            {userDataHasError ? (
              <Error description="probléme avec le prénom" />
            ) : (
              userData?.userInfos.firstName
            )}
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <section>
          <article>
            <div className="chart full-width">
              {activitiesHasError ? (
                <Error description="probléme avec activité" />
              ) : (
                <Barre activities={userActivityData} />
              )}
            </div>
            <div className="charts-row">
              <div className="chart">
                {averagesHasError ? (
                  <Error description="probléme avec average" />
                ) : (
                  <Courbe averages={userAverageData} />
                )}
              </div>
              <div className="chart">
                {userPerformanceHasError ? (
                  <Error description="probléme avec performance" />
                ) : (
                  userPerformanceData && (
                    <RadarChart performances={userPerformanceData} />
                  )
                )}
              </div>
              <div className="chart">
                {userDataHasError ? (
                  <Error description="probléme avec le diagrame cercle" />
                ) : (
                  <Cercle score={userData?.score || userData?.todayScore} />
                )}
              </div>
            </div>
          </article>
          {userDataHasError ? (
            <Error description="probléme avec les informations" />
          ) : (
            userData && (
              <Information
                className="information"
                information={userData?.keyData}
              />
            )
          )}
        </section>
      </main>
    </div>
  );
}

export default Home;
