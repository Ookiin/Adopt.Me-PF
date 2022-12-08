import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import stl from "../PAdmChartsMascotas/Buscados.module.css"

const data = [
  {
    name: 'Perros',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Gatos',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  
];

export default function Buscados (){
  

  
return (
  <div className={stl.grafica}>
      <div className={stl.title}>MASCOTAS BUSCADOS</div>
      <ResponsiveContainer width="70%" aspect={3}>
        <LineChart
          width={70}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    );
  
}