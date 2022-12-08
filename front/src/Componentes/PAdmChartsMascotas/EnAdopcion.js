import React, { PureComponent, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import stl from "../PAdmChartsMascotas/EnAdopcion.module.css"
import { useDispatch, useSelector } from "react-redux";
import getmascotas from "../../Actions/getmascotas";

// const data = [
//   {
//     name: 'Perros',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Gatos',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
  
// ];

export default function EnAdopcion (){

  const dispatch = useDispatch()
  const allpets = useSelector((state) => state.animales)
  
useEffect(() => {
  dispatch(getmascotas())
}, [dispatch])

console.log("allpets", allpets)

  
return (
  <div className={stl.grafica}>
      <div className={stl.title}>MASCOTAS EN ADOPCION</div>
      <ResponsiveContainer width="70%" aspect={3}>
        <LineChart
          width={70}
          height={400}
          data={allpets}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nombre" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="estado" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="edad" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    );
  
}