import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_skujeRC3VvLUUkXvFbB1uOkiL21M3omQbCxJUOSO');

convertCurrency("INR", "USD", 2);

async function convertCurrency(fromCurrency, toCurrency, units){
  const res= await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier =res.data[toCurrency];
    return multiplier*units;
}


