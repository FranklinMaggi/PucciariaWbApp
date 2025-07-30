export // Calcola il prezzo finale di un prodotto tenendo conto degli ingredienti base rimossi e degli extra
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

export function get_descrizione_ingredienti(prodotto, checked_base_ids, active_pills) {
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
  
  function getPrezzo(item, tipo = 'puccia', azione = 'aggiungi') {
    if (!item?.prezzo?.[azione]) return 0;
    return parseNumber(item.prezzo[azione][tipo] || 0);
  }
  