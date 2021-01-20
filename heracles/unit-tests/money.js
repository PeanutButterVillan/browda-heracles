function toFormat(value, strCurrency)
{
decimalMoneyValue = 1921.39;
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: strCurrency,
  minimumFractionDigits: 2
})

formattedMoneyValue = formatter.format(value) 

return formattedMoneyValue;
}

module.exports = toFormat
