// prezzi.js


export function parseNumber(value) {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const n = parseFloat(value.replace(',', '.'));
    return isNaN(n) ? 0 : n;
  }
  return 0;
}

/**
 * Estrae il prezzo da una struttura tipo:
 * prodotto.prezzo = {
 *   aggiungi: { pizza: 1.5, puccia: 1.0 },
 *   togli:    { pizza: 0.3, puccia: 0.2 }
 * }
 */
export function getActionPrice(item, action = 'aggiungi', tipo = 'puccia') {
  if (!item || !item.prezzo || typeof item.prezzo !== 'object') return 0;
  const obj = item.prezzo[action];
  return obj && obj[tipo] != null ? parseNumber(obj[tipo]) : 0;
}

/**
 * Prezzo per aggiungere un extra
 */
export const getPrezzoAggiuntaExtra = (item, tipo = 'puccia') =>
  getActionPrice(item, 'aggiungi', tipo);

/**
 * Prezzo per rimuovere un ingrediente base
 */
export const getPrezzoRimozioneBase = (item, tipo = 'puccia') =>
  getActionPrice(item, 'togli', tipo);
