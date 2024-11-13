import { setupCountdown } from "./croot.js";

// Set waktu jatuh tempo awal (5 jam dari sekarang)
const endTime = new Date().getTime() + 5 * 60 * 60 * 1000;
    
function updateCountdown() {
    const now = new Date().getTime();
    const remainingTime = endTime - now;

    if (remainingTime > 0) {
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // Perbaikan di sini: Gunakan backtick (`) untuk template literal
        document.getElementById('countdown').textContent = `${hours} jam ${minutes} menit ${seconds} detik`;
    } else {
        document.getElementById('countdown').textContent = "Waktu Habis";
        clearInterval(timer); // Hentikan countdown
    }
}

