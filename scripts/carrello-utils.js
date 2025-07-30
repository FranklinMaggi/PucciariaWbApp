// carrello-utils.js
export // helper di astrazione: aggiunge o somma quantità nel carrello
function addToCart({ prodotto, cat, sub, qty, base, extra, descrizione = '', prezzo }) {
  const id = prodotto.id||prodotto.nome;
  const key = JSON.stringify({ id, base:base.slice().sort(), extra:extra.slice().sort(), prezzo, descrizione });
  let item = carrello.find(it =>
    JSON.stringify({ id:it.id, base:it.base.slice().sort(), extra:it.extra.slice().sort(), prezzo:it.prezzo, descrizione:it.ingredienti }) === key
  );
  if (item) item.qty += qty;
  else carrello.push({
    id, nome:prodotto.nome, cat_key:cat, sub_key:sub,
    qty, base, extra, ingredienti:descrizione,
    prezzo: prezzo===undefined ? prodotto.prezzo : +prezzo.toFixed(2)
  });
  salva_carrello_local();
  render_carrello();
  aggiornaBadge(); 
  
  function updateCarrelloBadge() {
    const badge = document.getElementById('carrello-badge');
    if (badge) badge.textContent = carrello.reduce((s, x) => s + x.qty, 0);
  }
 
  if (window.innerWidth <= 700) {
    carrello_div.classList.add('sidecarrello-visible');
    clearTimeout(window._carrelloTimeout);
    window._carrelloTimeout = setTimeout(() => {
      carrello_div.classList.remove('sidecarrello-visible');
    }, 3000);
  }


}
export function ordina_carrello(ca) {
    return ca.slice().sort((a, b) => {
        const is_polpo_a = (a.nome?.toLowerCase().includes('polpo')) || (a.sub_key?.toLowerCase().includes('polpo'));
        const is_polpo_b = (b.nome?.toLowerCase().includes('polpo')) || (b.sub_key?.toLowerCase().includes('polpo'));
        if (is_polpo_a && !is_polpo_b) return -1;
        if (!is_polpo_a && is_polpo_b) return 1;
        return 0;
    });
    }
    
 export   function render_carrello() {
      if (!carrello_div) return;
    
      // 1. CARRELLO VUOTO
      if (!carrello.length) {
        carrello_div.innerHTML = `
        <div id="carrello-immagine">
                <img src="./img/order-a-take-away.jpg" alt="Busta della spesa">
              </div>
                 <br><i>Carrello vuoto</i>`;
        svuota_carrello_local();
        aggiornaBadge();
        return;
      }
    
      // 2. RENDER ITEM
      const itemsHtml = ordina_carrello(carrello).map((item, i) => {
        const tot = (item.prezzo * item.qty).toFixed(2);
        const desc = item.ingredienti ? ` (${item.ingredienti})` : '';
        return `
          <div class="carrello-item">
            <div><b>${item.qty}× ${item.nome}</b>${desc}</div>
            <div><b>${tot}€</b></div>
            <div class="item-actions">
              <button class="qty-minus" data-index="${i}" aria-label="–">−</button>
              <span class="qty-num">${item.qty}</span>
              <button class="qty-plus"  data-index="${i}" aria-label="+">+</button>
              <button class="edit-btn"   data-index="${i}" aria-label="Modifica">✏️</button>
              <button class="remove-btn" data-index="${i}" aria-label="Rimuovi">🗑️</button>
            </div>
          </div>
        `;
      }).join('');
    
      // 3. AZIONI FINALI (CONFERMA + CHIUDI)
      document.getElementById('carrello-contenuto').innerHTML = `
        ${itemsHtml}
        <button id="carrello-conferma-btn" class="carrello-btn full-width">
          Conferma ordine
        </button>
        <button id="close-carrello-btn" class="carrello-btn full-width secondary">
          Chiudi carrello
        </button>
      `;
    
      // 4. EVENTI + / – / EDIT / REMOVE / CHIUDI / CONFERMA
      carrello_div.onclick = e => {
        const i = Number(e.target.dataset.index);
        if (e.target.classList.contains('qty-plus')) {
          carrello[i].qty++;
        } else if (e.target.classList.contains('qty-minus')) {
          if (carrello[i].qty > 1) carrello[i].qty--;
          else carrello.splice(i, 1);
        } else if (e.target.classList.contains('remove-btn')) {
          carrello.splice(i, 1);
        } else if (e.target.classList.contains('edit-btn')) {
          const item = carrello[i];
          const p_o = pucciariaData[item.cat_key]?.[item.sub_key]?.find(p => (p.id || p.nome) == item.id);
          if (!p_o) return;
    
          // Se quantità > 1, fai split e modifica la nuova
          if (item.qty > 1) {
            item.qty--;
            carrello.splice(i + 1, 0, { ...item, qty: 1 });
            salva_carrello_local();
            render_carrello();
            apri_modifica_riga(i + 1, p_o);
          } else {
            apri_modifica_riga(i, p_o);
          }
          return;
        } else if (e.target.id === 'carrello-conferma-btn') {
          document.getElementById('conferma-carrello').click();
          return;
        } else if (e.target.id === 'close-carrello-btn') {
          carrello_div.classList.remove('sidecarrello-visible');
          return;
        }
        salva_carrello_local();
        render_carrello();
      };
    
      aggiornaBadge();
    }
    
    // --- Badge aggiornamento automatico
    function aggiornaBadge() {
      const badge = document.getElementById('carrello-badge');
      if (badge) {
        const count = carrello.reduce((s, x) => s + x.qty, 0);
        badge.textContent = count > 0 ? count : '';
      }
    }
    /*
export function renderCarrello(...) { ... }
export function aggiornaBadge() { ... }*/