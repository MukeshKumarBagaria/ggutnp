import React from 'react'
import { Chart } from "react-google-charts";
export const data = [
  ["Branch", "Students Per Branch"],
  ["IT", 82],
  ["CSE", 80],
  ["ECE", 70],
  ["MECH TV", 75],
  ["IP", 60],
  ["CIVIL", 76],
  ["CHEM.", 75],
  ["ELECTRICAL", 74],


];
export const options = {
  title: "Graduating Batch 2022",
  is3D: true,
};
function GraduatingChart() {
 
  return (
    <>
   <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"700px"}
    />
    </>
  )
}

export default GraduatingChart