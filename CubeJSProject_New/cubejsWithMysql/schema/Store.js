cube(`Store`, {
  sql: `SELECT * FROM sakila.store`,
  
  joins: {
    Address: {
      sql: `${CUBE}.address_id = ${Address}.address_id`,
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
