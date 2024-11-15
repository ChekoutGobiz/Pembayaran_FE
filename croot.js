// Fungsi untuk memperbarui konten elemen berdasarkan ID
export function setInner(id, content) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = content;
    } else {
        console.error(`Element with ID "${id}" not found.`);
    }
}

