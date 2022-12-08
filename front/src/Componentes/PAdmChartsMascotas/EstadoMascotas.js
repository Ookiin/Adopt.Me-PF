import stl from "./Estado.module.css";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector, useDispatch } from "react-redux";


const data = [
  {
    name: 'En adopcion',
   
    pv: 40,
    amt: 3000,
  },
  {
    name: 'Adoptados',

    pv: 20,
    amt: 2210,
  },
  {
    name: 'Perdidos',
 
    pv: 10,
    amt: 2290,
  },
  {
    name: 'Buscados',
 
    pv: 30,
    amt: 2200,
  },
  
];

export default function EstadoMascotas () {

const animales = useSelector((state) => state.animales);
/* const animalesPerd = useSelector((state) => state.animalesPerdidos); */





return (
    <div className={stl.grafica}>
        <div className={stl.title}>ESTADO DE LAS MASCOTAS</div>
      <ResponsiveContainer width="80%" aspect={3}>
        <BarChart
          width={50}
          height={500}
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
          <Bar dataKey="pv" fill="#8884d8" />
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
    );
}
   
  

