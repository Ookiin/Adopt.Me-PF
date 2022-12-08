import stl from "./Estado.module.css";
import React, { PureComponent, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector, useDispatch } from "react-redux";
import getmascotas from "../../Actions/getmascotas";


const data = [
  {
    name: 'En adopcion',
   
    pv: 4,
    // amt: 3000,
  },
  {
    name: 'En adopcion',

    pv: 2,
    // amt: 2210,
  },
  {
    name: 'En adopcion',
 
    pv: 1,
    // amt: 2290,
  },
  {
    name: 'En adopcion',
 
    pv: 3,
    // amt: 2200,
  },
  
];

export default function EstadoMascotas () {

const dispatch = useDispatch()
  const allpets = useSelector((state) => state.animales)
  
useEffect(() => {
  dispatch(getmascotas())
}, [dispatch])

// const cantidad = []

// for (let i = 0; i < allpets.length; i++) {
//   cantidad.push(allpets[i])
// }

// const cant = cantidad.map(({ estado }) => estado)

// const pv = cant.length

return (
    <div className={stl.grafica}>
        <div className={stl.title}>ESTADO DE LAS MASCOTAS</div>
      <ResponsiveContainer width="80%" aspect={3}>
        <BarChart
          width={50}
          height={500}
          data={allpets}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="estado" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar data="estado.length" fill="#8884d8" />
          {/* <Bar dataKey="3" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
    );
}
   
  

