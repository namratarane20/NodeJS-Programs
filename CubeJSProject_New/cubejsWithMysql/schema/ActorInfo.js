cube(`ActorInfo`, {
  sql: `SELECT * FROM sakila.actor_info`,
  
  joins: {
    Actor: {
      sql: `${CUBE}.actor_id = ${Actor}.actor_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [firstName, lastName]
    }
  },
  
  dimensions: {
    filmInfo: {
      sql: `film_info`,
      type: `string`
    },
    
    firstName: {
      sql: `first_name`,
      type: `string`
    },
    
    lastName: {
      sql: `last_name`,
      type: `string`
    }
  }
});
