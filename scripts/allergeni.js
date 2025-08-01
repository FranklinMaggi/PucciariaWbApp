// scripts/allergeni.js
import {creaMappaIngredienti } from './productUtils.js';
export function showAllergeni(ingredientiBase = []) {
  // Se ricevi qualcosa di non valido, torna subito vuoto
  if (!Array.isArray(ingredientiBase)) return '';

  // Set per evitare duplicati di allergeni
  const allergeniSet = new Set();

  // Raccogli solo allergeni effettivi da ingredienti validi
  ingredientiBase.forEach(ing => {
    // Salta se non è un oggetto valido
    if (!ing || typeof ing !== 'object') return;

    // Estrai allergeni se presenti
    if (Array.isArray(ing.allergeni)) {
      ing.allergeni.forEach(a => {
        if (typeof a === 'string' && a.trim()) {
          allergeniSet.add(a.trim());
        }
      });
    }
  });

  // Se non ci sono allergeni, non mostrare nulla
  if (!allergeniSet.size) return '';

  // Costruzione HTML delle icone
  const html = [...allergeniSet].map(nome => `
    <div class="allergene-icon-wrapper">
      <img
        class="allergene-svg"
        src="img/allergeni/${nome}.svg"
        alt="${nome}"
        title="${nome.replace(/-/g, ' ')}"
      >
    </div>
  `).join('');

  // Attiva la possibilità di zoom (toggle class 'active') anche dopo re-render
  setTimeout(() => {
    document.querySelectorAll('.allergene-icon-wrapper').forEach(el => {
      el.addEventListener('click', () => {
        el.classList.toggle('active');
      });
    });
  }, 0);

  // Restituisci il contenitore HTML
  return `<div class="allergeni-svg-box">${html}</div>`;
}

  const mappa_ingredienti=creaMappaIngredienti();
export function getIngredientiAttivi(prodotto, form) {
  if (!prodotto || !form) return [];

  return (prodotto.ingredienti_base || [])
    .filter(ing => {
      // Se non modificabile, sempre incluso
      if (ing.modificabile === false) return true;

      // Se modificabile, incluso solo se checked
      const input = form.querySelector(`input[name="ing-base"][value="${ing.id}"]`);
      return input?.checked;
    })
    .map(ing => mappa_ingredienti[ing.id])
    .filter(Boolean);
}
