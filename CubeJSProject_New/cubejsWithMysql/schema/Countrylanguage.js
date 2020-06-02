cube(`Countrylanguage`, {
  sql: `SELECT * FROM world.countrylanguage`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [countrycode]
    }
  },
  
  dimensions: {
    countrycode: {
      sql: `${CUBE}.\`CountryCode\``,
      type: `string`
    },
    
    language: {
      sql: `${CUBE}.\`Language\``,
      type: `string`
    },
    
    percentage: {
      sql: `${CUBE}.\`Percentage\``,
      type: `string`
    }
  }
});
