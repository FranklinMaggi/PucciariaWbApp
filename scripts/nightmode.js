// nightmode.js

export function isNightMode() {
    return document.body.classList.contains('night');
  }
  
  export function enableNightMode() {
    document.body.classList.add('night');
    localStorage.setItem('night_mode', 'yes');
  }
  
  export function disableNightMode() {
    document.body.classList.remove('night');
    localStorage.setItem('night_mode', 'no');
  }
  
  export function toggleNightMode() {
    if (isNightMode()) {
      disableNightMode();
    } else {
      enableNightMode();
    }
  }
  
  export function setupNightModeButton(selector = '#nightmode-toggle', onToggle = () => {}) {
    const btn = document.querySelector(selector);
    if (!btn) return;
  
    btn.onclick = () => {
      toggleNightMode();
      onToggle(); // per ri-renderizzare tabs o UI
    };
  }
  
  export function initNightModeFromStorage() {
    try {
      const preferito = localStorage.getItem('night_mode');
      if (preferito === 'yes') enableNightMode();
      else disableNightMode();
    } catch (e) {}
  }
  