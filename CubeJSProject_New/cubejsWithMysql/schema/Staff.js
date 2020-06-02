cube(`Staff`, {
  sql: `SELECT * FROM sakila.staff`,
  
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
      drillMembers: [firstName, lastName, username, lastUpdate]
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
    
    password: {
      sql: `password`,
      type: `string`
    },
    
    picture: {
      sql: `picture`,
      type: `string`
    },
    
    username: {
      sql: `username`,
      type: `string`
    },
    
    lastUpdate: {
      sql: `last_update`,
      type: `time`
    }
  }
});
