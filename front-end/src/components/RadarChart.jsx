import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";
import "../assets/styles/radar.css";

function RadarCharts({ performances }) {
  // Transformation des données pour remplacer les "kind" numériques par leur nom associé
  const { kind, data } = performances;

  function mapCategorieAvecDonnees(donnee) {
    const valeur = {
      value: donnee.value,
      kind: kind[donnee.kind],
    };
    return valeur;
  }
  const donnees = data.map(mapCategorieAvecDonnees);

  return (
    <div className="radar">
      <ResponsiveContainer width="100%" height="80%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={donnees}>
          <PolarGrid radialLines={false} stroke="#fff" />
          <PolarAngleAxis dataKey="kind" stroke="#fff" tickSize={10} />
          <Radar
            name="Performance"
            dataKey="value"
            stroke="red"
            fill="red"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadarCharts;
