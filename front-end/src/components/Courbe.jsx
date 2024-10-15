import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import "../assets/styles/courbes.css";

// Correspondance pour les jours de la semaine
const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];

function CustomTooltip({ payload, active }) {
  if (active && payload && payload.length) {
    return (
      <div
        style={{ backgroundColor: "white", padding: "0.5em", height: "1em" }}
      >
        <p
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "1em",
            margin: "0",
          }}
        >{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
}

function Courbe({ averages }) {
  return (
    <div className="courbe">
      <h2>Durée moyenne des sessions</h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={averages}>
          <XAxis
            dataKey="day"
            tickFormatter={(day) => daysOfWeek[day - 1]}
            tick={{ fill: "white" }}
            axisLine={false}
            tickLine={false}
            padding={{ left: 5, right: 5 }} // Ajoute la marge de 5px avant L et après D
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            dot={false} // Pas de points sur la courbe
            activeDot={(props) => (
              <circle
                cx={props.cx}
                cy={props.cy}
                r={5}
                stroke="white"
                strokeWidth={2}
                fill="white"
              />
            )}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Courbe;
