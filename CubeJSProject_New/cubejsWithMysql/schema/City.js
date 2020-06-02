cube(`City`, {
  sql: `SELECT * FROM sakila.city`,
  
  joins: {
    Country: {
      sql: `${CUBE}.country_id = ${Country}.country_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [city, lastUpdate]
    }
  },
  
  dimensions: {
    city: {
      sql: `city`,
      type: `string`
    },
    
    lastUpdate: {
      sql: `last_update`,
      type: `time`
    }
  }
});
