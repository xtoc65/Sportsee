import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import '../assets/styles/barre.css'

// Composant CustomTooltip pour personnaliser le contenu du tooltip
const CustomTooltip = ({ active, payload}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="intro">{`${payload[0].value} kg`}</p>
        <p className="intro">{` ${payload[1].value} KCal`}</p>
      </div>
    );
  }

  return null;
};

function Barre({activities}) {
  return (
    <div style={{ width: '100%', height: 400 }}>
      {/* Conteneur du titre et de la légende */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        {/* Titre positionné à gauche */}
        <h2 style={{ margin: 0 }}>Activité quotidienne</h2>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={activities}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
          barGap={5}  // Ajoute un espacement de 5px entre les barres
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis
            dataKey="day"
            tickFormatter={(day) => {
              const date = new Date(day);
              const dayOfMonth = String(date.getDate()).padStart(2, '0');
              return dayOfMonth;
            }}
          />
          <YAxis orientation="right"/>
          <Tooltip  content={<CustomTooltip />} cursor={{ fill: "rgba(200, 200, 200, 0.2)" }}/>
          <Legend verticalAlign="top" align="right"  wrapperStyle={{ padding: '10px' }} iconType="circle" />
          {/* Barre pour le poids en kilogrammes */}
          <Bar dataKey="kilogram" fill="#282D30" name="Poids (kg)" radius={[10, 10, 0, 0]} barSize={15}/>
          {/* Barre pour les calories brûlées */}
          <Bar dataKey="calories" fill="#E60000" name="Calories brûlées (KCal)" radius={[10, 10, 0, 0]} barSize={15}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Barre;