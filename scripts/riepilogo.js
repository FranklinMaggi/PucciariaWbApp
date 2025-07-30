
    export function mostra_riepilogo_ordine({ carrello, salva_in_local_storage, recupera_da_local_storage, svuota_carrello_local, render_carrello }) {
        if (!carrello || !carrello.length) return;
    
        const esito = document.getElementById('esito');
        if (!esito) return;
    
        esito.hidden = false;
    
        const riepilogo = carrello.map(item =>
        `<li>${item.qty}× ${item.nome}${item.ingredienti ? ` (${item.ingredienti})` : ''} = <b>${(item.prezzo * item.qty).toFixed(2)}€</b></li>`
        ).join('');
    
        const totale = carrello.reduce((tot, item) => tot + item.prezzo * item.qty, 0).toFixed(2);
        const nomeCliente = recupera_da_local_storage('nome_cliente') || '';
    // Genera orari dinamici a intervalli di 15 minuti
function generaOrariDisponibili() {
    const orari = [];
    const addRange = (start, end) => {
      let [h, m] = start.split(':').map(Number);
      const [hEnd, mEnd] = end.split(':').map(Number);
      while (h < hEnd || (h === hEnd && m <= mEnd)) {
        orari.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`);
        m += 15;
        if (m >= 60) { m = 0; h++; }
      }
    };
     // pranzo
    addRange('19:45', '22:45'); // cena
    return orari;
  }
  
  const opzioniOrario = generaOrariDisponibili().map(orario =>
    `<option value="${orario}">${orario}</option>`
  ).join('');
  
        esito.innerHTML = `
        <b>Riepilogo ordine:</b>
        <ul>${riepilogo}</ul>
        <div class="totale">Totale: ${totale}€</div>
        <form id="ordine-dati-form" class="ordine-form">
            <input name="nome_cliente" placeholder="Il tuo nome" required value="${nomeCliente}">
           <select name="orario" required>
  <option value="" disabled selected>Orario</option>
  ${opzioniOrario}
</select>

            <select name="servizio" required>
            <option value="" disabled selected>Servizio</option>
            <option value="da portare via">Da portare via</option>
            <option value="mangiamo sul posto">Mangiamo sul posto</option>
            </select>
            <button type="submit" class="carrello-btn">Invia ordine via WhatsApp</button>
        </form>
        <div style="margin-top:.8em">
            <button id="annulla-form-btn" class="carrello-btn full-width secondary">Annulla</button>
        </div>
        `;
    
        document.getElementById('annulla-form-btn')?.addEventListener('click', () => {
            esito.innerHTML = "";
            esito.hidden = true;
            esito.style.display = 'none';
        });
    
        document.getElementById('ordine-dati-form')?.addEventListener('submit', function (ev) {
        ev.preventDefault();
        const f = ev.target;
        const nome = f.nome_cliente.value.trim();
        const orario = f.orario.value;
        const servizio = f.servizio.value;
    
        salva_in_local_storage('nome_cliente', nome);
    
        let msg = `*Ordinato tramite appPucciaria*\n*Ciao*, sono _${nome}_\n\n`;
        msg += `Ecco la mia ordinazione:\n`;
        carrello.forEach(item => {
            msg += `• ${item.qty} x ${item.nome}`;
            if (item.ingredienti) msg += ` (${item.ingredienti})`;
            msg += `\n`;
        });
        msg += `\n*Orario*: ${orario}\n*Servizio*: ${servizio}\n*Totale*: ${totale}€\n\nGrazie!`;
        

        window.open(`https://wa.me/393801888965?text=${encodeURIComponent(msg)}`, '_blank');
    
        carrello.length = 0; // svuota array in-place
        svuota_carrello_local();
        render_carrello();
    
        esito.innerHTML = `<b>Ordine inviato! ✅</b>`;
        setTimeout(() => {
            esito.innerHTML = "";
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 2000);
        });
    }
    