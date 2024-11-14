// Set waktu jatuh tempo awal (5 jam dari sekarang)
const endTime = new Date().getTime() + 5 * 60 * 60 * 1000;

// Fungsi untuk memperbarui countdown
function updateCountdown() {
    const now = new Date().getTime();
    const remainingTime = endTime - now;

    if (remainingTime > 0) {
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // Menampilkan waktu sisa
        document.getElementById('countdown').textContent = `${hours} jam ${minutes} menit ${seconds} detik`;
    } else {
        document.getElementById('countdown').textContent = "Waktu Habis";
        clearInterval(timer); // Hentikan countdown
    }
}

// Menampilkan waktu real-time
function updateRealTime() {
    const currentTime = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('current-time').textContent = currentTime.toLocaleTimeString('id-ID', options);
}

// Jalankan countdown setiap detik
const timer = setInterval(updateCountdown, 1000);

// Memperbarui waktu real-time setiap detik
setInterval(updateRealTime, 1000);

// Tentukan waktu jatuh tempo
const dueDate = new Date(endTime);
const options = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' };
document.getElementById('due-date').textContent = dueDate.toLocaleString('id-ID', options);
