//data.js
export const pucciariaData={  

  "ingredientiBaseGlobal": [
      // *** FRUTTA SECCA ***
      { "id": "mandorle-sgusciate", "nome": "Mandorle", "modificabile": true, "tipo": "frutta secca", 
        "extra_puccia": true, "extra_senza_puccia": true, "prezzo": { "aggiungi": { "puccia": 1 }, "togli": { "puccia":0} } 
      },
      { "id": "granella-pistacchio", "nome": "Granella di Pistacchio", "modificabile": true, "tipo": "frutta secca", 
        "extra_puccia": true, "extra_pizza": true, "extra_senza_puccia": true,
         "prezzo": { "aggiungi": { "pizza": 1, "puccia": 1  }, "togli": { "pizza": 1, "puccia": 0 } } 
        },
      { "id": "noci-sgusciate", "nome": "Noci", "modificabile": true, "tipo": "frutta secca", 
       
        "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 1, "puccia": 0.5 }, "togli": { "pizza": 1, "puccia": 0 } } 
      },
  
      // *** SPEZIE ***
      { "id": "pepe-nero", "nome": "Pepe Nero", "modificabile": true, "tipo": "spezie", 
        "extra_puccia": true, "extra_pizza": true,
         "prezzo": { "aggiungi": { "pizza": 0, "puccia": 0 }, "togli": { "pizza": 0, "puccia": 0 } } 
        },
      { "id": "pepe-rosa", "nome": "Pepe Rosa", "modificabile": true, 
        "tipo": "spezie", "extra_puccia": true, "extra_pizza": true , "extra_senza_puccia" :true , 
        "prezzo": { "aggiungi": { "pizza": 0, "puccia": 0 }, "togli": { "pizza": 0, "puccia": 0 } } 
      },
      { "id": "origano", "nome": "Origano", "modificabile": true, 
        "tipo": "spezie", "extra_puccia": true, "extra_pizza": true, "extra_senza_puccia" :true , 
        "prezzo": { "aggiungi": { "pizza": 0, "puccia": 0 }, "togli": { "pizza": 0, "puccia": 0 } } 
      },
      { "id": "basilico-fresco", "nome": "Basilico Fresco", "modificabile": true, "tipo": "erbe aromatiche",
        "extra_senza_puccia":true, "extra_puccia": true, "extra_pizza": true, 
        "prezzo": { "aggiungi": { "pizza": 1, "puccia": 0.5 , "senza_puccia":0.5 }, "togli": { "pizza": 0, "puccia": 0, "senza_puccia":0 } } 
      },
      { "id": "menta-fresca", "nome": "Foglioline di Menta", "modificabile": true, "tipo": "erbe aromatiche", 
        "extra_puccia": true, "extra_pizza": false,  "extra_senza_puccia" :true , 
        "prezzo": { "aggiungi": { "pizza": 0, "puccia": 0.5 }, "togli": { "pizza": 0, "puccia": 0 } } 
      },
      { "id": "limone-fresco", "nome": "Spicchio di Limone Fresco", "modificabile": true, "tipo": "limone", 
        "extra_puccia": false, "extra_pizza": false,"extra_senza_puccia" :true , 
         "prezzo": { "aggiungi": { "pizza": 0, "puccia": 0 , "senza_puccia":0.5 }, "togli": { "pizza": 0, "puccia": 0 } } 
        },
     
  
      // *** SALSE E PESTI ***
      { "id": "salsa-pomodoro", "nome": "Salsa di Pomodoro", "modificabile": true, "tipo": "salse", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "pesto-di-pistacchio", "nome": "Pesto di Pistacchio", "modificabile": true, "tipo": "salse", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "pesto-genovese", "nome": "Pesto alla Genovese", "modificabile": true, "tipo": "salse", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "glassa-aceto", "nome": "Glassa di Aceto Balsamico IGP", "modificabile": true, "tipo": "salse", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "olio-evo", "nome": "Olio EVO", "modificabile": true, "tipo": "salse", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "olio-tartufo", "nome": "Olio EVO aromatizzato al Tartufo", "modificabile": true, "tipo": "salse", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "limone-succo", "nome": "Succo di Limone", "modificabile": true, "tipo": "salse", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "salsa-ketchup", "nome": "Ketchup", "modificabile": true, "tipo": "salse", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "salsa-maionese", "nome": "Maionese", "modificabile": true, "tipo": "salse", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "salsa-boscaiola", "nome": "Salsa Boscaiola ai Funghi", "modificabile": true, "tipo": "salse", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "salsa-tartara", "nome": "Salsa Tartara", "modificabile": true, "tipo": "salse", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "crema-di-asparagi", "nome": "Crema di Asparagi", "modificabile": true, "tipo": "salse", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "salsa-BBQ", "nome": "Salsa BBQ", "modificabile": true, "tipo": "salse", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "maionese-tartufo", "nome": "Maionese al Tartufo", "modificabile": true, "tipo": "salse", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "salsa-cocktail", "nome": "Salsa Cocktail", "modificabile": true, "tipo": "salse", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "salsa-pepe-rosa", "nome": "Salsa al Pepe Rosa", "modificabile": true, "tipo": "salse", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "salsa-senape", "nome": "Senape", "modificabile": true, "tipo": "salse", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
    
      // *** VERDURE ***
      { "id": "rucola-fresca", "nome": "Rucola", "modificabile": true, "tipo": "verdure", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "sedano-fresco", "nome": "Rondelle di Sedano Fresco", "modificabile": true, "tipo": "verdure", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "pomodorini-ciliegini", "nome": "Pomodorini", "modificabile": true, "tipo": "verdure", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "pomodorini-cotti", "nome": "Pomodorini In Cottura", "modificabile": true, "tipo": "verdure", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "pomodorini-grigliati", "nome": "Pomodorini Scottati in Forno", "modificabile": true, "tipo": "verdure", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "funghi-freschi", "nome": "Funghi", "modificabile": true, "tipo": "verdure", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "zucchine-grigliate", "nome": "Zucchine Grigliate", "modificabile": true, "tipo": "verdure", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "zucchine-cotte", "nome": "Zucchine", "modificabile": true, "tipo": "verdure", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "rapa-stufate", "nome": "Rape Stufate", "modificabile": true, "tipo": "verdure", "extra_puccia": true, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "cipolla-rossa", "nome": "Cipolla", "modificabile": true, "tipo": "verdure", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "melanzane-cotte", "nome": "Melanzane", "modificabile": true, "tipo": "verdure", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "melanzane-grigliate", "nome": "Melanzane Grigliate", "modificabile": true, "tipo": "verdure", "extra_puccia": true, "extra_pizza": true, "extra_senza_puccia":false , "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1  , "senza_puccia":2}, "togli": { "pizza": 1, "puccia": 0.5 , "senza_puccia":0} } },
      { "id": "radicchio-scottato", "nome": "Radicchio Scottato", "modificabile": true, "tipo": "verdure", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "funghi-grigliati", "nome": "Funghi grigliati in forno", "modificabile": true, "tipo": "verdure", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 2 ,"senza_puccia":2 }, "togli": { "pizza": 1, "puccia": 1 } } },
      { "id": "funghi-grigliati-piatto", "nome": "Funghi grigliati in forno", "modificabile": true, "tipo": "verdure", "extra_puccia": false, "extra_senza_puccia": true, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 2 ,"senza_puccia":2 }, "togli": { "pizza": 1, "puccia": 2 } } },
      { "id": "zucchine-grigliate-piatto", "nome": "Zucchine Grigliate", "modificabile": true, "tipo": "verdure", "extra_puccia": false, "extra_pizza": false, "extra_senza_puccia": true, "prezzo": { "aggiungi": { "pizza": 0, "puccia": 0 , "senza_puccia":2}, "togli": { "pizza": 0, "puccia": 2, "senza_puccia":2 } }},
      { "id": "melanzane-grigliate-piatto", "nome": "Melanzane Grigliate", "modificabile": true, "tipo": "verdure", "extra_puccia": false, "extra_senza_puccia": true, "extra_pizza": true, "extra_senza_puccia":true , "prezzo": { "aggiungi": { "pizza": 0, "puccia": 0 , "senza_puccia":2}, "togli": { "pizza": 0, "puccia": 2, "senza_puccia":2 } }},
      
      // *** SOTT'OLI ***
      { "id": "melanzane-sottolio", "nome": "Filetti di Melanzane Sott'olio", "modificabile": true, "tipo": "sott'oli", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "funghetti-sottolio", "nome": "Funghetti Sott'olio", "modificabile": true, "tipo": "sott'oli", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "carciofi-sottolio", "nome": "Carciofi A Spicchi in Olio", "modificabile": true, "tipo": "sott'oli", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "pomodori-sottiolio", "nome": "Pomodori Sott'Olio", "modificabile": true, "tipo": "sott'oli", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "olive-nere", "nome": "Olive Nere Denocciolate", "modificabile": true, "tipo": "sott'oli", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
  
      // *** SALUMI/PROSCIUTTI ***
      { "id": "salsiccia-norcia", "nome": "Salsiccia di Norcia", "modificabile": false, "tipo": "salumi", "alternative_key": "carneFascia2", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "salsiccia-piccante-ariccia", "nome": "Salsiccia Piccante di Ariccia", "modificabile": false, "tipo": "salumi", "alternative_key": "carneFascia3", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "porchetta-ariccia", "nome": "Porchetta di Ariccia IGP", "modificabile": false, "tipo": "salumi", "alternative_key": "carneFascia2", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "guanciale-croccante", "nome": "Guanciale di Norcia croccante", "modificabile": false, "tipo": "salumi", "alternative_key": "carneFascia3", "extra_puccia": true, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 4, "puccia": 2 }, "togli": { "pizza": 3, "puccia": 2 } } },
      { "id": "ciauscolo-norcia", "nome": "Ciauscolo di Norcia IGP", "modificabile": false, "tipo": "salumi", "alternative_key": "carneFascia2", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "prosciutto-crudo", "nome": "Prosciutto Crudo di Parma", "modificabile": false, "tipo": "salumi", "alternative_key": "carneFascia2", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "prosciutto-cotto", "nome": "Prosciutto Cotto", "modificabile": false, "tipo": "salumi", "alternative_key": "carneFascia2", "extra_puccia": false, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "bresaola-carpaccio", "nome": "Bresaola", "modificabile": false, "tipo": "salumi", "alternative_key": "carneFascia4", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "speck-salume", "nome": "Speck", "modificabile": false, "tipo": "salumi", "alternative_key": "carneFascia2", "extra_puccia": false, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "capocollo-salume", "nome": "Capocollo", "modificabile": false, "tipo": "salumi", "alternative_key": "carneFascia2", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "capocollo-croccante", "nome": "Capocollo croccante", "modificabile": true, "tipo": "salumi", "alternative_key": "carneFascia2", "extra_puccia": true, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 2.5 }, "togli": { "pizza": 1, "puccia": 1.0 } } },
      { "id": "salsiccia-dolce", "nome": "Salsiccia Dolce", "modificabile": false, "tipo": "salumi", "alternative_key": "carneFascia2", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "salsiccia-piccante", "nome": "Salsiccia Piccante", "modificabile": false, "tipo": "salumi", "alternative_key": "carneFascia2", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "mortadella-cuore", "nome": "Mortadella", "modificabile": false, "tipo": "salumi", "alternative_key": "carneFascia2", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "hamburger-manzo", "nome": "Hamburger di Manzo", "modificabile": false, "tipo": "salumi", "alternative_key": "carneFascia3", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } ,disponibile:false},
      { "id": "zampina-arrostita", "nome": "Zampina Arrostita", "modificabile": false, "tipo": "salumi", "alternative_key": "carneFascia3", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
  
      // *** FORMAGGI ***
      { "id": "fior-di-latte", "nome": 'Mozzarella "Fior di Latte"', "modificabile": true, "tipo": "formaggi", "alternative_key": "formaggiFascia2", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 3, "puccia": 1 }, "togli": { "pizza": 2, "puccia": 1 } } },
      { "id": "bufala-bianca-uscita", "nome": "Bufala in uscita", "modificabile": true, "tipo": "formaggi", "alternative_key": "formaggiFascia2", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 3, "puccia": 0 }, "togli": { "pizza": 3, "puccia": 0 } } },
      { "id": "bufala-bianca-cottura", "nome": "Bufala in cottura", "modificabile": true, "tipo": "formaggi", "alternative_key": "formaggiFascia2", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 4, "puccia": 0 }, "togli": { "pizza": 4, "puccia": 0 } } },
      { "id": "bufala-affumicata-uscita", "nome": "Bufala Affumicata in uscita", "modificabile": true, "tipo": "formaggi", "alternative_key": "formaggiFascia2", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 3, "puccia": 0}, "togli": { "pizza": 3, "puccia": 0 } } },
      { "id": "bufala-affumicata-cottura", "nome": "Bufala Affumicata in cottura", "modificabile": true, "tipo": "formaggi", "alternative_key": "formaggiFascia2", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 4, "puccia": 0 }, "togli": { "pizza": 4, "puccia": 0 } } },
      { "id": "bufala-bianca", "nome": "Bufala Bianca", "modificabile": true, "tipo": "formaggi", "alternative_key": "formaggiFascia2", "extra_puccia": true, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 0, "puccia": 2 }, "togli": { "pizza": 0, "puccia": 1 } } },
      { "id": "bufala-affumicata", "nome": "Bufala Affumicata", "modificabile": true, "tipo": "formaggi", "alternative_key": "formaggiFascia2", "extra_puccia": true, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 0, "puccia": 2 }, "togli": { "pizza": 0, "puccia": 1 } } },
      { "id": "burrata-affumicata-uscita", "nome": "Burrata Affumicata in uscita", "modificabile": true, "tipo": "formaggi", "alternative_key": "formaggiFascia3", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2.5, "puccia": 0 }, "togli": { "pizza": 2, "puccia": 0} } },
      { "id": "burrata-affumicata-cottura", "nome": "Burrata Affumicata in cottura", "modificabile": true, "tipo": "formaggi", "alternative_key": "formaggiFascia3", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 5, "puccia": 0 }, "togli": { "pizza": 0, "puccia": 0 } } },
      { "id": "burrata-affumicata", "nome": "Burrata Affumicata", "modificabile": true, "tipo": "formaggi", "alternative_key": "formaggiFascia3", "extra_puccia": true, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 0, "puccia": 2.5 }, "togli": { "pizza": 0, "puccia": 2} } },
      { "id": "burratina-bianca-uscita", "nome": "Burratina Locale in uscita", "modificabile": false, "tipo": "formaggi", "alternative_key": "formaggiFascia2", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 0 }, "togli": { "pizza": 1.5, "puccia": 0} } },
      { "id": "burratina-bianca-cottura", "nome": "Burratina Locale in cottura", "modificabile": false, "tipo": "formaggi", "alternative_key": "formaggiFascia2", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 3, "puccia": 0 }, "togli": { "pizza": 0, "puccia": 0 } } },
      { "id": "burratina-bianca", "nome": "Burratina di Gioia", "modificabile": true, "tipo": "formaggi", "alternative_key": "formaggiFascia2", "extra_puccia": true, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 0, "puccia": 2 }, "togli": { "pizza": 0, "puccia": 1.5 } } },
      { "id": "grana-padano-petali", "nome": "Grana Padano Petali", "modificabile": false, "tipo": "formaggi", "alternative_key": "formaggiFascia2", "extra_puccia": true, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0 } } },
      { "id": "grana-padano-fonduta", "nome": "Fonduta di Grana Padano", "modificabile": false, "tipo": "formaggi", "alternative_key": "formaggiFascia2", "extra_puccia": true, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 0, "puccia": 1.5 }, "togli": { "pizza": 0, "puccia": 0.5} } },
      { "id": "caciocavallo-grotta-fonduta", "nome": "Fonduta di Caciocavallo IGP", "modificabile": false, "tipo": "formaggi", "alternative_key": "formaggiFascia2", "extra_puccia": true, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 2.5}, "togli": { "pizza": 1, "puccia": 1.5} } },
      { "id": "caciocavallo-grotta-crudo", "nome": "Caciocavallo di Grotta IGP", "modificabile": false, "tipo": "formaggi", "alternative_key": "formaggiFascia2", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 3, "puccia": 2.5 }, "togli": { "pizza": 2, "puccia": 2} } },
      { "id": "scamorza-affumicata", "nome": "Scamorza Affumicata", "modificabile": false, "tipo": "formaggi", "alternative_key": "formaggiFascia2", "extra_puccia": true, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0 } } },
      { "id": "sottiletta-krafft", "nome": "Sottiletta Krafft", "modificabile": false, "tipo": "formaggi", "alternative_key": "formaggiFascia2", "extra_puccia": true, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 0, "puccia": 1 }, "togli": { "pizza": 0, "puccia": 0 } } },
      { "id": "gorgonzola-dolce", "nome": "Gorgonzola", "modificabile": false, "tipo": "formaggi", "alternative_key": "formaggiFascia2", "extra_puccia": false, "extra_pizza": false, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 0 }, "togli": { "pizza": 1, "puccia": 0} } },
  
      // *** PESCE E CROSTACEI ***
      { "id": "polpo-tentacolo", "nome": "Polpo Arrostito", "modificabile": false, "tipo": "pesce", "alternative_key": "pesceFasciaUnica", "switch": "", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "polpo-arrostito", "nome": "Polpo Arrostito", "modificabile": false, "tipo": "pesce", "alternative_key": "pesceFasciaUnica", "switch": "", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } ,disponibile:false},
      { "id": "gamberi-arrostiti", "nome": "Gamberoni Argentini Sgusciati e Arrostiti", "modificabile": false, "tipo": "crostacei", "alternative_key": "pesceFasciaUnica", "switch": "", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "gamberi-crudi", "nome": "Filetti di Gamberoni Argentini Crudi Sgusciati", "modificabile": false, "tipo": "crostacei", "alternative_key": "pesceFasciaUnica", "switch": "", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "gamberi-tartare", "nome": "Tartare di Gamberoni Argentini Crudi", "modificabile": false, "tipo": "crostacei", "alternative_key": "pesceFasciaUnica", "switch": "", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "gamberi-nudi-arrostiti", "nome": "5 Gamberoni Argentini Sgusciati e Arrostiti", "modificabile": false, "tipo": "crostacei", "alternative_key": "pesceFasciaUnica", "switch": "", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "salmone-arrostito", "nome": "Salmone Arrostito", "modificabile": false, "tipo": "pesce", "alternative_key": "pesceFasciaUnica", "switch": "", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "salmone-controcorrente-arrostito", "nome": "Salmone Arrostito", "modificabile": false, "tipo": "pesce", "alternative_key": "pesceFasciaUnica", "switch": "", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "salmone-tartare", "nome": "Tartare di Salmone", "modificabile": false, "tipo": "pesce", "alternative_key": "pesceFasciaUnica", "switch": "", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "salmone-affumicato", "nome": "Salmone Norvegese Affumicato", "modificabile": false, "tipo": "pesce", "alternative_key": "pesceFasciaUnica", "switch": "", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "tonno-tartare", "nome": "Tartare di Tonno Crudo", "modificabile": false, "tipo": "pesce", "alternative_key": "pesceFasciaUnica", "switch": "", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "tonno-arrostito", "nome": "Filetto di Tonno Arrostito", "modificabile": false, "tipo": "pesce", "alternative_key": "pesceFasciaUnica", "switch": "", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "tonno-tonnara-arrostito", "nome": "Filetto di Tonno Arrostito", "modificabile": false, "tipo": "pesce", "alternative_key": "pesceFasciaUnica", "switch": "", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "pesce-spada-arrostito", "nome": "Filetto di Pesce Spada Arrostito", "modificabile": false, "tipo": "pesce", "alternative_key": "pesceFasciaUnica", "switch": "", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "pesce-spada-lampedusiana-arrostito", "nome": "Filetto di Pesce Spada Arrostito", "modificabile": false, "tipo": "pesce", "alternative_key": "pesceFasciaUnica", "switch": "", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } },
      { "id": "pesce-spada-tartare", "nome": "Tartare di Pesce Spada Crudo", "modificabile": false, "tipo": "pesce", "alternative_key": "pesceFasciaUnica", "switch": "", "extra_puccia": true, "extra_pizza": true, "prezzo": { "aggiungi": { "pizza": 2, "puccia": 1 }, "togli": { "pizza": 1, "puccia": 0.5 } } }
  ],
    
    "ingredientiAlternative_option" : {
      "carneFascia2":[
        { id: "salsiccia-norcia-arrostita", nome:"Salsiccia di Norcia Arrostita" ,prezzo: 0},
        { id: "salsiccia-piccante-ariccia", nome: "Salsiccia Piccante di Ariccia", prezzo: 0},
        { id: "porchetta-ariccia", nome: "Porchetta di Ariccia IGP", prezzo: 0},
        { id: "hamburger-manzo", nome: "Hamburger di Manzo", prezzo: 2},
        { id: "zampina-arrostita", nome: "200g di Zampina Arrostita in Forno a Legna",prezzo: 2},
        { id: "guanciale-croccante", nome: "Guanciale di Norcia croccante", prezzo: 0},
        { id: "ciauscolo-norcia", nome:"Salame Ciauscolo di Norcia IGP affettato al momento",prezzo:0},
        { id: "prosciutto-crudo", nome: "Prosciutto Crudo di Parma affettato al momento", prezzo: 2},
        { id: "prosciutto-cotto", nome: "Prosciutto Cotto affettato al momento", prezzo: 1},
        { id: "bresaola-carpaccio", nome: "Carpaccio di Bresaola affettato al momento", prezzo: 3},
        { id: "speck-salume", nome: "Speck affettato al momento ", prezzo: 0},
        { id: "capocollo-salume", nome: "Capocollo affettato al momento", prezzo: 0},
        { id: "salsiccia-dolce ", nome: "Salsiccia dolce Affettata al momento", prezzo: 0},
        { id: "salsiccia-piccante ", nome: "Salsiccia piccante Affettata al momento", prezzo: 0}
      ],
      "carneFascia3":[
        { id: "salsiccia-norcia-arrostita", nome:"Salsiccia di Norcia Arrostita" ,prezzo: 0},
        { id: "salsiccia-piccante-ariccia", nome: "Salsiccia Piccante di Ariccia", prezzo: 0},
        { id: "porchetta-ariccia", nome: "Porchetta di Ariccia IGP", prezzo: 0},
        { id: "hamburger-manzo", nome: "Hamburger di Manzo", prezzo: 1},
        { id: "zampina-arrostita", nome: "200g di Zampina Arrostita in Forno a Legna",prezzo: 1},
        { id: "guanciale-croccante", nome: "Guanciale di Norcia croccante", prezzo: 0},
        { id: "ciauscolo-norcia", nome:"Salame Ciauscolo di Norcia IGP affettato al momento",prezzo:0},
        { id: "prosciutto-crudo", nome: "Prosciutto Crudo di Parma affettato al momento", prezzo: 0},
        { id: "prosciutto-cotto", nome: "Prosciutto Cotto affettato al momento", prezzo: 0},
        { id: "bresaola-carpaccio", nome: "Carpaccio di Bresaola affettato al momento", prezzo: 2},
        { id: "speck-salume", nome: "Speck affettato al momento ", prezzo: 0},
        { id: "capocollo-salume", nome: "Capocollo affettato al momento", prezzo: 0},
        { id: "salsiccia-dolce ", nome: "Salame Artigianale dolce Affettata al momento", prezzo: 0},
        { id: "salsiccia-piccante ", nome: "Salsiccia piccante Affettata al momento", prezzo: 0}
      ],
      "carneFascia4":[
        { id: "salsiccia-norcia-arrostita", nome:"Salsiccia di Norcia Arrostita" ,prezzo: -1},
        { id: "salsiccia-piccante-ariccia", nome: "Salsiccia Piccante di Ariccia", prezzo: -1},
        { id: "porchetta-ariccia", nome: "Porchetta di Ariccia IGP", prezzo:-1},
        { id: "hamburger-manzo", nome: "Hamburger di Manzo", prezzo: -1},
        { id: "zampina-arrostita", nome: "200g di Zampina Arrostita in Forno a Legna",prezzo: -1},
        { id: "guanciale-croccante", nome: "Guanciale di Norcia croccante", prezzo: -1},
        { id: "ciauscolo-norcia", nome:"Salame Ciauscolo di Norcia IGP affettato al momento",prezzo:-1},
        { id: "prosciutto-crudo", nome: "Prosciutto Crudo di Parma affettato al momento", prezzo: -1},
        { id: "prosciutto-cotto", nome: "Prosciutto Cotto affettato al momento", prezzo: -1},
        { id: "bresaola-carpaccio", nome: "Carpaccio di Bresaola affettato al momento", prezzo: 0},
        { id: "speck-salume", nome: "Speck affettato al momento ", prezzo: -1},
        { id: "capocollo-salume", nome: "Capocollo affettato al momento", prezzo: -1},
        { id: "salsiccia-dolce ", nome: "Salame Artigianale dolce Affettata al momento", prezzo: -1},
        { id: "salsiccia-piccante ", nome: "Salsiccia piccante Affettata al momento", prezzo: -1}
      ],
      "formaggiFascia1":[
          { id: "bufala-bianca", nome: "Bufala Bianca", prezzo: 1.5},
          { id: "bufala-affumicata", nome: "Bufala Affumicata", prezzo: 1.5},
          { id: "burrata-affumicata", nome: "Burrata Affumicata", prezzo: 2.5},
          { id: "burratina-bianca", nome: "Burratina di Gioia", prezzo: 1.5 },
          { id: "fior-di-latte", nome: "Mozzarella Fior di Latte", prezzo: 1},
          { id: "grana-padano-petali", nome: "Grana Padano Petali", prezzo: 1},
          { id: "grana-padano-fonduta", nome: "Fonduta di Grana Padano", prezzo: 2},
          { id: "caciocavallo-grotta-fonduta", nome: "Fonduta di Caciocavallo IGP", prezzo: 2},
          { id: "caciocavallo-grotta-crudo", nome: "Caciocavallo di Grotta IGP", prezzo: 2},
          { id: "scamorza-affumicata", nome: "Scamorza Affumicata", prezzo: 0},
          { id: "sottiletta-krafft", nome: "Sottiletta Krafft", prezzo: 0},
          { id: "gorgonzola-dolce", nome: "Gorgonzola", prezzo: 0},
      
      ],
      "formaggiFascia2":[
          { id: "bufala-bianca", nome: "Bufala Bianca", prezzo: 1},
          { id: "bufala-affumicata", nome: "Bufala Affumicata", prezzo: 1},
          { id: "burrata-affumicata", nome: "Burrata Affumicata", prezzo: 2},
          { id: "burratina-bianca", nome: "Burratina di Gioia", prezzo: 1 },
          { id: "fior-di-latte", nome: "Mozzarella Fior di Latte", prezzo: 0},
          { id: "grana-padano-petali", nome: "Grana Padano Petali", prezzo: 0},
          { id: "grana-padano-fonduta", nome: "Fonduta di Grana Padano", prezzo: 0},
          { id: "caciocavallo-grotta-fonduta", nome: "Fonduta di Caciocavallo IGP", prezzo: 2},
          { id: "caciocavallo-grotta-crudo", nome: "Caciocavallo di Grotta IGP", prezzo: 2},
          { id: "scamorza-affumicata", nome: "Scamorza Affumicata", prezzo: 0},
          { id: "sottiletta-krafft", nome: "Sottiletta Krafft", prezzo: 0},
          { id: "gorgonzola-dolce", nome: "Gorgonzola", prezzo: 0},
      
    
      ],
      "formaggiFascia3":[
          { id: "bufala-bianca", nome: "Bufala Bianca", prezzo: 0},
          { id: "bufala-affumicata", nome: "Bufala Affumicata", prezzo: 0},
          { id: "burrata-affumicata", nome: "Burrata Affumicata", prezzo: 1},
          { id: "burratina-bianca", nome: "Burratina di Gioia", prezzo: 0 },
          { id: "fior-di-latte", nome: "Mozzarella Fior di Latte", prezzo: -0.5},
          { id: "grana-padano-petali", nome: "Grana Padano Petali", prezzo: -0.5},
          { id: "grana-padano-fonduta", nome: "Fonduta di Grana Padano", prezzo: 0},
          { id: "caciocavallo-grotta-fonduta", nome: "Fonduta di Caciocavallo IGP", prezzo: 1},
          { id: "caciocavallo-grotta-crudo", nome: "Caciocavallo di Grotta IGP", prezzo: 1},
          { id: "scamorza-affumicata", nome: "Scamorza Affumicata", prezzo: -1},
          { id: "sottiletta-krafft", nome: "Sottiletta Krafft", prezzo: -1},
          { id: "gorgonzola-dolce", nome: "Gorgonzola", prezzo: 0},
      
    
    ],
      "formaggiFascia4":[
          { id: "bufala-bianca", nome: "Bufala Bianca", prezzo: 0},
          { id: "bufala-affumicata", nome: "Bufala Affumicata", prezzo: 0},
          { id: "burrata-affumicata", nome: "Burrata Affumicata", prezzo: 0},
          { id: "burratina-bianca", nome: "Burratina di Gioia", prezzo: 0 },
          { id: "fior-di-latte", nome: "Mozzarella Fior di Latte", prezzo: -0.5},
          { id: "grana-padano-petali", nome: "Grana Padano Petali", prezzo: -0.5},
          { id: "grana-padano-fonduta", nome: "Fonduta di Grana Padano", prezzo: 0},
          { id: "caciocavallo-grotta-fonduta", nome: "Fonduta di Caciocavallo IGP", prezzo: 0},
          { id: "caciocavallo-grotta-crudo", nome: "Caciocavallo di Grotta IGP", prezzo: 0},
          { id: "scamorza-affumicata", nome: "Scamorza Affumicata", prezzo: 0},
          { id: "sottiletta-krafft", nome: "Sottiletta Krafft", prezzo: 0},
          { id: "gorgonzola-dolce", nome: "Gorgonzola", prezzo: 0},
    
    
        ],
      "pesceFasciaUnica":[
          { id: "salmone-arrostito", nome: "Salmone Arrostito", switch: "nordica-salmone" ,prezzo:0},
          { id: "salmone-tartare", nome: "Tartare di Salmone", switch: "fiordica-salmone", prezzo:0 },
          { id: "salmone-affumicato", nome: "Salmone norvegese Affumicato",  switch: "norvegese-salmone", prezzo:0 },
          { id: "pesce-spada-arrostito", nome: "Pesce Spada Arrostito", switch: "pesce-spada-sicilia" , prezzo:0},
          { id: "pesce-spada-tartare", nome: "Tartare di Pesce Spada Crudo",  switch: "bella-fresca", prezzo:0 },
          { id: "tonno-arrostito", nome: "Filetto di Tonno Arrostito",  switch: "Tonnarella" ,prezzo:0},
          { id: "tonno-tartare", nome: "Tartare di Tonno Crudo", switch: "tonno-siracusa" },
          { id: "gamberi-crudi", nome: "Gamberoni Argentini (crudi)", switch: "gambero-terramare",prezzo:0 },
          { id: "gamberi-tartare", nome: "Tartare di Gamberoni Argentini (crudi)", switch: "gambero-terramare" ,prezzo:0},
          { id: "gamberi-arrostiti", nome: "Gamberoni Arrostiti (sgusciati)", switch: "gambero-argenitno",prezzo:0 },
          { id: "polpo-arrostito", nome: "Gamberoni Argentini (crudi)",  switch: "polpo-classico" ,prezzo:0}
        
        ]  
    
    },
    
    
    
    "prodotti_pucce_mare" : {
  
          "pucce_polpo" :[
          {id: "polpo-classico",
            nome: "Polpo Classico",
            tipo:"puccia",
            descrizione: "",
            prezzo: 9,
            immagine: "link",
            ingredienti_base: [
              { id: "polpo-arrostito" },
              { id: "olio-evo" },
              { id: "limone-succo" }
            ]},
          {id: "polpo-mediterraneo",
            nome: "Polpo Mediterraneo",
            descrizione: "",
            tipo: "puccia", 
            prezzo: 11,
            immagine: "link",
            ingredienti_base: [
              { id: "polpo-arrostito" },
              { id: "olio-evo" },
              { id: "pomodorini-ciliegini" },
              { id: "rucola-fresca" },
              { id: "cipolla-rossa" }
            ]
          },
          {id: "polpo-mojito",
            nome: "Polpo Mojito",
            descrizione: "",
            prezzo: 12,
            immagine: "link",
            ingredienti_base: [
              { id: "polpo-arrostito" },
              { id: "olio-evo" },
              {id:"limone-succo"},
              { id: "melanzane-grigliate" },
              { id: "bufala-bianca" },
              { id: "menta-fresca" }
            ]},
          {id: "polpo-fume",
              nome: "Polpo Fumè",
              descrizione: "",
              prezzo: 12.5,
              immagine: "link",
              ingredienti_base: [
                { id: "polpo-arrostito" },
                { id: "olio-evo" },
                { id: "pomodorini-ciliegini" },
                { id: "pesto-genovese" },
                { id: "bufala-affumicata" }
              ]},
          {id: "polpo-fusion",
                nome: "Polpo Fusion",
                descrizione: "",
                prezzo: 13,
                immagine: "link",
                ingredienti_base: [
                  { id: "polpo-arrostito" },
                  { id: "olio-evo" },
                  { id: "guanciale-croccante" },
                  { id: "burrata-affumicata" }
              ]},
          {id: "polpo-vecchia-bari",
                nome: "Polpo Vecchia Bari",
                descrizione: "",
                prezzo: 13,
                immagine: "link",
                ingredienti_base: [
                  { id: "polpo-arrostito" },
                  { id: "olio-evo" },
                  { id: "rapa-stufate" },
                  { id: "bufala-affumicata" }
              ]}
          ],
          "pucce_salmone": [
          { id: "nordcia-salmone",
            nome: "Nordica al Salmone",
            descrizione: "",
            prezzo: 10,
            immagine: "link",
            ingredienti_base: [
              { id: "salmone-arrostito" },
              { id: "olio-evo" },
              { id: "limone-succo" },
              { id: "rucola-fresca" },
              { id: "granella-pistacchio" }
            ]
          },
          { id: "fiordica-salmone",
            nome: "Fiordica",
            descrizione: "",
            prezzo: 12.5,
            immagine: "link",
            ingredienti_base: [
              { id: "pesto-di-pistacchio" },
              { id: "salmone-tartare" },
              { id: "olio-evo" },
              { id: "limone-succo" },
              { id: "rucola-fresca" },
              { id: "granella-pistacchio" },
              { id: "burratina-bianca" }
            ]
          },
          {id: "salmone-norvegese",
            nome: "Norvegese al Salmone Affumicato",
            descrizione: "",
            prezzo: 12,
            immagine: "link",
            ingredienti_base: [
              { id: "salmone-affumicato" },
              { id: "olio-evo" },
              { id: "limone-succo" },
              { id: "rucola-fresca" },
              { id: "granella-pistacchio" },
              { id: "bufala-bianca" }
            ]
          },
          { id: "oslofjord-salmone",
            nome: "Oslofjord ",
            descrizione: "",
            prezzo: 13,
            immagine: "link",
            ingredienti_base: [
              { id: "zucchine-grigliate" },
              { id: "salmone-affumicato" },
              { id: "olio-evo" },
              { id: "limone-succo" },
              { id: "menta-fresca" },
              { id: "pepe-rosa" },
              { id: "burratina-bianca" }
            ]
          },
          { id: "nordfjord-salmone",
            nome: "NordFiord",
            descrizione: "",
            prezzo: 13.5,
            immagine: "link",
            ingredienti_base: [
              { id: "pesto-di-pistacchio" },
              { id: "salmone-arrostito" },
              { id: "olio-evo" },
              { id: "limone-succo" },
              { id: "rucola-fresca" },
              { id: "pomodorini-grigliati" },
              { id: "burrata-affumicata" }
            ]
          }
          ],
          "pucce_tonno": [
          { id: "tonnarella-tonno",
            nome: "Tonnarella",
            descrizione: "",
            prezzo: 11,
            immagine: "link",
            ingredienti_base: [
              { id: "tonno-arrostito" },
              { id: "olio-evo" },
              { id: "cipolla-rossa" },
              { id: "sedano-fresco" },
              { id: "pepe-rosa" },
              { id: "grana-padano-petali" },
              {id: "glassa-aceto" }
            ]
          },
          { id: "siracusa-tonno-tartare",
            nome: "Siracusa",
            descrizione: "",
            prezzo: 13,
            immagine: "link",
            ingredienti_base: [
              { id: "melanzane-grigliate" },
              { id: "tonno-tartare" },
              { id: "olio-evo" },
              { id: "limone-succo" },
              { id: "basilico-fresco" },
              { id: "pomodorini-ciliegini" },
              { id: "burratina-bianca" }
            ]
          },
          {id: "guala-tonno-tartare",
            nome: "Gualà",
            descrizione: "",
            prezzo: 12,
            immagine: "link",
            ingredienti_base: [
              { id: "crema-di-asparagi" },
              { id: "tonno-tartare" },
              { id: "olio-evo" },
              { id: "limone-succo" },
              { id: "fior-di-latte" },
              { id: "granella-pistacchio" },
              { id: "pepe-rosa" },
              { id: "grana-padano-petali" },
              { id: "sedano-fresco" }
            ]
          },
          { id: "o-tunes",
            nome: "O'tunes",
            descrizione: "",
            prezzo: 12,
            immagine: "link",
            ingredienti_base: [
              { id: "tonno-tartare" },
              { id: "bufala-bianca" },
              { id: "pomodorini-ciliegini" },
              { id: "olio-evo" },
              { id: "limone-succo" },
              { id: "menta-fresca" },
              { id: "pepe-rosa" }
            ]
          },
          { id: "mister-tonnico",
            nome: "Mr. Tonnico",
            descrizione: "",
            prezzo: 13,
            immagine: "link",
            ingredienti_base: [
              { id: "bufala-affumicata" },
              { id: "maionese-tartufo" },
              { id: "tonno-tartare" },
              { id: "olio-evo" },
              { id: "limone-succo" },
              { id: "rucola-fresca" },
              { id: "cipolla-rossa"}
            ]
          }
          ],
          "pucce_gamberoni" :[
            {id: "argentino-gamberi",
              nome: "Argentino",
              descrizione: "",
              prezzo: 10,
              immagine: "link",
              ingredienti_base: [
                { id: "funghi-freschi" },
                { id: "salsa-cocktail" },
                {id: "rucola-fresca"},
                { id: "gamberi-arrostiti" },
                { id: "olio-evo" }
              ]},
            {id: "terramare-gamberi",
              nome: "Terramare",
              tipo:"puccia",
              descrizione: "",
              prezzo: 12,
              immagine: "link",
              ingredienti_base: [
                { id: "guanciale-croccante" },
                { id: "gamberi-crudi" },
                { id: "olio-evo" },
                { id: "limone-succo" },
                { id: "rucola-fresca" }
              ]
            },
            {id: "gamberoni-terrona",
              nome: "Terrona",
              tipo:"puccia",
              descrizione: "",
              prezzo: 12.5,
              immagine: "link",
              ingredienti_base: [
                { id: "crema-di-asparagi" },
                { id: "bufala-bianca" },
                { id: "gamberi-crudi" },
                { id: "olio-evo" },
                { id: "limone-succo" },
                { id: "grana-padano-petali" },
                {id:"mandorle-sgusciate"}
              ]
            },
            {id: "gamberoni-made-in-puglia",
              nome: "Made in Puglia",
              tipo:"puccia",
              descrizione: "",
              prezzo: 15,
              immagine: "link",
              ingredienti_base: [
                { id: "funghi-grigliati" },
                { id: "caciocavallo-grotta-fonduta" },
                { id: "gamberi-tartare" },
                { id: "olio-evo" },
                { id: "limone-succo" },
                { id: "pomodorini-grigliati" }
              ]
            },
            {id:"gamberoni-suprema", 
              nome: "la suprema" , 
              tipo:"puccia",
              prezzo:12.5,
              descrizione :"",
              ingredienti_base: [
                { id: "fior-di-latte" },
                { id: "capocollo-croccante" },
                {id: "rucola-fresca"},
                { id: "gamberi-arrostiti" },
                {id:"mandorle-petali"},
                {id:"glassa-aceto"},
                { id: "olio-evo" }
              ]
  
            }
            ],
          "pucce_pesce-spada": [
          { id: "lampedusa-pesce-spada",
            nome: "Lampedusa",
            descrizione: "",
            prezzo: 10,
            immagine: "link",
            ingredienti_base: [
              { id: "salsa-pepe-rosa" },
              { id: "pesce-spada-arrostito" },
              { id: "olio-evo" },
              { id: "olive-nere" },
              { id: "granella-pistacchio"},
              { id: "pomodorini-ciliegini"},
              { id: "origano" }
            ]
          },
          { id: "bella-fresca-pesce-spada",
            nome: "Bella Fresca",
            descrizione: "",
            prezzo: 12,
            immagine: "link",
            ingredienti_base: [
              { id: "bufala-bianca" },
              { id: "pesce-spada-tartare" },
              { id: "olio-evo" },
              { id: "limone-succo" },
              { id: "basilico-fresco" },
              { id: "pomodorini-ciliegini" }
            ]
          },
          {id: "saracena-pesce-spada",
            nome: "Saracena",
            descrizione: "",
            prezzo: 11,
            immagine: "link",
            ingredienti_base: [
              { id: "pesce-spada-arrostito"},
              { id: "olio-evo" },
              { id: "pomodorini-ciliegini" },
              { id: "rucola-fresca" },
              { id: "olive-nere" },
              { id: "cipolla-rossa" }
            ]
          },
          { id: "sicilia-pesce-spada",
            nome: "Sicilia",
            descrizione: "",
            prezzo: 12,
            immagine: "link",
            ingredienti_base: [
              { id: "melanzane-grigliate" },
              { id: "pesce-spada-arrostito" },
              { id: "burratina-bianca" },
              { id: "olio-evo" },
              { id: "limone-succo" },
              { id: "mandorle-sgusciate" }
            ]
          }
          ]
         },
    
    
    "prodotti_pucce_terra": {
      
        
          "pucce_zampina": [
            { id:"zampina-tradizione-200",
              nome: "Tradizione 200",
              descrizione: "",
              prezzo: 11,
              immagine: "link",
            ingredienti_base: [
              {id:"sottiletta-krafft"},
              {id:"zampina-arrostita"},
              {id:"pomodorini-ciliegini"},
              {id:"rucola-fresca"},
              {id:"melanzane-sottolio"},
              {id:"cipolla-rossa"}
              ]},
              { id:"zampina-classica",
                nome: "Zampina Classica",
                descrizione: "",
                prezzo: 10,
                immagine: "link",
              ingredienti_base: [
                {id:"sottiletta-krafft"},
                {id:"zampina-arrostita"},
                {id:"pomodorini-ciliegini"},
                {id:"rucola-fresca"}
                
                ]},
            { id:"zampina-sammichele",
              nome: "Sammichele in Grotta",
              descrizione: "",
              prezzo: 15,
              immagine: "link",
              ingredienti_base: [
              {id:"funghi-grigliati"},
              {id:"caciocavallo-grotta-fonduta"},
              {id:"zampina-arrostita"},
              {id:"pomodorini-grigliati"}
            ]},
            
          ],
    
          "pucce_hamburger": [
            { id:"hamburger-bite-burger",
              nome: "Bite Burger",
              descrizione: "",
              prezzo: 9,
              immagine: "link",
              ingredienti_base: [
              {id:"sottiletta-krafft"},
              {id:"guanciale-croccante"},
              {id:"hamburger-manzo"},
              {id:"melanzane-sottolio"},
              {id:"cipolla-rossa"}
            ]},
            { id:"hamburger-one-burger",
              nome: "One Burger *'The Franklin'*",
              descrizione: "",
              prezzo: 11,
              immagine: "link",
              ingredienti_base: [
              {id:"pesto-di-pistacchio"},
              {id:"melanzane-grigliate"},
              {id:"hamburger-manzo"},
              {id:"grana-padano-fonduta"},
              {id:"rucola-fresca"}
            ]},
            { id:"hamburger-classico",
              nome: "Hamburger Classico",
              descrizione: "",
              prezzo: 10,
              immagine: "link",
              ingredienti_base: [
                {id:"sottiletta-krafft"},
                {id:"hamburger-manzo"},
                {id:"pomodorini-ciliegini"},
                {id:"rucola-fresca"}
                
                ]},
          
          ],
    
          "pucce_salsiccia_norcia": [
            { id:"romina-norcia",
              nome: "La Romina",
              descrizione: "",
              prezzo: 8.5,
              immagine: "link",
              ingredienti_base: [
              {id:"salsiccia-norcia"},
              {id:"bufala-bianca"}
            ]},
            { id:"zio-giacomino-norcia",
              nome: "Zio Giacomino",
              descrizione: "",
              prezzo: 8,
              immagine: "link",
              ingredienti_base: [
                {id:"salsiccia-norcia"},
                {id:"scamorza-affumicata"}
            ]},
            { id:"mister-hyde-norcia",
              nome: "Mr.Hyde",
              descrizione: "",
              prezzo: 9,
              immagine: "link",
              ingredienti_base: [
                {id:"salsiccia-norcia"},
                {id:"scamorza-affumicata"},
                {id:"pomodori-sottiolio"},
                {id:"cipolla-rossa"},
                {id:"salsa-BBQ"}
            ]},
            { id:"norcinotta-norcia",
              nome: "Norcinotta",
              descrizione: "",
              prezzo: 10,
              immagine: "link",
              ingredienti_base: [
                {id:"salsiccia-norcia"},
                {id:"funghi-grigliati"},
                {id:"olio-tartufo"} ]},
              
              { id:"gunacialotta-norcia",
              nome: "Guancialotta",
              descrizione: "",
              prezzo: 10,
              immagine: "link",
              ingredienti_base: [
                {id:"pesto-genovese"},
                {id:"guanciale-croccante"},
                {id:"burratina-bianca"},
              {id:"pomodorini-ciliegini"} ]},
              
              { id:"trevigiana-norcia",
                nome: "Trevigiana",
                descrizione: "",
                prezzo: 12,
                immagine: "link",
                ingredienti_base: [
                {id:"pesto-di-pistacchio"},
                {id:"salsa-pepe-rosa"},
                {id:"radicchio-scottato"},
                {id:"guanciale-croccante"},
                {id:"bufala-affumicata"},
                {id:"noci-sgusciate"} ]},
                
              { id:"zio-marcello",
                  nome: "Zio Marcello",
                  descrizione: "",
                  prezzo: 9,
                  immagine: "link",
                  ingredienti_base: [
                  {id:"ciauscolo-norcia"},
                  {id:"melanzane-sottolio"},
              {id:"fior-di-latte"} ]}
            
          ],
    
          "pucce_specialita-ariccia": [
            
            { id:"dottor-jekyll",
              nome: "Dt.Jekyll",
              tipo:"piccante",
              descrizione: "",
              prezzo: 9,
              immagine: "link",
              ingredienti_base: [
              {id:"salsiccia-piccante-ariccia"},
              {id:"scamorza-affumicata"},
              {id:"pomodori-sottiolio"},
              {id:"cipolla-rossa"},
              {id:"salsa-BBQ"}
            ]},
            { id:"monte-palatino",
              nome: "Monte Palatino",
              descrizione: "",
              prezzo: 9,
              immagine: "link",
              ingredienti_base: [
                {id:"pesto-di-pistacchio"},
                {id:"porchetta-ariccia"},
                {id:"pomodori-sottiolio"}
            ]},
            { id:"street-food",
              nome: "Street Food - 'roma antica' ",
              descrizione: "",
              prezzo: 9,
              immagine: "link",
              ingredienti_base: [
                {id:"sottiletta-krafft"},
                {id:"porchetta-ariccia"},
                {id:"melanzane-sottolio"},
                {id:"salsa-boscaiola"},
                {id:"rucola-fresca"}
            ]}
          ],
    
          "pucce_affettati": [
          { id:"puccia-roberta",
            nome: "Roberta",
            descrizione: "",
            prezzo: 9,
            immagine: "link",
            ingredienti_base: [
            {id:"mortadella-cuore"},
            {id:"pomodorini-ciliegini"},
            {id:"rucola-fresca"}
          ]},
          { id:"puccia-parma",
            nome: "Parma",
            descrizione: "",
            prezzo: 9,
            immagine: "link",
            ingredienti_base: [
            {id:"proscicutto-crudo"},
            {id:"bufala-bianca"},
            {id:"pomodorini-ciliegini"},
            {id:"rucola-fresca"}
          ]},
          

        ]},
    
    
    "prodotti_pizza": {
    
      "le classiche": [
        {
          id: "pizza-margherita",
          tipo:"pizza",
          nome: "Margherita",
          descrizione: "",
          prezzo: 6,
          immagine: "",
          ingredienti_base: [
            {id:"salsa-pomodoro"},
            {id:"fior-di-latte"},
            {id:"olio-evo"}
          ]
        },
        {
          id: "pizza-calabrese",
          nome: "Salame Piccante",
          descrizione: "",
          prezzo: 8,
          immagine: "",
          ingredienti_base: [
            {id:"salsa-pomodoro"},
            {id:"fior-di-latte"},
            {id:"salsiccia-piccante"},
            {id:"olio-evo"}
          ]
        },
        {
          id: "pizza-crudaiola",
          nome: "Crudaiola",
          descrizione: "",
          prezzo: 10,
          immagine: "",
          ingredienti_base: [
            {id:"salsa-pomodoro"},
            {id:"fior-di-latte"},
            {id:"pomodorini-ciliegini"},
            {id:"rucola-fresca"},
            {id:"grana-padano-petali"}
          ]
        },
        {
          id: "pizza-capriccio-del-nonno",
          nome: "Capriccio del Nonno",
          descrizione: "",
          prezzo: 13,
          immagine: "",
          ingredienti_base: [
            {id:"salsa-pomodoro"},
            {id:"fior-di-latte"},
            {id:"prosciutto-cotto"},
            {id:"carciofi-sottolio"},
            {id:"funghetti-sottolio"},
            {id:"olive-nere"}
          ]
        },
        {
          id: "pizza-bufalina",
          nome: "Bufalina",
          descrizione: "",
          prezzo: 8,
          immagine: "",
          ingredienti_base: [
            {id:"salsa-pomodoro"},
            {id:"bufala-bianca"},
            {id:"olio-evo"}
          ]
        },
        {
          id: "pizza-prosciutto-cotto",
          nome: "Prosciutto Cotto",
          descrizione: "",
          prezzo: 8,
          immagine: "",
          ingredienti_base: [
            {id:"salsa-pomodoro"},
            {id:"fior-di-latte"},
            {id:"prosciutto-cotto"},
            {id:"olio-evo"}
          ]
        },
        {
          id: "pizza-norcia",
          nome: "Norcia",
          descrizione: "",
          prezzo: 8,
          immagine: "",
          ingredienti_base: [
            {id:"salsa-pomodoro"},
            {id:"fior-di-latte"},
            {id:"salsiccia-norcia"},
            {id:"olio-evo"}
          ]
        },
        {
          id: "pizza-prosciutto-crudo",
          nome: "Prosciutto Crudo",
          descrizione: "",
          prezzo: 9,
          immagine: "",
          ingredienti_base: [
            {id:"salsa-pomodoro"},
            {id:"fior-di-latte"},
            {id:"olio-evo"},
            {id:"prosciutto-crudo"}
          ]
        },
        {
          id: "pizza-wurstel",
          nome: "Würstel",
          descrizione: "",
          prezzo: 8,
          immagine: "",
          ingredienti_base: [
            {id:"salsa-pomodoro"},
            {id:"fior-di-latte"},
            {id:"wurstel"},
            {id:"olio-evo"}
          ]
        }
      ],
    "le speciali": [
            {
              id: "pizza-fuego",
              nome: "Fuego",
              descrizione: "Un mix di sapori antichi e inconfondibili: mozzarella fior di latte, salsiccia piccante e filetti di melanzane sott'olio su pomodoro pelato cotto in forno a legna.",
              prezzo: 10,
              immagine: "",
              ingredienti_base: [
                {id:"salsa-pomodoro"},
                {id:"fior-di-latte"},
                {id:"salsiccia-piccante"},
                {id:"melanzane-sottolio"},
                {id:"olio-evo"}
              ]
            },
            {
              id: "pizza-norcina",
              nome: "Norcina",
              descrizione: "",
              prezzo: 8,
              immagine: "",
              ingredienti_base: [
                {id:"salsa-pomodoro"},
                {id:"bufala-bianca"},
                {id:"salsiccia-norcia"},
                {id:"olio-evo"}
              ]
            },
            {
              id: "pizza-romagna-mia",
              nome: "Romagna Mia",
              descrizione: "Mozzarella fior di latte locale tagliata a mano come da tradizione e cotta in forno a legna. Fette di mortadella I.G.P finemente affettata, rucola, spicchi di pomodorini, grana padano, olio evo e granella di pistacchio a fine cottura.",
              prezzo: 13,
              immagine: "",
              ingredienti_base: [
                {id:"fior-di-latte"},
                {id:"mortadella-cuore"},
                {id:"rucola-fresca"},
                {id:"pomodorini-ciliegini"},
                {id:"grana-padano-petali"},
                {id:"olio-evo"},
                {id:"pistacchio-granella"}
              ]
            },
            {
              id: "pizza-sette-ingredienti",
              nome: "Sette Ingredienti",
              descrizione: "Funghi freschi a fette, melanzane e zucchine tagliate sottili con spicchi di pomodorini, pan grattato e olio evo in cottura su margherita bianca.",
              prezzo: 10,
              immagine: "",
              ingredienti_base: [
                {id:"fior-di-latte"},
                {id:"funghi-freschi"},
                {id:"melanzane-cotte"},
                {id:"zucchine-cotte"},
                {id:"pomodorini-cotti"},
                {id:"pan-grattato"},
                {id:"olio-evo"}
              ]
            },
            {
              id: "pizza-dolce-italia",
              nome: "Dolce Italia",
              descrizione: "Bocconcini di bufala DOP e funghi freschi su pomodoro pelato 100% italiano con fette sottili di prosciutto crudo di Parma.",
              prezzo: 13,
              immagine: "",
              ingredienti_base: [
                {id:"bufala-dop"},
                {id:"funghi-freschi"},
                {id:"salsa-pomodoro"},
                {id:"prosciutto-crudo-parma"}
              ]
            },
            {
              id: "pizza-montecarlo",
              nome: "Montecarlo",
              descrizione: "Pomodoro pelato 100% italiano con mozzarella affettata al momento e gorgonzola piccante, prosciutto crudo di Parma affettato al momento, olio evo.",
              prezzo: 13,
              immagine: "",
              ingredienti_base: [
                {id:"salsa-pomodoro"},
                {id:"fior-di-latte"},
                {id:"gorgonzola-dop"},
                {id:"prosciutto-crudo"},
                {id:"olio-evo"}
              ]
            },
            {
              id: "pizza-norcinara",
              nome: "Norcinara",
              descrizione: "Salsiccia di Norcia a tocchetti con funghi freschi a fettine, su pomodoro pelato 100% italiano e mozzarella fior di latte cotti in forno a legna, finita con foglie di rucola.",
              prezzo: 12,
              immagine: "",
              ingredienti_base: [
                {id:"salsa-pomodoro"},
                {id:"fior-di-latte"},
                {id:"salsiccia-norcia"},
                {id:"funghi-freschi"},
                {id:"rucola-fresca"},
                {id:"grana-padano-petali"},
                {id:"olio-evo"}
              ]
            },
          ],
          
      "le nostre creazioni": [
      {
        id: "pizza-costa-pugliese",
        nome: "Costa Pugliese",
        descrizione: "Filetti di gamberoni crudi marinati in olio evo e limone su capocollo artigianale finemente affettato e spicchi di pomodorini grigliati adagiati a fine cottura su margherita bianca cotta in forno a legna ai funghi freschi e fonduta di caciocavallo DOP affinato in grotta.",
        prezzo: 18,
        immagine: "",
        ingredienti_base: [
          {id:"fior-di-latte"},
          {id:"funghi-freschi"},
          {id:"caciocavallo-fonduta"},
          {id:"gamberi-tartare"},
          {id:"olio-evo"},
          {id:"limone-succo"},
          {id:"capocollo-salume"},
          {id:"pomodorini-grigliati"}
        ]
      },
      {
        id: "pizza-mar-tirreno",
        nome: "Mar Tirreno",
        descrizione: "Polpo di scoglio arrostito con spicchi di pomodorini e bufala affumicata DOP tagliata a mano e cosparsa a fine cottura con pesto di basilico alla Genovese ed olio evo.",
        prezzo: 16,
        immagine: "",
        ingredienti_base: [
          {id:"bufala-affumicata"},
          {id:"polpo-arrostito"},
          {id:"pomodorini-cotti"},
          {id:"pesto-genovese"},
          {id:"olio-evo"}
        ]
      },
      {
        id: "pizza-mare-mediterraneo",
        nome: "Mare Mediterraneo",
        descrizione: "Polpo di scoglio arrostito su mozzarella fior di latte affettata al momento con pomodorini e cipolla rossa in cottura in forno a legna condita con rucola selvatica ed olio evo in uscita.",
        prezzo: 15,
        immagine: "",
        ingredienti_base: [
          {id:"polpo-arrostito"},
          {id:"fior-di-latte"},
          {id:"pomodorini-cotti"},
          {id:"cipolla-rossa"},
          {id:"rucola-selvatica"},
          {id:"olio-evo"}
        ]
      },
      {
        id: "pizza-mar-di-trapani",
        nome: "Mar di Trapani",
        descrizione: "Tartare di tonno (crudo) con pomodorini, basilico, burratina locale, melanzane grigliate, olio evo e note di limone su margherita bianca cotta in forno a legna.",
        prezzo: 16,
        immagine: "",
        ingredienti_base: [
          {id:"tonno-tartare"},
          {id:"pomodorini"},
          {id:"basilico"},
          {id:"burratina"},
          {id:"melanzane-grigliate"},
          {id:"olio-evo"},
          {id:"limone-succo"}
        ]
      },
      {
        id: "pizza-mar-di-norvegia",
        nome: "Mar di Norvegia",
        descrizione: "Tartare di salmone (crudo) su pesto di pistacchio con rucola, burratina locale, olio evo, note di limone e granella di pistacchi su margherita bianca cotta in forno a legna.",
        prezzo: 16,
        immagine: "",
        ingredienti_base: [
          {id:"salmone-tartare"},
          {id:"pesto-di-pistacchio"},
          {id:"rucola"},
          {id:"burratina"},
          {id:"olio-evo"},
          {id:"limone"},
          {id:"pistacchio-granella"}
        ]
      },
      {
        id: "pizza-mare-argentino",
        nome: "Mare Argentino",
        descrizione: "Filetti di gamberoni crudi marinati in olio evo e limone su guanciale di Norcia croccante e rucola a fine cottura sulla margherita bianca cotta in forno a legna.",
        prezzo: 16,
        immagine: "",
        ingredienti_base: [
          {id:"gamberoni-crudi"},
          {id:"olio-evo"},
          {id:"limone-succo"},
          {id:"guanciale-norcia"},
          {id:"rucola-fresca"}
        ]
      },
      {
        id: "pizza-polpo-evolution",
        nome: "Polpo Evolution",
        descrizione: "Polpo di scoglio arrostito in forno a legna al momento su pizza bianca, a fine cottura burratina affumicata e fette di guanciale di Norcia arrostito croccante.",
        prezzo: 18,
        immagine: "",
        ingredienti_base: [
          {id:"polpo-arrostito"},
          {id:"burratina-affumicata"},
          {id:"guanciale-norcia"}
        ]
      },
      {
        id: "pizza-bastarda",
        nome: "Bastarda",
        descrizione: "Burratina locale a straccetti e spicchi di pomodorini su mix di pomodoro pelato 100% italiano e pesto di basilico alla genovese cotto in forno a legna. Completata a fine cottura con granella di pistacchio, grana padano ed olio evo.",
        prezzo: 12,
        immagine: "",
        ingredienti_base: [
          {id:"salsa-pomodoro"},
          {id:"pesto-genovese"},
          {id:"burratina-bianca"},
          {id:"pomodorini-cotti"},
          {id:"pistacchio-granella"},
          {id:"grana-padano-petali"},
          {id:"olio-evo"}
        ]
      },
      {
        id: "pizza-trevigiana-secondo-gaetano",
        nome: "Trevigiana secondo Gaetano",
        descrizione: "Bocconcini di bufala affumicata DOP affettata a mano su radicchio fresco con note di pesto di pistacchio, guanciale di Norcia arrostito croccante e noci a fine cottura.",
        prezzo: 13,
        immagine: "",
        ingredienti_base: [
          {id:"bufala-affumicata"},
          {id:"radicchio-cotto"},
          {id:"pesto-di-pistacchio"},
          {id:"guanciale-croccante"},
          {id:"noci-scusciate"}
        ]
      }
    ],
    
    "autentiche panificazioni":[
        {id:"ciccio-barese",
          nome:"Il Ciccio",
          prezzo:2.5,
          descrizione:"Schiacciata di pizza , condita con olio Evo e Origano",
          ingredienti_base: [
          {id:"olio-evo"},
          {id:"origano"}
          ] 
        },  
        {id:"puccia-vuota" , 
          nome:"Puccia Vuota",
          prezzo:2,
          descrizione:"Puccia artigianale cotta in forno a legna ",
          ingredienti_base: [
            {id:"olio-evo"}]}
          ]
        },
    
  
      "prodotti_senza_puccia": {
      "i tentacoli" :[
        {id:"polpo-tentacolo",
          nome:"Il Tentacolo",
          prezzo:12.5 , 
          descrizione:"Tentacoli di polpi arrositti in forno a legna serviti con Rucola e Limone e olio Evo ",
          ingredienti_base: [
            {id:"polpo-tentacolo"},
            {id:"rucola-fresca"},
            {id:"limone-fresco"},
            {id:"olio-evo"}
            
          ] },
          {id:"polpo-tentacolo-mojito",
            nome:"Il Tentacolo Mojito",
            prezzo:15 , 
            descrizione:"Tentacoli di polpi arrositti in forno a legna serviti con Rucola e Limone e olio Evo ",
            ingredienti_base: [
              {id:"polpo-tentacolo"},
              {id: "melanzane-grigliate-piatto"},
              {id:"bufala-bianca"},
              {id:"rucola-fresca"},
              {id:"limone-fresco"},
              {id:"menta-fresca"},
              {id:"olio-evo"}
            ] },
            {id:"polpo-tentacolo-mediterraneo",
              nome:"Il Tentacolo Mediterraneo",
              prezzo:15 , 
              descrizione:"Tentacoli di polpi arrositti in forno a legna serviti con Rucola , Pomodorini , Cipolla Rossa e Limone e olio Evo ",
              ingredienti_base: [
                {id:"polpo-tentacolo"},
                {id:"rucola-fresca"},
                {id:"pomodorini-ciliegini"},
                {id:"cipolla-rossa"},
                {id:"limone-fresco"},
                {id:"olio-evo"}
              ] },
              {id:"polpo-tentacolo-fusion",
                nome:"Il Tentacolo Fusion",
                prezzo:16 , 
                descrizione:"Tentacoli di polpi arrositti in forno a legna serviti con Rucola e Limone e olio Evo ",
                ingredienti_base: [
                  {id:"polpo-tentacolo"},
                  {id:"guanciale-croccante"},
                  {id:"pomdorini-grigliati"},
                  {id:"burrata-affumicata"},
                  {id:"limone-fresco"},
                  {id:"olio-evo"}
                ] },
                {id:"polpo-tentacolo-fume",
                  nome:"Il Tentacolo Fumè",
                  prezzo:16 , 
                  descrizione:"Tentacoli di polpi arrositti in forno a legna serviti con Rucola e Limone e olio Evo ",
                  ingredienti_base: [
                    {id:"polpo-tentacolo"},
                    {id:"rucola-fresca"},
                    {id:"limone-fresco"},
                    {id:"olio-evo"}
                  ] }],


      "arrosti di pesce " :[
        {id:"pesce-spada-lampedusiana-arrostito",
          nome:"La Lampedusiana",
          prezzo:13.5 , 
          descrizione:"Filetto di Pesce Spada arrostito , con salsa al pepe rosa , pomodorini , olive nere , origano , granella di pistacchio  ",
          ingredienti_base: [
            {id:"pesce-spada"},
            {id:"pomodrini-ciliegini"},
            {id:"salsa-pepe-rosa"},
            {id:"olive-nere"},
            {id:"limone-fresco"},
            {id:"origano"},
            {id:"olio-evo"}
          ] },
          {id:"salmone-controcorrente-arrostito",
            nome:"Il Controcorrente",
            prezzo:12.5 , 
            descrizione:"Trancetti di Slmone Norvegese scottati in forno a legna conditi con olio Evo , granella di Pistacchio , limone e rucola ",
                ingredienti_base: [
              {id:"salmone-controcorrente-arrostito"},
              {id:"rucola-fresca"},
              {id:"limone-fresco"},
              {id:"granella-pistacchio"},
              {id:"olio-evo"}
            ] },
            {id:"tonno-la-tonnara",
              nome:"La Tonnara",
              prezzo:14.5 , 
              descrizione:"Filetto di Tonno scottato in forno a legna condito con sedano , cipolla rossa , petali di grana padano , glassa di aceto balsamico e olio Evo  ",
               ingredienti_base: [
                {id:"tonno-tonnara-arrostito"},
                {id:"sedano-fresco"},
                {id:"cipolla-rossa"},
                {id:"grana-padano-petali"},
                {id:"glassa-aceto"},
                {id:"olio-evo"}
              ] },
              {id:"gamberoni-i-supremi",
                nome:"I Supremi",
                prezzo:14.5 , 
                descrizione:"5 Gamberoni arrostiti , su capocollo scottato in forno a legna , con rucola , olio evo , glassa di aceto balsamic , mandorle e rucola ",
                ingredienti_base: [
                  {id:"gamberi-nudi-arrostiti"},
                  {id:"sedano-fresco"},
                  {id:"cipolla-rossa"},
                  {id:"grana-padano-petali"},
                  {id:"glassa-aceto"},
                  {id:"olio-evo"}
                ] },
              
      ] ,
      "tartare di pesce " : [
        {id:"tartare-di-salmone",
          nome:"Tartare di Salmone",
          prezzo:8 , 
          descrizione:"Tartare di Salmone norvegese crudo , servita con olio e fettina di limone e condita con granella di pistacchio e pepe rosa macinato ",
          ingredienti_base: [
            {id:"salmone-tartare"},
            {id:"rucola-fresca"},
            {id:"limone-fresco"},
            {id:"granella-pistacchio"},
            {id:"grana-padano-petali"},
            {id:"pepe-rosa"},
            {id:"olio-evo"}
          ] },
          {id:"tartare-di-tonno",
            nome:"Tartare di Tonno",
            prezzo:8 , 
            descrizione:"Tartare di Tonno Pinna Gialla crudo , servita con olio e fettina di limone e condita con granella di pistacchio e pepe rosa macinato ",
            ingredienti_base: [
              {id:"tonno-tartare"},
              {id:"rucola-fresca"},
              {id:"limone-fresco"},
              {id:"granella-pistacchio"},
              {id:"grana-padano-petali"},
              {id:"pepe-rosa"},
              {id:"olio-evo"}
            ] },
            {id:"tartare-di-pesce-spada",
              nome:"Tartare di Pesce Spada",
              prezzo:8 , 
              descrizione:"Tartare di Pesce Spada crudo , servita con olio e fettina di limone e condita con granella di pistacchio e pepe rosa macinato ",
              ingredienti_base: [
                {id:"pesce-spada-tartare"},
                {id:"rucola-fresca"},
                {id:"limone-fresco"},
                {id:"granella-pistacchio"},
                {id:"grana-padano-petali"},
                {id:"pepe-rosa"},
                {id:"olio-evo"}
              ] },
      ],
      "arrosti di carne " : [
        {id:"zampina-terra-nostra",
          nome:"Zampina Terra Nostra al Piatto",
          prezzo:16 , 
          descrizione:"Zampina arrostita in forna a legna , su fonduta di caciocavallo di grotta DOP , con pomodori scottati al momento in forno a legna ",
          ingredienti_base: [
            {id:"zampina-arrostita"},
            {id:"funghi-grigliati"},
            {id:"pomodorini-grigliati"},
            {id:"caciocavallo-grotta-fonduta"},
            {id:"olio-evo"}
          ] },
          {id:"hamburger-burger-club",
            nome:"Il Burger Club al Piatto",
            prezzo:16 , 
            descrizione:"Hamburger di manzo arrostito al momento in forno a legna  , servito al piatto con melanzane grigliate , cipolla rossa , burratina , rucola , guanciale croccante e pomdori Grigliati  ",
            ingredienti_base: [
              {id:"hamburger-manzo"},
              {id:"melanzane-grigliate"},
              {id:"guanciale-croccante"},
              {id:"cipolla-rossa"},
              {id:"grana-padano-fonduta"},
              {id:"pesto-di-pistacchio"},
              {id:"olio-evo"},
              {id:"burratina-bianca"}
            ] },
      ],

      "le verdure " : [
        {id:"piatto-melanzane-zucchine",
          nome:"Misto Verdure Grigliate",
          prezzo: 4, 
          descrizione:"Contorno di Melanzane e Zucchine Grigliate al momento",
          ingredienti_base: [
            {id:"melanzane-grigliate-piatto"},
            {id:"zucchine-grigliate-piatto"},
            {id:"olio-evo"}
          ] },
          {id:"piatto-melanzane-zucchine-funghi",
            nome:"Misto Verdure Grigliate con Funghi",
            prezzo: 6, 
            descrizione:"Contorno di Melanzane e Zucchine Grigliate al momento",
            ingredienti_base: [
              {id:"melanzane-grigliate-piatto"},
              {id:"zucchine-grigliate-piatto"},
              {id:"funghi-grigliati-piatto"},
              {id:"olio-evo"}
            ] },
      ]
    },
    
          
    "prodotti_antipasti": {
      "gli-affettati-della-bella-italia": [
        {id:"tagliere-prosciutti",
          nome:"Tagliere di Salumi",
          prezzo:15 , 
          Descrizione:"",
          ingredienti_base: [
            {id:"prosciutto-crudo"},
            {id:"salsiccia-dolce"},
            {id:"capocollo-salume"}]
        },
        {id:"involtini-speck",
          nome:"Involtini di Speck e Mozzarella",
          prezzo:15 , 
          Descrizione:"",
          ingredienti_base: [
            {id:"speck"},
            {id:"fior-di-latte"},
            {id:"rucola-fresca"}]
        }

      ],
      
      
    },
    
    
    "prodotti_bevande":{
      "soft_drinks":[
        {
          id:"acqua-orsini",
          nome:"Acqua-Orsini",
          descrizione:"Pet 50cl - naturale",
          prezzo:1
        },
        {
          id:"acqua-sveva",
          nome:"Acqua Sveva",
          descrizione:"Pet 50cl - frizzante",
          prezzo:1
        },
        {
        id:"coca-cola",
        nome:"Coca-Cola",
        descrizione:"Vetro 33cl",
        prezzo:2.5
      },
      {
        id:"coca-zero",
        nome:"Coca-Cola Zero",
        descrizione:"Vetro 33cl",
        prezzo:2.5
      },
      {
        id:"fanta",
        nome:"Orange Fanta",
        descrizione:"Vetro 33cl",
        prezzo:2.5
      },
      {
        id:"chinotto",
        nome:"Chinò",
        descrizione:"Vetro 33cl",
        prezzo:2.5
      }
      
    ],
      "birre-classiche":[
        {
          id:"nastro-azzurro",
          nome:"Nastro Azzurro",
          descrizione:"Vetro 33cl , Nastro Azzurro , la più amata dagli italiani",
          prezzo:2.5
        },
        {
          id:"heineken",
          nome:"Heineken",
          descrizione:"Vetro 33cl , premium pilsner ",
          prezzo:2.5
        },
        {
          id:"ichnusa",
          nome:"Ichnusa Lager ",
          descrizione:"Vetro 33cl , Anima Sarda",
          prezzo:2.5
        },
        {
          id:"ichnusa-non-filtrata",
          nome:"Ichnusa Non Filtrata",
          descrizione:"Vetro 33cl Anima Sarda , Ancora più Sarda ",
          prezzo:2.5
        },
        {
          id:"lemon-dreher",
          nome:"Dreher Lemon",
          descrizione:"Vetro 33cl , Radler al limone , fresca di natura 1.3% ",
          prezzo:2.5
        }
      ] ,
      "selezione-artigianale":[
        {
          id:"terrona-bionda",
          nome:"Terrona Rock'n'Dive",
          descrizione:"Vetro 33cl , Lager Bionda ,  Prodotta in Puglia ",
          prezzo:6
        },
        {
          id:"terrona-cannabis",
          nome:"Shempatica",
          descrizione:"Vetro 33cl , Lager Bionda ,  Prodotta in Puglia , aromatizzata alla canapa ",
          prezzo:6
        }
      ]
    
    }, 
    
    
    "prodotti_dolci_pucciaria": {
      "panna_cotta": [
        { id:"panna-cotta" ,nome: "Panna Cotta" ,descrizione:" Morbida pannacotta artigianale",prezzo:4 }
        ],
      "lo_sfizio": [
        { id:"lo-sfizio-nutella" ,nome: "Lo Sfizio alla Nutella", prezzo: 6 },
        { id:"lo-sfizio-crema" ,nome: "Lo Sfizio alla Creme Puche", gusto: "Crema Pucciaria",prezzo: 6 }
         ]
    }
      }