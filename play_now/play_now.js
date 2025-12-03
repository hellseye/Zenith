const img = document.querySelector('.playnow-img');
const box = document.querySelector('body');

box.addEventListener('mousemove', (e) => {
    const rect = box.getBoundingClientRect();

    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -20; 
    const rotateY = ((x / rect.width) - 0.5) * 20;

    img.style.transform = `
        perspective(600px)
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
        scale(1.05)
    `;
});

box.addEventListener('mouseleave', () => {
    img.style.transform = `
        perspective(600px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
    `;
});
