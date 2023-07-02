document.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('#miAudio');
    
    audio.volume = 0.1; // Configura el volumen a la mitad (0.5) 
  
    document.addEventListener('mouseover', () => {
      audio.play();
    });
  });