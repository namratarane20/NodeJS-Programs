cube(`FilmList`, {
  sql: `SELECT * FROM sakila.film_list`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [title]
    },
    
    price: {
      sql: `price`,
      type: `sum`
    }
  },
  
  dimensions: {
    actors: {
      sql: `actors`,
      type: `string`
    },
    
    category: {
      sql: `category`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    }
  }
});
