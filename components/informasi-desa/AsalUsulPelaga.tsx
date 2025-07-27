import AnimatedContainer from '@/components/AnimatedContainer';

const AsalUsulPelaga = () => {
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

export default AsalUsulPelaga;

const data = [
    {
        title: 'Asal Usul Desa Pelaga',
        text: [
            // 'Pada zaman dahulu, berdirilah sebuah Kerajaan Gegelang yang dipimpin seorang raja. Raja tersebut memiliki seorang permaisuri dan seorang selir. Dari seorang selir tersebut sang raja menurunkan putra laki-laki tertua, sedangkan dari permaisuri sang raja menurunkan putra laki-laki yang lebih muda. Konflik bermula saat sang raja berpikir akan menurunkan tahtanya ke putranya. Timbullah keresahan-keresahan di masyarakat Gegelang, mengenai putranya yang mana berhak menggantikan tahta ayahnya mengingat putra raja pertama adalah dari keturunan selir, sedangkan putra raja yang kedua adalah keturunan dari permaisuri.',
            // 'Walaupun demikian, adanya desas-desus yang ada di masyarakat Gegelang cenderung memilih putra raja dari keturunan permaisuri raja. Desas-desus rakyat Gegelang tersebut sampai juga ke telinga putra pertama. Putra pertama raja merasa tersinggung, merasa disepelekan, merasa diremehkan sebagai putra raja yang pertama dan beranggapan putra raja yang pertamalah yang berhak menggantikan kedudukan ayahnya, tanpa memperhatikan keturunan permaisuri atau keturunan selir. Putra pertama beranggapan bahwa dialah yang berhak menggantikan kedudukan ayahnya sebagai Raja Gegelang. Untuk mewujudkan cita-citanya itu terlebih dahulu harus menyingkirkan penghalang-penghalang yang ada, yakni adiknya.',
            // 'Untuk itu putra raja pertama berencana membunuh adiknya secara rahasia sebelum dilangsungkan upacara penobatan adiknya sebagai Putra Mahkota yang nantinya akan menggantikan kedudukan ayahnya. Putra pertama memanggil Maha Patih Kerajaan Gegelang untuk menyampaikan rencananya. Akhirnya, pada saat yang telah ditentukan, maka putra pertama mengajak adiknya berburu ke tengah hutan dengan dikawal oleh maha patih yang telah bersekongkol dengan membawa peralatan berburu.',
            // 'Sesampainya di tengah hutan, maha patih diperintahkan untuk membunuh adiknya. Setelah adiknya betul-betul diperkirakan meninggal, mayatnya kemudian diseret dan ditaruh di samping sebuah pohon kayu yang dalam keadaan lapuk seolah-olah mati tertimbun atau tertimpa oleh pohon kayu. Dengan perasaan puas bahwa cita-citanya hampir terwujud, maka putra pertama bersama maha patihnya pulang serta dengan menjaga agar kejadian itu tetap dirahasiakan.',
            // 'Suatu hari, ada seorang pemburu yang kemalaman di jalan dengan menunggangi kuda. Pada sebuah tempat kudanya tidak mau berjalan lagi dan kebetulan pula pemburu itu sangat lelah. Dengan demikian, sang pemburu memutuskan untuk bermalam di tengah hutan. Baru saja dia merebahkan badannya dia sudah tertidur pulas. Pada saat akan menjelang subuh, sang pemburu mendengarkan sabda dari dewa penguasa jagat raya ini dalam temaram berbunyi, “Hai pemburu dengarkanlah baik-baik sabdaku ini, rajamu kini sedang dalam keadaan bingung karena kehilangan seorang putranya yang terkasih.',
            // 'Hilangnya putra sang raja itu disebabkan tiada lain karena mati dibunuh di sebuah hutan, kejadian tersebut dapat diketahui dari kata-kata ini: Pa-Ra-La-Ga”. Kata-kata tersebut mempunyai arti sebagai berikut : PA artinya Putra Ida, RA artinya Rakan Ida, LA artinya Langlang Duta, GA artinya Gegelang. Dari kata-kata ini dapat disimpulkan sebagai berikut : Putra Sang Raja dari Permaisuri itu mati terbunuh oleh kakaknya sendiri. Sedangkan sebagai pelakunya adalah seorang maha patihnya yang bernama Langlang Duta dan tempat pembunuhan itu terjadi di Hutan Gegelang/Alas Gegelang (Bahasa Bali). Sang pemburu pun bangun dari tidurnya dan langsung menghadap Sang Raja Gegelang.',
            // 'Setibanya di kerajaan, sang pemburu langsung mengatakan PARALAGA terhadap raja yang berarti hilangnya putra mahkota karena dibunuh oleh kakak tirinya yang dilakukan oleh Maha Patih Langlang Duta di tengah Hutan Gegelang. Mendengar kisah sang pemburu, Sang Raja Gegelang langsung memerintahkan para maha patih, punggawa serta diikuti oleh para rakyatnya menyebar ke tengah hutan untuk menemukan jasad sang putra mahkota. Akhirnya, jasad putra mahkota ditemukan dalam tertimbun semak belukar di samping sebuah pohon runtuh yang telah rapuh.',
            // 'Jasad sang putra mahkota dibawa ke keraton dan Raja Gegelang pun murka dan kemurkaan itu membuat Sang Raja Gegelang sakit-sakitan dan meninggal. Sejak itulah Kerajaan Gegelang mengalami kehancuran dan hilang. Berdasarkan hal tersebut, masyarakat sekitar sering membicarakan kata-kata PARALAGA dari mulut ke mulut. Kata-kata PARALAGA itu menjadi PALAGA dan selanjutnya kata PALAGA pun berubah menjadi PELAGA yang hingga pada saat ini wilayah Kerajaan Gegelang disebut menjadi wilayah Pelaga.'
            'Pada zaman dahulu, berdirilah sebuah Kerajaan Gegelang yang dipimpin seorang raja. Raja tersebut memiliki seorang permaisuri dan seorang selir. Dari seorang selir tersebut sang raja menurunkan putra laki-laki tertua, sedangkan dari permaisuri sang raja menurunkan putra laki-laki yang lebih muda. Konflik bermula saat sang raja berpikir akan menurunkan tahtanya ke putranya. Timbullah keresahan-keresahan di masyarakat Gegelang, mengenai putranya yang mana berhak menggantikan tahta ayahnya mengingat putra raja pertama adalah dari keturunan selir, sedangkan putra raja yang kedua adalah keturunan dari permaisuri.',
            'Walaupun demikian, adanya desas-desus yang ada di masyarakat Gegelang cenderung memilih putra raja dari keturunan permaisuri raja. Desas-desus rakyat Gegelang tersebut sampai juga ke telinga putra pertama. Putra pertama raja merasa tersinggung, merasa disepelekan, merasa diremehkan sebagai putra raja yang pertama dan beranggapan putra raja yang pertamalah yang berhak menggantikan kedudukan ayahnya. Untuk mewujudkan cita-citanya itu terlebih dahulu harus menyingkirkan adiknya dengan cara merencanakan pembunuhan. Putra pertama memanggil Maha Patih Kerajaan Gegelang untuk menyampaikan rencananya. Akhirnya, pada saat yang telah ditentukan, maka putra pertama mengajak adiknya berburu ke tengah hutan dengan dikawal oleh mahapatih',
            'Sesampainya di tengah hutan, maha patih diperintahkan untuk membunuh adiknya. Mayatnya kemudian diseret dan ditaruh di samping sebuah pohon kayu seolah-olah mati tertimpa oleh pohon kayu. Putra pertama bersama maha patihnya akhirnya pulang dengan menjaga agar kejadian itu tetap dirahasiakan. Suatu hari, ada seorang pemburu yang melewati hutan dan beristirahat di tengah hutan.  Pada saat beristirahat, sang pemburu mendengarkan sabda dari dewa penguasa jagat raya ini dalam temaram berbunyi, “Hai dengarkanlah! Rajamu kini sedang dalam keadaan bingung karena kehilangan seorang putranya yang terkasih. Hilangnya putra sang raja itu disebabkan karena mati dibunuh di hutan, kejadian tersebut dapat diketahui dari kata-kata ini: Pa-Ra-La-Ga”.',
            'Kata-kata tersebut mempunyai arti sebagai berikut : PA artinya Putra Ida, RA artinya Rakan Ida, LA artinya Langlang Duta, GA artinya Gegelang.  Dari kata-kata ini dapat disimpulkan sebagai berikut : Putra Sang Raja dari Permaisuri itu mati terbunuh  oleh kakaknya sendiri. Sedangkan sebagai pelakunya adalah seorang maha patihnya yang bernama Langlang Duta dan tempat pembunuhan itu terjadi di Hutan Gegelang/Alas Gegelang (Bahasa Bali). Sang pemburu pun bangun dari tidurnya dan langsung menghadap Sang Raja Gegelang untuk melaporkan. Setelah peristiwa itu, masyarakat sekitar sering membicarakan kata-kata PARALAGA dari mulut ke mulut dan mengubahnya menjadi PALAGA.'
        ]
    }
];
