
import React from 'react';

export default function LegalInsight() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Selamat Datang di Website Hukum</h1>
      <p>Temukan referensi dan artikel permasalahan hukum di sini.</p>
      <form onSubmit={(e) => {
        e.preventDefault();
        emailjs.sendForm('service_e1x7vvv', 'template_0dgl3ch', e.target, 'k85hTCwJ3nXsMzgQO')
          .then(result => {
            alert('Pesan berhasil dikirim!');
          }, error => {
            alert('Terjadi kesalahan. Silakan coba lagi.');
          });
      }}>
        <h2>Konsultasi Hukum</h2>
        <input type="text" name="user_name" placeholder="Nama" required /><br />
        <input type="email" name="user_email" placeholder="Email" required /><br />
        <textarea name="message" placeholder="Isi Pesan" required></textarea><br />
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}
