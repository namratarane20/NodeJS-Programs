cube(`Payment`, {
  sql: `SELECT * FROM sakila.payment`,
  
  joins: {
    Customer: {
      sql: `${CUBE}.customer_id = ${Customer}.customer_id`,
      relationship: `belongsTo`
    },
    
    Rental: {
      sql: `${CUBE}.rental_id = ${Rental}.rental_id`,
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
      drillMembers: [lastUpdate, paymentDate]
    },
    
    amount: {
      sql: `amount`,
      type: `sum`
    }
  },
  
  dimensions: {
    lastUpdate: {
      sql: `last_update`,
      type: `time`
    },
    
    paymentDate: {
      sql: `payment_date`,
      type: `time`
    }
  }
});
