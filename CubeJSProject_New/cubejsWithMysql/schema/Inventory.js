cube(`Inventory`, {
  sql: `SELECT * FROM sakila.inventory`,
  
  joins: {
    Film: {
      sql: `${CUBE}.film_id = ${Film}.film_id`,
      relationship: `belongsTo`
    },
    
    Store: {
      sql: `${CUBE}.store_id = ${Store}.store_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [lastUpdate]
    }
  },
  
  dimensions: {
    lastUpdate: {
      sql: `last_update`,
      type: `time`
    }
  }
});
