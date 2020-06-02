cube(`Userrecords`, {
  sql: `SELECT * FROM databaseforapi.userrecords`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [usercity, username]
    }
  },
  
  dimensions: {
    usercity: {
      sql: `usercity`,
      type: `string`
    },
    
    username: {
      sql: `username`,
      type: `string`
    },
    
    usersalary: {
      sql: `usersalary`,
      type: `string`
    }
  }
});
