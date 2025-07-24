import { Typography } from '@mui/material';

export default function ProfilBelokSidan() {
  return (
     <div className="bg-[#F1EBDB]">    

    <Typography
  variant="h5"
  sx={{
    fontWeight: 'bold',
    marginBottom: 2,
    mx: { xs: 5, sm: 8, md: 13 }, // responsive horizontal margin
  }}
>
  Asal Usul Desa Belok/Sidan
</Typography>

<Typography
  variant="body1"
  sx={{
    textAlign: 'justify',
    marginBottom: 2,
    mx: { xs: 5, sm: 8, md: 13 },
  }}
>
 Pada zaman dahulu, Pulau Bali memiliki beberapa kerajaan yang cukup besar. Salah dua dari kerajaan tersebut
        adalah kerajaan Pahyangan dan kerajaan Buleleng. Suatu ketika, pecah pertempuran antara kerajaan Pahyangan
        dengan kerajaan Buleleng. Pada saat itu, penduduk Desa Lantang banyak yang melarikan diri karena desanya
        merupakan lalu lintas penyeberangan ke kerajaan Pahyangan sehingga dilalui pasukan kerajaan Buleleng. Setelah
        pertempuran berakhir, beberapa penduduk Desa Lantang kembali ke desanya dan sebagian lagi memilih untuk tetap
        tinggal di tempat pengungsian itu. Desa tempat sebagian penduduk mengungsi tersebut pada akhirnya diberi nama
        Kisidan, yang berarti pindahan. Dari istilah tersebut, terjadilah perubahan dari Kisidan menjadi Sidan yang pada
        akhirnya menjadi nama sebuah desa.

</Typography>

<Typography
  variant="body1"
  sx={{
    textAlign: 'justify',
    mx: { xs: 5, sm: 8, md: 13 },
  }}
>
 Belok/Sidan dulunya merupakan dua perbekalan, yakni Sidan dan Belok. Desa Sidan terdiri dari tiga banjar yaitu
        Banjar Sidan, Banjar Selantang dan Banjar Penikit. Sedangkan Desa Belok terdiri dari Banjar Belok, Banjar Lawak,
        Banjar Bon, Banjar Jempanang dan Banjar Sekarmukti. Akhirnya, pada tahun 1957, kedua perbekel tersebut dijadikan
        satu menjadi Desa Belok/Sidan yang pada saat itu dipimpin I Dewa Putu Ceped.
      
</Typography>

      </div>
  );
}
