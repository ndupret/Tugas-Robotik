const articleContent = document.querySelector('.article-content');

const articles = [
    {
        title: "",
        content: `
            <p>Dalam beberapa dekade terakhir, robotika telah menjadi salah satu bidang teknologi yang berkembang paling pesat dan paling menarik perhatian. Dari pabrik otomotif yang menggunakan robot untuk merakit mobil hingga perangkat pintar di rumah yang membantu kita membersihkan lantai, robotika semakin erat kaitannya dengan kehidupan sehari-hari. Namun, apa sebenarnya robotika itu, dan mengapa bidang ini begitu penting?</p>

            <h4>Apa Itu Robotika?</h4>
            <p>Robotika adalah cabang ilmu pengetahuan dan teknologi yang berkaitan dengan desain, konstruksi, pengoperasian, dan penggunaan robot. Robot sendiri adalah perangkat mekanik yang dapat diprogram untuk melakukan berbagai tugas secara otomatis, baik secara mandiri maupun dengan kendali manusia.</p>

            <ul>
                <li><b>Teknik Mesin:</b> untuk mendesain dan membangun kerangka serta mekanisme robot.</li>
                <li><b>Elektronika:</b> untuk sistem kontrol dan sensor.</li>
                <li><b>Ilmu Komputer:</b> untuk memprogram dan mengendalikan robot, termasuk kecerdasan buatan (AI).</li>
            </ul>

            <h4>Sejarah Singkat Robotika</h4>
            <p>Konsep robot sudah ada sejak zaman kuno. Ide tentang automaton dan perangkat mekanis sudah ada sejak peradaban kuno seperti Mesir, Yunani, dan Cina, yang bereksperimen dengan mesin otomatis yang sederhana.

Robot seperti yang kita pahami saat ini, bagaimanapun, berasal dari masa yang lebih baru. Paten robot yang sebelumnya tidak berhasil yang disebut “Unimate” diperoleh dan dikomersialkan oleh Joseph Engleberger pada tahun 1960. Keberhasilannya menjadikan pengusaha tersebut mendapat julukan “bapak robotika”.</p>

            <h4>Manfaat Robotika di Berbagai Bidang</h4>
            <p>Robotika bukan hanya tentang menciptakan robot yang canggih; ia juga tentang bagaimana robot dapat membantu manusia dalam berbagai aspek kehidupan. Berikut beberapa contohnya:</p>
            <ol>
                <li><b>Industri:</b> Robot digunakan untuk merakit, mengelas, dan memindahkan barang, meningkatkan efisiensi dan konsistensi produksi.</li>
                <li><b>Kesehatan:</b> Robot bedah memungkinkan dokter melakukan operasi dengan presisi tinggi, bahkan dari jarak jauh.</li>
                <li><b>Pertanian:</b> Robot pemanen dan drone membantu meningkatkan hasil panen dengan efisiensi yang lebih tinggi.</li>
                <li><b>Eksplorasi Luar Angkasa:</b> Robot seperti rover Mars digunakan untuk mengeksplorasi tempat-tempat yang tidak mungkin dijangkau manusia.</li>
                <li><b>Hiburan dan Pendidikan:</b> Robot juga digunakan sebagai alat pembelajaran, terutama untuk anak-anak yang ingin mempelajari ilmu teknologi dan pemrograman.</li>
            </ol>

            <h4>Tantangan di Dunia Robotika</h4>
            <p>Meskipun memiliki banyak manfaat, robotika juga menghadapi berbagai tantangan. Salah satunya adalah biaya yang tinggi untuk pengembangan teknologi robot yang canggih. Selain itu, ada juga kekhawatiran tentang bagaimana robotika dapat memengaruhi tenaga kerja manusia, terutama di sektor-sektor yang sangat bergantung pada pekerja manual.</p>

            <p>Di sisi lain, aspek etika dan keamanan juga menjadi perhatian. Bagaimana kita memastikan bahwa robot akan digunakan untuk kebaikan? Dan bagaimana melindungi data pribadi dalam sistem robot yang semakin pintar?</p>

            <h4>Masa Depan Robotika</h4>
            <p>Masa depan robotika terlihat sangat cerah. Dengan kemajuan dalam kecerdasan buatan, robot masa depan tidak hanya akan lebih canggih secara teknis, tetapi juga lebih pintar dan lebih adaptif. Di masa depan, kita mungkin akan melihat robot yang benar-benar dapat berinteraksi dengan manusia layaknya mitra kerja atau teman.</p>

            <p>Selain itu, perkembangan teknologi seperti Internet of Things (IoT) dan jaringan 5G juga akan memungkinkan robot untuk saling terhubung, menciptakan ekosistem yang lebih efisien.</p>
        `
    }
];

articles.forEach(article => {
    const articleBlock = document.createElement('div');
    articleBlock.innerHTML = `<h3>${article.title}</h3>${article.content}`;
    articleContent.appendChild(articleBlock);
});
