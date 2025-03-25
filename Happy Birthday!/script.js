document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bg-music');
    const startButton = document.getElementById('startButton');
    const nextButton = document.getElementById('nextButton');
    const gifts = document.querySelectorAll('.gift');
    const giftMessage = document.getElementById('giftMessage');

    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');

    // Halaman 1 ke Halaman 2
    startButton.addEventListener('click', function() {
        page1.classList.add('hidden');
        page2.classList.remove('hidden');
        bgMusic.play();
    });

    // Halaman 2 ke Halaman 3
    nextButton.addEventListener('click', function() {
        page2.classList.add('hidden');
        page3.classList.remove('hidden');
    });

    // Logika memilih hadiah
    gifts.forEach(gift => {
        gift.addEventListener('click', function() {
            const message = this.getAttribute('data-message');
            if (message) {
                giftMessage.innerHTML = message; // Menggunakan innerHTML agar format HTML tetap terjaga
                giftMessage.classList.remove('hidden');
                giftMessage.classList.add('fade-in');
            } else {
                giftMessage.innerHTML = "<p>Ups! Hadiah ini kosong. Coba lagi! 🎁</p>";
                giftMessage.classList.remove('hidden');
                giftMessage.classList.add('fade-in');
            }
        });
    });
});