cube(`EmployeeDetails`, {
  sql: `SELECT * FROM databaseforapi.employee_details`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, lastname, username]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    lastname: {
      sql: `lastname`,
      type: `string`
    },
    
    username: {
      sql: `username`,
      type: `string`
    }
  }
});
