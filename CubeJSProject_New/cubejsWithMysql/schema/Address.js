cube(`Address`, {
  sql: `SELECT * FROM sakila.address`,
  
  joins: {
    City: {
      sql: `${CUBE}.city_id = ${City}.city_id`,
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
    address: {
      sql: `address`,
      type: `string`
    },
    
    address2: {
      sql: `address2`,
      type: `string`
    },
    
    district: {
      sql: `district`,
      type: `string`
    },
    
    location: {
      sql: `location`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    postalCode: {
      sql: `postal_code`,
      type: `string`
    },
    
    lastUpdate: {
      sql: `last_update`,
      type: `time`
    }
  }
});
