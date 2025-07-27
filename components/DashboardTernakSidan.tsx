"use client";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ['#9ABD98', "#62875F", "#1C5838",];

const dataVaksin = [
  { name: "Sudah pernah", value: 2 },
  { name: "Belum pernah", value: 115},
];

const dataDisinfektan = [
  { name: "Rutin", value: 0 },
  { name: "Jarang", value: 6 },
  {name: "Tidak Pernah", value: 110}
];

type DataItem = {
  name: string;
  value: number;
};

type ChartBoxProps = {
  title: string;
  data: DataItem[];
};

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
      fontWeight={600}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const ChartBox: React.FC<ChartBoxProps> = ({ title, data }) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="bg-white rounded-2xl p-6 shadow w-full max-w-sm">
      <h4 className="text-center text-[14px] font-semibold mb-4 leading-tight">
        {title}
      </h4>

      <div className="flex justify-center">
        <PieChart width={160} height={160}>
          <Pie
  data={data}
  cx="50%"
  cy="50%"
  outerRadius={70}
  dataKey="value"
  label={renderCustomizedLabel} // << Tambahkan ini
  labelLine={false} // << Opsional: menghilangkan garis label
>
  {data.map((_, index) => (
    <Cell
      key={`cell-${index}`}
      fill={COLORS[index % COLORS.length]}
    />
  ))}
</Pie>

        </PieChart>
      </div>

      {/* Legend + Value */}
      <div className="flex flex-col items-center gap-1 mt-4 text-sm">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span>{entry.name}: {entry.value} ekor</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function DesaBelokSidanTernak() {
  return (
    <div className="bg-[#fefcec]  px-6 md:px-16 py-8">
      {/* Header Section */}
       <div className="flex flex-wrap justify-between items-center px-4 md:px-44 mb-10">
  <h2 className="text-xl font-bold leading-snug">
    Pendataan Populasi Ternak <br className="block md:hidden" />
    Desa Belok/Sidan (Selantang)
  </h2>

  <div className="bg-white px-4 py-2 rounded-lg shadow text-[15px] font-medium mt-2 md:mt-0">
    Jumlah Sapi yang Didata: <span className="font-bold text-black">117</span>
  </div>
</div>


      {/* Chart Section */}
      <div className="flex flex-wrap justify-center gap-6">
        <ChartBox
          title="Status Vaksin PMK (Penyakit Mulut dan Kuku) pada Sapi"
          data={dataVaksin}
        />
        <ChartBox
          title="Penggunaan Disinfektan oleh Peternak Sapi"
          data={dataDisinfektan}
        />
      </div>
    </div>
  );
}

