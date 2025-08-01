// ingredientUtils.js

import { pucciariaData } from './data.js';
import { getPrezzoAggiuntaExtra } from './prezzi.js';

/**
 * Raggruppa ingredienti extra per tipo, escludendo quelli già base del prodotto
 */
export function getExtraByCategoria(prodotto) {
  const baseIds = new Set(
    (prodotto.ingredienti_base || []).map(({ id }) => id)
  );

  return pucciariaData.ingredientiBaseGlobal.reduce((acc, ing) => {
    if (!baseIds.has(ing.id)) {
      acc[ing.tipo] = acc[ing.tipo] || [];
      acc[ing.tipo].push(ing);
    }
    return acc;
  }, {});
}

function getAlternativeOptions(ingrediente) {
  if (!ingrediente || !ingrediente.alternative_key) return [];
  const key = ingrediente.alternative_key;
  return pucciariaData.ingredientiAlternative_option?.[key] || [];
}

/**
 * Rende l'HTML dei checkbox ingredienti base (per modale, quick-form, minicard)
 */
export function renderIngredientiBase(ingredienti = [], selected_ids = []) {
  return ingredienti.map(ing => {
    const alternative = getAlternativeOptions(ing);
    const hasAlt = alternative.length > 0;
    const uniqueId = `${ing.id}-${Math.random().toString(36).substr(2, 5)}`;
    const selectId = `alt-select-${uniqueId}`;
    const showSelect = hasAlt;

    const selectedFromUser = Array.isArray(selected_ids) && selected_ids.length > 0;
    const isChecked = selectedFromUser
      ? selected_ids.includes(ing.id)
      : ing.check_selected !== false;

    const checkedAttr = isChecked ? 'checked' : '';
    const tipo = 'senza_puccia';
    const prezzoExtra = getPrezzoAggiuntaExtra(ing, tipo);

    const extraAttr = (!isChecked && prezzoExtra > 0)
      ? `data-extra-senza-puccia="${prezzoExtra}"`
      : '';

    const selectHTML = showSelect ? `
      <select
        id="${selectId}"
        class="alt-select-hidden"
        name="alt-${ing.id}"
        data-orig-id="${ing.id}"
        data-use-alternative="false"
      >
        <option value="" selected disabled>Scegli un’alternativa</option>
        ${alternative.map(alt => `
          <option value="${alt.id}" data-prezzo="${alt.prezzo}">
            ${alt.nome} ${typeof alt.prezzo === 'number' ? `(+${alt.prezzo.toFixed(2)}€)` : ''}
          </option>
        `).join('')}
      </select>
    ` : '';

    // === CASO: disponibile:false && ha alternative
    if (ing.disponibile === false && hasAlt) {
      return `
        <label class="ing-base-label" style="opacity:0.6; cursor:pointer;" onclick="document.getElementById('${selectId}').classList.toggle('visible');">
          <input type="checkbox" name="ing-base" value="${ing.id}" checked disabled>
          ${ing.nome} <span style="color:#c00;">(oggi non disponibile - clicca per alternative)</span>
        </label>
        ${selectHTML}<br>
      `;
    }

    // === CASO: modificabile:false && disponibile:true && alternative:true
    if (ing.modificabile === false && ing.disponibile === true && hasAlt) {
      return `
        <label class="ing-base-label" style="cursor:pointer;" onclick="this.nextElementSibling?.classList.toggle('visible')">
          <input 
            type="checkbox" 
            name="ing-base" 
            value="${ing.id}" 
            checked 
            data-fixed="true"
            onclick="return false;"
          >
          ${ing.nome} <span style="color:#999;font-size:0.9em;">(fisso, clicca per alternative)</span>
        </label>
        ${selectHTML}<br>
      `;
    }

    // === CASO NORMALE ===
    const disabledAttr = ing.modificabile === false ? 'disabled' : '';
    const noteFisso = ing.modificabile === false
      ? '<span style="color:#999;font-size:0.9em;margin-left:0.3em;">(fisso)</span>'
      : '';

    return `
      <label class="ing-base-label" style="${ing.modificabile === false ? 'opacity:0.75;' : ''}">
        <input type="checkbox" name="ing-base" value="${ing.id}" ${checkedAttr} ${disabledAttr} ${extraAttr}>
        ${ing.nome} ${noteFisso}
      </label><br>`;
  }).join('');
}


// Blocco clic accidentali su ingredienti fissi
if (typeof window !== 'undefined') {
  document.addEventListener('change', e => {
    if (e.target.matches('input[name="ing-base"][data-fixed="true"]')) {
      e.preventDefault();
      e.target.checked = true;
    }
  });
}
/**export function attachIngredientCheckboxReset() {
  document.querySelectorAll('input[name="ing-base"]').forEach(input => {
    const idOriginale = input.value;
    const form = input.closest('form');
    if (!form) return;

    const select = form.querySelector(`select[name="alt-${idOriginale}"]`);
    if (!select) return;

    // ✅ 1. Cattura anche click su checkbox già checked (fisse)
    const label = input.closest('label');
    if (label) {
      label.addEventListener('click', (e) => {
        e.preventDefault(); // evita toggle involontari
        select.value = '';
        select.dataset.useAlternative = 'false';
        select.dataset.hasChanged = 'false';
        select.classList.remove('visible');
        input.checked = true;
      });
    }

    // ✅ 2. Se blur fuori dalla select e non cambiata → reset
    select.addEventListener('blur', () => {
      if (select.dataset.hasChanged !== 'true') {
        select.value = '';
        select.dataset.useAlternative = 'false';
        input.checked = true;
        select.classList.remove('visible');
      }
    });

    // ✅ 3. Cambiata? Segna che è attiva
    select.addEventListener('change', () => {
      select.dataset.useAlternative = 'true';
      select.dataset.hasChanged = 'true';
    });
  });
} */

  export function attachIngredientCheckboxReset() {
    const selects = document.querySelectorAll('select[name^="alt-"]');
    console.log("[attachIngredientCheckboxReset] trovati select:", selects.length);
  
    selects.forEach((select, index) => {
      const originalId = select.dataset.origId;
      const checkbox = select.closest('.card')?.querySelector(`input[name="ing-base"][value="${originalId}"]`);
      console.log(`  #${index} select alt-${originalId}`, { originalId, hasCheckbox: !!checkbox });
  
      if (!checkbox) return;
  
      select.dataset.hasChanged = 'false';
      // attacco listener CHANGE
      select.addEventListener('change', () => {
        select.dataset.useAlternative = 'true';
        select.dataset.hasChanged = 'true';
        console.log(`    change detected on alt-${originalId}`);
      });
  
      // fallback di RESET quando perdi focus
      select.addEventListener('focusout', () => {
        console.log(`    focusout on alt-${originalId}, hasChanged=${select.dataset.hasChanged}`);
        if (select.dataset.hasChanged !== 'true') {
          select.value = '';
          select.dataset.useAlternative = 'false';
          checkbox.checked = true;
          console.log(`    reset select alt-${originalId} to original`);
        }
      });
    });
  }
  
