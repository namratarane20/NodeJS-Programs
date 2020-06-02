cube(`User`, {
  sql: `SELECT * FROM sakila.user`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [username]
    }
  },
  
  dimensions: {
    email: {
      sql: `email`,
      type: `string`
    },
    
    password: {
      sql: `password`,
      type: `string`
    },
    
    username: {
      sql: `username`,
      type: `string`
    },
    
    createTime: {
      sql: `create_time`,
      type: `time`
    }
  }
});
