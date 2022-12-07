import stl from "../PanelAdminCharts/EnAdopcion.module.css";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector, useDispatch } from "react-redux";


const data = [
  {
    name: 'En adopcion',
   /*  uv: 4000, */
    pv: 40,
    amt: 3000,
  },
  {
    name: 'Adoptados',
  /*   uv: 3000, */
    pv: 20,
    amt: 2210,
  },
  {
    name: 'Perdidos',
   /*  uv: 2000, */
    pv: 10,
    amt: 2290,
  },
  {
    name: 'Buscados',
   /*  uv: 2780, */
    pv: 30,
    amt: 2200,
  },
  
];

export default function EnAdopcionChart () {

const animales = useSelector((state) => state.animales);
const animalesPerd = useSelector((state) => state.animalesPerdidos);

 



return (
    <div className={stl.grafica}>
        <div className={stl.title}>ESTADO DE LAS MASCOTAS</div>
      <ResponsiveContainer width="60%" aspect={3}>
        <BarChart
          width={100}
          height={300}
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
   
  

