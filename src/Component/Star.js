import './Star.css'

document.addEventListener('DOMContentLoaded', function () {
    const numStars = 100;
    const stars = document.querySelector('.stars');
  
    for (let i = 0; i < numStars; i++) {
      let star = document.createElement('div');
      star.className = 'star';
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;
      let size = Math.random() * 2;
      
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
  
      stars.appendChild(star);
    }
  });
  