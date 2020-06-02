cube(`SalesByFilmCategory`, {
  sql: `SELECT * FROM sakila.sales_by_film_category`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    category: {
      sql: `category`,
      type: `string`
    }
  }
});
