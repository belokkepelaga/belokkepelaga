'use client';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#9ABD98', '#E0E0E0'];

const dataJenisKelamin = [
  { name: 'Jantan', value: 350 },
  { name: 'Betina', value: 150 },
];

const dataVaksinasi = [
  { name: 'Sudah Vaksin', value: 400 },
  { name: 'Belum Vaksin', value: 100 },
];

type ChartProps = {
  title: string;
  data: { name: string; value: number }[];
  size?: number; // untuk mengatur ukuran chart (opsional)
};

const Chart = ({ title, data, size = 160 }: ChartProps) => (
  <div className="text-center mb-6">
    <h4 className="text-sm font-semibold mb-2">{title}</h4>

    {/* Chart */}
    <div className="flex justify-center">
      <PieChart width={size} height={size}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={size / 2.8}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>

    {/* Legend */}
    <div className="mt-2 flex justify-center flex-col items-center gap-1 text-sm">
      {data.map((entry, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: COLORS[index % COLORS.length] }}
          />
          <span>
            {entry.name}: <strong>{entry.value}</strong>
          </span>
        </div>
      ))}
    </div>
  </div>
);

const DesaSection = ({
  namaDesa,
  totalPopulasi,
  dataKelamin,
  dataVaksin,
}: {
  namaDesa: string;
  totalPopulasi: number;
  dataKelamin: any[];
  dataVaksin: any[];
}) => (
  <div className="flex flex-col items-center">
    {/* Nama Desa */}
    <h2 className="text-[#C4A763] font-bold text-lg mb-2">{namaDesa}</h2>

    {/* Box putih total populasi */}
    <div className="bg-white rounded-lg shadow px-6 py-3 mb-4 text-center">
      <p>Total Populasi: <span className="font-bold">{totalPopulasi}</span></p>
    </div>

    {/* Box putih isi chart */}
    <div className="bg-white rounded-xl shadow-md px-6 py-6 w-[300px]">
      <Chart title="Berdasarkan Jenis Kelamin" data={dataKelamin} />
      <Chart title="Berdasarkan status vaksinasi" data={dataVaksin} />
    </div>
  </div>
);

export default function PendataanTernak() {
  return (
    <div className="bg-[#E0E0E0] min-h-screen py-10 px-4">
      <h1 className="text-center text-2xl font-semibold mb-10">Pendataan Ternak</h1>
      <div className="flex flex-wrap justify-center gap-12">
        <DesaSection
          namaDesa="Desa Belok Sidan"
          totalPopulasi={500}
          dataKelamin={dataJenisKelamin}
          dataVaksin={dataVaksinasi}
        />
        <DesaSection
          namaDesa="Desa Pelaga"
          totalPopulasi={500}
          dataKelamin={dataJenisKelamin}
          dataVaksin={dataVaksinasi}
        />
      </div>
    </div>
  );
}
