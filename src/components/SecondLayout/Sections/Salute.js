import React, { useState } from 'react';
import Ben from "../../../assets/profile-pic.png"; // Görsel dosyasının doğru yolunu kontrol edin

const Salute = () => {
  const [isHovered, setIsHovered] = useState(false); // Hover durumunu saklamak için state tanımlıyoruz

  return (
    <div style={styles.container}>
      <img
        src={Ben}
        alt="Profile"
        style={isHovered ? hoverStyle : styles.image} // Hover durumuna göre stil seçimi
        onMouseEnter={() => setIsHovered(true)} // Mouse görselin üzerine geldiğinde
        onMouseLeave={() => setIsHovered(false)} // Mouse görselin üzerinden çıktığında
      />
    </div>
  );
};

// Basit stiller
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '20px', 
  },
  image: {
    maxWidth: '50%', // Genişliğini %50 olarak ayarla
    height: 'auto', // Yüksekliği otomatik olarak ayarla
    borderRadius: '10px', // Kenarları yuvarlat
    transition: 'filter 0.3s ease', // Geçiş efektleri (sadece filtre için)
    filter: 'none', // Titreme efekti yokken filtre
  },
};

// Mouse üzerine geldiğinde görselin titremesi için
const hoverStyle = {
  maxWidth: '50%', // Genişliğini %50 olarak ayarla
  height: 'auto', // Yüksekliği otomatik olarak ayarla
  borderRadius: '10px', // Kenarları yuvarlat
  animation: 'shake 0.3s ease', // Titreme efekti
  filter: 'brightness(1.1)', // Biraz parlaklık ekle
  transition: 'filter 0.3s ease',
};

// CSS için keyframes tanımı
const stylesSheet = document.styleSheets[0];
stylesSheet.insertRule(`
  @keyframes shake {
    0% { transform: translate(0); }
    25% { transform: translate(-2px, 2px); }
    50% { transform: translate(2px, -2px); }
    75% { transform: translate(-2px, 2px); }
    100% { transform: translate(0); }
}`, stylesSheet.cssRules.length);

export default Salute;
