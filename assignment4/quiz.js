
function moveRandom(btn) {
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.position = 'absolute';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
  }  // move the buttom to a random place
  

  function randomProfileImage() {
    const imgs = [
      'bagel_profile1.jpg',
      'bagel_profile2.jpg',
      'bagel_profile3.jpg',
      'bagel_profile4.jpg'
    ];
    return imgs[Math.floor(Math.random() * imgs.length)];
  }  // Pick one of the 4 images randomly
  