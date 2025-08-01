// productUtils.js

import { pucciariaData } from './data.js';
import {
    getPrezzoAggiuntaExtra,
    
  } from './prezzi.js';

    export function getAllProducts() {
    const items = [];

    // Tutti i prodotti "prodotti_*"
    Object.entries(pucciariaData).forEach(([cat_key, cat_val]) => {
        if (!cat_key.startsWith('prodotti_')) return;
        Object.entries(cat_val).forEach(([sub_key, arr]) => {
        if (!Array.isArray(arr)) return;
        arr.forEach(prod => {
            if (!prod || !(prod.id || prod.nome)) return;
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

    // Extra globali
    if (Array.isArray(pucciariaData.ingredientiBaseGlobal)) {
        pucciariaData.ingredientiBaseGlobal.forEach(ing => {
        if (!ing || !ing.id) return;
        const tipo = 'puccia';
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

    export function getProductById(id) {
    return getAllProducts().find(p => (p.id || p.nome) === id);
    }

    export function getAllExtrasOnly() {
    return getAllProducts().filter(p => p.isExtra);
    }

    
    /**
     * Crea una mappa { idIngrediente: oggettoIngrediente } da ingredientiBaseGlobal
     */
    export function creaMappaIngredienti() {
    const mappa = {};
    if (Array.isArray(pucciariaData.ingredientiBaseGlobal)) {
        pucciariaData.ingredientiBaseGlobal.forEach(ing => {
        if (ing && ing.id) mappa[ing.id] = ing;
        });
    }
    return mappa;
    }


    export function get_categorie_prodotti() {
        return Object.keys(pucciariaData).filter(k =>
            k.startsWith("prodotti_") && typeof pucciariaData[k] === "object" &&
            Object.keys(pucciariaData[k]).some(subk => Array.isArray(pucciariaData[k][subk]) && pucciariaData[k][subk].length > 0)
        );
        }
        export   function get_sottocategorie(cat_key) {
        if (!cat_key || !pucciariaData[cat_key] || typeof pucciariaData[cat_key] !== 'object') return [];
        return Object.keys(pucciariaData[cat_key]).filter(sub =>
            !sub.startsWith('extra_') && Array.isArray(pucciariaData[cat_key][sub]) && pucciariaData[cat_key][sub].length > 0
        );
        }
        //trasforma chiavi tecniche in strignhe leggibili 
        //es:prodotti_pizze-> Pizze 
        export   function get_label_categoria(k) {
          return k.replace('prodotti_', '').replace('_pucciaria', '').replace(/_/g, ' ').replace(/(^|\s)\S/g, l => l.toUpperCase());
          }