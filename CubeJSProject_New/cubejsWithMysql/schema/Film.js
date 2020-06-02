cube(`Film`, {
  sql: `SELECT * FROM sakila.film`,
  
  joins: {
    Language: {
      sql: `${CUBE}.language_id = ${Language}.language_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [title, lastUpdate]
    },
    
    rentalDuration: {
      sql: `rental_duration`,
      type: `sum`
    },
    
    replacementCost: {
      sql: `replacement_cost`,
      type: `sum`
    }
  },
  
  dimensions: {
    description: {
      sql: `description`,
      type: `string`
    },
    
    releaseYear: {
      sql: `release_year`,
      type: `string`
    },
    
    specialFeatures: {
      sql: `special_features`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    lastUpdate: {
      sql: `last_update`,
      type: `time`
    }
  }
});
