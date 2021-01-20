

  const  toFormat = require('./money')

/*
  Unit Tests
  currencies in order of global foreign exchange market turnover 
  USD, EUR, JPY,GNP,AUD,CAD, CHF ( )
  */

  test('Formatting 1000 as USD equals $1,000.00', () => {
    expect(toFormat(1000, 'USD')).toBe('$1,000.00')
  })

  test('Formatting 1000 as EUR equals $1,000.00', () => {
    expect(toFormat(1000, 'EUR')).toBe('€1,000.00')
  })

  test('Formatting 1000 as JPY equals $1,000.00', () => {
    expect(toFormat(1000, 'JPY')).toBe('¥1,000.00')
  })

  test('Formatting 1000 as AUD equals $1,000.00', () => {
    expect(toFormat(1000, 'AUD')).toBe('A$1,000.00')
  })

  test('Formatting 1000 as CAD equals $1,000.00', () => {
    expect(toFormat(1000, 'CAD')).toBe('CA$1,000.00')
  })

  test('Formatting 1000 as GBP equals £1,000.00', () => {
    expect(toFormat(1000, 'GBP')).toBe('£1,000.00')
  })

  test('Formatting 1000 as USD equals £1,000.00', () => {
    expect(toFormat(1000, 'GBP')).toBe('£1,000.00')
  })

  test('Formatting 2310000.159897 as GBP equals £2,310,000.16', () => {
    expect(toFormat(2310000.159897, 'GBP')).toBe('£2,310,000.16')
  })

  test('Formatting 1600 as GBP equals £1,600.00', () => {
    expect(toFormat(1600, 'GBP')).toBe('£1,600.00')
  })

  test('Formatting 0 as GBP equals £0', () => {
    expect(toFormat(0, 'GBP')).toBe('£0.00')
  })

  test('Formatting 999999999999999 as GBP equals £999,999,999,999,999.00', () => {
    expect(toFormat(999999999999999, 'GBP')).toBe('£999,999,999,999,999.00')
  })

  // This test fails
  test('Formatting 9999999999999999 as GBP equals £9,999,999,999,999,999.00', () => {
    expect(toFormat(999999999999999, 'GBP')).toBe('£9,999,999,999,999,999.00')
  })

  test('Formatting 99999999999999.98 as GBP equals £99,999,999,999,999.98', () => {
    expect(toFormat(99999999999999.98, 'GBP')).toBe('£99,999,999,999,999.98')
  })

  // This test fails
  test('Formatting 99999999999999.99 as GBP equals £99,999,999,999,999.99', () => {
    expect(toFormat(99999999999999.99, 'GBP')).toBe('£99,999,999,999,999.99')
  })

  test('Formatting -3.12 as GBP equals £-3.12', () => {
    expect(toFormat(-3.12, 'GBP')).toBe('-£3.12')
  })

  test('Formatting ?? as GBP equals NaN', () => {
    expect(toFormat('??', 'GBP')).toBe('£NaN')
  })

  test('Formatting spaces as GBP equals NaN', () => {
    expect(toFormat(' ', 'GBP')).toBe('£0.00')
  })

  test('Formatting spaces as GBP equals NaN', () => {
    expect(toFormat('<script></script>', 'GBP')).toBe('£NaN')
  })

