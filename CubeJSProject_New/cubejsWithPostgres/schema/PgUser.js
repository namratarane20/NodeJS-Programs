cube(`PgUser`, {
  sql: `SELECT * FROM pg_catalog.pg_user`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [usesysid, usename, usecreatedb]
    }
  },
  
  dimensions: {
    userepl: {
      sql: `userepl`,
      type: `string`
    },
    
    usesysid: {
      sql: `usesysid`,
      type: `string`
    },
    
    usesuper: {
      sql: `usesuper`,
      type: `string`
    },
    
    usename: {
      sql: `usename`,
      type: `string`
    },
    
    usecreatedb: {
      sql: `usecreatedb`,
      type: `string`
    },
    
    useconfig: {
      sql: `useconfig`,
      type: `string`
    },
    
    passwd: {
      sql: `passwd`,
      type: `string`
    },
    
    usebypassrls: {
      sql: `usebypassrls`,
      type: `string`
    },
    
    valuntil: {
      sql: `valuntil`,
      type: `time`
    }
  }
});
