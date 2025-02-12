export function formatNumberLocalized(number, locale = 'en-US') {
  const units = ['', 'K', 'M', 'B', 'T']
  let unitIndex = 0

  while (number >= 1000 && unitIndex < units.length - 1) {
    number /= 1000
    unitIndex++
  }

  const formattedNumber = new Intl.NumberFormat(locale, {
    maximumFractionDigits: number < 10 && unitIndex > 0 ? 1 : 0,
  }).format(number)

  return {
    formatted: formattedNumber + units[unitIndex],
    parts: {
      number: parseFloat(formattedNumber),
      suffix: units[unitIndex],
    },
  }
}
