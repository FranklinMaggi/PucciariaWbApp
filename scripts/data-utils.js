

// data-utils.js
export // Recupera tutti i prodotti (puoi usare la tua funzione di aggregazione già esistente)
function getAllProducts(pucciariaData) {
const items = [];

// 1) Tutti i prodotti “prodotti_*”
Object.entries(pucciariaData).forEach(([cat_key, cat_val]) => {
    if (!cat_key.startsWith('prodotti_')) return;
    Object.entries(cat_val).forEach(([sub_key, arr]) => {
    if (!Array.isArray(arr)) return;
    arr.forEach(prod => {
        if (!prod || (!(prod.id || prod.nome))) return;
        // prezzo prodotto: se è già number lo uso, altrimenti cerco di forzare a numero
        const prezzoProd = typeof prod.prezzo === 'number'
        ? prod.prezzo
        : (parseFloat(prod.prezzo) || 0);

        items.push({
        ...prod,
        prezzo: prezzoProd,
        cat_key,
        sub_key,
        isExtra: sub_key.startsWith('extra_')
        });
    });
    });
});

// 2) Tutti gli “extra” globali (ingredientiBaseGlobal)
if (Array.isArray(pucciariaData.ingredientiBaseGlobal)) {
    pucciariaData.ingredientiBaseGlobal.forEach(ing => {
    if (!ing || !ing.id) return;
    // determina il tipo di prodotto (puoi passarlo come argomento se serve)
    const tipo = tipoProdottoFromCatKey('puccia');
    // usa la tua funzione dedicata per il prezzo di aggiunta
    const prezzoExtra = getPrezzoAggiuntaExtra(ing, tipo);
    items.push({
        ...ing,
        prezzo: prezzoExtra,
        cat_key: 'ingredientiBaseGlobal',
        sub_key: 'extra',
        isExtra: true
    });
    });
}

return items;
}
// Normalizzazione stringhe, rimozione diacritici
export function normalize(str='') {
    return str.normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLowerCase()
      .trim();
  }
  

         // Parsing sicuro di numeri da stringhe o numeri
export function parseNumber(value) {
    if (typeof value === 'number') return value;
    if (typeof value === 'string') {
      const n = parseFloat(value.replace(',', '.'));
      return isNaN(n) ? 0 : n;
    }
    return 0;
};

/*
export function normalize(str) { ... }
export function parseNumber(value) { ... }
*/