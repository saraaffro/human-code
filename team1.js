// LISTA FRIGO = Latte, Burro, Uova, Prosciutto.
// LISTA SPESA = 0;
// LISTA SUPERMERCATO = LISTA SPESA;
// CARRELLO = 0;
// cibo cane = 0;
​
// Quante volte vuoi controllare? - Quali prodotti ti servono?
        // guarda nel Frigorifero
        // controllo se c'è X prodotto
            // SE X è == a LISTA FRIGO
                //
            // ALTRIMENTI
                // LISTA SPESA = aggiungi X
​
// Cibo cane
    // controllo se c'è cibo cane
        // SE il cibo del cane = 1
            // 
        // ALTRIMENTI
            // LISTA SPESA = aggiungi cibo del cane
​
// SE LISTA SPESA è > 0
    // andare a fare la spesa()
// ALTRIMENTI
    // non andare a fare la spesa
​
// spesa()
    // CARRELLO
        // SE LISTA SPESA(x) == LISTA SUPERMERCATO
            // CARRELLO = +x€
            // LISTA SPESA (x+1)
        // ALTRIMENTI
            // LISTA SPESA (x+1)
    // SE CARRELLO è == coupon
        // non serve il portafoglio
    // ALTRIMENTI
        // SE CARRELLO è > (coupon + portafoglio)
            // non hai abbastanza soldi
        // ALTRIMENTI
            // hai fatto la spesa
// 