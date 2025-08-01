/**
 * Dato un ingrediente alternativo selezionato,
 * aggiunge automaticamente il prodotto `switchto` con `aggiunte` valide
 */

import { getProductById, creaMappaIngredienti } from './productUtils.js';
import { pucciariaData } from './data.js';
import { calcola_prezzo_finale } from './prezzi.js';
import { get_descrizione_ingredienti } from './utils.js'; // o v2 se preferisci

const mappaIngredienti = creaMappaIngredienti();

export function handleAlternativeSwitch(altId) {
    const altData = pucciariaData.ingredientiAlternative_option?.[altId]?.[0];
    if (!altData || !altData.switchto) return;
  
    const prodottoSwitch = getProductById(altData.switchto);
    if (!prodottoSwitch) return;
  
    // Filtra aggiunte solo se presenti in ingredientiBaseGlobal e tra gli ingredienti base del nuovo prodotto
    const baseIngredientiValidi = (prodottoSwitch.ingredienti_base || []).map(x => x.id);
    const aggiunteValide = (altData.aggiunte || []).filter(id =>
      mappaIngredienti[id] && baseIngredientiValidi.includes(id)
    );
  
    const descrizione = get_descrizione_ingredienti(
      prodottoSwitch,
      aggiunteValide,
      []
    );
  
    const prezzo = calcola_prezzo_finale(
      prodottoSwitch,
      aggiunteValide,
      [],
      prodottoSwitch.cat_key
    );
  
    addToCart({
      prodotto: prodottoSwitch,
      cat: prodottoSwitch.cat_key,
      sub: prodottoSwitch.sub_key,
      qty: 1,
      base: [],
      extra: [],
      descrizione,
      prezzo
    });
  }
  