cube(`SalesByStore`, {
  sql: `SELECT * FROM sakila.sales_by_store`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    manager: {
      sql: `manager`,
      type: `string`
    },
    
    store: {
      sql: `store`,
      type: `string`
    }
  }
});
