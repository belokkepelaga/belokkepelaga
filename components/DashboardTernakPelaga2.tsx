'use client';
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#9ABD98', '#E0E0E0'];

const dataJenisTernak = [
  { name: 'Sapi', value: 350 },
  { name: 'Babi', value: 150 },
];

const dataVaksinasi = [
  { name: 'Sudah', value: 400 },
  { name: 'Belum', value: 100 },
];

const dataObatCacingSapi = [
  { name: 'Sudah', value: 300 },
  { name: 'Belum', value: 200 },
];

const dataObatCacingBabi = [
  { name: 'Sudah', value: 200 },
  { name: 'Belum', value: 150 },
];

const dataDisinfektan = [
  { name: 'Sudah', value: 420 },
  { name: 'Belum', value: 80 },
];

const ChartComponent = ({
  title,
  data,
}: {
  title: string;
  data: { name: string; value: number }[];
}) => (
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
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
    <div className="mt-2 text-sm flex flex-col items-center">
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

const DoubleChart = ({
  title,
  charts,
}: {
  title: string;
  charts: { subtitle: string; data: { name: string; value: number }[] }[];
}) => (
  <div className="bg-white rounded-2xl p-6 shadow w-full max-w-sm">
    <h4 className="text-center text-[14px] font-semibold mb-4 leading-tight">
      {title}
    </h4>
    {charts.map((chart, index) => (
      <div key={index} className="flex flex-col items-center mb-6 last:mb-0">
        <p className="text-[14px] font-medium mb-1">{chart.subtitle}</p>
        <PieChart width={160} height={160}>
          <Pie
            data={chart.data}
            cx="50%"
            cy="50%"
            outerRadius={70}
            dataKey="value"
          >
            {chart.data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div className="mt-2 text-sm">
          {chart.data.map((entry, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[i % COLORS.length] }}
              />
              <span>{entry.name}: {entry.value} ekor</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default function DesaPelagaTernak() {
  return (
    <div className="bg-[#F1EBDB] min-h-screen py-8 px-6 md:px-16">
      <div className="flex flex-wrap justify-between items-center px-4 md:px-44 mb-10">
        <h2 className="text-lg md:text-xl font-bold leading-snug">
          Pendataan Populasi Ternak <br className="block md:hidden" />
          Desa Pelaga
        </h2>
        <div className="bg-white px-4 py-2 rounded-md shadow text-[14px] font-medium">
          Jumlah Ternak yang Didata: <span className="font-bold text-black">30</span>
        </div>
      </div>
 <div className="flex flex-col justify-center gap-6">


      <div className="flex flex-col md:flex-row justify-center gap-6">
  <div className="flex-1 md:pl-32">
    <ChartComponent title="Jenis Ternak" data={dataJenisTernak} />
  </div>
  <div className="flex-1">
    <ChartComponent title="Vaksin PMK (Penyakit Mulut dan Kuku) pada Sapi" data={dataVaksinasi} />
  </div>
</div>

<div className="flex flex-col md:flex-row justify-center gap-6">
  <div className="flex-1 md:pl-20">
    <DoubleChart
      title="Pemberian Obat Cacing"
      charts={[
        { subtitle: 'Sapi', data: dataObatCacingSapi },
        { subtitle: 'Babi', data: dataObatCacingBabi },
      ]}
    />
  </div>
  <div className="flex-1">
    <ChartComponent title="Penggunaan Disinfektan oleh Peternak Sapi" data={dataDisinfektan} />
  </div>
</div>

      </div>
    </div>
  );
}
