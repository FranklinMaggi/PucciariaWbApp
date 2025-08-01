// clock.js

export function aggiornaOrologio() {
    const ora = new Date();
    const opzioni = { hour: '2-digit', minute: '2-digit' };
    const giorno = ora.toLocaleDateString('it-IT', { weekday: 'short', day: '2-digit', month: '2-digit' });
    const orologio = ora.toLocaleTimeString('it-IT', opzioni);
    const orologioEl = document.getElementById("orologio-header");
    if (orologioEl) {
      orologioEl.textContent = `${giorno} ${orologio}`;
    }
  }
  
  export function startClock(interval = 1000) {
    aggiornaOrologio();
    setInterval(aggiornaOrologio, interval);
  }
  