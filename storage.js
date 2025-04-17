document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page;
  
    switch(page) {
      case 'q1': {
        const btn = document.getElementById('yes-btn');
        let count = 0;
        btn.addEventListener('click', () => {
          count++;
          if (count < 5) {
            moveRandom(btn);
          } else {
            localStorage.setItem('isBagelLover', 'true');
            window.location.href = 'q2.html';
          }
        });
        break;
      }
      case 'q2': {
        document.querySelectorAll('button.choice').forEach(btn => {
          btn.addEventListener('click', () => {
            const val = btn.dataset.value;
            if (val === 'Bagel' || val === '贝果') {
              localStorage.setItem('bagelTerm', val);
              window.location.href = 'q3.html';
            } else {
              window.location.href = 'wrong.html';
            }
          });
        });
        break;
      }
  
      case 'q3': {
        const slider = document.getElementById('years');
        const nxt = document.getElementById('next-btn');
        nxt.addEventListener('click', () => {
          localStorage.setItem('bagelYears', slider.value);
          window.location.href = 'q4.html';
        });
        break;
      }
  
      // Q4 & Q5: image choices
      case 'q4':
      case 'q5': {
        document.querySelectorAll('img.choice').forEach(img => {
          img.addEventListener('click', () => {
            const key = page === 'q4' ? 'bagelType' : 'bagelSpread';
            localStorage.setItem(key, img.alt);
            window.location.href = page === 'q4' ? 'q5.html' : 'q6.html';
          });
        });
        break;
      }
  

      case 'q6': {
        document.querySelectorAll('button.choice').forEach(btn => {
          btn.addEventListener('click', () => {
            localStorage.setItem('bagelFrequency', btn.dataset.value);
            window.location.href = 'q7.html';
          });
        });
        break;
      }
      case 'q7': {
        const input = document.getElementById('name');
        document.getElementById('next-btn').addEventListener('click', () => {
          localStorage.setItem('bagelName', input.value || 'Anonymous');
          window.location.href = 'q8.html';
        });
        break;
      }
  
 
      case 'q8': {
        document.querySelectorAll('button.choice').forEach(btn => {
          btn.addEventListener('click', () => {
            window.location.href = 'profile.html';
          });
        });
        break;
      }
  

      case 'profile': {
        document.getElementById('profile-img').src = randomProfileImage();
        document.getElementById('name-val').textContent = localStorage.getItem('bagelName');
        document.getElementById('years-val').textContent = localStorage.getItem('bagelYears') + ' years';
        document.getElementById('type-val').textContent = localStorage.getItem('bagelType');
        document.getElementById('spread-val').textContent = localStorage.getItem('bagelSpread');
        document.getElementById('freq-val').textContent = localStorage.getItem('bagelFrequency');
        break;
      }
    }
  });
  