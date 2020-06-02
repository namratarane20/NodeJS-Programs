cube(`FilmText`, {
  sql: `SELECT * FROM sakila.film_text`,
  
  joins: {
    Film: {
      sql: `${CUBE}.film_id = ${Film}.film_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [title]
    }
  },
  
  dimensions: {
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
