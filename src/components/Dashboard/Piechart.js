import React from 'react';
import { PieChart, Pie } from "recharts";



const data = [
  { name: "Group A", value: 11931125089, fill: "#1565D8" },
  { name: "Group B", value: 6498880480, fill: "#000000" },
  
];

const Piechart = () => {
    return (
        <>
            <PieChart width={300} height={300} >
        
        <Pie
          data={data}
          cx={150}
          cy={120}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {/* {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))} */}
        </Pie>
        
      </PieChart>
        </>
    );
};

export default Piechart;