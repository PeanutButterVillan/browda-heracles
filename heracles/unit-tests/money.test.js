

  const  toFormat = require('./money')

  test('Formatting 1000 as USD equals $1,000.00', () => {
    expect(toFormat(1000, 'USD')).toBe('$1,000.00')
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
/*
  Additional Unit Tests
  currencies in order of global foreign exchange market turnover 
  USD, EUR, JPY,GNP,AUD,CAD, CHF ( )
  
  Fuzz tests:
  
  invalid tests ( add these if they pass) 
  0  will return 0
  99999999999999999999 (high ) returns formatted correclty
  -3 ( negative ) return formatted correclty
  
  invalid characters ( add these if they pass )
  ?? will return Not a Number
  spaces will return 0
  metadata will return NaN
  characters - escaped or interpretable characters for SQL injection will return NaN
  */