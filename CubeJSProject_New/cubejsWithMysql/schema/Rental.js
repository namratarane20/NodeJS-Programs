cube(`Rental`, {
  sql: `SELECT * FROM sakila.rental`,
  
  joins: {
    Customer: {
      sql: `${CUBE}.customer_id = ${Customer}.customer_id`,
      relationship: `belongsTo`
    },
    
    Inventory: {
      sql: `${CUBE}.inventory_id = ${Inventory}.inventory_id`,
      relationship: `belongsTo`
    },
    
    Staff: {
      sql: `${CUBE}.staff_id = ${Staff}.staff_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [lastUpdate, rentalDate, returnDate]
    }
  },
  
  dimensions: {
    lastUpdate: {
      sql: `last_update`,
      type: `time`
    },
    
    rentalDate: {
      sql: `rental_date`,
      type: `time`
    },
    
    returnDate: {
      sql: `return_date`,
      type: `time`
    }
  }
});
