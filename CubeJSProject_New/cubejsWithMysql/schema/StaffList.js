cube(`StaffList`, {
  sql: `SELECT * FROM sakila.staff_list`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [city, country, id, name]
    }
  },
  
  dimensions: {
    address: {
      sql: `address`,
      type: `string`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    country: {
      sql: `country`,
      type: `string`
    },
    
    id: {
      sql: `${CUBE}.\`ID\``,
      type: `number`,
      primaryKey: true
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    zipCode: {
      sql: `${CUBE}.\`zip code\``,
      type: `string`
    }
  }
});
