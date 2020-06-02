cube(`FilmCategory`, {
  sql: `SELECT * FROM sakila.film_category`,
  
  joins: {
    Category: {
      sql: `${CUBE}.category_id = ${Category}.category_id`,
      relationship: `belongsTo`
    },
    
    Film: {
      sql: `${CUBE}.film_id = ${Film}.film_id`,
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
    lastUpdate: {
      sql: `last_update`,
      type: `time`
    }
  }
});
