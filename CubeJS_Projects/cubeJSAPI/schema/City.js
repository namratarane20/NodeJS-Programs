cube(`City`, {
  sql: `SELECT * FROM world.city`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [countrycode, id, name]
    }
  },
  
  dimensions: {
    countrycode: {
      sql: `${CUBE}.\`CountryCode\``,
      type: `string`
    },
    
    district: {
      sql: `${CUBE}.\`District\``,
      type: `string`
    },
    
    id: {
      sql: `${CUBE}.\`ID\``,
      type: `number`,
      primaryKey: true
    },
    
    name: {
      sql: `${CUBE}.\`Name\``,
      type: `string`
    }
  }
});
