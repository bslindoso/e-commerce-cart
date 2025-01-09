export default function convertBRLCurrency(currency) {
  return currency.toLocaleString(
    'pt-br',
    { style: 'currency', currency: 'BRL' }
  )
}