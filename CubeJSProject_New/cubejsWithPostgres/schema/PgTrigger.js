cube(`PgTrigger`, {
  sql: `SELECT * FROM pg_catalog.pg_trigger`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [tgconstrrelid, tgconstrindid, tgname, tgfoid, tgrelid]
    }
  },
  
  dimensions: {
    tgqual: {
      sql: `tgqual`,
      type: `string`
    },
    
    tgdeferrable: {
      sql: `tgdeferrable`,
      type: `string`
    },
    
    tgnewtable: {
      sql: `tgnewtable`,
      type: `string`
    },
    
    tgconstrrelid: {
      sql: `tgconstrrelid`,
      type: `string`
    },
    
    tgisinternal: {
      sql: `tgisinternal`,
      type: `string`
    },
    
    tgconstrindid: {
      sql: `tgconstrindid`,
      type: `string`
    },
    
    tgattr: {
      sql: `tgattr`,
      type: `string`
    },
    
    tgenabled: {
      sql: `tgenabled`,
      type: `string`
    },
    
    tgname: {
      sql: `tgname`,
      type: `string`
    },
    
    tginitdeferred: {
      sql: `tginitdeferred`,
      type: `string`
    },
    
    tgconstraint: {
      sql: `tgconstraint`,
      type: `string`
    },
    
    tgfoid: {
      sql: `tgfoid`,
      type: `string`
    },
    
    tgargs: {
      sql: `tgargs`,
      type: `string`
    },
    
    tgrelid: {
      sql: `tgrelid`,
      type: `string`
    },
    
    tgoldtable: {
      sql: `tgoldtable`,
      type: `string`
    }
  }
});
