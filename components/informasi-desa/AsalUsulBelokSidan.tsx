import AnimatedContainer from '@/components/AnimatedContainer';

const AsalUsulBelokSidan = () => {
    return (
        <div className="container flex flex-col gap-24 lg:gap-40 mt-24">
            {data.map((item, index) => (
                <AnimatedContainer key={index} className="flex lg:flex-row flex-col-reverse items-center gap-10 lg:gap-28 even:flex-col-reverse lg:even:flex-row-reverse">
                    <div className="flex-1">
                        <h6 className="mt-4 text-3xl lg:text-3xl font-semibold text-surface-950 dark:text-surface-0">{item.title}</h6>
                        <p className="mt-6 text-lg lg:text-xl text-surface-500 dark:text-white/64 text-justify">
                            {item.text.map((p, j) => (
                                <span key={j}>
                                    {p}
                                    {j < item.text.length - 1 && (
                                        <>
                                            <br />
                                            <br />
                                        </>
                                    )}
                                </span>
                            ))}
                        </p>
                    </div>
                </AnimatedContainer>
            ))}
        </div>
    );
};

export default AsalUsulBelokSidan;

const data = [
    {
        title: 'Asal Usul Desa Belok/Sidan',
        text: [
            'Pada zaman dahulu, Pulau Bali memiliki beberapa kerajaan yang cukup besar. Salah dua dari kerajaan tersebut adalah kerajaan Pahyangan dan kerajaan Buleleng. Suatu ketika, pecah pertempuran antara kerajaan Pahyangan dengan kerajaan Buleleng. Pada saat itu, penduduk Desa Lantang banyak yang melarikan diri karena desanya merupakan lalu lintas penyeberangan ke kerajaan Pahyangan sehingga dilalui pasukan kerajaan Buleleng.',
            'Setelah pertempuran berakhir, beberapa penduduk Desa Lantang kembali ke desanya dan sebagian lagi memilih untuk tetap tinggal di tempat pengungsian itu. Desa tempat sebagian penduduk mengungsi tersebut pada akhirnya diberi nama Kisidan, yang berarti pindahan. Dari istilah tersebut, terjadilah perubahan dari Kisidan menjadi Sidan yang pada akhirnya menjadi nama sebuah desa.',
            'Belok/Sidan dulunya merupakan dua perbekalan, yakni Sidan dan Belok. Desa Sidan terdiri dari tiga banjar yaitu Banjar Sidan, Banjar Selantang dan Banjar Penikit. Sedangkan Desa Belok terdiri dari Banjar Belok, Banjar Lawak, Banjar Bon, Banjar Jempanang dan Banjar Sekarmukti. Akhirnya, pada tahun 1957, kedua perbekel tersebut dijadikan satu menjadi Desa Belok/Sidan yang pada saat itu dipimpin I Dewa Putu Ceped.'
        ]
    }
];
