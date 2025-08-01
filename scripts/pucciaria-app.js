import { pucciariaData } from './data.js';              
  import { startClock } from './clock.js';
                import {setupNightModeButton, initNightModeFromStorage} from './nightmode.js';
                import {showCookieBanner, salvaInLocalStorage ,
                recuperaDaLocalStorage, rimuoviDaLocalStorage } from './cookieUtils.js';
                import {getAllProducts,getProductById,creaMappaIngredienti ,get_categorie_prodotti ,get_sottocategorie ,get_label_categoria} from './productUtils.js';
                import {getPrezzoAggiuntaExtra,getPrezzoRimozioneBase} from './prezzi.js';
                import {getExtraByCategoria,renderIngredientiBase, attachIngredientCheckboxReset} from './ingredientiUtils.js';
                 import {mostra_riepilogo_ordine} from './riepilogo.js'
                 import { showAllergeni , getIngredientiAttivi} from './allergeni.js';
//import {handleAlternativeSwitch} from './switcher.js';
// --- 1. Selezione degli Elementi DOM ---
const catalogo_div = document.getElementById('catalogo-prodotti');
const carrello_div = document.getElementById('carrello');
const esito_div = document.getElementById('esito');
const modal = document.getElementById('edit-modal');
const modal_close = document.getElementById('close-modal');
const modal_form_container = document.getElementById('edit-form-container');
const cookie_banner = document.getElementById('cookie-banner');
const cookie_accept_btn = document.getElementById('cookie-accept-btn');
const welcome_screen = document.getElementById('welcome-screen');
const main_app = document.getElementById('main-app');
const entra_menu_btn = document.getElementById('entra-menu-btn');

//inizializza orologio
document.addEventListener("DOMContentLoaded", startClock);
// mostra cookie 
window.addEventListener('DOMContentLoaded', () => showCookieBanner());


const normalize = (str = '') => 
    str.normalize('NFD')
       .replace(/\p{Diacritic}/gu, '')
       .toLowerCase()
       .trim();
  

  // Alias specifici
  //Extra   = (item, tipo) => getActionPrice(item, 'aggiungi', tipo);
  //const getPrezzoRimozioneBase   = (item, tipo) => getActionPrice(item, 'togli',   tipo);
  
  // getExtraPrezzo ora usa sempre il prezzo di aggiunta extra
  //const getExtraPrezzo = getPrezzoAggiuntaExtra;
  
  // Tipo prodotto da chiave di categoria
  // Determina se un prodotto è una "pizza" o "puccia" in base al nome chiave
  function tipoProdottoFromCatKey(catKey = '') {
    const key = catKey.toLowerCase();
    return key.includes('pizza') ? 'pizza' : 'puccia';
  }

if (entra_menu_btn) {
entra_menu_btn.addEventListener('click', () => {
    if (welcome_screen) welcome_screen.style.display = 'none';
    if (main_app) main_app.style.display = 'block';
    window.scrollTo(0, 0);
});
}

// --- 2. Gestione dello Stato dell'Applicazione ---
let carrello = [],
categoria_attiva = "tutti",
sottocategoria_attiva = "tutte";

// ===== MAPPA INGREDIENTI BASE GLOBALE =====
const mappa_ingredienti = creaMappaIngredienti();

// Listener per lo shrinking dell'header al scroll
window.addEventListener('scroll', () => {
const h = document.getElementById('app-internal-header');
if (window.scrollY > 50) h.classList.add('shrink');
else h.classList.remove('shrink');
});

// Calcola il prezzo finale di un prodotto tenendo conto degli ingredienti base rimossi e degli extra
function calcola_prezzo_finale(prodotto, checked_base_ids = [], extra_ids = [], cat_key) {
  let prezzo_base = prodotto.prezzo;
  let tipoProdotto = tipoProdottoFromCatKey(cat_key);

  // 1. Ingredienti base modificabili effettivi (checkbox)
  const ib = (prodotto.ingredienti_base || []).map(ib => mappa_ingredienti[ib.id]).filter(Boolean);
  const modificabili = ib.filter(ing => ing.modificabile !== false);

  // 2. Sottrai il prezzo di rimozione SOLO degli ingredienti base tolti
  let prezzo_sottratto = 0;
  modificabili.forEach(ing => {
      if (!checked_base_ids.includes(ing.id)) {
          prezzo_sottratto += getPrezzoRimozioneBase(ing, tipoProdotto);
      }
  });

  // 3. Somma il prezzo di aggiunta SOLO delle pillole extra attive
  let prezzo_extra = 0;
  if (Array.isArray(extra_ids)) {
      extra_ids.forEach(id => {
          let ex = mappa_ingredienti[id];
          prezzo_extra += getPrezzoAggiuntaExtra(ex, tipoProdotto);
      });
  }

  // 4. Calcola il prezzo finale
  let finale = prezzo_base - prezzo_sottratto + prezzo_extra;
  return finale > 0 ? +finale.toFixed(2) : 0;
}



// --- 3. Utilità per la Gestione della Memoria Locale (LocalStorage) ---
const salva_in_local_storage = salvaInLocalStorage;
const recupera_da_local_storage = recuperaDaLocalStorage;
function svuota_carrello_local() {
  rimuoviDaLocalStorage(STORAGE_KEY);
}


const STORAGE_KEY = 'pucciaria-carrello-v1';

function salva_carrello_local() {
if (localStorage.getItem('cookie_accepted')) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(carrello));
    } catch (e) {
        console.error("Errore nel salvataggio del carrello in localStorage:", e);
    }
}
}

function carica_carrello_local() {
if (localStorage.getItem('cookie_accepted')) {
    try {
        const s = localStorage.getItem(STORAGE_KEY);
        if (s) carrello = JSON.parse(s);
    } catch (e) {
        console.error("Errore nel caricamento del carrello da localStorage:", e);
        carrello = []; // Resetta il carrello in caso di errore di parsing
        svuota_carrello_local(); // Pulisce i dati corrotti
    }
}
}


// Carica il carrello all'avvio dello script
carica_carrello_local();
render_carrello() ; 


// --- 5. Funzioni di Rendering dell'Interfaccia Utente ---
function render_categorie_tabs() {
const c = document.getElementById('categorie-filtri');
if (!c) return;
const cat_keys = get_categorie_prodotti();
let html = '';

html+=`
<div id="main-search-bar" style="display:flex;justify-content:center;width:100%;margin-bottom:10px;">
      <input 
        id="search-input" 
        type="search" 
        placeholder="Cerca un prodotto, ingrediente..." 
        style="width: 340px; max-width: 80vw; font-size: 1.14em; border-radius: 1.3em; border:1.5px solid #ffe24b; padding: .6em 1.2em; box-shadow:0 2px 8px #ffe24b15;" 
        autocomplete="off"
      >
<button class="tab-cat night-toggle${document.body.classList.contains('night') ? ' night' : ''}" type="button" id="nightmode-toggle">
    <span class="icon-moon" style="font-size:1.15em;">${document.body.classList.contains('night') ? '☀️' : '🌙'}</span>
    <span class="night-label" style="font-size:1em;">${document.body.classList.contains('night') ? 'Day' : 'Night'}</span>
</button>
    </div>
`;
html += `<button data-cat="tutti" class="tab-cat${categoria_attiva === 'tutti' ? ' active' : ''}">Tutte</button>`;
cat_keys.forEach(k => {
    html += `<button data-cat="${k}" class="tab-cat${categoria_attiva === k ? ' active' : ''}">${get_label_categoria(k)}</button>`;
});
c.innerHTML = html;
html += `
  <button 
    class="tab-cat carrello-toggle-btn"
    id="toggle-carrello-btn"
    style="position:relative;display:flex;align-items:center;gap:0.4em;">
    🛒
    <span id="carrello-badge" style="background:#f8b30a;font-size:0.93em;padding:0.13em 0.68em;border-radius:1em;min-width:18px;text-align:center;">
      ${carrello.length}
    </span>
  </button>
`;
// --- Handler NIGHT MODE ---
// NIGHT MODE handler
setupNightModeButton('.night-toggle', () => {
  render_categorie_tabs();
  render_sottocategorie_tabs();
  render_catalogo();
});



c.querySelectorAll('.tab-cat').forEach(btn => {
    // NON attaccare event se è night-toggle!
    if (!btn.classList.contains('night-toggle')) {
        btn.addEventListener('click', function() {
            categoria_attiva = this.getAttribute('data-cat');
            sottocategoria_attiva = "tutte";
            render_categorie_tabs();
            render_sottocategorie_tabs();
            render_catalogo();
        });
    }
});
/// Handler per search input
const searchInput = document.getElementById('search-input');
if (searchInput) {
  // dark mode adattivo
  if(document.body.classList.contains('night')) {
    searchInput.style.background = '#23231b';
    searchInput.style.color = 'var(--giallo-puggiaria)';
    searchInput.style.borderColor = 'var(--giallo-puggiaria)';
  }
  searchInput.addEventListener('input', function () {
    const q = this.value.trim();
    if (!q) {
      render_catalogo();
      return;
    }
    const result = searchProductsLocal(q);
    render_search_results(result);
  });
}
}
function render_sottocategorie_tabs() {
  const d = document.getElementById('sottocategorie-filtri');
if (!d) return;
if (categoria_attiva === 'tutti') {
    d.innerHTML = "";
    sottocategoria_attiva = "tutte";
    return;
}


  
const sottocategorieList = get_sottocategorie(categoria_attiva);
let html = `<button data-subcat="tutte" class="tab-subcat ${sottocategoria_attiva === 'tutte' ? 'active' : ''}">Tutte</button>`;
sottocategorieList.forEach(sub => {
    const label = sub.replace(/^pucce_/, '').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    html += `<button data-subcat="${sub}" class="tab-subcat ${sottocategoria_attiva === sub ? 'active' : ''}">${label}</button>`;
});
d.innerHTML = html;
d.querySelectorAll('.tab-subcat').forEach(btn => {
    btn.addEventListener('click', function() {
        sottocategoria_attiva = this.getAttribute('data-subcat');
        render_sottocategorie_tabs();
        render_catalogo();
        if (catalogo_div) catalogo_div.scrollIntoView({ behavior: 'smooth' });
    });
});}
//Costruisce descrizione modifiche ingrediente per il carrello
function get_descrizione_ingredienti(prodotto, checked_base_ids, active_pills) {
  // ingredienti base definiti
  const ib = (prodotto.ingredienti_base || []).map(ib => mappa_ingredienti[ib.id]).filter(Boolean);
  const modificabili = ib.filter(ing => ing.modificabile !== false);

  // Trova quelli rimossi
  const rimossi = modificabili.filter(ing => !checked_base_ids.includes(ing.id));

  // Trova gli extra (pills)
  const extraNames = (active_pills || [])
    .map(id => mappa_ingredienti[id]?.nome || id)
    .filter(Boolean);

  // Descrizione base
  let parts = [];
  if (rimossi.length) {
    rimossi.forEach(ing => {
      parts.push(`senza ${ing.nome}`);
    });
  }
  if (extraNames.length) {
    parts.push(`con aggiunta di ${extraNames.join(', ')}`);
  }

  // Se nessuna modifica, return vuoto
  if (!parts.length) return '';

  return parts.join(', ');
}
/**
 * versione 2  */
export function get_descrizione_ingredienti_v2(prodotto, checked_base_ids, active_pills = [], alternative_map = {}) {
  const ib = (prodotto.ingredienti_base || [])
    .map(x => mappa_ingredienti[x.id])
    .filter(Boolean);

  const modificabili = ib.filter(ing => ing.modificabile !== false);

  const rimossi = modificabili.filter(ing => {
    const isAlternative = alternative_map?.[ing.id];
    return !checked_base_ids.includes(ing.id) && !isAlternative;
  });

  const altNames = Object.entries(alternative_map)
    .map(([origId, altId]) => mappa_ingredienti[altId]?.nome)
    .filter(Boolean);

  const extraNames = (active_pills || [])
    .map(id => mappa_ingredienti[id]?.nome || id)
    .filter(Boolean);

  const parts = [];

  if (rimossi.length) {
    rimossi.forEach(ing => {
      parts.push(`senza ${ing.nome}`);
    });
  }

  if (altNames.length) {
    parts.push(`con ${altNames.join(', ')}`);
  }

  if (extraNames.length) {
    parts.push(`con aggiunta di ${extraNames.join(', ')}`);
  }

  return parts.join(', ');
}



 // Funzione di ricerca (nome, ingredienti base)
 function searchProductsLocal(query) {
  const q = normalize(query);
  if (!q) return getAllProducts().filter(prod => prod.ingredienti_base);

  const prodotti = getAllProducts().filter(prod => Array.isArray(prod.ingredienti_base));

  const matchNome = [];
  const matchIngredienti = [];
  const matchTags = [];

  prodotti.forEach(prod => {
    const nome = normalize(prod.nome || '');
    const descrizione = normalize(prod.descrizione || '');
    const ingredientiNomi = (prod.ingredienti_base || [])
      .map(ing => normalize(mappa_ingredienti[ing.id]?.nome || ''))
      .join(' ');

      const tags = Array.isArray(prod.tags) ? prod.tags.map(normalize) : [];

    if (nome.includes(q) || descrizione.includes(q)) {
      matchNome.push(prod);
    } else if (ingredientiNomi.includes(q)) {
      matchIngredienti.push(prod);
    } else if (tags.some(tag => tag.includes(q))) {
      matchTags.push(prod);
    }
  });

  // Ordine: nome → ingredienti → tag (senza duplicati)
  const final = [
    ...matchNome,
    ...matchIngredienti.filter(p => !matchNome.includes(p)),
    ...matchTags.filter(p => !matchNome.includes(p) && !matchIngredienti.includes(p))
  ];

  return final;
}
 // === RENDER SEARCH ===
function render_search_results(products) {
if (!catalogo_div) return;

if (!products.length) {
  catalogo_div.innerHTML = `
    <div class="no-results">
      Nessun prodotto trovato 😕
    </div>`;
  return;
}

const query = document.getElementById('search-input')?.value || '';
catalogo_div.innerHTML = `<h3 class="cat-title">Risultati per: "<span style="color:#fab100">${query}</span>"</h3><div class="cards-column">`;
catalogo_div.innerHTML += products.map(renderSingleCard).join('');
catalogo_div.innerHTML += `</div>`;
}

function renderSingleCard(prod) {
  const unique_id = prod.id || prod.nome;
  const img_path = `./img/${unique_id}.jpeg`;

  // === BEVANDA ===
  if (prod.cat_key === 'prodotti_bevande' || prod.tipo === 'bevanda') {
    return `
      <div class="card card-side" data-id="${unique_id}" data-cat="${prod.cat_key}" data-subcat="${prod.sub_key}">
        <div class="card-content">
          <h2>${prod.nome}</h2>
          <p>${prod.descrizione || ''}</p>
          <p><b>${prod.prezzo.toFixed(2)} €</b></p>
          <form class="bevanda-form" autocomplete="off">
            <div class="bevanda-qty-stepper">
              <button type="button" class="qty-minus">−</button>
              <input type="number" name="qty" min="1" max="99" value="1" class="bevanda-qty-input">
              <button type="button" class="qty-plus">+</button>
            </div>
            <button type="submit" class="carrello-btn">Aggiungi al carrello</button>
          </form>
        </div>
        <div class="card-img-wrap">
          <img src="${img_path}" alt="${prod.nome}" class="card-img" onerror="this.onerror=null;this.src='./img/placeholder.png';">
        </div>
      </div>
    `;
  }

  // === STANDARD CARD ===
  const ib = (prod.ingredienti_base || []).map(x => mappa_ingredienti[x.id]).filter(Boolean);

  const ingredients_html = renderIngredientiBase(ib, []);
  const show_extra = (prod.cat_key === 'prodotti_senza_puccia' || prod.cat_key === 'prodotti_antipasti');
  const allergeni_html=showAllergeni(ib);
  // Mini-card ciccio e puccia
  let extraBreadHTML = '';
  if (show_extra) {
    const ciccio = getProductById('ciccio-barese');
    const puccia = getProductById('puccia-vuota');
    if (ciccio) extraBreadHTML += renderMiniCardCiccioPuccia(ciccio, 'Ciccio');
    if (puccia) extraBreadHTML += renderMiniCardCiccioPuccia(puccia, 'Puccia Vuota');
  }
  
  const cardHTML= `
    <div class="card card-side" data-id="${unique_id}" data-cat="${prod.cat_key}" data-subcat="${prod.sub_key}">
      <div class="card-content">
        <h2>${prod.nome}</h2>
        ${allergeni_html}
        <p>${prod.descrizione || ''}</p>
        <p><b><span class="card-prezzo" data-price-container>${prod.prezzo.toFixed(2)}</span> €</b></p>
        <form class="quick-form" autocomplete="off">
          <div class="quick-ingredients">${ingredients_html}</div>
          <button type="submit" class="carrello-btn" style="margin-top:0.7em;">Aggiungi Rapido</button>
          <button type="button" class="customize-btn" style="margin-top:0.5em;">Personalizza Extra</button>
        </form>
        ${show_extra ? `
          <p class="info-ciccio-msg" style="font-size: 0.92em; color: #a94442; margin-top: 0.8em;">
            Non serviamo pane con i nostri <b>senza puccia</b> e <b>antipasti</b>.<br>
            Se desideri del pane, puoi aggiungere al carrello un <b>Ciccio</b> o una <b>Puccia Vuota</b>.
          </p>` : ''}
        ${extraBreadHTML}
      </div>
      <div class="card-img-wrap">
        <img src="${img_path}" alt="${prod.nome}" class="card-img" onerror="this.onerror=null;this.src='./img/placeholder.png';">
      </div>
    </div>
  `;
 
   return cardHTML;
}
function renderMiniCardCiccioPuccia(prod, tipo = 'ciccio') {
  const id = prod.id || prod.nome;
  const img = `./img/${id}.jpeg`;
  const base = (prod.ingredienti_base || []).map(x => mappa_ingredienti[x.id]).filter(Boolean);
  const base_html = renderIngredientiBase(base, []);

  return `
    <div class="minicard-extrabread card-mini" data-id="${id}" data-cat="${prod.cat_key}" data-sub="${prod.sub_key}" data-pane="true">
      
      <h4>${prod.nome}</h4>
      <form class="extrabread-form" autocomplete="off">
        ${base_html}
        <div class="bevanda-qty-stepper">
          <button type="button" class="qty-minus">−</button>
          <input type="number" name="qty" min="1" max="2" value="1" class="bevanda-qty-input">
          <button type="button" class="qty-plus">+</button>
        </div>
        <button type="submit" class="carrello-btn" style="margin-top:0.5em;">Aggiungi al carrello</button>
      </form>
    </div>

`;
}
// Funzione aggiornata: render_catalogo con mini-card ciccio/puccia al posto delle pills
// Funzione aggiornata: render_catalogo con mini-card ciccio/puccia al posto delle pills
function render_catalogo() {
  if (!catalogo_div) return;
  catalogo_div.innerHTML = '';

  Object.entries(pucciariaData).forEach(([cat_key, cat_val]) => {
    if (!cat_key.startsWith('prodotti_')) return;
    if (categoria_attiva !== "tutti" && cat_key !== categoria_attiva) return;

    Object.entries(cat_val).forEach(([sub_key, sub_val]) => {
      if (sub_key.startsWith('extra_') || !Array.isArray(sub_val) || sub_val.length === 0) return;
      if (sottocategoria_attiva !== "tutte" && sub_key !== sottocategoria_attiva) return;

      const label = sub_key
        .replace(/^pucce_/, '')
        .replace(/_/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());

      catalogo_div.innerHTML += `<h3 class="cat-title">${label}</h3><div class="cards-column">`;

      const products_html = sub_val.map(prod => renderSingleCard({
        ...prod,
        cat_key,
        sub_key
      })).join('');

      catalogo_div.innerHTML += products_html + `</div>`;

      // Applica reset dei checkbox/select una volta che il DOM è aggiornato
      setTimeout(() => {
        attachIngredientCheckboxReset(); 
      }, 0);
    });
  });
}




function getExtraFlag(catKey = '') {
  const key = (catKey || '').toLowerCase();
  if (key.includes('pizza')) return 'extra_pizza';
  if (key.includes('senza_puccia')) return 'extra_senza_puccia';
  return 'extra_puccia';
}

// Render di pill extra organizzate per categoria con deduplica e compatibilità snake_case
let extraPillsActiveCategory = null; // null = mostra categorie, se 'salse' mostra solo le pills di quella categoria
function renderExtraPillSection(
  extraObj,
  baseIds = [],
  selected = [],
  cat_key = '',   // <-- passalo sempre!
  categoriaAttiva = null
) {
  const extraFlag = getExtraFlag(cat_key);

  if (!extraObj || typeof extraObj !== 'object') return '';

  // STEP 1: Mostra solo CATEGORIE se nessuna attiva
  if (!categoriaAttiva) {
    const categorie = Object.keys(extraObj).filter(cat =>
      Array.isArray(extraObj[cat]) && extraObj[cat].some(item =>
        item[extraFlag] === true && !baseIds.includes(item.id || item.nome)
      )
    );
    if (!categorie.length) return '';
    return `
      <div class="extra-pills-group">
        ${categorie.map(cat => `
          <span class="pill-cat" data-category="${cat}">
            ${cat.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
        `).join('')}
      </div>
    `;
  }

  // STEP 2: Mostra PILLS della categoria selezionata
  const items = (extraObj[categoriaAttiva] || []).filter(item =>
    item[extraFlag] === true && !baseIds.includes(item.id || item.nome)
  );
  if (!items.length) return '<div class="extra-pills-group">Nessun ingrediente disponibile.</div>';

  // Deduplica
  const uniqueItems = Array.from(items.reduce((map, item) => {
    const key = item.id || item.nome;
    if (!map.has(key)) map.set(key, item);
    return map;
  }, new Map()).values());

  // Calcola tipo prezzo dinamico
  let tipoPrezzo = 'puccia';
  if (cat_key && cat_key.includes('pizza')) tipoPrezzo = 'pizza';
  else if (cat_key && cat_key.includes('senza_puccia')) tipoPrezzo = 'senza_puccia';

  // Render pills degli ingredienti
  return `
    <div class="extra-pills-header">
      <button type="button" class="pill-back" data-back="true">&larr; Indietro</button>
      <span class="cat-title-mini">${categoriaAttiva.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
    </div>
    <div class="extra-pills-group">
      ${uniqueItems.map(item => {
        const key = item.id || item.nome;
        const prezzo = getPrezzoAggiuntaExtra(item, tipoPrezzo);
        const prezzoTxt = prezzo > 0 ? ` (+${prezzo.toFixed(2)}€)` : '';
        const activeClass = selected.includes(key) ? ' pill-active' : '';
        return `
          <span class="pill-extra${activeClass}" data-value="${key}" data-price="${prezzo}">
             ${item.nome}${prezzoTxt}
          </span>
        `;
      }).join('')}
    </div>
  `;
}



//handler
// Dentro il modale o dove ti serve
modal_form_container.addEventListener('click', function(e) {
  // 1. Click su categoria → mostra pills di quella categoria
  const catBtn = e.target.closest('.pill-cat');
  if (catBtn) {
    extraPillsActiveCategory = catBtn.dataset.category;
    // Rirenderizza sezione extra
    aggiornaExtraPillSection();
    return;
  }

  // 2. Click su “indietro” → torna a categorie
  if (e.target.classList.contains('pill-back')) {
    extraPillsActiveCategory = null;
    aggiornaExtraPillSection();
    return;
  }

  // 3. Click su una pill extra → attiva/disattiva + aggiorna prezzo
  const pill = e.target.closest('.pill-extra');
  if (pill) {
    pill.classList.toggle('pill-active');
    if (typeof updateModalPrice === "function") updateModalPrice();
  }
});

function aggiornaExtraPillSection() {
  const form = modal_form_container.querySelector('form.customize-form');
  if (!form) return;
  const prodottoId = form.dataset.prodId;
  const catKey = form.dataset.catKey;
  const subKey = form.dataset.subKey;
  // Trova il prodotto corrente (prendi da dati globali)
  const prodotto = pucciariaData[catKey]?.[subKey]?.find(p => (p.id || p.nome) == prodottoId);
  if (!prodotto) return;
  const ib = (prodotto.ingredienti_base || []).map(x => x.id).filter(Boolean);
  const extraSel = Array.from(form.querySelectorAll('.pill-extra.pill-active')).map(el => el.dataset.value);

  // Qui aggiorni solo la sezione extra (puoi anche passare altri parametri)
  form.querySelector('.extra-pills-container').innerHTML =
  renderExtraPillSection(
    getExtraByCategoria(prodotto),
    ib,
    extraSel,
    catKey,
    extraPillsActiveCategory
  );
}


function wrap_with_close_overlay(html_content) {
return `<button type="button" class="btn-close-modal-overlay" aria-label="Chiudi modale" tabindex="0" hidden></button><div class="modal-card-content" style="position:relative;z-index:3;">${html_content}</div>`;
}

function chiudi_modale() {
if (!modal) return;
modal.classList.add('hidden');
document.body.classList.remove('modal-open');
render_catalogo();
}
['click', 'touchstart'].forEach(ev => {
    if (modal) {
        modal.addEventListener(ev, e => {
            if (e.target === modal) chiudi_modale();
        }, { passive: true });
    }
  });
  

if (modal_close) modal_close.addEventListener('click', chiudi_modale);
document.addEventListener('keydown', e => {
if (e.key === "Escape") chiudi_modale();
});

function render_personalizza_form(prodotto, cat_key, sub_key, editing_index = null, selected_state = {}) {
  let ib = [], ibi = [];
  if (prodotto.ingredienti_base) {
    ib  = prodotto.ingredienti_base.map(x => mappa_ingredienti[x.id]).filter(Boolean);
    ibi = prodotto.ingredienti_base.map(x => x.id).filter(Boolean);
  }

  // Extra globali raggruppati per categoria (es: salse, verdure, ecc.)
  const extra_cat = getExtraByCategoria(prodotto);

  // Se lo stato non è stato passato (es. prima apertura), preimposta i base selezionabili
  if (!Array.isArray(selected_state.base)) {
    selected_state.base = [];
  }
  if (selected_state.base.length === 0 && selected_state._source !== 'card') {
    selected_state.base = ib.filter(i => i.modificabile !== false && i.check_selected !== false).map(i => i.id);
  }
  selected_state.extra = selected_state.extra || [];
  const ingredients_html = renderIngredientiBase(ib, selected_state.base);
  const selected_ingredient_objects = ib.filter(i => selected_state.base.includes(i.id));
 
  // Costruzione HTML del form
  return `
    <form class="customize-form"
          data-prod-id="${prodotto.id || prodotto.nome}"
          data-cat-key="${cat_key}"
          data-sub-key="${sub_key}"
          autocomplete="off">
      
      <div class="modal-price">
        Prezzo: <span id="modal-prezzo">${prodotto.prezzo.toFixed(2)}</span> €
      </div>

      <b>Ingredienti base:</b><br>
     ${renderIngredientiBase(ib, selected_state.base)}

      <br><b>Extra:</b>
      <div class="extra-pills-container">
        ${renderExtraPillSection(extra_cat, ibi, selected_state.extra, cat_key, extraPillsActiveCategory)}
      </div>

      <br>
      <button type="submit" class="carrello-btn">
        ${editing_index !== null ? 'Salva Modifiche' : 'Aggiungi al carrello'}
      </button>
    </form>
  `;
}

  
/**
 * Ricalcola e aggiorna il prezzo nella modale
 */
function updateModalPrice() {
  const form = modal_form_container.querySelector('form.customize-form');
  if (!form) return;

  const prodId = form.dataset.prodId;
  const catKey = form.dataset.catKey;
  const subKey = form.dataset.subKey;
  const prodotto = pucciariaData[catKey]?.[subKey]?.find(p => (p.id || p.nome) == prodId);
  if (!prodotto) return;

  // leggi le selezioni correnti
  const baseSel  = Array.from(form.querySelectorAll('input[name="ing-base"]:checked'))
                        .map(cb => cb.value);
  const extraSel = Array.from(form.querySelectorAll('.pill-extra.pill-active'))
                        .map(el => el.dataset.value);

  // calcola prezzo
  const newPrice = calcola_prezzo_finale(prodotto, baseSel, extraSel, catKey);

  // aggiorna lo span
  const span = form.querySelector('#modal-prezzo');
  if (span) span.textContent = newPrice.toFixed(2);
}

/**
 * Attacca i listener sulle checkbox e sulle pill-extra
 */
function attachModalPriceListeners() {
  const form = modal_form_container.querySelector('form.customize-form');
  if (!form) return;

  form.querySelectorAll('input[name="ing-base"]').forEach(input => {
    input.addEventListener('change', updateModalPrice);
  });

  form.querySelectorAll('.pill-extra').forEach(el => {
    el.addEventListener('click', updateModalPrice);
  });
}


/**
 * Apre la modale di personalizzazione, renderizza il form e abilita il live‐update prezzo
 */
function openCustomizeModal(prodotto, cat_key, sub_key, selected_state = { base: [], extra: [] }) {
  modal_form_container.innerHTML = wrap_with_close_overlay(`
    <h2>${prodotto.nome}</h2>
    <div class="modal-price">
      Prezzo: <span id="modal-prezzo">${prodotto.prezzo.toFixed(2)}</span> €
    </div>
    ${render_personalizza_form(prodotto, cat_key, sub_key, null, selected_state)}
  `);

  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  
  attachModalPriceListeners();
  updateModalPrice();

  // **GESTIONE SUBMIT**
  const form = modal_form_container.querySelector('form.customize-form');
  if (form) {
    form.onsubmit = function(ev) {
      ev.preventDefault();

      // Ingredienti base selezionati
      const baseSel  = Array.from(form.querySelectorAll('input[name="ing-base"]:checked')).map(cb=>cb.value);

      // Pillole extra attive
      const extraSel = Array.from(form.querySelectorAll('.pill-extra.pill-active')).map(el=>el.dataset.value);

      // Trova il prodotto (con id giusto)
      const prodId = form.dataset.prodId;
      const cKey   = form.dataset.catKey;
      const sKey   = form.dataset.subKey;
      const prodotto = pucciariaData[cKey][sKey].find(p=>(p.id||p.nome)==prodId);

      // Calcola prezzo finale
      const prezzo = calcola_prezzo_finale(prodotto, baseSel, extraSel, cKey);

      // Costruisci descrizione dinamica
      const descrizione = get_descrizione_ingredienti(prodotto, baseSel, extraSel);

      // Aggiungi al carrello
      addToCart({
        prodotto,
        cat: cKey,
        sub: sKey,
        qty: 1,
        base: baseSel,
        extra: extraSel,
        descrizione,
        prezzo
      });

      chiudi_modale();
    };
  }
}


catalogo_div.addEventListener('click', handleCatalogClick);
catalogo_div.addEventListener('submit', handleCatalogSubmit);
catalogo_div.addEventListener('change', function (e) {
  const form = e.target.closest('form.quick-form');
  const card = form?.closest('.card');
  if (!card || !form) return;

  const id = card.dataset.id;
  const cat = card.dataset.cat;
  const sub = card.dataset.subcat;
  const prodotto = pucciariaData[cat]?.[sub]?.find(p => (p.id || p.nome) == id);
  if (!prodotto) return;

  const tipoProd = tipoProdottoFromCatKey(cat);

  // === Ingredienti attivi (modificabili checked + non modificabili) ===
  let selected_ingredients = getIngredientiAttivi(prodotto, form);

  // === Prezzo base ===
  let prezzo = parseFloat(prodotto.prezzo) || 0;

  // === Ingredienti base modificabili ===
  const ib = (prodotto.ingredienti_base || [])
    .map(x => mappa_ingredienti[x.id])
    .filter(Boolean);
  const mod_ids = ib.filter(i => i.modificabile !== false).map(i => i.id);

  mod_ids.forEach(id => {
    const input = form.querySelector(`input[name="ing-base"][value="${id}"]`);
    if (input && !input.checked) {
      const ing = mappa_ingredienti[id];
      prezzo -= getPrezzoRimozioneBase(ing, tipoProd);
    }
  });

  // === Extra (aggiunte non di default)
  form.querySelectorAll('input[name="ing-base"]:checked').forEach(cb => {
    const extra = cb.dataset.extraSenzaPuccia;
    if (extra) prezzo += parseFloat(extra);
  });

  // === Gestione Alternative selezionate ===
  const alternativeMap = {};
  form.querySelectorAll('select[name^="alt-"]').forEach(sel => {
    const origId = sel.name.replace('alt-', '');
    const selectedAltId = sel.value;
    if (selectedAltId) {
      const prezzoAlt = parseFloat(sel.selectedOptions[0]?.dataset.prezzo || 0);
      prezzo += prezzoAlt;
      alternativeMap[origId] = selectedAltId;

      // Aggiorna lista ingredienti visiva (per allergeni)
      const altIng = mappa_ingredienti[selectedAltId];
      if (altIng) selected_ingredients.push(altIng);
    }
  });

  // === Salva alternative sulla card (per recupero successivo)
  card.dataset.alternativeMap = JSON.stringify(alternativeMap);

  // === Aggiorna prezzo visivo
  const prezzoEl = card.querySelector('[data-price-container]');
  if (prezzoEl) prezzoEl.textContent = prezzo.toFixed(2);

  // === Aggiorna allergeni
  const allergeni_html = showAllergeni(selected_ingredients);
  const allergeniBox = card.querySelector('.allergeni-svg-box');
  if (allergeniBox) allergeniBox.innerHTML = allergeni_html;
});




function handleCatalogClick(e) {
  const tgt = e.target;
  // STEP + / – bevande
  if (tgt.classList.contains('qty-plus') || tgt.classList.contains('qty-minus')) {
    const input = tgt.closest('.bevanda-qty-stepper').querySelector('.bevanda-qty-input');
    let v = parseInt(input.value, 10) || 1;
    v = tgt.classList.contains('qty-plus') ? Math.min(99, v + 1) : Math.max(1, v - 1);
    input.value = v;
    return;
  }

  // PERSONALIZZA → apri modale
  if (tgt.classList.contains('customize-btn')) {
    const card = tgt.closest('.card');
    const id     = card.dataset.id;
    const cat    = card.dataset.cat;
    const sub    = card.dataset.subcat;
    // trova prodotto (prima fallback)
    let prodotto = pucciariaData[cat]?.[sub]?.find(p => (p.id||p.nome)==id);
    if (!prodotto) {
      outer: for (let c in pucciariaData) {
        if (!c.startsWith('prodotti_')) continue;
        for (let s in pucciariaData[c]) {
          if (!Array.isArray(pucciariaData[c][s])) continue;
          const f = pucciariaData[c][s].find(p=> (p.id||p.nome)==id);
          if (f) { prodotto=f; cat=c; sub=s; break outer; }
        }
      }
    }
    if (!prodotto) return alert("Prodotto non trovato.");
    // estrai base selezionate
    const baseSel = Array.from(card.querySelectorAll('input[name="ing-base"]:checked'))
                         .map(cb=>cb.value);
                         openCustomizeModal(prodotto, cat, sub, { base: baseSel, extra: [], _source: 'card' });

  }
  // GESTIONE bottone "aggiungi ciccio / puccia-vuota"
  if (tgt.classList.contains('aggiungi-ciccio-btn')) {
    const id_extra = tgt.dataset.aggiungiId;
    const ingrediente = getAllProducts().find(p => (p.id || p.nome) === id_extra);

    if (!ingrediente) return alert("Ingrediente non trovato.");

    const prezzo = getPrezzoAggiuntaExtra(ingrediente, 'senza_puccia');
    const descrizione = `aggiunta di ${ingrediente.nome}`;

    addToCart({
      prodotto: { id: id_extra, nome: ingrediente.nome },
      cat: ingrediente.cat_key || 'prodotti_pizze',
      sub: ingrediente.sub_key || 'autentiche_panificazioni',
      qty: 1,
      base: [],
      extra: [],
      descrizione,
      prezzo
    });
    return;
  }


}

function handleCatalogSubmit(ev) {
  ev.preventDefault();
  const form = ev.target;

  // === MINI-CARD: CICCO / PUCCIA-VUOTA ===
  if (form.classList.contains('extrabread-form')) {
    const card = form.closest('.minicard-extrabread');
    if (!card) return;
    const id = card.dataset.id;
    const cat = card.dataset.cat;
    const sub = card.dataset.sub;

    const prodotto = getAllProducts().find(p => (p.id || p.nome) === id);
    if (!prodotto) return;

    const qtyInput = form.querySelector('input[name="qty"]');
    const qty = Math.min(2, Math.max(1, parseInt(qtyInput?.value, 10) || 1));
     const baseSel = Array.from(form.querySelectorAll('input[name="ing-base"]:checked')).map(cb => cb.value);
    const prezzo = calcola_prezzo_finale(prodotto, baseSel, [], cat);

    addToCart({ prodotto, cat, sub, qty, base: baseSel, extra: [], descrizione: '', prezzo });
    return;
  }

  const card = form.closest('.card');
  if (!card) return;
  const id   = card.dataset.id;
  const cat  = card.dataset.cat;
  const sub  = card.dataset.subcat;

  // === BEVANDE ===
  if (form.classList.contains('bevanda-form')) {
    const prodotto = pucciariaData[cat][sub].find(p => (p.id || p.nome) === id);
    if (!prodotto) return;
    let qty = parseInt(form.qty.value, 10);
    if (isNaN(qty) || qty < 1) qty = 1;
    addToCart({ prodotto, cat, sub, qty, base: [], extra: [] });
    return;
  }

// === QUICK-ADD ===
if (form.classList.contains('quick-form')) {
  const prodotto = pucciariaData[cat][sub].find(p => (p.id || p.nome) === id);
  if (!prodotto) return;

  const tipoProd = tipoProdottoFromCatKey(cat);
  let prezzo = parseFloat(prodotto.prezzo) || 0;
  const baseSelezionati = [];
  const alternativeMap = {};

  // === Elabora ingredienti selezionati (incluso alternative selezionate)
  form.querySelectorAll('input[name="ing-base"]:checked').forEach(cb => {
    const idOriginale = cb.value;
    const altSelect = form.querySelector(`select[name="alt-${idOriginale}"]`);

    if (altSelect && altSelect.dataset.useAlternative === 'true' && altSelect.value) {
      baseSelezionati.push(altSelect.value);
      const prezzoAlt = parseFloat(altSelect.selectedOptions[0]?.dataset.prezzo || 0);
      prezzo += prezzoAlt;
      alternativeMap[idOriginale] = altSelect.value;
    } else {
      baseSelezionati.push(idOriginale);
    }

    // Prezzo extra da checkbox
    const extra = cb.dataset.extraSenzaPuccia;
    if (extra) prezzo += parseFloat(extra);
  });

  // === Descrizione con alternative e rimozioni
  const descrizione = get_descrizione_ingredienti_v2(prodotto, baseSelezionati, [], alternativeMap);

  // === Aggiunta prodotto principale al carrello
  addToCart({
    prodotto,
    cat,
    sub,
    qty: 1,
    base: baseSelezionati,
    extra: [],
    alternativeMap,
    descrizione,
    prezzo: +prezzo.toFixed(2)
  });

  // === Se presente pill extra (ciccio o puccia)
  const pillAttiva = form.querySelector('.pill-extra.pill-active');
  const extraId = pillAttiva?.dataset.aggiuntaId || pillAttiva?.dataset.value;
  const extraProdotto = extraId ? getProductById(extraId) : null;

  if (extraProdotto) {
    const prezzoExtra = getPrezzoAggiuntaExtra(extraProdotto, 'senza_puccia');
    addToCart({
      prodotto: extraProdotto,
      cat: extraProdotto.cat_key || 'prodotti_pizze',
      sub: extraProdotto.sub_key || 'panificazioni_autentiche',
      qty: 1,
      base: [],
      extra: [],
      descrizione: '',
      prezzo: prezzoExtra
    });
  }

  // === RESET form allo stato iniziale ===
  form.querySelectorAll('input[name="ing-base"]').forEach(cb => {
    const isDefault = (prodotto.ingredienti_base || []).some(ib => ib.id === cb.value);
    cb.checked = isDefault;
  });

  form.querySelectorAll('select[name^="alt-"]').forEach(sel => {
    sel.value = '';
    sel.dataset.useAlternative = 'false';
    sel.dataset.hasChanged = 'false';
    sel.classList.remove('visible');
  });

  // 🛠 Riapplica logica interattiva (es: click nome -> select visibile)
  attachIngredientCheckboxReset();

  return;
}


  // === PERSONALIZZAZIONE DA MODALE ===
  if (form.classList.contains('customize-form')) {
    const prodId = form.dataset.prodId;
    const cKey   = form.dataset.catKey;
    const sKey   = form.dataset.subKey;
    const prodotto = pucciariaData[cKey][sKey].find(p => (p.id || p.nome) === prodId);
    if (!prodotto) return;

    const tipoProd = tipoProdottoFromCatKey(cKey);
    const baseSel = Array.from(form.querySelectorAll('input[name="ing-base"]:checked')).map(cb => cb.value);
    const modBaseIds = (prodotto.ingredienti_base || [])
      .map(x => x.id)
      .filter(id => mappa_ingredienti[id].modificabile !== false);

    const extraPillIds = Array.from(form.querySelectorAll('.pill-extra.pill-active')).map(el => el.dataset.value);

    let prezzo = parseFloat(prodotto.prezzo) || 0;

    modBaseIds.forEach(id => {
      if (!baseSel.includes(id)) {
        const ing = mappa_ingredienti[id];
        prezzo -= getPrezzoRimozioneBase(ing, tipoProd);
      }
    });

    form.querySelectorAll('input[name="ing-base"]:checked').forEach(cb => {
      const extra = cb.dataset.extraSenzaPuccia;
      if (extra) prezzo += parseFloat(extra);
    });

    extraPillIds.forEach(id => {
      const ing = mappa_ingredienti[id];
      prezzo += getPrezzoAggiuntaExtra(ing, tipoProd);
    });

    const descrizione = get_descrizione_ingredienti(prodotto, baseSel, extraPillIds);
    addToCart({
      prodotto,
      cat: cKey,
      sub: sKey,
      qty: 1,
      base: baseSel,
      extra: extraPillIds,
      descrizione,
      prezzo: +prezzo.toFixed(2)
    });

    chiudi_modale();
    return;
  }
}
function sonoUgualiProdotti(a, b) {
  // Confronto rapido per prodotti semplici: solo id e prezzo
  const isSemplice = a.cat_key === 'prodotti_bevande' || b.cat_key === 'prodotti_bevande' ||
                     a.tipo === 'bevanda' || b.tipo === 'bevanda';

  if (isSemplice) {
    return a.id === b.id && a.prezzo === b.prezzo;
  }

  const sortJSON = arr => JSON.stringify((arr || []).slice().sort());

  return (
    a.id === b.id &&
    a.prezzo === b.prezzo &&
    sortJSON(a.base) === sortJSON(b.base) &&
    sortJSON(a.extra) === sortJSON(b.extra) &&
    (a.ingredienti || '') === (b.ingredienti || '')
  );
}



// helper di astrazione: aggiunge o somma quantità nel carrello
function addToCart({ prodotto, cat, sub, qty, base, extra, descrizione = '', prezzo }) {
  const id = prodotto.id || prodotto.nome;
  base = base || [];
  extra = extra || [];
  descrizione = descrizione || '';

  let item;
  if (cat === 'prodotti_bevande') {
    // Sommatoria semplificata per bevande: solo per ID
    item = carrello.find(it => it.id === id && it.cat_key === cat && it.sub_key === sub);
  } else {
    item = carrello.find(it => sonoUgualiProdotti(it, {
      id, base, extra, prezzo, ingredienti: descrizione
    }));
  }
  

  if (item) item.qty += qty;
  else carrello.push({
    id,
    nome: prodotto.nome,
    cat_key: cat,
    sub_key: sub,
    qty,
    base,
    extra,
    ingredienti: descrizione,
    prezzo: prezzo === undefined ? prodotto.prezzo : +prezzo.toFixed(2),
    tipo: prodotto.tipo // utile per semplificare confronto futuri
  });


  salva_carrello_local();
  render_carrello();
  apriCarrelloTemporaneo(); 
  updateCarrelloBadge();

  if (window.innerWidth <= 700) {
    carrello_div.classList.add('sidecarrello-visible');
    clearTimeout(window._carrelloTimeout);
    window._carrelloTimeout = setTimeout(() => {
      carrello_div.classList.remove('sidecarrello-visible');
    }, 3000);
  }

  if (cat === 'prodotti_senza_puccia' || cat === 'prodotti_antipasti') {
    mostra_extra_pane();
  }
}




function updateCarrelloBadge() {
  const badge = document.getElementById('carrello-badge');
  if (badge) badge.textContent = carrello.reduce((s, x) => s + x.qty, 0);
}
// inserisci queste tre funzioni subito dopo aver definito `openCustomizeModal` e `handle_edit_carrello`. 


function ordina_carrello(ca) {
return ca.slice().sort((a, b) => {
    const is_polpo_a = (a.nome?.toLowerCase().includes('polpo')) || (a.sub_key?.toLowerCase().includes('polpo'));
    const is_polpo_b = (b.nome?.toLowerCase().includes('polpo')) || (b.sub_key?.toLowerCase().includes('polpo'));
    if (is_polpo_a && !is_polpo_b) return -1;
    if (!is_polpo_a && is_polpo_b) return 1;
    return 0;
});
}

function render_carrello() {
  if (!carrello_div) return;
  const contenuto = document.getElementById('carrello-contenuto');
  const esito = document.getElementById('esito');

  if (!carrello.length) {
    contenuto.innerHTML = `
      <div id="carrello-immagine">
        <img src="./img/order-a-take-away.jpg" alt="Busta della spesa">
      </div>
      <br><i>Carrello vuoto</i>
     
    `;
    svuota_carrello_local();
    aggiornaBadge();
    return;
  }

  const itemsHtml = ordina_carrello(carrello).map((item, i) => {
    const tot = (item.prezzo * item.qty).toFixed(2);
    const desc = item.ingredienti ? ` (${item.ingredienti})` : '';
    return `
      <div class="carrello-item">
        <div><b>${item.qty}× ${item.nome}</b>${desc}</div>
        <div><b>${tot}€</b></div>
        <div class="item-actions">
          <button class="qty-minus" data-index="${i}">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-plus" data-index="${i}">+</button>
          <button class="edit-btn" data-index="${i}">✏️</button>
          <button class="remove-btn" data-index="${i}">🗑️</button>
        </div>
      </div>`;
  }).join('');

  contenuto.innerHTML = `
    <div id="carrello-immagine">
      <img src="./img/order-a-take-away.jpg" alt="Busta della spesa">
    </div>
    ${itemsHtml}
    <button id="carrello-conferma-btn" class="carrello-btn full-width">Conferma ordine</button>
    <button id="svuota-carrello-btn" class="carrello-btn full-width danger">🗑️ Svuota carrello</button>
   
  `;

  carrello_div.onclick = function(e) {
    const i = Number(e.target.dataset.index);

    if (e.target.classList.contains('qty-plus')) carrello[i].qty++;
    else if (e.target.classList.contains('qty-minus')) {
      if (carrello[i].qty > 1) carrello[i].qty--;
      else carrello.splice(i, 1);
    }
    else if (e.target.classList.contains('remove-btn')) carrello.splice(i, 1);
    else if (e.target.classList.contains('edit-btn')) {
      const item = carrello[i];
      const p = pucciariaData[item.cat_key]?.[item.sub_key]?.find(p => (p.id || p.nome) == item.id);
      if (!p) return;
      if (item.qty > 1) {
        item.qty--;
        carrello.splice(i + 1, 0, { ...item, qty: 1 });
        salva_carrello_local();
        render_carrello();
        apri_modifica_riga(i + 1, p);
      } else {
        apri_modifica_riga(i, p);
      }
      return;
    }
    
    else if (e.target.id === 'svuota-carrello-btn') {
      carrello = [];
      svuota_carrello_local();
      render_carrello();
      return;
    }
    else if (e.target.id === 'carrello-conferma-btn') {
      carrello_div.classList.remove('sidecarrello-visible');
      document.getElementById('esito').style.display = 'block';
     
      setTimeout(() => esito.scrollIntoView({ behavior: 'smooth' }), 300);

      const ora = new Date(), h = ora.getHours(), m = ora.getMinutes();
      const isNotte = h < 9;
      const isServizio = (h === 12 && m >= 30) || (h > 12 && h < 17) || (h === 15 && m <= 30) ||
                         (h === 19 && m >= 30) || (h > 19 && h < 23);

      if (isNotte || isServizio) {
        const msg = isNotte
          ? `⛔ <strong>Ordini tra le 00:00 e le 09:00</strong> non saranno letti.<br>Attendi o contattaci.`
          : `⚠️ Fascia oraria critica: <strong>contatta per conferma ricezione</strong>.`;

        esito.innerHTML = `
          <div class="avviso-invio">
            <p>${msg}</p>
            <button id="forza-invio-btn" class="carrello-btn full-width secondary">Invia comunque</button>
          </div>
        `;

        document.getElementById('forza-invio-btn')?.addEventListener('click', () => {
          esito.innerHTML = "";
          mostra_riepilogo_ordine({
            carrello,
            salva_in_local_storage,
            svuota_carrello_local,
            recupera_da_local_storage,
            render_carrello
          });
        });
        return;
      }

      mostra_riepilogo_ordine({
        carrello,
        salva_in_local_storage,
        svuota_carrello_local,
        recupera_da_local_storage,
        render_carrello
      });
      
      return;
    }
  
    salva_carrello_local();
    render_carrello();
  };
}



// --- Badge aggiornamento automatico
function aggiornaBadge() {
  const badge = document.getElementById('carrello-badge');
  if (badge) {
    const count = carrello.reduce((s, x) => s + x.qty, 0);
    badge.textContent = count > 0 ? count : '';
  }
}

// Funzione helper: apre il modale modifica per una riga specifica
function apri_modifica_riga(i, prodotto_originale) {
  const item = carrello[i];
  const selected_state = {
    base: item.base || [],
    extra: item.extra || []
  };

  const titolo = `<h2>Modifica ${item.nome}</h2>`;
  const prezzoBase = `<p><b>Prezzo base: ${prodotto_originale.prezzo.toFixed(2)} €</b></p>`;
  const formHTML = render_personalizza_form(prodotto_originale, item.cat_key, item.sub_key, i, selected_state);

  modal_form_container.innerHTML = wrap_with_close_overlay(`${titolo}${prezzoBase}${formHTML}`);
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');

  const btn_overlay = modal_form_container.querySelector('.btn-close-modal-overlay');
  if (btn_overlay) btn_overlay.onclick = chiudi_modale;

  const form = modal_form_container.querySelector('form');
  if (form) {
    form.onsubmit = function (ev) {
      ev.preventDefault();
      handle_edit_carrello(ev, i, prodotto_originale);
    };
  }

  updateModalPrice();
  attachModalPriceListeners();
}

function handle_edit_carrello(ev, i, prodotto_originale) {
  const form = ev.target;
  const catKey = carrello[i].cat_key;

  const checked_base_ids = Array.from(form.querySelectorAll('input[name="ing-base"]:checked'))
    .map(input => input.value);

  const active_pills = Array.from(form.querySelectorAll('.pill-extra.pill-active'))
    .map(span => span.dataset.value);

  const descrizione = get_descrizione_ingredienti(prodotto_originale, checked_base_ids, active_pills);
  const prezzo_finale = calcola_prezzo_finale(prodotto_originale, checked_base_ids, active_pills, catKey);
  const prezzoRounded = +prezzo_finale.toFixed(2);
  const qty_corrente = carrello[i].qty || 1;

  // Verifica se già esiste una riga identica (escludi la riga attuale)
  const rigaIdentica = carrello.find((item, idx) =>
    idx !== i &&
    item.id === (prodotto_originale.id || prodotto_originale.nome) &&
    JSON.stringify(item.base?.sort()) === JSON.stringify(checked_base_ids.slice().sort()) &&
    JSON.stringify(item.extra?.sort()) === JSON.stringify(active_pills.slice().sort()) &&
    item.prezzo === prezzoRounded &&
    item.ingredienti === descrizione
  );

  if (rigaIdentica) {
    rigaIdentica.qty += qty_corrente;
    carrello.splice(i, 1); // Rimuovi la riga modificata
  } else {
    carrello[i] = {
      ...carrello[i],
      prezzo: prezzoRounded,
      ingredienti: descrizione,
      base: checked_base_ids,
      extra: active_pills
    };
  }

  salva_carrello_local();
  chiudi_modale();
  render_carrello();
}




// Pulsante mobile per aprire/chiudere il carrello (🛒)
document.getElementById('toggle-carrello-btn').addEventListener('click', () => {
  carrello_div.classList.toggle('sidecarrello-visible');
});
const extraPane = document.getElementById('extra-pane-aside');
const extraPaneCards = document.getElementById('extra-pane-cards');
const closeExtraBtn = document.getElementById('close-extra-pane-btn');

if (closeExtraBtn) {
  closeExtraBtn.onclick = () => {
    extraPane.classList.remove('visible');
  };
}

// Mostra il pannello con minicard
function mostra_extra_pane() {
  if (!extraPane || !extraPaneCards) return;
  extraPaneCards.innerHTML = '';

  const ciccio = getAllProducts().find(p => p.id === 'ciccio-barese');
  const puccia = getAllProducts().find(p => p.id === 'puccia-vuota');

  if (ciccio) extraPaneCards.innerHTML += renderMiniCardCiccioPuccia(ciccio, 'Ciccio');
  if (puccia) extraPaneCards.innerHTML += renderMiniCardCiccioPuccia(puccia, 'Puccia Vuota');

  extraPane.classList.add('visible');
}

function apriCarrelloTemporaneo(durata = 1000) {
  const carrelloDiv = document.getElementById('carrello');
  if (!carrelloDiv) return;

  carrelloDiv.classList.add('sidecarrello-visible');

  // Rimuove se già c'è un timer in corso
  clearTimeout(window._carrelloTimeout);

  // Chiudi dopo X millisecondi
  window._carrelloTimeout = setTimeout(() => {
    carrelloDiv.classList.remove('sidecarrello-visible');
  }, durata);
}



function init_app() {
try {
    if (localStorage.getItem('night_mode') === 'yes') {
        document.body.classList.add('night');
    } else {
        document.body.classList.remove('night');
    }
} catch(e){}
render_categorie_tabs();
render_sottocategorie_tabs();
initNightModeFromStorage();
render_catalogo();

render_carrello();
const main_header = document.getElementById('main-header');
if (main_header) main_header.style.display = 'block';
const prodotti_menu_btn = document.getElementById('prodotti-menu-btn'),
    prodotti_dropdown = document.getElementById('prodotti-dropdown');
if (prodotti_menu_btn && prodotti_dropdown) {
    // Popola il dropdown delle categorie (può essere fatto anche qui)
    const cat_keys = get_categorie_prodotti();
    let dropdown_html = '';
    cat_keys.forEach(k => {
        dropdown_html += `<li data-cat="${k}">${get_label_categoria(k)}</li>`;
    });
    prodotti_dropdown.innerHTML = dropdown_html;

    prodotti_menu_btn.addEventListener('click', function() {
        const is_expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !is_expanded);
        prodotti_dropdown.style.display = is_expanded ? 'none' : 'block';
    });
    document.addEventListener('click', function(event) {
        if (!prodotti_menu_btn.contains(event.target) && !prodotti_dropdown.contains(event.target)) {
            prodotti_dropdown.style.display = 'none';
            prodotti_menu_btn.setAttribute('aria-expanded', 'false');
        }
    });
    prodotti_dropdown.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', function() {
            categoria_attiva = this.getAttribute('data-cat');
            sottocategoria_attiva = "tutte";
            render_categorie_tabs();
            render_sottocategorie_tabs();
            render_catalogo();
            render_carrello()
            prodotti_dropdown.style.display = 'none';
            prodotti_menu_btn.setAttribute('aria-expanded', 'false');
        });
    });
}
}

  
document.addEventListener('DOMContentLoaded', init_app);

if (extraPaneCards) {
  extraPaneCards.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const form = ev.target;
    if (!form.classList.contains('extrabread-form')) return;

    const card = form.closest('.minicard-extrabread');
    if (!card) return;

    const id = card.dataset.id;
    const cat = card.dataset.cat;
    const sub = card.dataset.sub;

    const prodotto = getAllProducts().find(p => (p.id || p.nome) === id);
    if (!prodotto) return;

    const qtyInput = form.querySelector('input[name="qty"]');
    const qty = Math.min(2, Math.max(1, parseInt(qtyInput?.value, 10) || 1));
    const baseSel = Array.from(form.querySelectorAll('input[name="ing-base"]:checked')).map(cb => cb.value);
    const prezzo = calcola_prezzo_finale(prodotto, baseSel, [], cat);

    addToCart({
      prodotto,
      cat,
      sub,
      qty,
      base: baseSel,
      extra: [],
      descrizione: '',
      prezzo
    });

    // Chiude il pannello dopo l'aggiunta
    extraPane.classList.remove('visible');
  });

  // Gestione + / − quantità nel pannello extra-pane
  extraPaneCards.addEventListener('click', function (e) {
    const tgt = e.target;
    if (!tgt.closest('.bevanda-qty-stepper')) return;

    const input = tgt.closest('.bevanda-qty-stepper').querySelector('input[name="qty"]');
    if (!input) return;
    let v = parseInt(input.value, 10) || 1;

    if (tgt.classList.contains('qty-plus')) {
      input.value = Math.min(2, v + 1);
    } else if (tgt.classList.contains('qty-minus')) {
      input.value = Math.max(1, v - 1);
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const editModal = document.getElementById("edit-modal");

  if (editModal) {
    editModal.addEventListener("click", (e) => {
      // Se clicchi fuori dal contenuto (cioè sull'overlay)
      if (e.target === editModal) {
        editModal.classList.add("hidden");
      }
    });
  }
});
console.log("✅ JS caricato");
