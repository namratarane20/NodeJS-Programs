cube(`Country`, {
  sql: `SELECT * FROM sakila.country`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [country, lastUpdate]
    }
  },
  
  dimensions: {
    country: {
      sql: `country`,
      type: `string`
    },
    
    lastUpdate: {
      sql: `last_update`,
      type: `time`
    }
  }
});
