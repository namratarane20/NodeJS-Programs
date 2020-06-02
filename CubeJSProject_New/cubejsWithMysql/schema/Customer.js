cube(`Customer`, {
  sql: `SELECT * FROM sakila.customer`,
  
  joins: {
    Address: {
      sql: `${CUBE}.address_id = ${Address}.address_id`,
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
      drillMembers: [firstName, lastName, createDate, lastUpdate]
    }
  },
  
  dimensions: {
    email: {
      sql: `email`,
      type: `string`
    },
    
    firstName: {
      sql: `first_name`,
      type: `string`
    },
    
    lastName: {
      sql: `last_name`,
      type: `string`
    },
    
    createDate: {
      sql: `create_date`,
      type: `time`
    },
    
    lastUpdate: {
      sql: `last_update`,
      type: `time`
    }
  }
});
