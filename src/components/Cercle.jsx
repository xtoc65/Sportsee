import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import "../assets/styles/cercle.css"

function Cercle({score}) {
  // Préparer les données pour le graphique Pie
  const data = [
    { name: 'Score', value: score * 100 },    // Partie représentant le score
    { name: 'Restant', value: (1 - score) * 100 } // Partie représentant le reste (100% - score)
  ];


  const COLORS = ['#FF0000', '#F0F0F0']; 

  return (
    <div className='cercle'>

      <h2>Score</h2>

      {/* Graphique demi-cercle */}
      <PieChart width={300} height={250} className='demi_cercle'>
        <Pie
          data={data}
          cx="50%"
          cy="100%"          /* Centre le cercle en bas du conteneur */
          startAngle={180}   /* Commence à gauche */
          endAngle={0}       /* Termine à droite pour un demi-cercle */
          innerRadius={130}    /* Rayon interne */
          outerRadius={150}    /* Rayon externe */
          dataKey="value"
          cornerRadius={10}  /* Arrondir les bords de l'arc */
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      {/* Texte centré dans le demi-cercle */}
      <div className='texte'>
        <span style={{ fontSize: '28px', fontWeight: 'bold' }}>{`${score * 100}%`}</span>
        <br />
        <span style={{ fontSize: '16px', fontWeight: 'normal', color: '#888' }}>de votre objectif</span>
      </div>
    </div>
  );
}

export default Cercle;