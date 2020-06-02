cube(`Actor`, {
  sql: `SELECT * FROM sakila.actor`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [firstName, lastName, lastUpdate]
    }
  },
  
  dimensions: {
    firstName: {
      sql: `first_name`,
      type: `string`
    },
    
    lastName: {
      sql: `last_name`,
      type: `string`
    },
    
    lastUpdate: {
      sql: `last_update`,
      type: `time`
    }
  }
});
