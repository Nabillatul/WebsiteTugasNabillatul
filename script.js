const text2 = "Nabillatul Syahbandi Ardyansal"; // Teks yang akan ditampilkan
        let index = 0;

        function type() {
            document.getElementById("typing").innerHTML = text2.substring(0, index); // Menampilkan teks bertahap
            if (index < text2.length) {
                index++;
                setTimeout(type, 100); // Kecepatan mengetik (dalam milidetik)
            } else {
                setTimeout(function() {
                    index = 0;
                    type(); // Memulai ulang animasi setelah selesai
                }, 1000); // Delay 1 detik sebelum animasi dimulai lagi
            }
        }

        window.onload = function() {
            type(); // Memulai animasi mengetik saat halaman dimuat
        };